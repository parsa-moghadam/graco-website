const productFamilies = [
  { no: '01', title: 'Filtration', detail: 'Filters for demanding heavy-duty applications', tag: 'CORE CATEGORY' },
  { no: '02', title: 'Brake Systems', detail: 'Components built around control and reliability', tag: 'SYSTEMS' },
  { no: '03', title: 'Clutch Systems', detail: 'Essential components for power transfer', tag: 'SYSTEMS' },
  { no: '04', title: 'Suspension', detail: 'Support and stability for every journey', tag: 'SYSTEMS' },
  { no: '05', title: 'Sealing Solutions', detail: 'O-rings, seals and protective components', tag: 'COMPONENTS' },
  { no: '06', title: 'Heavy-Duty Parts', detail: 'A wider world of commercial vehicle components', tag: 'COLLECTION' }
];

const locations = [
  { city: 'Graz', country: 'Austria', role: 'Heritage' },
  { city: 'Hamburg', country: 'Germany', role: 'Location' },
  { city: 'Istanbul', country: 'Türkiye', role: 'Location' },
  { city: 'Jebel Ali', country: 'UAE', role: 'Location' }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="GRACO home">
          <img src="graco-logo.svg" alt="GRACO" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#heritage">Heritage</a>
          <a href="#products">Products</a>
          <a href="#approach">Our approach</a>
          <a href="#network">Global network</a>
        </nav>
        <a className="header-contact" href="#contact">Get in touch <span>↗</span></a>
        <button className="menu-button" aria-label="Menu"><span /><span /></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> HEAVY-DUTY AUTOMOTIVE COMPONENTS <span className="eyebrow-dot" /></div>
          <h1>BUILT FOR<br /><em>THE LONG</em><br />HAUL<span className="yellow-period">.</span></h1>
          <div className="hero-bottom">
            <p>A legacy that began in Graz in 1986.<br />A world built around the journey ahead.</p>
            <a className="round-link" href="#heritage" aria-label="Discover GRACO"><span>↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract industrial product visual placeholder">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-glow" />
          <div className="art-part">
            <div className="part-top" />
            <div className="part-body"><span /><span /><span /><span /><span /><span /></div>
            <div className="part-base" />
          </div>
          <div className="art-label label-top"><span>01 / 06</span><b>ENGINEERED<br />FOR THE ROAD</b></div>
          <div className="art-label label-bottom"><span>GRACO / EST. 1986</span><b>GRAZ, AUSTRIA</b></div>
          <div className="art-crosshair crosshair-a" />
          <div className="art-crosshair crosshair-b" />
        </div>
        <div className="hero-index"><span>01</span><i /> <span>04</span></div>
        <div className="hero-vertical">PRECISION IN EVERY DETAIL</div>
      </section>

      <section className="intro section-pad" id="heritage">
        <div className="section-kicker"><span>01</span> / THE GRACO STORY</div>
        <div className="intro-layout">
          <h2>MADE TO MOVE.<br /><span>BUILT TO LAST.</span></h2>
          <div className="intro-text">
            <p className="lead">Every long journey depends on the details that keep it moving.</p>
            <p>Founded in Graz, Austria in 1986, GRACO began with a belief in the importance of dependable components for the world of heavy transport. Today, that heritage is the starting point for the next chapter.</p>
            <a className="text-link" href="#approach">Discover our story <span>↗</span></a>
          </div>
        </div>
        <div className="heritage-strip">
          <div className="heritage-year">1986</div>
          <div className="heritage-caption"><span>OUR BEGINNING</span><p>Graz, Austria</p></div>
          <div className="heritage-rule" />
          <div className="heritage-note">A HISTORY THAT<br />KEEPS MOVING <b>↗</b></div>
        </div>
      </section>

      <section className="products section-pad" id="products">
        <div className="section-head">
          <div className="section-kicker"><span>02</span> / PRODUCT UNIVERSE</div>
          <p className="section-side-note">A closer look at the components<br />that keep heavy transport moving.</p>
        </div>
        <div className="products-title-row">
          <h2>THE PARTS<br /><em>THAT MATTER.</em></h2>
          <p>Explore the GRACO product universe.<br />A catalogue shaped around heavy-duty needs.</p>
        </div>
        <div className="product-grid">
          {productFamilies.map((item) => (
            <a className="product-card" href="#contact" key={item.no}>
              <div className="product-card-top"><span>{item.no} / 06</span><span className="product-arrow">↗</span></div>
              <div className={`product-visual visual-${item.no}`}><div className="visual-ring" /><div className="visual-core" /><div className="visual-lines" /></div>
              <div className="product-meta"><span>{item.tag}</span><span>GRACO</span></div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </a>
          ))}
        </div>
        <div className="catalogue-note"><span className="yellow-square" /> Product families shown as the initial catalogue structure. Final range and vehicle compatibility will be confirmed before publication.</div>
      </section>

      <section className="approach section-pad" id="approach">
        <div className="section-kicker"><span>03</span> / THE GRACO APPROACH</div>
        <div className="approach-layout">
          <div>
            <h2>THE ROAD<br />IS THE <em>TEST.</em></h2>
            <p className="approach-intro">The right component is never just a part. It is one detail in a much bigger journey.</p>
          </div>
          <div className="approach-detail">
            <div className="approach-number">01 <span>—</span> 03</div>
            <h3>Made for demanding work.</h3>
            <p>Our story belongs to the world of heavy transport: long distances, hard work and the components that support every mile.</p>
            <div className="approach-line"><span /><span /><span /></div>
            <div className="approach-caption">GRACO / A LEGACY IN MOTION</div>
          </div>
        </div>
      </section>

      <section className="network section-pad" id="network">
        <div className="network-top">
          <div className="section-kicker"><span>04</span> / GLOBAL NETWORK</div>
          <h2>ROOTED IN<br /><em>EUROPE.</em><br />CONNECTED<br />TO THE WORLD.</h2>
        </div>
        <div className="network-map">
          <div className="map-grid" />
          <div className="map-contour contour-one" /><div className="map-contour contour-two" />
          {locations.map((loc, i) => (
            <div className={`location-pin pin-${i + 1}`} key={loc.city}>
              <span className="pin-dot" /><span className="pin-line" />
              <div><b>{loc.city}</b><small>{loc.country}</small></div>
            </div>
          ))}
          <div className="map-center-mark">G<span>.</span></div>
          <div className="map-coordinates">47°04&apos;N 15°26&apos;E<br />GRACO / GLOBAL PRESENCE</div>
        </div>
        <div className="location-list">
          {locations.map((loc, i) => <div className="location-row" key={loc.city}><span>0{i + 1}</span><b>{loc.city}</b><span>{loc.country}</span><small>{loc.role}</small><span className="row-arrow">↗</span></div>)}
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-top"><div className="section-kicker"><span>05</span> / START A CONVERSATION</div><span className="contact-note">DISTRIBUTION · PARTNERSHIPS · ENQUIRIES</span></div>
        <h2>LET&apos;S MOVE<br /><em>FORWARD.</em></h2>
        <span className="contact-button">CONTACT GRACO <span>↗</span></span>
        <p className="contact-email-note">Contact details will be updated with the company&apos;s verified official channels.</p>
      </section>

      <footer className="site-footer">
        <a className="footer-logo" href="#top"><img src="graco-logo.svg" alt="GRACO" /></a>
        <div className="footer-middle">HEAVY-DUTY AUTOMOTIVE COMPONENTS<br />GRAZ · AUSTRIA · EST. 1986</div>
        <div className="footer-right"><span>© GRACO 2026</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
