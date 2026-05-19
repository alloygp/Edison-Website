import React, { useState, useRef, useEffect, useCallback } from 'react';

/* ============================================================
   Edison — Site Header v2 (Astro-ready React island)
   ----------------------------------------------------------------
   Top nav per /uploads/edison-sitemap-v3.html spec:

     Management ▾   (4-column mega menu)
     Solutions ▾    (simple dropdown)
     Edison Education ▾  (4-column mega menu)
     About ▾        (simple dropdown)
     Contact        (flat link)
                                      [ Request a Proposal ]

   ============================================================ */


/* ---------- Nav data (sitemap v3) ---------- */
const DEFAULT_NAV = [
  {
    label: "Management",
    href: "/services/",
    mega: true,
    columns: [
      {
        title: "HOA Management",
        items: [
          { label: "HOA Management", href: "/services/hoa-management/", desc: "Single-family + townhome HOAs (Ch. 720)", parent: true },
          { label: "Single-Family HOA", href: "/services/hoa-management/single-family/", desc: "Single-family communities" },
          { label: "Townhome Associations", href: "/services/hoa-management/townhome/", desc: "Townhome HOA management" }
        ]
      },
      {
        title: "Condo Management",
        items: [
          { label: "Condo Management", href: "/services/condo-management/", desc: "Florida condo associations (Ch. 718)", parent: true },
          { label: "Milestone Inspections", href: "/services/condo-management/milestone-inspections/", desc: "FL SB-4D compliance" },
          { label: "Structural Integrity Reserve Study", href: "/services/condo-management/structural-integrity-reserve-study/", desc: "SIRS support & engineer coordination" }
        ]
      },
      {
        title: "Across All Communities",
        items: [
          { label: "HOA Accounting", href: "/services/hoa-accounting/", desc: "Budgets, reserves, banking" },
          { label: "Covenant Enforcement", href: "/services/covenant-enforcement/", desc: "Dedicated enforcement department" },
          { label: "HOA Collections", href: "/services/hoa-collections/", desc: "In-house delinquency & lien workflow" }
        ]
      },
      {
        feature: {
          eyebrow: "Featured",
          title: "Switching companies?",
          body: "The Edison Transition Experience handles onboarding, vendor review, and records digitization in 60–90 days.",
          cta: { label: "Learn more", href: "/about/the-edison-transition/" }
        }
      }
    ]
  },
  {
    label: "Solutions",
    href: "/solutions/",
    children: [
      { label: "Switch HOA Management Company", href: "/solutions/switch-hoa-management-company/" },
      { label: "Self-Managed → Professional", href: "/solutions/self-managed-hoa/" },
      { label: "Modern HOA Management", href: "/solutions/modern-hoa-management/" }
    ]
  },
  {
    label: "Edison Education",
    href: "/edison-education/",
    mega: true,
    columns: [
      {
        title: "Florida Compliance",
        items: [
          { label: "Florida HOA Laws Guide", href: "/blog/florida-hoa-laws-guide/", desc: "Ch. 720 + Ch. 718 for boards" },
          { label: "Milestone Inspection Guide", href: "/blog/florida-milestone-inspection-guide/", desc: "SB-4D requirements explained" },
          { label: "Reserve Study Guide (Florida)", href: "/blog/hoa-reserve-study-guide-florida/", desc: "FL reserve study mandates" }
        ]
      },
      {
        title: "For Boards",
        items: [
          { label: "Board Member Responsibilities", href: "/blog/hoa-board-member-responsibilities/", desc: "Fiduciary duties & FL certification" },
          { label: "HOA Bylaws vs CC&Rs", href: "/blog/hoa-bylaws-vs-ccrs/", desc: "Governing document hierarchy" },
          { label: "Unenforceable HOA Rules", href: "/blog/unenforceable-hoa-rules-florida/", desc: "What boards can & can't enforce" },
          { label: "Condo Association vs HOA", href: "/blog/condo-association-vs-hoa/", desc: "Which one are you?" }
        ]
      },
      {
        title: "Financial Management",
        items: [
          { label: "HOA Audit Guide", href: "/blog/hoa-audit/", desc: "Audit requirements + checklist" },
          { label: "HOA Management Fees", href: "/blog/hoa-management-fees/", desc: "What boards actually pay" },
          { label: "Special Assessment Guide", href: "/blog/hoa-special-assessment/", desc: "When & how boards use them" }
        ]
      },
      {
        features: [
          {
            eyebrow: "Free for Boards",
            title: "Edison Education",
            body: "Certification-track courses and governance guides built for Florida HOA and condo boards.",
            cta: { label: "Explore program", href: "/edison-education/" },
            mark: "/assets/Edison-Education-White.svg"
          },
          {
            theme: "light",
            eyebrow: "Resource Library",
            title: "All Articles",
            body: "Practical guides on Florida HOA law, finance, and governance — free for any board.",
            cta: { label: "Browse articles", href: "/blog/" }
          }
        ]
      }
    ]
  },
  {
    label: "About",
    href: "/about/",
    children: [
      { label: "About Edison", href: "/about/" },
      { label: "Meet Our Team", href: "/about/meet-our-team/" },
      { label: "The Edison Transition", href: "/about/the-edison-transition/" },
      { label: "Meet Your Management", href: "/about/meet-your-management/" },
      { label: "Testimonials", href: "/testimonials/" },
      { label: "Case Studies", href: "/case-studies/" }
    ]
  },
  { label: "Contact", href: "/contact/" }
];

