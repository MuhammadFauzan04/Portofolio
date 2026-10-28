import { teazzi as d } from "../data/teazziCase";
import { thumb } from "../lib/thumb";
import CaseShell from "./CaseShell";
import { TeazziPalette, TeazziType, TeazziComponents } from "./TeazziDesignSystem";
import NextProject from "./NextProject";
import TeazziGallery from "./TeazziGallery";
import { medilink } from "../data/medilinkCase";

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

        <h3>User persona</h3>
        <p className="cs-note">{d.persona.lead}</p>
        <div className="tz-personas">
          {d.persona.items.map((u) => (
            <article key={u.name} className="cs-card tz-persona">
              <header className="tz-persona__head">
                <span className="tz-persona__avatar" aria-hidden="true">{u.initial}</span>
                <div>
                  <span className="tz-chip">Proto-persona</span>
                  <h4>{u.name}</h4>
                  <p>{u.summary}</p>
                </div>
              </header>
              <blockquote className="tz-persona__quote">"{u.quote}"<cite>Informan</cite></blockquote>
              <div className="tz-persona__cols">
                <div><h5>Perilaku</h5><ul className="cs-list">{u.behaviors.map((x) => <li key={x}>{x}</li>)}</ul></div>
                <div><h5>Tujuan</h5><ul className="cs-list">{u.goals.map((x) => <li key={x}>{x}</li>)}</ul></div>
                <div><h5>Frustrasi</h5><ul className="cs-list">{u.frustrations.map((x) => <li key={x}>{x}</li>)}</ul></div>
              </div>
              <div className="tz-persona__needs">
                <h5>Yang diharapkan dari aplikasi</h5>
                <div className="cs-tags">{d.ideal.items.map(([t]) => <span key={t}>{t}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
        <p className="cs-note">{d.persona.note}</p>

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
        <Head title="Hasil desain" lead="Tiap layar dilengkapi masalah yang dijawab dan keputusan desain di baliknya. Pilih layar lewat tab atau panah, klik gambar untuk memperbesar." />
        <TeazziGallery screens={d.screens.filter((s) => s.src || SHOW_EMPTY)} />

        <h3>Langkah berikutnya</h3>
        <ul className="cs-list tz-next">{d.next.filter((n) => !n.screen || !hasScreen(n.screen)).map((n) => <li key={n.t}>{n.t}</li>)}</ul>
        <NextProject
          href="#/project/medilink" theme="medilink" device="laptop"
          title={medilink.title} subtitle={medilink.subtitle}
          tags={["Sistem web", medilink.facts.find(([k]) => k === "Metode")[1]]}
          images={["/medilink-1.png", "/medilink-2.png", "/medilink-3.png"].map(thumb)}
        />
      </section>
    </CaseShell>
  );
}
