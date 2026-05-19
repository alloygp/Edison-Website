import React, { useState, Suspense } from 'react';
import { ServiceAreaMap } from './ServiceAreaMap.jsx';

/* ============================================================
   ATOMS, small reusable pieces (Edison brand tokens only)
   ============================================================ */

function InteriorEyebrow({ children, color = "var(--edison-teal-dark)" }) {
  return (
    <div style={{
      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
      letterSpacing: "0.16em", textTransform: "uppercase", color
    }}>{children}</div>
  );
}

function InteriorButton({ variant = "primary", size = "md", children, href, type, onClick }) {
  const [hovered, setHovered] = useState(false);

  const sizes = {
    sm: { padding: "9px 16px",  fontSize: 13 },
    md: { padding: "13px 22px", fontSize: 14 },
    lg: { padding: "16px 28px", fontSize: 15 }
  }[size];

  const base = {
    primary:     { background: "var(--edison-teal)",        color: "var(--edison-navy)", border: "0" },
    secondary:   { background: "var(--edison-navy)",        color: "#fff",               border: "0" },
    ghost:       { background: "transparent",               color: "var(--edison-navy)", border: "1.5px solid var(--edison-navy)" },
    onDark:      { background: "var(--edison-teal)",        color: "var(--edison-navy)", border: "0" },
    ghostOnDark: { background: "transparent",               color: "#fff",               border: "1.5px solid rgba(255,255,255,.5)" }
  }[variant];

  const hover = {
    primary:     { background: "var(--edison-teal-light)", boxShadow: "0 4px 20px rgba(60,200,200,.38)", transform: "translateY(-1px)" },
    secondary:   { background: "#263b62",                  boxShadow: "0 4px 20px rgba(27,42,74,.30)",   transform: "translateY(-1px)" },
    ghost:       { background: "var(--edison-navy)",        color: "#fff",                                transform: "translateY(-1px)" },
    onDark:      { background: "var(--edison-teal-light)", boxShadow: "0 4px 20px rgba(60,200,200,.38)", transform: "translateY(-1px)" },
    ghostOnDark: { background: "rgba(255,255,255,.14)",    border: "1.5px solid rgba(255,255,255,.85)",  transform: "translateY(-1px)" }
  }[variant];

  const style = {
    fontFamily: "var(--font-display)", fontWeight: 700, textDecoration: "none",
    borderRadius: 8, cursor: "pointer", borderBottom: 0,
    letterSpacing: "0.01em",
    transition: "background 200ms ease, box-shadow 200ms ease, transform 180ms ease, color 160ms ease, border-color 160ms ease",
    display: "inline-flex", alignItems: "center", gap: 8,
    appearance: "none", lineHeight: 1.2,
    position: "relative", overflow: "hidden",
    ...sizes, ...base, ...(hovered ? hover : {})
  };

  /* Shine span, sweeps across on hover */
  const shine = (
    <span aria-hidden="true" style={{
      position: "absolute", top: 0, bottom: 0,
      left: hovered ? "110%" : "-60%",
      width: "45%",
      background: "linear-gradient(105deg, transparent, rgba(255,255,255,.22) 50%, transparent)",
      transform: "skewX(-18deg)",
      transition: hovered ? "left 480ms cubic-bezier(.4,0,.2,1)" : "none",
      pointerEvents: "none"
    }}/>
  );

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  };

  if (type || (onClick && !href)) {
    return (
      <button type={type || "button"} onClick={onClick} style={style} {...handlers}>
        {children}{shine}
      </button>
    );
  }
  return (
    <a href={href || "#"} onClick={onClick} style={style} {...handlers}>
      {children}{shine}
    </a>
  );
}