const DEFAULT_UTILITY = {
  phone: { label: "(407) 317-5252", href: "tel:4073175252" },
  hours: "M–F 9am–5pm",
  portals: [
    { label: "Estoppel Request", href: "https://www.homewisedocs.com" },
    { label: "VIVE Login", href: "https://app.getvived.com" },
    { label: "Resident Portal", href: "https://edison.cincwebaxis.com" }
  ]
};

/* ---------- Icons ---------- */
function IconPhone() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7a2 2 0 011.72 2.03z"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconChevronDown({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconChevronRight() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

/* ---------- Mega menu panel ---------- */
function MegaMenu({ columns, open }) {
  return (
    <div role="menu" aria-hidden={!open} style={{
      position: "absolute",
      top: "calc(100% + 1px)", left: "50%",
      transform: open
        ? "translateX(-50%) translateY(0)"
        : "translateX(-50%) translateY(-8px)",
      width: "min(1200px, calc(100vw - 32px))",
      background: "#fff",
      border: "1px solid var(--border-hairline)",
      borderTop: "2px solid var(--edison-teal)",
      borderRadius: "0 0 12px 12px",
      boxShadow: "0 18px 48px rgba(15,29,51,.14)",
      padding: "32px 36px",
      display: "grid",
      gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
      gap: 28, zIndex: 70,
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity 220ms cubic-bezier(.2,.8,.2,1), transform 240ms cubic-bezier(.2,.8,.2,1)"
    }}>
      {columns.map((col, i) => col.feature ? (
        <FeatureCard key={i} feature={col.feature}/>
      ) : col.features ? (
        /* Stacked feature cards column */
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {col.features.map((f, j) => <FeatureCard key={j} feature={f} compact={true}/>)}
        </div>
      ) : (
        <div key={i}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 16,
            paddingBottom: 10,
            borderBottom: "1px solid var(--border-hairline)"
          }}>{col.title}</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0,
                       display: "flex", flexDirection: "column", gap: 4 }}>
            {col.items.map((it, j) => <MegaItem key={j} item={it}/>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function MegaItem({ item }) {
  const [hover, setHover] = useState(false);
  return (
    <li>
      <a href={item.href}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         style={{
           display: "block",
           padding: "10px 12px",
           borderRadius: 6,
           textDecoration: "none", borderBottom: 0,
           background: hover ? "var(--edison-teal-pale)" : "transparent",
           transition: "background 140ms var(--ease-standard)"
         }}>
        <div style={{
          fontFamily: "var(--font-display)",
          fontWeight: item.parent ? 700 : 600,
          fontSize: 14.5,
          color: hover ? "var(--edison-teal-dark)" : "var(--edison-navy)",
          marginBottom: item.desc ? 2 : 0,
          transition: "color 140ms"
        }}>{item.label}</div>
        {item.desc && (
          <div style={{
            fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.4,
            color: "var(--edison-gray-mid)"
          }}>{item.desc}</div>
        )}
      </a>
    </li>
  );
}

function FeatureCard({ feature, compact = false }) {
  const dark = feature.theme !== "light";
  return (
    <a href={feature.cta.href} style={{
      background: dark ? "var(--edison-navy)" : "var(--edison-teal-pale)",
      color: dark ? "#fff" : "var(--edison-navy)",
      borderRadius: 10,
      padding: compact ? "18px 20px" : "24px 22px",
      textDecoration: "none", borderBottom: 0,
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      gap: compact ? 10 : 16,
      border: dark ? "0" : "1px solid rgba(60,200,200,.25)",
      transition: "transform 220ms var(--ease-standard), box-shadow 220ms",
      flex: compact ? "1" : undefined,
      minHeight: compact ? 0 : 220
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(15,29,51,.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
      <div>
        {feature.mark && (
          <img src={feature.mark} alt={feature.title} style={{
            height: 26, width: "auto", display: "block",
            marginBottom: 16, opacity: 0.95
          }}/>
        )}
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: dark ? "var(--edison-teal)" : "var(--edison-teal-dark)", marginBottom: 8
        }}>{feature.eyebrow}</div>
        {!feature.mark && (
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: compact ? 16 : 19, lineHeight: 1.25,
            color: dark ? "#fff" : "var(--edison-navy)", marginBottom: compact ? 6 : 10
          }}>{feature.title}</div>
        )}
        <div style={{
          fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5,
          color: dark ? "rgba(255,255,255,.78)" : "var(--edison-text-body)"
        }}>{feature.body}</div>
      </div>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
        color: dark ? "var(--edison-teal)" : "var(--edison-teal-dark)",
        display: "inline-flex", alignItems: "center", gap: 6
      }}>
        {feature.cta.label} <span aria-hidden="true">→</span>
      </div>
    </a>
  );
}

