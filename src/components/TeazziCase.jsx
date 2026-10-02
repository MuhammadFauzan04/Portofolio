import { teazzi as d } from "../data/teazziCase";
import { thumb } from "../lib/thumb";
import CaseShell from "./CaseShell";
import { TeazziPalette, TeazziType, TeazziComponents } from "./TeazziDesignSystem";

const SECTIONS = [
  ["riset", "Riset pengguna"],
  ["masalah", "Masalah"],
  ["solusi", "Solusi"],
  ["design-system", "Design system"],
  ["hasil", "Hasil desain"],
];

const Head = ({ title, lead }) => (
  <header className="cs-head">
    <h2>{title}</h2>
    {lead && <p className="cs-lead">{lead}</p>}
  </header>
);

const STATUS = { done: "Sudah didesain", todo: "Belum didesain" };

// Layar dianggap ada bila `src` terisi. Slot kosong hanya tampil saat dev.
const SHOW_EMPTY = import.meta.env.DEV;
const hasScreen = (id) => !!d.screens.find((x) => x.id === id)?.src;

// Pakai thumbnail WebP bila ada; jika belum dibuat, jatuh ke file aslinya.
function Shot({ src, alt }) {
  return (
    <img
      src={thumb(src)}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        if (!e.currentTarget.dataset.fb) { e.currentTarget.dataset.fb = "1"; e.currentTarget.src = src; }
      }}
    />
  );
}

