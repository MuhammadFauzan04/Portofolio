import { useEffect, useState } from "react";
import { medilink as d } from "../data/medilinkCase";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import ScrollProgress from "./ScrollProgress";
import { TypeSpecimen, ComponentLibrary } from "./MediDesignSystem";
import { thumb } from "../lib/thumb";

const SECTIONS = [
  ["konteks", "Konteks pengguna"],
  ["kebutuhan", "Kebutuhan pengguna"],
  ["desain", "Solusi desain"],
  ["pengujian", "Pengujian"],
  ["iterasi", "Iterasi & hasil"],
];

const Head = ({ title, lead }) => (
  <header className="cs-head">
    <h2>{title}</h2>
    {lead && <p className="cs-lead">{lead}</p>}
  </header>
);

function Gallery({ screens }) {
  const [i, setI] = useState(0);
  const s = screens[i];
  return (
    <div className="cs-gal">
      <figure className="cs-gal__main">
        <img key={s.src} src={s.src} alt={`Antarmuka MediLink: ${s.name}`} />
        <figcaption><b>{s.name}</b> {s.d}</figcaption>
      </figure>
      <div className="cs-gal__tabs" role="tablist">
        {screens.map((x, n) => (
          <button key={x.name} role="tab" aria-selected={n === i} className={n === i ? "is-on" : ""} onClick={() => setI(n)}>
            {x.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudy() {
  const [active, setActive] = useState(SECTIONS[0][0]);
  const [role, setRole] = useState(0);

  useEffect(() => {
    document.title = "MediLink — Studi kasus | Muhammad Fauzan";
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.dataset.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("[data-id]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const { context: c, needs: n, design: g, testing: t, iteration: it } = d;
  const r = t.maze.roles[role];
  const mean = (t.sus.scores.reduce((a, b) => a + b, 0) / t.sus.scores.length).toFixed(1);

  return (
    <div className="cs">
      <ScrollProgress />
      <div className="cs-bar">
        <a href="#projects" className="cs-back">← Semua karya</a>
        <div className="cs-bar__tools"><LanguageToggle /><ThemeToggle /></div>
      </div>

      <div className="cs-frame">
        <section className="cs-hero">
          <h1>{d.title}</h1>
          <p className="cs-hero__sub">{d.subtitle}</p>
          <dl className="cs-facts">
            {d.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          <div className="cs-hero__shot"><img src={thumb(d.hero)} alt="Tampilan halaman masuk MediLink pada laptop" /></div>
          <ul className="cs-stats">
            {d.stats.map((s) => <li key={s.l}><strong>{s.v}</strong><b>{s.l}</b><span>{s.s}</span></li>)}
          </ul>
        </section>

        <div className="cs-layout">
          <nav className="cs-toc" aria-label="Isi studi kasus">
            {SECTIONS.map(([id, label]) => (
              <a key={id} href="#/project/medilink" className={active === id ? "is-active" : ""}
                onClick={(e) => { e.preventDefault(); document.querySelector(`[data-id="${id}"]`)?.scrollIntoView({ behavior: "smooth" }); }}>
                {label}
              </a>
            ))}
          </nav>

          <div className="cs-content">
            {/* 1 */}
            <section data-id="konteks" className="cs-sec">
              <Head title="Identifikasi konteks pengguna" lead={c.lead} />
              <h3>Masalah pada sistem lama</h3>
              <ul className="cs-list">{c.problems.map((p) => <li key={p}>{p}</li>)}</ul>
              <h3>Siapa yang diwawancarai</h3>
              <p className="cs-muted cs-block">{c.informants.note}</p>
              <ul className="cs-users">
                {c.informants.list.map(([n1, role1, desc]) => (
                  <li key={role1}><b>{n1} {role1}</b><span>{desc}</span></li>
                ))}
              </ul>
              <h3>Aktor sistem</h3>
              <div className="cs-tags">{c.actors.map((a) => <span key={a}>{a}</span>)}</div>
              <h3>Hasil wawancara konteks</h3>
              <table className="cs-table">
                <thead><tr><th>Pertanyaan</th><th>Rangkuman jawaban</th></tr></thead>
                <tbody>{c.interviews.map((x) => <tr key={x.q}><td>{x.q}</td><td>{x.a}</td></tr>)}</tbody>
              </table>
            </section>

            {/* 2 */}
            <section data-id="kebutuhan" className="cs-sec">
              <Head title="Analisis kebutuhan pengguna" lead={n.lead} />
              <h3>Dari temuan ke kebutuhan desain</h3>
              <table className="cs-table">
                <thead><tr><th>Temuan wawancara</th><th>Kebutuhan desain</th></tr></thead>
                <tbody>{n.insights.map((x) => <tr key={x.finding}><td>{x.finding}</td><td>{x.need}</td></tr>)}</tbody>
              </table>
              <div className="cs-two">
                <div><h3>Kebutuhan fungsional</h3><ul className="cs-list">{n.functional.map((x) => <li key={x}>{x}</li>)}</ul></div>
                <div><h3>Kebutuhan non-fungsional</h3><ul className="cs-list">{n.nonFunctional.map((x) => <li key={x}>{x}</li>)}</ul></div>
              </div>
            </section>

            {/* 3 */}
            <section data-id="desain" className="cs-sec">
              <Head title="Merancang solusi desain" lead={g.lead} />

              <h3>Pemodelan sistem</h3>
              <div className="cs-two">
                {g.modeling.map((m) => <article key={m.t} className="cs-card"><h4>{m.t}</h4><p>{m.d}</p></article>)}
              </div>

              <h3>Design system</h3>
              <div className="cs-ds">
                <figure className="cs-ds__logo">
                  <img src={g.logo.src} alt="Logo MediLink" />
                  <figcaption>{g.logo.note}</figcaption>
                </figure>
                <div>
                  <h4>Palet warna</h4>
                  <div className="cs-palette">
                    {g.palette.main.map((p) => (
                      <div key={p.hex} className="cs-swatch cs-swatch--big">
                        <span style={{ background: p.hex }} />
                        <b>{p.name}</b><code>{p.hex}</code><small>{p.use}</small>
                      </div>
                    ))}
                  </div>
                  <div className="cs-chips">
                    {g.palette.extra.map((row, i) => (
                      <div key={i}>
                        <div className="cs-chips__row">
                          {row.map((hex) => <span key={hex} style={{ background: hex }} title={hex} />)}
                        </div>
                        <small>{g.palette.extraLabels[i]}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h4 className="cs-gap">Tipografi: {g.type.family}</h4>
              <p className="cs-note">{g.type.note}</p>
              <TypeSpecimen type={g.type} />

              <h4 className="cs-gap">Pustaka komponen</h4>
              <p className="cs-note">{g.components.note}</p>
              <ComponentLibrary />

              <h3>High-fidelity</h3>
              <Gallery screens={g.screens} />
            </section>

            {/* 4 */}
            <section data-id="pengujian" className="cs-sec">
              <Head title="Evaluasi dan pengujian usability" lead={t.lead} />

              <h3>Maze usability testing <span className="cs-muted">5 partisipan expert, 18 skenario</span></h3>
              <p className="cs-note">{t.maze.why}</p>
              <ul className="cs-maze">
                {t.maze.maus.map(([name, v]) => (
                  <li key={name}>
                    <span>{name}</span>
                    <span className="cs-bar-track" role="img" aria-label={`MAUS ${v}`}><i style={{ width: `${v}%` }} /></span>
                    <b>{v}</b>
                  </li>
                ))}
                <li className="cs-maze__avg"><span>Rata-rata MAUS</span><span /><b>{t.maze.mausAvg}</b></li>
              </ul>

              <div className="cs-seg" role="tablist" aria-label="Pilih peran">
                {t.maze.roles.map((x, i) => (
                  <button key={x.role} role="tab" aria-selected={i === role} className={i === role ? "is-on" : ""} onClick={() => setRole(i)}>{x.role}</button>
                ))}
              </div>
              <table className="cs-table">
                <thead><tr><th>Tugas</th><th>Waktu (detik)</th><th>Misclick</th><th>Success</th></tr></thead>
                <tbody>
                  {r.tasks.map(([name, time, miss]) => (
                    <tr key={name}><td>{name}</td><td>{time}</td><td>{miss}%</td><td className="ok">100%</td></tr>
                  ))}
                </tbody>
              </table>
              <ul className="cs-list cs-gap">{t.maze.findings.map((f) => <li key={f}>{f}</li>)}</ul>

              <h3>System Usability Scale <span className="cs-muted">{t.sus.participants} responden pengguna akhir</span></h3>
              <div className="cs-sus">
                <div className="cs-sus__score"><strong>{t.sus.score}</strong><span>{t.sus.grade}</span></div>
                <div>
                  <div className="cs-sus__scale" role="img" aria-label={`Skor SUS ${t.sus.score} dari 100`}>
                    <i className="avg" style={{ left: "68%" }} />
                    <i className="you" style={{ left: `${t.sus.score}%` }} />
                  </div>
                  <div className="cs-sus__ticks"><span>0</span><span>68 batas kelayakan</span><span>100</span></div>
                  <p className="cs-note">{t.sus.note} Tingkat penerimaan: {t.sus.accept}.</p>
                </div>
              </div>
              <div className="cs-dots" role="img" aria-label={`Skor SUS 15 responden, rata-rata ${mean}`}>
                {t.sus.scores.map((s, i) => (
                  <span key={i} style={{ height: `${s}%` }} title={`R${i + 1}: ${s}`}><small>{s}</small></span>
                ))}
              </div>

              <h3>User acceptance test <span className="cs-muted">bersama pengembang mitra</span></h3>
              <p className="cs-note">{t.uat.note}</p>
              <table className="cs-table">
                <thead><tr><th>Peran</th><th>Skenario</th><th>Ekspektasi</th><th>Status</th></tr></thead>
                <tbody>
                  {t.uat.rows.map((x) => (
                    <tr key={x.who}><td>{x.who}</td><td>{x.scenario}</td><td>{x.expect}</td><td className="ok">Berhasil</td></tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* 5 */}
            <section data-id="iterasi" className="cs-sec">
              <Head title="Iterasi dan hasil" lead={it.lead} />
              <ul className="cs-list">{it.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <p className="cs-lead">{it.next}</p>
              <a href="#projects" className="btn btn--primary">Kembali ke semua karya</a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
