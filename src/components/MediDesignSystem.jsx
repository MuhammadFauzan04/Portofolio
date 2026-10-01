import { useState } from "react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

// Komponen design system MediLink dibangun ulang sebagai HTML/CSS asli
// (bukan gambar) agar tajam, bisa diklik, dan rapi di semua ukuran layar.

const Ico = ({ children, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);
const I = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  save: <><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><path d="M17 21v-8H7v8M7 3v5h8" /></>,
  check: <path d="m5 12 5 5 9-9" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  filter: <path d="M3 5h18l-7 8v6l-4-2v-4z" />,
  sort: <path d="M7 4v16M3 16l4 4 4-4M17 20V4M13 8l4-4 4 4" />,
  cal: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  down: <path d="m6 9 6 6 6-6" />,
  up: <path d="m6 15 6-6 6 6" />,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  print: <><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="7" /></>,
  trash: <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  grid: <><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></>,
  flask: <path d="M9 3h6M10 3v6L4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2l-6-10V3" />,
  scan: <><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" /><path d="M4 12h16" /></>,
  doc: <><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" /><path d="M14 3v5h5" /></>,
};

function Cell({ label, children, wide }) {
  return (
    <div className={`mds-cell${wide ? " mds-cell--wide" : ""}`}>
      <span className="mds-cell__label">{label}</span>
      <div className="mds-cell__body">{children}</div>
    </div>
  );
}

export function TypeSpecimen({ type }) {
  return (
    <div className="mds mds-type">
      <div className="mds-type__hero">
        <span className="mds-type__aa">Aa</span>
        <div>
          <b>{type.family}</b>
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789</p>
          <div className="mds-type__w"><span style={{ fontWeight: 400 }}>Regular 400</span><span style={{ fontWeight: 700 }}>Bold 700</span></div>
        </div>
      </div>
      <ul className="mds-type__list">
        {type.scale.map((r) => (
          <li key={r.role}>
            <span className="mds-type__meta">
              {r.role}
              <code>{r.weight === 700 ? "Bold" : "Regular"} · {r.size}px</code>
            </span>
            <span className="mds-type__sample" style={{ fontWeight: r.weight, fontSize: r.size }}>{r.sample}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const STATUS = [
  { key: "Menunggu", cls: "wait" },
  { key: "Proses", cls: "proc" },
  { key: "Selesai", cls: "done" },
];

export function ComponentLibrary() {
  const [status, setStatus] = useState("Proses");
  const [tab, setTab] = useState(0);
  const [checks, setChecks] = useState({ a: true, b: false });
  const [radio, setRadio] = useState("a");
  const [open, setOpen] = useState(true);

  return (
    <div className="mds mds-lib">
      <Cell label="Tombol">
        <div className="mds-row">
          <button className="mds-btn mds-btn--primary"><Ico>{I.save}</Ico>Simpan</button>
          <button className="mds-btn mds-btn--primary">Masuk</button>
          <button className="mds-btn mds-btn--soft">Batal</button>
        </div>
        <div className="mds-row">
          <button className="mds-icon" aria-label="Urutkan"><Ico>{I.sort}</Ico></button>
          <button className="mds-icon" aria-label="Filter"><Ico>{I.filter}</Ico></button>
        </div>
      </Cell>

      <Cell label="Kolom input">
        <label className="mds-field">
          <span>Nama Pengguna <i>*</i></span>
          <input placeholder="Masukkan nama pengguna" />
        </label>
        <label className="mds-field">
          <span>Kata Sandi <i>*</i></span>
          <div className="mds-input"><input type="password" defaultValue="rahasia123" /><Ico>{I.eye}</Ico></div>
        </label>
      </Cell>

      <Cell label="Pencarian, dropdown, tanggal">
        <div className="mds-input mds-input--search"><Ico>{I.search}</Ico><input placeholder="Cari" /></div>
        <div className="mds-input mds-input--select"><input readOnly defaultValue="Poli Umum" /><Ico>{I.down}</Ico></div>
        <div className="mds-input"><input readOnly defaultValue="15 / 04 / 2023" /><Ico>{I.cal}</Ico></div>
      </Cell>

      <Cell label="Status layanan (interaktif)">
        <div className="mds-status">
          {STATUS.map((s) => (
            <button key={s.key} className={`mds-pill ${status === s.key ? `mds-pill--${s.cls}` : ""}`} onClick={() => setStatus(s.key)}>
              {s.key}
            </button>
          ))}
        </div>
        <div className="mds-row">
          <span className="mds-badge mds-badge--green">Tersedia</span>
          <span className="mds-badge mds-badge--amber">Terbatas</span>
          <span className="mds-badge mds-badge--red">Darurat</span>
        </div>
      </Cell>

      <Cell label="Notifikasi" wide>
        <div className="mds-toasts">
          <div className="mds-toast mds-toast--ok">
            <span><Ico size={22}>{I.check}</Ico></span>
            <div><b>SUKSES!</b><small>Obat telah berhasil direkam.</small></div>
          </div>
          <div className="mds-toast mds-toast--no">
            <span><Ico size={22}>{I.x}</Ico></span>
            <div><b>GAGAL!</b><small>Obat gagal direkam.</small></div>
          </div>
        </div>
      </Cell>

      <Cell label="Tab, checkbox, dan radio">
        <div className="mds-tabs" role="tablist">
          {["Detail Pasien", "Validasi Peresepan"].map((t, i) => (
            <button key={t} role="tab" aria-selected={tab === i} className={tab === i ? "is-on" : ""} onClick={() => setTab(i)}>{t}</button>
          ))}
        </div>
        <div className="mds-ctl">
          {[["a", "Ingat saya"], ["b", "Obat tersedia"]].map(([k, l]) => (
            <label key={k} className="mds-check">
              <input type="checkbox" checked={checks[k]} onChange={() => setChecks({ ...checks, [k]: !checks[k] })} />
              <span><Ico size={12}>{I.check}</Ico></span>{l}
            </label>
          ))}
          {[["a", "Rawat jalan"], ["b", "Rawat inap"]].map(([k, l]) => (
            <label key={k} className="mds-radio">
              <input type="radio" name="mds-r" checked={radio === k} onChange={() => setRadio(k)} />
              <span />{l}
            </label>
          ))}
        </div>
      </Cell>

      <Cell label="Menu aksi">
        <ul className="mds-menu">
          <li><Ico>{I.user}</Ico>Rekaman Pasien</li>
          <li><Ico>{I.check}</Ico>Validasi</li>
          <li><Ico>{I.doc}</Ico>Penyerahan</li>
          <li><Ico>{I.print}</Ico>Cetak</li>
          <li className="is-danger"><Ico>{I.trash}</Ico>Hapus</li>
        </ul>
      </Cell>

      <Cell label="Sidebar">
        <nav className="mds-side">
          <a><Ico>{I.grid}</Ico>Dashboard</a>
          <a><Ico>{I.user}</Ico>Daftar Pengguna</a>
          <a className="is-active" onClick={() => setOpen(!open)} role="button" tabIndex={0}>
            <Ico>{I.flask}</Ico>Laboratorium<Ico>{open ? I.up : I.down}</Ico>
          </a>
          {open && (
            <div className="mds-side__sub">
              <a>Permintaan Laboratorium</a>
              <a className="is-sub">Tarif Hasil Laboratorium</a>
            </div>
          )}
          <a><Ico>{I.scan}</Ico>Radiologi<Ico>{I.down}</Ico></a>
        </nav>
      </Cell>
    </div>
  );
}
