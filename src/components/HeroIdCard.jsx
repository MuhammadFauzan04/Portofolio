import { useEffect, useRef, useState } from "react";
import { useContent } from "../context/LanguageContext";

// Natural (relaxed) length of the strap in px, measured from the clip anchor
// to the card's grommet hole when hanging still.
const REST_LENGTH = 168;
// How much extra the strap can elastically stretch when pulled, before the
// rubber-banding resistance makes it feel like it's hit its limit.
const MAX_STRETCH_EXTRA = 72;

const GRAVITY = 0.35; // px / frame^2 (frame = 1/60s)
const STIFFNESS = 0.085; // spring pull-back strength once the strap is stretched
const RADIAL_DAMPING = 0.24; // extra damping along the stretch axis (settles the bounce)
const AIR_DAMPING = 0.985; // general velocity decay (per 1/60s frame)

const CARD_HALF_WIDTH = 76; // half of .hero-idcard width, keeps card centered under the rope
const HOLE_OFFSET_Y = 15; // distance from card top edge to the grommet hole center

export default function HeroIdCard() {
  const { hero } = useContent();
  const anchorRef = useRef(null);
  const cardRef = useRef(null);
  const ropeStrapRef = useRef(null);
  const ropeHighlightRef = useRef(null);

  const pos = useRef({ x: 66, y: REST_LENGTH * 0.92 });
  const vel = useRef({ x: -1.4, y: 0 });
  const dragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0, t: 0 });

  const [hintVisible, setHintVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const applyTransform = () => {
      const { x, y } = pos.current;
      const dist = Math.hypot(x, y) || 0.0001;
      const angle = Math.atan2(x, y) * (180 / Math.PI) * 0.5;

      // Card keeps its normal shape at all times — only position/rotation
      // follow the rope, no squash or stretch on the card itself.
      if (cardRef.current) {
        cardRef.current.style.transform =
          `translate(${x - CARD_HALF_WIDTH}px, ${y - HOLE_OFFSET_Y}px) ` +
          `rotate(${angle}deg)`;
      }

      // Curve the strap with a slight sag when slack, and straighten out
      // when taut, for a more physical rope/lanyard feel. Color and
      // thickness stay constant — only the curve itself moves.
      const slack = Math.max(0, REST_LENGTH - dist);
      const bow = Math.min(slack * 0.55, 24);
      const nx = -(y / dist);
      const ny = x / dist;
      const bowSign = x >= 0 ? 1 : -1;
      const cx = x / 2 + nx * bow * bowSign;
      const cy = y / 2 + ny * bow * bowSign;
      const d = `M0,0 Q${cx.toFixed(1)},${cy.toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)}`;

      if (ropeStrapRef.current) {
        ropeStrapRef.current.setAttribute("d", d);
      }
      if (ropeHighlightRef.current) {
        ropeHighlightRef.current.setAttribute("d", d);
      }
    };

    const getAnchorPoint = () => {
      const rect = anchorRef.current.getBoundingClientRect();
      return { x: rect.left, y: rect.top };
    };

    // Elastic rubber-banding: past REST_LENGTH the strap keeps giving, but
    // with progressively more resistance, asymptotically approaching a max.
    const constrainElastic = (x, y) => {
      const dist = Math.hypot(x, y) || 0.0001;
      if (dist <= REST_LENGTH) return { x, y };
      const over = dist - REST_LENGTH;
      const damped =
        MAX_STRETCH_EXTRA * (1 - Math.exp(-over / MAX_STRETCH_EXTRA));
      const allowed = REST_LENGTH + damped;
      const ux = x / dist;
      const uy = y / dist;
      return { x: ux * allowed, y: uy * allowed };
    };

    const handleMove = (clientX, clientY) => {
      const anchor = getAnchorPoint();
      const raw = constrainElastic(clientX - anchor.x, clientY - anchor.y);
      const now = performance.now();
      const dt = Math.max(now - lastPointer.current.t, 8);
      vel.current = {
        x: ((raw.x - pos.current.x) / dt) * 16.6667,
        y: ((raw.y - pos.current.y) / dt) * 16.6667,
      };
      pos.current = { x: raw.x, y: raw.y };
      lastPointer.current = { x: clientX, y: clientY, t: now };
      applyTransform();
    };

    const onDragMove = (e) => {
      if (!dragging.current) return;
      e.preventDefault();
      const point = "touches" in e ? e.touches[0] : e;
      handleMove(point.clientX, point.clientY);
    };

    const onDragEnd = () => {
      dragging.current = false;
      cardRef.current?.classList.remove("is-dragging");
      window.removeEventListener("mousemove", onDragMove);
      window.removeEventListener("mouseup", onDragEnd);
      window.removeEventListener("touchmove", onDragMove);
      window.removeEventListener("touchend", onDragEnd);
    };

    const onDragStart = (e) => {
      e.preventDefault();
      dragging.current = true;
      setHintVisible(false);
      cardRef.current?.classList.add("is-dragging");
      const point = "touches" in e ? e.touches[0] : e;
      lastPointer.current = {
        x: point.clientX,
        y: point.clientY,
        t: performance.now(),
      };
      window.addEventListener("mousemove", onDragMove);
      window.addEventListener("mouseup", onDragEnd);
      window.addEventListener("touchmove", onDragMove, { passive: false });
      window.addEventListener("touchend", onDragEnd);
    };

    const card = cardRef.current;
    card?.addEventListener("mousedown", onDragStart);
    card?.addEventListener("touchstart", onDragStart, { passive: false });

    let frame;
    let lastTime = performance.now();

    if (!prefersReduced) {
      const loop = (now) => {
        if (!dragging.current) {
          const dtRaw = now - lastTime;
          lastTime = now;
          // Normalize to "frames at 60fps" so physics stays consistent
          // across different refresh rates / tab-switch hiccups.
          const dt = Math.min(dtRaw, 32) / 16.6667;

          vel.current.y += GRAVITY * dt;

          const dist =
            Math.hypot(pos.current.x, pos.current.y) || 0.0001;
          const ux = pos.current.x / dist;
          const uy = pos.current.y / dist;
          const stretch = dist - REST_LENGTH;

          // The strap only pulls back like elastic when stretched; when
          // slack it just swings freely under gravity, like a real lanyard.
          if (stretch > 0) {
            const radialVel = vel.current.x * ux + vel.current.y * uy;
            const springAccel = STIFFNESS * stretch;
            vel.current.x -=
              (springAccel * ux + radialVel * RADIAL_DAMPING * ux) * dt;
            vel.current.y -=
              (springAccel * uy + radialVel * RADIAL_DAMPING * uy) * dt;
          }

          const airDamp = Math.pow(AIR_DAMPING, dt);
          vel.current.x *= airDamp;
          vel.current.y *= airDamp;

          pos.current = {
            x: pos.current.x + vel.current.x * dt,
            y: pos.current.y + vel.current.y * dt,
          };

          // Safety cap in case of a big dt spike (e.g. returning to a
          // backgrounded tab) so the card can never fling off unbounded.
          const cappedDist =
            Math.hypot(pos.current.x, pos.current.y) || 0.0001;
          const hardCap = REST_LENGTH + MAX_STRETCH_EXTRA * 1.2;
          if (cappedDist > hardCap) {
            const s = hardCap / cappedDist;
            pos.current = {
              x: pos.current.x * s,
              y: pos.current.y * s,
            };
          }

          applyTransform();
        } else {
          lastTime = now;
        }
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    } else {
      pos.current = { x: 0, y: REST_LENGTH };
      applyTransform();
    }

    return () => {
      cancelAnimationFrame(frame);
      card?.removeEventListener("mousedown", onDragStart);
      card?.removeEventListener("touchstart", onDragStart);
      onDragEnd();
    };
  }, []);

  return (
    <div className="hero-idcard-wrap" aria-hidden="true">
      <div className="hero-idcard-anchor" ref={anchorRef}>
        <span className="hero-idcard-clip">
          <span className="hero-idcard-clip__ring" />
        </span>
        <span className="hero-idcard-clip__tab" />
        <svg className="hero-idcard-rope">
          <path
            ref={ropeStrapRef}
            id="heroStrapPath"
            d={`M0,0 Q0,${REST_LENGTH / 2} 0,${REST_LENGTH}`}
            className="hero-idcard-rope__strap"
            fill="none"
          />
          <path
            ref={ropeHighlightRef}
            d={`M0,0 Q0,${REST_LENGTH / 2} 0,${REST_LENGTH}`}
            className="hero-idcard-rope__highlight"
            fill="none"
          />
          <text className="hero-idcard-rope__label">
            <textPath href="#heroStrapPath" startOffset="6">
              {Array.from({ length: 6 }).map((_, i) => (
                <tspan key={i}>
                  <tspan className="hero-idcard-rope__word">FAUZAN</tspan>
                  <tspan className="hero-idcard-rope__sep"> ✳ </tspan>
                </tspan>
              ))}
            </textPath>
          </text>
        </svg>
        <div className="hero-idcard" ref={cardRef}>
          <span className="hero-idcard__hole" />
          <div className="hero-idcard__strip">Portfolio ID</div>
          <div className="hero-idcard__body">
            <img
              src="/profile.png"
              alt=""
              className="hero-idcard__photo"
              draggable={false}
            />
            <div className="hero-idcard__name">Fauzan</div>
            <div className="hero-idcard__role">UI/UX Designer</div>
            <div className="hero-idcard__divider" />
            <div className="hero-idcard__id">NO. 0001 · UNHAS</div>
            <div className="hero-idcard__barcode" />
          </div>
        </div>
        {hintVisible && (
          <div className="hero-idcard__hint">{hero.dragHint}</div>
        )}
      </div>
    </div>
  );
}