function BulbMark({ size = 22, color = "currentColor", strokeWidth = 1.8 }) {
  // Inline take on Edison's bulb-house mark.
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.3.2.5.6.5 1V16h6v-1.1c0-.4.2-.8.5-1A6 6 0 0012 3z"
            stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ============================================================
   BREADCRUMB
   ============================================================ */
function Breadcrumb({ trail }) {
  return (
    <nav aria-label="Breadcrumb" className="ic-breadcrumb" style={{
      background: "var(--edison-teal-pale)",
      borderBottom: "1px solid var(--border-hairline)",
      padding: "14px 48px"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto",
                    fontFamily: "var(--font-body)", fontSize: 13.5,
                    color: "var(--edison-navy)" }}>
        {trail.map((item, i) => (
          <span key={i}>
            {item.href ? (
              <a href={item.href} style={{
                color: "var(--edison-navy)",
                textDecoration: "none",
                borderBottom: "1px solid transparent",
                transition: "border-color 160ms"
              }}
                 onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = "var(--edison-teal)"}
                 onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = "transparent"}>
                {item.label}
              </a>
            ) : (
              <span style={{ color: "var(--edison-gray-mid)" }}>{item.label}</span>
            )}
            {i < trail.length - 1 && (
              <span style={{ margin: "0 10px", color: "var(--edison-gray-mid)" }}>»</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

/* ============================================================
   PAGE TITLE BLOCK, H1 + intro paragraph
   ============================================================ */
function PageTitle({ title, intro }) {
  return (
    <section style={{ padding: "72px 48px 56px", background: "#fff" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: 52, lineHeight: 1.1, letterSpacing: "-0.02em",
          color: "var(--edison-navy)", margin: "0 0 24px",
          maxWidth: 920
        }}>{title}</h1>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 18, lineHeight: 1.65,
          color: "var(--edison-text-body)", margin: 0,
          maxWidth: 880
        }}>{intro}</p>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION HEADING, H2 + optional subhead (teal underline)
   ============================================================ */
function SectionHeading({ eyebrow, title, sub, align = "left", color = "var(--edison-navy)" }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === "center" ? 760 : 920,
                  margin: align === "center" ? "0 auto" : "0" }}>
      {eyebrow && <InteriorEyebrow>{eyebrow}</InteriorEyebrow>}
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.01em",
        color, margin: eyebrow ? "12px 0 18px" : "0 0 18px",
        position: "relative", paddingBottom: 16,
        display: "inline-block"
      }}>
        {title}
        <span style={{
          position: "absolute", left: align === "center" ? "50%" : 0,
          transform: align === "center" ? "translateX(-50%)" : "none",
          bottom: 0, width: 60, height: 3,
          background: "var(--edison-teal)", borderRadius: 2
        }}/>
      </h2>
      {sub && <p style={{
        fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.65,
        color: color === "#fff" ? "rgba(255,255,255,.82)" : "var(--edison-text-body)",
        margin: "8px 0 0", maxWidth: 760
      }}>{sub}</p>}
    </div>
  );
}

/* ============================================================
   BODY PROSE BLOCK, H2 + long-form paragraphs (with optional H3s)
   ============================================================ */
function BodyProse({ eyebrow, title, paragraphs = [], background = "#fff" }) {
  return (
    <section style={{ background, padding: "80px 48px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 20,
                      maxWidth: 920 }}>
          {paragraphs.map((p, i) => (
            <p key={i} style={{
              fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.7,
              color: "var(--edison-text-body)", margin: 0
            }}
               dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURE GRID, N differentiator cards with bulb icon + H3 + body
   ============================================================ */
function FeatureGrid({ eyebrow, title, sub, items, background = "var(--edison-teal-pale)",
                       columns = 3 }) {
  return (
    <section style={{ background, padding: "88px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />
        <div style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: 20
        }}>
          {items.map((it, i) => (
            <article key={i} style={{
              background: "#fff",
              border: "1px solid var(--border-hairline)",
              borderRadius: 12,
              padding: "28px 26px",
              boxShadow: "var(--shadow-sm)",
              display: "flex", flexDirection: "column", gap: 14,
              transition: "box-shadow 220ms, transform 220ms"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: "var(--edison-teal-pale)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--edison-teal-dark)"
              }}>
                <BulbMark size={24}/>
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 19, lineHeight: 1.3,
                color: "var(--edison-navy)", margin: 0
              }}>{it.title}</h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                color: "var(--edison-text-body)", margin: 0
              }}>{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MID CTA BANNER, short title, lede, primary + call link
   ============================================================ */
function MidCTA({ title, lede, primary, secondary, variant = "navy" }) {
  const isNavy = variant === "navy";
  return (
    <section style={{
      background: isNavy ? "var(--edison-navy)" : "var(--edison-teal-pale)",
      padding: "72px 48px",
      color: isNavy ? "#fff" : "var(--edison-navy)"
    }}>
      <div style={{
        maxWidth: 1080, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1.4fr auto",
        gap: 48, alignItems: "center"
      }}>
        <div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 32, lineHeight: 1.2, letterSpacing: "-0.01em",
            color: isNavy ? "#fff" : "var(--edison-navy)",
            margin: "0 0 12px"
          }}>{title}</h2>
          {lede && <p style={{
            fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.6,
            color: isNavy ? "rgba(255,255,255,.82)" : "var(--edison-text-body)",
            margin: 0, maxWidth: 640, fontWeight: 600
          }}>{lede}</p>}
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <InteriorButton variant={isNavy ? "onDark" : "primary"} size="lg" href={primary.href}>
            {primary.label}
          </InteriorButton>
          {secondary && (
            <InteriorButton variant={isNavy ? "ghostOnDark" : "ghost"} size="lg" href={secondary.href}>
              {secondary.label}
            </InteriorButton>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LINKED DETAIL CARDS, title + body + arrow link (the "In Detail" pattern)
   ============================================================ */
function DetailLinkCards({ eyebrow, title, sub, items, columns = 3 }) {
  return (
    <section style={{ background: "#fff", padding: "88px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />
        <div style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: 20
        }}>
          {items.map((it, i) => (
            <a key={i} href={it.href || "#"} style={{
              textDecoration: "none",
              background: "#fff",
              border: "1px solid var(--border-hairline)",
              borderRadius: 12,
              padding: "28px 26px",
              display: "flex", flexDirection: "column", gap: 12,
              transition: "all 220ms cubic-bezier(.2,0,.1,1)",
              boxShadow: "var(--shadow-xs)"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.borderColor = "var(--edison-teal)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-xs)";
                e.currentTarget.style.borderColor = "var(--border-hairline)";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 19, lineHeight: 1.3,
                color: "var(--edison-navy)", margin: 0
              }}>{it.title}</h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                color: "var(--edison-text-body)", margin: 0, flex: 1
              }}>{it.body}</p>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                color: "var(--edison-teal-dark)",
                display: "inline-flex", alignItems: "center", gap: 6,
                marginTop: 4
              }}>
                Learn more
                <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TRUST / CREDENTIAL BADGES (drawn placeholders, swap with real art)
   ============================================================ */
function TrustBadges({ eyebrow, title, sub, badges }) {
  return (
    <section style={{ background: "var(--bg-2, #F7F8FA)", padding: "80px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center"/>
        <div className="ic-trust-badges-grid" style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 20, alignItems: "center"
        }}>
          {badges.map((b, i) => (
            <div key={i} style={{
              background: "#fff",
              border: "1px solid var(--border-hairline)",
              borderRadius: 12,
              width: "100%", height: 100,
              display: "flex",
              alignItems: "center", justifyContent: "center",
              padding: "14px 18px",
              boxShadow: "var(--shadow-xs)"
            }}>
              {b.img
                ? <img src={b.img} alt={b.label}
                       style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}/>
                : (
                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: 11, letterSpacing: "0.06em",
                      color: b.color || "var(--edison-navy)",
                      textTransform: "uppercase", marginBottom: 4
                    }}>{b.label}</div>
                    {b.sub && <div style={{
                      fontFamily: "var(--font-body)", fontSize: 10.5,
                      color: "var(--edison-gray-mid)", lineHeight: 1.3
                    }}>{b.sub}</div>}
                  </div>
                )
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function FAQ({ eyebrow, title, sub, items, background = "#fff" }) {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background, padding: "88px 48px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center"/>
        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 10 }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid var(--border-hairline)",
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: isOpen ? "var(--shadow-sm)" : "none",
                transition: "box-shadow 220ms"
              }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        style={{
                          width: "100%", background: "transparent", border: 0,
                          padding: "20px 24px", cursor: "pointer",
                          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24,
                          textAlign: "left",
                          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16,
                          color: "var(--edison-navy)"
                        }}>
                  <span>{it.q}</span>
                  <span aria-hidden="true" style={{
                    flexShrink: 0,
                    width: 28, height: 28, borderRadius: 999,
                    background: isOpen ? "var(--edison-teal)" : "var(--edison-teal-pale)",
                    color: "var(--edison-navy)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 700,
                    transition: "background 200ms"
                  }}>{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && (
                  <div style={{
                    padding: "0 24px 22px",
                    fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.65,
                    color: "var(--edison-text-body)"
                  }}>{it.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICE AREA, text + map placeholder
   ============================================================ */
function ServiceArea({ eyebrow, title, body, cities, mapImg, mapEmbed = false }) {
  return (
    <section className="ic-service-area" style={{ background: "#fff", padding: "88px 48px" }}>
      <div className="ic-service-area-grid" style={{ maxWidth: 1200, margin: "0 auto",
                    display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56,
                    alignItems: "center" }}>
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} />
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7,
            color: "var(--edison-text-body)", margin: "24px 0 20px"
          }}>{body}</p>
          {cities && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
              {cities.map(c => (
                <span key={c} style={{
                  fontFamily: "var(--font-body)", fontSize: 13,
                  color: "var(--edison-navy)",
                  background: "var(--edison-teal-pale)",
                  padding: "6px 12px", borderRadius: 999
                }}>{c}</span>
              ))}
            </div>
          )}
        </div>
        <div style={{
          width: "100%", aspectRatio: "4 / 3",
          minHeight: 280,
          borderRadius: 16, overflow: "hidden",
          boxShadow: "var(--shadow-md)",
          position: "relative"
        }}>
          <ServiceAreaMap />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA, full-width navy panel with closing message
   ============================================================ */
function FinalCTA({ eyebrow, title, body, primary, secondary }) {
  return (
    <section style={{ background: "var(--edison-navy)", padding: "96px 48px", color: "#fff" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
        {eyebrow && <InteriorEyebrow color="var(--edison-teal)">{eyebrow}</InteriorEyebrow>}
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: 40, lineHeight: 1.15, letterSpacing: "-0.01em",
          color: "#fff", margin: eyebrow ? "14px 0 18px" : "0 0 18px"
        }}>{title}</h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 17.5, lineHeight: 1.6,
          color: "rgba(255,255,255,.82)", margin: "0 auto 32px",
          maxWidth: 720
        }}>{body}</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <InteriorButton variant="onDark" size="lg" href={primary.href}>{primary.label}</InteriorButton>
          {secondary && (
            <InteriorButton variant="ghostOnDark" size="lg" href={secondary.href}>
              {secondary.label}
            </InteriorButton>
          )}
        </div>
      </div>
    </section>
  );
}

export { Breadcrumb, PageTitle, SectionHeading, BodyProse, FeatureGrid, MidCTA, DetailLinkCards, TrustBadges, FAQ, ServiceArea, FinalCTA, InteriorEyebrow, InteriorButton, BulbMark };