/* ---------- Simple dropdown panel ---------- */
function SimpleDropdown({ items, open }) {
  return (
    <ul role="menu" aria-hidden={!open} style={{
      listStyle: "none", margin: 0, padding: "6px",
      minWidth: 260,
      background: "#fff",
      border: "1px solid var(--border-hairline)",
      borderTop: "2px solid var(--edison-teal)",
      borderRadius: "0 0 10px 10px",
      boxShadow: "0 14px 40px rgba(15,29,51,.14)",
      position: "absolute",
      top: "calc(100% + 1px)", left: 0, zIndex: 70,
      opacity: open ? 1 : 0,
      transform: open ? "translateY(0)" : "translateY(-8px)",
      pointerEvents: open ? "auto" : "none",
      transition: "opacity 200ms cubic-bezier(.2,.8,.2,1), transform 220ms cubic-bezier(.2,.8,.2,1)"
    }}>
      {items.map((it, i) => <SimpleItem key={i} item={it}/>)}
    </ul>
  );
}

function SimpleItem({ item }) {
  const [hover, setHover] = useState(false);
  return (
    <li>
      <a href={item.href}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         style={{
           display: "block",
           padding: "11px 14px",
           borderRadius: 6,
           fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
           color: hover ? "var(--edison-teal-dark)" : "var(--edison-navy)",
           textDecoration: "none", borderBottom: 0,
           background: hover ? "var(--edison-teal-pale)" : "transparent",
           transition: "background 140ms var(--ease-standard), color 140ms"
         }}>
        {item.label}
      </a>
    </li>
  );
}

