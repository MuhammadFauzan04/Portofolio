import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { gsap } from "../lib/gsap";

// The same "F" mark as the navbar (Icons.jsx → LogoMark), extruded into a solid
// 3D object by stacking LAYERS copies of the glyph along the Z axis.
const PATH = "M6 20V6a2 2 0 0 1 2-2h11M6 12h9";
const LAYERS = 40; // depth = LAYERS * GAP px
const GAP = 1;
const SPIN_SECONDS = 3; // one full turn while waiting

// Splash-screen logo:
//  1. thrown in from outside the screen, tumbling toward the centre
//  2. spins on its Y axis for as long as the page is loading
//  3. finish() eases to a stop facing front, then flies toward the viewer
const Logo3DF = forwardRef(function Logo3DF(_props, ref) {
  const flyRef = useRef(null);
  const spinRef = useRef(null);
  const shadowRef = useRef(null);
  const pulseRef = useRef(null);
  const spinLoop = useRef(null);
  const bobLoop = useRef(null);

  useEffect(() => {
    const fly = flyRef.current;
    const spin = spinRef.current;
    const shadow = shadowRef.current;
    const pulse = pulseRef.current;
    if (!fly || !spin) return;

    const ctx = gsap.context(() => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      gsap.set(fly, {
        x: w * 0.75,
        y: -h * 0.75,
        z: 850,
        rotationZ: 35,
        autoAlpha: 1,
      });
      gsap.set(spin, { rotationX: 500, rotationY: -1000 });
      gsap.set(shadow, { autoAlpha: 0, scaleX: 0.4 });

      const tl = gsap.timeline();
      // thrown in from outside: fast start, small bounce on arrival
      tl.to(fly, {
        x: 0,
        y: 0,
        z: 0,
        rotationZ: 0,
        duration: 1.5,
        ease: "back.out(1.15)",
      })
        .to(spin, { rotationX: 0, rotationY: 0, duration: 1.5, ease: "power3.out" }, 0)
        .to(shadow, { autoAlpha: 0.35, scaleX: 1, duration: 0.6, ease: "power2.out" }, 1.0)
        .fromTo(
          pulse,
          { scale: 0.5, autoAlpha: 0.45 },
          { scale: 2.6, autoAlpha: 0, duration: 0.95, ease: "power2.out", immediateRender: false },
          0.95
        )
        .add(() => {
          // ease into the endless spin (sine.in end-speed ≈ loop speed)
          gsap.to(spin, {
            rotationY: "+=60",
            duration: 0.8,
            ease: "sine.in",
            onComplete: () => {
              spinLoop.current = gsap.to(spin, {
                rotationY: "+=360",
                duration: SPIN_SECONDS,
                ease: "none",
                repeat: -1,
              });
            },
          });
          bobLoop.current = gsap.to(fly, {
            y: -9,
            duration: 1.3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(shadow, {
            scaleX: 0.82,
            opacity: 0.2,
            duration: 1.3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        }, 1.35);
    });

    return () => ctx.revert();
  }, []);

  useImperativeHandle(ref, () => ({
    // Stops on a front-facing angle, then throws the logo toward the viewer.
    // Resolves as soon as it is facing front (overlay fade can start).
    finish() {
      return new Promise((resolve) => {
        const fly = flyRef.current;
        const spin = spinRef.current;
        if (!fly || !spin) return resolve();

        spinLoop.current?.kill();
        bobLoop.current?.kill();
        gsap.killTweensOf(spin);

        const cur = Number(gsap.getProperty(spin, "rotationY")) || 0;
        const target = Math.ceil((cur + 90) / 360) * 360;
        const dist = target - cur;
        const dur = Math.min(2, Math.max(0.9, dist / 200));

        gsap.to(fly, { y: 0, duration: 0.4, ease: "power2.out", overwrite: true });
        gsap.to(spin, {
          rotationY: target,
          duration: dur,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(fly, {
              z: 650,
              autoAlpha: 0,
              duration: 0.55,
              ease: "power2.in",
            });
            resolve();
          },
        });
      });
    },
  }));

  const layers = Array.from({ length: LAYERS }, (_, i) => {
    const t = i / (LAYERS - 1);
    const z = (i - (LAYERS - 1) / 2) * GAP;
    const front = i >= LAYERS - 2;
    const inkPct = front ? 100 : Math.round(58 + 22 * t);
    return (
      <svg
        key={i}
        className="f3d__layer"
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{
          transform: `translateZ(${z}px)`,
          color: `color-mix(in srgb, var(--ink) ${inkPct}%, var(--bg))`,
        }}
      >
        <path d={PATH} />
      </svg>
    );
  });

  return (
    <div className="f3d" aria-hidden="true">
      <span className="f3d__pulse" ref={pulseRef} />
      <span className="f3d__shadow" ref={shadowRef} />
      <div className="f3d__fly" ref={flyRef}>
        <div className="f3d__spin" ref={spinRef}>
          {layers}
        </div>
      </div>
    </div>
  );
});

export default Logo3DF;