export default function TeazziCase() {
  const r = d.research;
  return (
    <CaseShell
      slug="teazzi"
      className="cs--teazzi"
      docTitle="Teazzi — Studi kasus | Muhammad Fauzan"
      title={d.title}
      subtitle={d.subtitle}
      facts={d.facts}
      sections={SECTIONS}
      hero={
        <div className="cs-hero__shot tz-hero">
          {d.phones.map((p, i) => (
            <img key={p} src={thumb(p)} alt={`Layar Teazzi ${i + 1}`} style={{ "--i": i }} />
          ))}
        </div>
      }
    >
      {/* 1. Riset */}
      <section data-id="riset" className="cs-sec">
        <Head title="Riset pengguna" lead={r.lead} />
        <dl className="tz-method">
          <div><dt>Metode</dt><dd>In-depth interview</dd></div>
          <div><dt>Informan</dt><dd>{r.informants} pelanggan Teazzi, terus bertambah</dd></div>
          <div><dt>Fokus</dt><dd>Masalah dan kebutuhan</dd></div>
        </dl>

        <h3>Topik yang digali</h3>
        <div className="cs-tags">{r.topics.map((t) => <span key={t}>{t}</span>)}</div>

        <p className="tz-callout">{r.limits}</p>
      </section>

      {/* 2. Masalah */}
      <section data-id="masalah" className="cs-sec">
        <Head title="Masalah yang ditemukan" lead="Dari wawancara ditemukan lima masalah. Tiap masalah disusun dari bukti kata-kata informan, dampaknya, lalu akar penyebabnya." />

        <h3>Perjalanan pelanggan saat ini</h3>
        <div className="tz-scroll">
          <table className="cs-table tz-journey">
            <thead><tr><th>Tahap</th><th>Yang dilakukan</th><th>Titik masalah</th><th>Peluang desain</th></tr></thead>
            <tbody>
              {d.journey.map((j) => (
                <tr key={j.stage}><td><b>{j.stage}</b></td><td>{j.does}</td><td>{j.pain}</td><td>{j.chance}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Lima masalah utama</h3>
        <div className="tz-problems">
          {d.problems.map((p) => (
            <article key={p.n} className="tz-problem">
              <span className="tz-problem__n">{p.n}</span>
              <h4>{p.title}</h4>
              <blockquote>"{p.quote}"<cite>Informan</cite></blockquote>
              <dl>
                <div><dt>Dampak</dt><dd>{p.impact}</dd></div>
                <div><dt>Akar masalah</dt><dd>{p.cause}</dd></div>
              </dl>
            </article>
          ))}
        </div>

        <h3>How Might We</h3>
        <ol className="tz-hmw">{d.hmw.map((h) => <li key={h}>{h}</li>)}</ol>
      </section>

      {/* 3. Solusi */}
      <section data-id="solusi" className="cs-sec">
        <Head title="Solusi" lead="Setiap fitur dipilih untuk menjawab satu masalah tertentu, lengkap dengan alasan penempatannya di layar." />

        <h3>Aplikasi ideal menurut informan</h3>
        <p className="cs-note">{d.ideal.lead}</p>
        <div className="cs-tags">{d.ideal.items.map(([t]) => <span key={t}>{t}</span>)}</div>

        <h3>Dari masalah ke fitur</h3>
        <div className="tz-sols">
          {d.solutions.map((s) => (
            <article key={s.title} className="cs-card tz-sol">
              <span className="tz-chip">{s.for}</span>
              <h4>{s.title}</h4>
              <p><b>Fitur.</b> {s.what}</p>
              <p><b>Alasan.</b> {s.why}</p>
              <small>Layar: {s.screens}</small>
            </article>
          ))}
        </div>

        <h3>Seberapa jauh kebutuhan sudah terjawab</h3>
        <table className="cs-table">
          <thead><tr><th>Kebutuhan</th><th>Status</th><th>Keterangan</th></tr></thead>
          <tbody>
            {d.coverage.map((c) => {
              const st = hasScreen(c.screen) ? "done" : "todo";
              return (
                <tr key={c.need}>
                  <td>{c.need}</td>
                  <td><span className={`tz-status tz-status--${st}`}>{STATUS[st]}</span></td>
                  <td>{st === "done" && c.doneNote ? c.doneNote : c.note}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* 4. Design system */}
      <section data-id="design-system" className="cs-sec">
        <Head title="Design system" lead={d.design.lead} />

        <h3>Prinsip desain</h3>
        <div className="tz-principles">
          {d.design.principles.map((p) => (
            <article key={p.t} className="cs-card"><span className="tz-chip">{p.from}</span><h4>{p.t}</h4><p>{p.d}</p></article>
          ))}
        </div>

        <h3>Logo</h3>
        <div className="tz-logo"><img src={thumb(d.logo)} alt="Logo Teazzi" /></div>

        <h3>Warna</h3>
        <TeazziPalette design={d.design} />

        <h3>Tipografi: {d.design.type.family}</h3>
        <p className="cs-note">{d.design.type.note}</p>
        <TeazziType type={d.design.type} />

        <h3>Pustaka komponen</h3>
        <p className="cs-note">Komponen dibangun ulang dalam HTML dan CSS. Yang berlabel klik bisa dicoba langsung.</p>
        <TeazziComponents />
      </section>

      {/* 5. Hasil */}
      <section data-id="hasil" className="cs-sec">
        <Head title="Hasil desain" lead="Empat layar utama, masing-masing dengan masalah yang dijawab dan keputusan desain di baliknya." />
        <div className="tz-screens">
          {d.screens.filter((s) => s.src || SHOW_EMPTY).map((s, i) => (
            <article key={s.n} className={`tz-screen ${i % 2 ? "is-rev" : ""}`}>
              <div className="tz-screen__phone">
                {s.src ? (
                  <Shot src={s.src} alt={`Layar ${s.name}`} />
                ) : (
                  <div className="tz-slot">
                    <b>Slot gambar</b>
                    <span>Letakkan PNG di <code>public/</code>, lalu isi <code>src</code> pada layar "{s.id}" di <code>teazziCase.js</code></span>
                  </div>
                )}
              </div>
              <div className="tz-screen__text">
                <span className="tz-chip">{s.n} · {s.solves}</span>
                <h3>{s.name}</h3>
                <p>{s.d}</p>
                {s.decisions.length > 0 && <ul className="cs-list">{s.decisions.map((x) => <li key={x}>{x}</li>)}</ul>}
                {!s.src && <p className="tz-draft">Hanya tampil saat pengembangan. Di situs publik slot ini disembunyikan sampai gambarnya ada.</p>}
              </div>
            </article>
          ))}
        </div>

        <h3>Langkah berikutnya</h3>
        <ul className="cs-list tz-next">{d.next.filter((n) => !n.screen || !hasScreen(n.screen)).map((n) => <li key={n.t}>{n.t}</li>)}</ul>
        <a href="#projects" className="btn btn--primary">Kembali ke semua karya</a>
      </section>
    </CaseShell>
  );
}