/* ---------- Mobile drawer item ---------- */
function MobileItem({ item, depth = 0 }) {
  const [open, setOpen] = useState(false);
  // Treat mega columns as a flat set of all items for mobile
  let childItems = item.children;
  if (item.mega && item.columns) {
    childItems = item.columns
      .filter(c => !c.feature)
      .flatMap(c => [{ heading: c.title }, ...c.items])
      .concat(
        item.columns.filter(c => c.feature).map(c => ({
          label: c.feature.title, href: c.feature.cta.href
        }))
      );
  }
  const hasChildren = childItems && childItems.length;

  return (
    <li style={{ listStyle: "none" }}>
      <div style={{ display: "flex", alignItems: "stretch" }}>
        {item.heading ? (
          <div style={{
            flex: 1, padding: `14px ${16 + depth * 16}px 6px`,
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)"
          }}>{item.heading}</div>
        ) : (
          <a href={item.href} style={{
            flex: 1,
            padding: `14px ${16 + depth * 16}px`,
            fontFamily: "var(--font-display)",
            fontWeight: depth === 0 ? 700 : 500,
            fontSize: depth === 0 ? 16 : 14.5,
            color: "var(--edison-navy)",
            textDecoration: "none", borderBottom: 0,
            borderBottomColor: "var(--border-hairline)",
            borderBottomStyle: "solid", borderBottomWidth: hasChildren ? 0 : 1
          }}>{item.label}</a>
        )}
        {hasChildren && (
          <button onClick={() => setOpen(!open)}
                  aria-label={open ? `Collapse ${item.label}` : `Expand ${item.label}`}
                  aria-expanded={open}
                  style={{
                    width: 52, border: 0,
                    borderBottom: "1px solid var(--border-hairline)",
                    borderLeft: "1px solid var(--border-hairline)",
                    background: open ? "var(--edison-teal-pale)" : "transparent",
                    color: "var(--edison-navy)",
                    cursor: "pointer",
                    transition: "background 140ms",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
            <span style={{ transform: open ? "rotate(180deg)" : "none", display: "inline-flex" }}>
              <IconChevronDown size={14}/>
            </span>
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul style={{ listStyle: "none", margin: 0, padding: 0,
                     background: "rgba(60,200,200,.04)" }}>
          {childItems.map((c, i) => (
            <MobileItem key={i} item={c} depth={depth + 1}/>
          ))}
        </ul>
      )}
    </li>
  );
}

/* ---------- Nav CTA button with shine hover ---------- */
function NavCtaButton({ href, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "13px 22px",
      background: hovered ? "var(--edison-teal-light)" : "var(--edison-teal)",
      color: "var(--edison-navy)",
      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
      borderRadius: 8, border: 0, textDecoration: "none", borderBottom: 0,
      position: "relative", overflow: "hidden",
      boxShadow: hovered ? "0 4px 20px rgba(60,200,200,.38)" : "none",
      transform: hovered ? "translateY(-1px)" : "none",
      transition: "background 200ms ease, box-shadow 200ms ease, transform 180ms ease"
    }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {label}
      <span aria-hidden="true" style={{
        position: "absolute", top: 0, bottom: 0,
        left: hovered ? "110%" : "-60%",
        width: "45%",
        background: "linear-gradient(105deg, transparent, rgba(255,255,255,.22) 50%, transparent)",
        transform: "skewX(-18deg)",
        transition: hovered ? "left 480ms cubic-bezier(.4,0,.2,1)" : "none",
        pointerEvents: "none"
      }}/>
    </a>
  );
}

/* ============================================================
   SiteHeader
   ============================================================ */
