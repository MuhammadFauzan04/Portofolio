import { useState } from "react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

// Design system Teazzi dibangun sebagai HTML/CSS asli (bukan gambar).

const Ico = ({ children, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
const I = {
  bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8" /><path d="M10 21a2 2 0 0 0 4 0" /></>,
  cart: <><path d="M3 4h2l2.4 11h10.2L20 7H6" /><circle cx="9" cy="19" r="1.3" /><circle cx="17" cy="19" r="1.3" /></>,
  down: <path d="m6 9 6 6 6-6" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  minus: <path d="M6 12h12" />,
  plus: <path d="M12 6v12M6 12h12" />,
  home: <path d="M4 11 12 4l8 7v9H4z" />,
  cup: <><path d="M6 8h12l-1.4 12H7.4z" /><path d="M5 5h14v3H5z" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  bag: <><path d="M6 8h12l1 12H5z" /><path d="M9 8a3 3 0 0 1 6 0" /></>,
  check: <path d="m5 12 5 5 9-9" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
};

const Cup = ({ h = 40 }) => (
  <svg height={h} viewBox="0 0 24 34" aria-hidden="true">
    <rect x="3" y="2" width="18" height="5" rx="2.5" fill="#e9edf4" stroke="#c9d2e2" />
    <path d="M4 7h16l-2 24a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" fill="#f6f4ef" stroke="#c9d2e2" />
    <rect x="5.4" y="12" width="13.2" height="1.8" fill="#00205D" />
    <path d="M10 18h4v7h-4z" fill="#00205D" opacity=".75" />
  </svg>
);

function Cell({ label, children, wide, full }) {
  return (
    <div className={`tzd-cell${wide ? " tzd-cell--wide" : ""}${full ? " tzd-cell--full" : ""}`}>
      <span className="tzd-cell__label">{label}</span>
      <div className="tzd-cell__body">{children}</div>
    </div>
  );
}

export function TeazziPalette({ design }) {
  return (
    <div className="tzd tzd-pal">
      <div className="tzd-pal__main">
        {design.colors.map((c) => (
          <div key={c.hex} className="tzd-sw">
            <span style={{ background: c.hex }} />
            <b>{c.name}</b><code>{c.hex}</code><small>{c.use}</small>
          </div>
        ))}
      </div>
      <div className="tzd-pal__row">
        <div>
          <h5>Netral</h5>
          <div className="tzd-neu">
            {design.neutrals.map((c) => (
              <div key={c.hex}><span style={{ background: c.hex }} /><b>{c.name}</b><code>{c.hex}</code></div>
            ))}
          </div>
        </div>
        <div>
          <h5>Gradien</h5>
          <div className="tzd-grad">
            {design.gradients.map((g) => (
              <div key={g.name}><span style={{ background: g.css }} /><b>{g.name}</b><small>{g.use}</small></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TeazziType({ type }) {
  return (
    <div className="tzd tzd-type">
      <div className="tzd-type__hero">
        <span>Aa</span>
        <div>
          <b>{type.family}</b>
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789</p>
          <div className="tzd-type__w">
            <span style={{ fontWeight: 400 }}>Regular 400</span>
            <span style={{ fontWeight: 500 }}>Medium 500</span>
            <span style={{ fontWeight: 700 }}>Bold 700</span>
          </div>
        </div>
      </div>
      <ul className="tzd-type__list">
        {type.scale.map((r) => (
          <li key={r.role}>
            <span className="tzd-type__meta">{r.role}<code>{r.weight === 700 ? "Bold" : r.weight === 500 ? "Medium" : "Regular"} · {r.size}px</code></span>
            <span style={{ fontWeight: r.weight, fontSize: r.size }}>{r.sample}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TeazziComponents() {
  const [size, setSize] = useState(true);
  const [qty, setQty] = useState(2);
  const [step, setStep] = useState(1);
  const [nav, setNav] = useState(0);
  const steps = ["Diterima", "Dibuat", "Siap Diambil!"];
  const navItems = [["Beranda", I.home], ["Menu", I.cup], ["Pesanan", I.cart], ["Profil", I.user]];

  return (
    <div className="tzd tzd-lib">
      <Cell label="Pemilih gerai">
        <div className="tzd-outlet">
          <Cup h={34} />
          <div><b>Trans Studio Mall Makassar</b><small>Kota Makassar, Indonesia</small></div>
          <Ico size={16}>{I.down}</Ico>
        </div>
        <div className="tzd-search"><Ico>{I.search}</Ico><input placeholder="Cari rasa kesukaanmu..." aria-label="Cari rasa" /></div>
      </Cell>

      <Cell label="Tombol" wide>
        <button className="tzd-btn tzd-btn--grad">Beli Sekarang</button>
        <button className="tzd-btn tzd-btn--navy"><Ico>{I.cart}</Ico>Tambahkan ke keranjang<i /><b>Rp. 29.000</b></button>
        <div className="tzd-row">
          <button className="tzd-iconbtn" aria-label="Notifikasi"><Ico>{I.bell}</Ico></button>
          <button className="tzd-iconbtn" aria-label="Keranjang"><Ico>{I.cart}</Ico></button>
          <button className="tzd-round" aria-label="Favorit"><Ico size={14}>{I.heart}</Ico></button>
        </div>
      </Cell>

      <Cell label="Kategori" wide>
        <div className="tzd-cats">
          {["Signature", "Fruit Tea", "Soft Milk Tea", "Honey Series"].map((c) => (
            <div key={c} className="tzd-cat"><Cup h={34} /><span>{c}</span></div>
          ))}
        </div>
      </Cell>

      <Cell label="Kartu produk">
        <div className="tzd-prod">
          <div className="tzd-prod__img">
            <button className="tzd-round" aria-label="Favorit"><Ico size={14}>{I.heart}</Ico></button>
            <button className="tzd-round" aria-label="Tambah"><Ico size={14}>{I.cart}</Ico></button>
            <Cup h={78} />
          </div>
          <b>Deep Roast Oolong Milk Tea</b>
          <small>Large, Normal Ice, Gula 10%</small>
        </div>
      </Cell>

      <Cell label="Ukuran dan kuantitas (klik)">
        <button className={`tzd-opt ${size ? "is-on" : ""}`} onClick={() => setSize(!size)} aria-pressed={size}>
          <span><b>Regular</b><small>150ml</small></span>
          <b>Rp. 22.000</b>
        </button>
        <small className="tzd-hint">{size ? "Terpilih" : "Belum dipilih"}</small>
        <div className="tzd-qty">
          <b>Total Kuantitas</b>
          <div>
            <button aria-label="Kurangi" onClick={() => setQty(Math.max(1, qty - 1))}><Ico size={14}>{I.minus}</Ico></button>
            <span key={qty} className="tzd-pop">{qty}</span>
            <button aria-label="Tambah" onClick={() => setQty(qty + 1)}><Ico size={14}>{I.plus}</Ico></button>
          </div>
        </div>
      </Cell>

      <Cell label="Status pesanan (klik tahap)" wide>
        <div className="tzd-track">
          <p><Ico size={14}>{I.clock}</Ico> Estimasi Waktu: <b>22.00 - 22.20</b></p>
          <ol style={{ "--p": step / 2 }}>
            {steps.map((s, i) => (
              <li key={s} className={i <= step ? "is-done" : ""}>
                <button onClick={() => setStep(i)} aria-label={s}><Ico size={16}>{i === 2 ? I.bag : i === 1 ? I.cup : I.check}</Ico></button>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </Cell>

      <Cell label="Navigasi bawah (klik)" full>
        <nav className="tzd-nav">
          {navItems.map(([l, ic], i) => (
            <button key={l} className={nav === i ? "is-on" : ""} onClick={() => setNav(i)}><Ico size={20}>{ic}</Ico>{l}</button>
          ))}
        </nav>
      </Cell>
    </div>
  );
}