function SiteHeader({
  logoSrc = "/assets/logo.png",
  logoAlt = "Edison Association Management",
  homeHref = "/",
  nav = DEFAULT_NAV,
  utility = DEFAULT_UTILITY,
  cta = { label: "Request a Proposal", href: "/request-a-proposal/" }
}) {
  const [openIdx, setOpenIdx] = useState(-1);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const closeTimer = useRef(null);
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);

  useEffect(() => {
    function onResize() { if (window.innerWidth > 1040) setMobileOpen(false); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      setAtTop(y < 8);
      if (y < 8) {
        setHidden(false);
      } else if (delta > 8) {
        setHidden(true);
        setOpenIdx(-1);
      } else if (delta < -4) {
        setHidden(false);
      }
      lastScrollY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openMenu(i) {
    clearTimeout(closeTimer.current);
    setOpenIdx(i);
  }
  function scheduleClose() {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIdx(-1), 140);
  }

  return (
    <>
    {/* Spacer keeps page content from jumping under the fixed header */}
    <div aria-hidden="true" style={{ height: "var(--site-header-height, 122px)" }}/>
    <header ref={headerRef} style={{
      position: "fixed", top: 0, left: 0, right: 0,
      zIndex: 60,
      transform: hidden ? "translateY(-100%)" : "translateY(0)",
      transition: "transform 320ms cubic-bezier(.4,0,.2,1)",
      willChange: "transform"
    }}>
      {/* Utility bar */}
      <div style={{
        background: "var(--edison-navy)",
        color: "rgba(255,255,255,.85)",
        fontFamily: "var(--font-body)", fontSize: 13,
        borderBottom: "1px solid rgba(255,255,255,.08)"
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "9px 32px",
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24,
          flexWrap: "wrap"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <a href={utility.phone.href} style={{
              color: "#fff", textDecoration: "none", borderBottom: 0,
              display: "inline-flex", alignItems: "center", gap: 8,
              fontWeight: 600
            }}>
              <IconPhone/> {utility.phone.label}
            </a>
            <span style={{ color: "rgba(255,255,255,.55)" }}>{utility.hours}</span>
          </div>
          <ul style={{
            listStyle: "none", padding: 0, margin: 0,
            display: "flex", gap: 22, alignItems: "center"
          }}>
            {utility.portals.map((p, i) => (
              <li key={i}>
                <a href={p.href} target="_blank" rel="noopener noreferrer"
                   style={{
                     color: "rgba(255,255,255,.85)",
                     textDecoration: "none", borderBottom: 0,
                     fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5,
                     letterSpacing: "0.02em",
                     transition: "color 140ms"
                   }}
                   onMouseEnter={(e) => e.currentTarget.style.color = "var(--edison-teal)"}
                   onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,.85)"}>
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main nav row — glassmorphism */}
      <div style={{
        background: atTop ? "#fff" : "rgba(255,255,255,.82)",
        backdropFilter: atTop ? "none" : "blur(20px) saturate(180%)",
        WebkitBackdropFilter: atTop ? "none" : "blur(20px) saturate(180%)",
        borderBottom: atTop ? "1px solid var(--border-hairline)" : "1px solid rgba(255,255,255,.35)",
        boxShadow: atTop ? "none" : "0 2px 24px rgba(15,29,51,.10)",
        transition: "background 280ms ease, box-shadow 280ms ease, border-color 280ms ease",
        position: "relative"
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 32px",
          height: 84,
          display: "flex", alignItems: "center", gap: 28
        }}>
          <a href={homeHref} aria-label={logoAlt} style={{ display: "block", borderBottom: 0, flexShrink: 0 }}>
            <img src={logoSrc} alt={logoAlt} style={{ height: 44, width: "auto", display: "block" }}/>
          </a>

          <nav aria-label="Primary"
               className="edison-desktop-nav"
               style={{ flex: 1, display: "flex", justifyContent: "center", gap: 2 }}>
            {nav.map((item, i) => {
              const hasMenu = item.mega || (item.children && item.children.length);
              const isOpen = openIdx === i;
              return (
                <div key={i} style={{ position: "static" /* mega menus need static parent for full-width centering */ }}
                     onMouseEnter={() => hasMenu && openMenu(i)}
                     onMouseLeave={() => hasMenu && scheduleClose()}>
                  <div style={{ position: "relative" }}>
                    <a href={item.href}
                       aria-haspopup={hasMenu ? "true" : undefined}
                       aria-expanded={hasMenu ? isOpen : undefined}
                       style={{
                         display: "inline-flex", alignItems: "center", gap: 6,
                         padding: "30px 14px",
                         fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5,
                         color: isOpen ? "var(--edison-teal-dark)" : "var(--edison-navy)",
                         textDecoration: "none", borderBottom: 0,
                         transition: "color 140ms"
                       }}>
                      {item.label}
                      {hasMenu && (
                        <span style={{
                          color: isOpen ? "var(--edison-teal-dark)" : "var(--edison-navy-50)",
                          transform: isOpen ? "rotate(180deg)" : "none",
                          transition: "transform 180ms",
                          display: "inline-flex"
                        }}>
                          <IconChevronDown/>
                        </span>
                      )}
                    </a>
                    {/* Simple dropdown always rendered for animation */}
                    {item.children && !item.mega && (
                      <SimpleDropdown items={item.children} open={isOpen}/>
                    )}
                  </div>
                  {/* Mega menu always rendered for animation */}
                  {item.mega && (
                    <MegaMenu columns={item.columns} open={isOpen}/>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="edison-desktop-cta" style={{ flexShrink: 0 }}>
            <NavCtaButton href={cta.href} label={cta.label}/>
          </div>

          <button className="edison-mobile-trigger"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                  style={{
                    display: "none",
                    background: "transparent", border: 0,
                    color: "var(--edison-navy)",
                    cursor: "pointer", padding: 8
                  }}>
            <IconMenu/>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 80,
          background: "rgba(15,29,51,.55)",
          backdropFilter: "blur(2px)"
        }}
             onClick={() => setMobileOpen(false)}>
          <div style={{
            position: "absolute", top: 0, right: 0, bottom: 0,
            width: "min(92vw, 380px)",
            background: "#fff",
            overflow: "auto",
            boxShadow: "var(--shadow-lg)"
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{
              padding: "18px 18px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              borderBottom: "1px solid var(--border-hairline)"
            }}>
              <img src={logoSrc} alt={logoAlt} style={{ height: 32 }}/>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu"
                      style={{
                        background: "transparent", border: 0, padding: 6,
                        color: "var(--edison-navy)", cursor: "pointer"
                      }}>
                <IconClose/>
              </button>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {nav.map((item, i) => (
                <MobileItem key={i} item={item}/>
              ))}
            </ul>
            <div style={{ padding: "20px" }}>
              <a href={cta.href} style={{
                display: "flex", justifyContent: "center", alignItems: "center", gap: 8,
                padding: "14px 22px",
                background: "var(--edison-teal)", color: "var(--edison-navy)",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14.5,
                borderRadius: 8, border: 0, textDecoration: "none", borderBottom: 0
              }}>
                {cta.label}
              </a>
            </div>
            <div style={{
              padding: "8px 20px 20px",
              borderTop: "1px solid var(--border-hairline)",
              marginTop: 8,
              fontFamily: "var(--font-body)", fontSize: 13.5,
              color: "var(--edison-text-body)"
            }}>
              <div style={{ marginBottom: 10 }}>
                <a href={utility.phone.href} style={{
                  color: "var(--edison-navy)",
                  textDecoration: "none", borderBottom: 0, fontWeight: 700,
                  display: "inline-flex", alignItems: "center", gap: 8
                }}>
                  <IconPhone/> {utility.phone.label}
                </a>
                <div style={{ color: "var(--edison-gray-mid)", marginTop: 2 }}>{utility.hours}</div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0,
                           display: "flex", flexDirection: "column", gap: 8 }}>
                {utility.portals.map((p, i) => (
                  <li key={i}>
                    <a href={p.href} target="_blank" rel="noopener noreferrer"
                       style={{ color: "var(--edison-teal-dark)",
                                textDecoration: "none", borderBottom: 0, fontWeight: 600 }}>
                      {p.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1040px) {
          .edison-desktop-nav, .edison-desktop-cta { display: none !important; }
          .edison-mobile-trigger { display: inline-flex !important; }
        }
      `}</style>
    </header>
    </>
  );
}

export { SiteHeader };
