import React from 'react';
import { BulbMark, FinalCTA, InteriorButton, InteriorEyebrow, SectionHeading, ServiceArea, TrustBadges } from '../components/interior-components';
import { BulletsWithImage } from '../components/template-sections';

/* ============================================================
   HOMEPAGE-SPECIFIC SECTIONS
   These extend the shared interior-components set with patterns
   only the home page uses (hero, audience cards, services intro,
   solutions split, board bullets, education + blog band).
   ============================================================ */

function HomeHero({ eyebrow, title, lede, primary, audienceCards }) {
  return (
    <section style={{
      position: "relative",
      minHeight: 640,
      backgroundImage:
        "linear-gradient(180deg, rgba(15,29,51,.72) 0%, rgba(15,29,51,.55) 60%, rgba(15,29,51,.78) 100%), url(assets/img-community-aerial.jpg)",
      backgroundSize: "cover", backgroundPosition: "center",
      color: "#fff",
      padding: "112px 48px 0",
      display: "flex", flexDirection: "column"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", flex: 1,
                    display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ maxWidth: 820 }}>
          <InteriorEyebrow color="var(--edison-teal)">{eyebrow}</InteriorEyebrow>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 60, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "#fff", margin: "16px 0 22px"
          }}>{title}</h1>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 19, lineHeight: 1.55,
            color: "rgba(255,255,255,.9)", maxWidth: 680, margin: "0 0 32px"
          }}>{lede}</p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 20 }}>
          <InteriorButton variant="onDark" size="lg" href={primary.href}>{primary.label}</InteriorButton>

          {/* Google review badge */}
          <a href="https://www.google.com/maps/place/Edison+Association+Management/@28.5489,-81.3583,17z"
             target="_blank" rel="noopener noreferrer"
             style={{
               display: "inline-flex", alignItems: "center", gap: 12,
               background: "rgba(255,255,255,.10)",
               backdropFilter: "blur(10px)",
               border: "1px solid rgba(255,255,255,.18)",
               borderRadius: 10,
               padding: "10px 16px 10px 12px",
               textDecoration: "none", borderBottom: 0,
               transition: "background 180ms"
             }}
             onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,.16)"}
             onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,.10)"}>
            {/* Google G */}
            <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Google" style={{ flexShrink: 0 }}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {/* Stars */}
            <div style={{ display: "flex", gap: 1 }}>
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <div>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14.5,
                color: "#fff", letterSpacing: "-0.01em"
              }}>4.9</span>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: 13,
                color: "rgba(255,255,255,.72)", marginLeft: 6
              }}>· 120 Google Reviews</span>
            </div>
          </a>
          </div>
        </div>
      </div>

      {/* Audience cards — sit on top of the hero, overlap into next section */}
      <div style={{
        maxWidth: 1200, margin: "72px auto -100px", width: "100%",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
        position: "relative", zIndex: 2
      }}>
        {audienceCards.map((c, i) => (
          <a key={i} href={c.href}
             target={c.href.startsWith('http') ? '_blank' : undefined}
             rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
             style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            textDecoration: "none",
            background: i === 0 ? "var(--edison-navy)" : "#fff",
            color: i === 0 ? "#fff" : "var(--edison-navy)",
            border: i === 0 ? "1px solid rgba(255,255,255,.12)" : "1px solid var(--border-hairline)",
            borderRadius: 14, overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
            transition: "transform 220ms var(--ease-standard), box-shadow 220ms",
            minHeight: 200
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{
              backgroundImage: i === 0
                ? `linear-gradient(180deg, rgba(15,29,51,.15) 0%, rgba(15,29,51,.55) 100%), url(${c.image})`
                : `url(${c.image})`,
              backgroundSize: "cover", backgroundPosition: "center"
            }}/>
            <div style={{ padding: "26px 30px",
                          display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <InteriorEyebrow color={i === 0 ? "var(--edison-teal)" : "var(--edison-teal-dark)"}>
                {c.eyebrow}
              </InteriorEyebrow>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 21, lineHeight: 1.25,
                color: i === 0 ? "#fff" : "var(--edison-navy)",
                margin: "10px 0 10px"
              }}>{c.title}</h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                color: i === 0 ? "rgba(255,255,255,.78)" : "var(--edison-text-body)",
                margin: "0 0 16px"
              }}>{c.body}</p>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                color: i === 0 ? "var(--edison-teal)" : "var(--edison-teal-dark)",
                display: "inline-flex", alignItems: "center", gap: 8
              }}>
                {c.cta} <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- Services intro + 3-card grid (with image header strips) ---------- */
function ServicesBand({ title, sub, services }) {
  return (
    <section style={{ background: "#fff", padding: "160px 48px 96px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 56px" }}>
          <InteriorEyebrow>Our Services</InteriorEyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 38, lineHeight: 1.15, letterSpacing: "-0.01em",
            color: "var(--edison-navy)", margin: "12px 0 16px",
            position: "relative", paddingBottom: 18, display: "inline-block"
          }}>
            {title}
            <span style={{
              position: "absolute", left: "50%", transform: "translateX(-50%)",
              bottom: 0, width: 60, height: 3,
              background: "var(--edison-teal)", borderRadius: 2
            }}/>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.65,
            color: "var(--edison-text-body)", margin: "8px 0 0"
          }}>{sub}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {services.map((s, i) => (
            <a key={i} href={s.href} style={{
              textDecoration: "none",
              background: "#fff",
              borderRadius: 14, overflow: "hidden",
              border: "1px solid var(--border-hairline)",
              boxShadow: "var(--shadow-xs)",
              display: "flex", flexDirection: "column",
              transition: "all 220ms var(--ease-standard)"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "var(--edison-teal)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-xs)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border-hairline)";
              }}>
              <div style={{
                aspectRatio: "16 / 10",
                backgroundImage: `linear-gradient(180deg, rgba(15,29,51,0) 30%, rgba(15,29,51,.55) 100%), url(${s.image})`,
                backgroundSize: "cover", backgroundPosition: "center"
              }}/>
              <div style={{ padding: "26px 26px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: "var(--edison-teal-pale)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--edison-teal-dark)", marginTop: -50,
                  border: "4px solid #fff"
                }}>
                  <BulbMark size={22}/>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 20, lineHeight: 1.3,
                  color: "var(--edison-navy)", margin: 0
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                  color: "var(--edison-text-body)", margin: 0, flex: 1
                }}>{s.body}</p>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                  color: "var(--edison-teal-dark)",
                  display: "inline-flex", alignItems: "center", gap: 6,
                  marginTop: 6
                }}>
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Solutions split: 2 large image cards (Condo / Single Family) ---------- */
function SolutionsSplit({ eyebrow, title, sub, options }) {
  return (
    <section style={{ background: "var(--edison-teal-pale)", padding: "88px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 48px" }}>
          <InteriorEyebrow>{eyebrow}</InteriorEyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.01em",
            color: "var(--edison-navy)", margin: "12px 0 14px"
          }}>{title}</h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.65,
            color: "var(--edison-text-body)", margin: "0 auto"
          }}>{sub}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {options.map((o, i) => (
            <a key={i} href={o.href} style={{
              position: "relative",
              display: "flex", flexDirection: "column", justifyContent: "flex-end",
              minHeight: 360, padding: "32px 32px",
              borderRadius: 16, overflow: "hidden",
              textDecoration: "none",
              backgroundImage:
                `linear-gradient(180deg, rgba(15,29,51,.12) 0%, rgba(15,29,51,.78) 92%), url(${o.image})`,
              backgroundSize: "cover", backgroundPosition: "center",
              color: "#fff",
              boxShadow: "var(--shadow-md)",
              transition: "transform 220ms var(--ease-standard), box-shadow 220ms"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 28, lineHeight: 1.2, letterSpacing: "-0.01em",
                color: "#fff", margin: "0 0 14px"
              }}>{o.title}</h3>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
                color: "var(--edison-teal)",
                display: "inline-flex", alignItems: "center", gap: 8
              }}>
                Learn More <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Bullets + image: now lives in template-sections.jsx (shared) ---------- */

/* ---------- Education band + 2 article cards ---------- */
function EducationBand({ eyebrow, title, sub, hero, posts }) {
  return (
    <section style={{ background: "var(--bg-3, #F5F7FA)", padding: "88px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{
          display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56,
          alignItems: "center", marginBottom: 56
        }}>
          <div style={{
            width: "100%", aspectRatio: "3 / 2",
            borderRadius: 16, overflow: "hidden",
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover", backgroundPosition: "center",
            boxShadow: "var(--shadow-md)"
          }}/>
          <div>
            <InteriorEyebrow>{eyebrow}</InteriorEyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.01em",
              color: "var(--edison-navy)", margin: "12px 0 16px",
              position: "relative", paddingBottom: 16, display: "inline-block"
            }}>
              {title}
              <span style={{ position: "absolute", left: 0, bottom: 0,
                             width: 60, height: 3,
                             background: "var(--edison-teal)", borderRadius: 2 }}/>
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.65,
              color: "var(--edison-text-body)", margin: 0
            }}>{sub}</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {posts.map((p, i) => (
            <a key={i} href={p.href} style={{
              textDecoration: "none",
              background: "#fff",
              border: "1px solid var(--border-hairline)",
              borderRadius: 14, overflow: "hidden",
              display: "flex", flexDirection: "column",
              boxShadow: "var(--shadow-xs)",
              transition: "all 220ms var(--ease-standard)"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-xs)";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
              <div style={{
                aspectRatio: "16 / 9",
                backgroundImage: `url(${p.image})`,
                backgroundSize: "cover", backgroundPosition: "center"
              }}/>
              <div style={{ padding: "26px 28px 28px",
                            display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--edison-teal-dark)"
                }}>{p.category}</div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 21, lineHeight: 1.3,
                  color: "var(--edison-navy)", margin: 0
                }}>{p.title}</h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                  color: "var(--edison-text-body)", margin: 0
                }}>{p.excerpt}</p>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                  color: "var(--edison-teal-dark)",
                  display: "inline-flex", alignItems: "center", gap: 6,
                  marginTop: 4
                }}>
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE COMPOSITION
   Edit the data below to change copy — leave the components alone.
   ============================================================ */
function HomePage() {
  return (
    <main data-screen-label="Home">

      <HomeHero
        eyebrow="Orlando, Florida · Since 2021"
        title="HOA & Condominium Management Services"
        lede="Edison Association Management provides professional HOA and condominium management services designed to support boards, protect property values, and simplify day-to-day operations."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal/" }}
        audienceCards={[
          {
            eyebrow: "For HOA & Condo Boards",
            title: "Request a management proposal, explore services, see property types we manage.",
            body: "Tailored proposals, transparent reporting, and a dedicated manager who knows your community.",
            cta: "Why Edison",
            image: "/assets/img-inspector.jpg",
            href: "/about/"
          },
          {
            eyebrow: "For Residents & Homeowners",
            title: "Access account information, pay dues, and submit requests.",
            body: "Sign in to the resident portal for documents, payments, and maintenance requests — 24/7.",
            cta: "Resident Login",
            image: "/assets/img-resident-portal.jpg",
            href: "https://edison.cincwebaxis.com"
          }
        ]}
      />

      <ServicesBand
        title="Condo & HOA Management Services"
        sub="From day-to-day operations to long-term planning, our management services are built to give boards confidence and residents peace of mind."
        services={[
          {
            title: "HOA Management Services",
            body: "Dedicated managers, transparent reporting, and proactive communication — so your board can focus on the community, not the paperwork.",
            image: "/assets/img-13.jpg",
            href: "/services/hoa-management/"
          },
          {
            title: "Accounting & Bookkeeping",
            body: "Comprehensive monthly financials, accurate budgets, and streamlined collections — every dollar accounted for, every report on time.",
            image: "/assets/img-accounting.jpg",
            href: "/services/hoa-accounting/"
          },
          {
            title: "Covenant Enforcement & Compliance",
            body: "Consistent inspections, fair enforcement, and full compliance tracking — protecting property values while keeping homeowners informed.",
            image: "/assets/img-inspector.jpg",
            href: "/services/covenant-enforcement/"
          }
        ]}
      />

      <SolutionsSplit
        eyebrow="Property Types"
        title="Customized Management Solutions"
        sub="Every community is different. Whether you manage a single-family neighborhood or a high-rise condominium, Edison tailors its approach to match your association's unique needs, governing documents, and long-term goals."
        options={[
          {
            title: "Condominium Management",
            image: "/assets/img-21.jpg",
            href: "/services/condo-management/"
          },
          {
            title: "Single-Family HOA Management",
            image: "/assets/img-22.jpg",
            href: "/services/hoa-management/single-family/"
          }
        ]}
      />

      <BulletsWithImage
        eyebrow="Why Boards Choose Edison"
        title="A Management Partner Boards Can Rely On"
        image="/assets/img-11.jpg"
        bullets={[
          "Clear financial reporting and accountability",
          "Consistent communication with boards and residents",
          "Proven processes for compliance and governance",
          "Experienced leadership and responsive support"
        ]}
      />

      <TrustBadges
        eyebrow="Recognized & Accredited"
        title="Credentials You Can Verify"
        sub="Edison's leadership and team are recognized by the Orlando Business Journal, the Community Associations Institute, the Florida Community Association Journal, and the Better Business Bureau."
        badges={[
          { label: "OBJ", sub: "Best Place to Work" },
          { label: "CAI", sub: "Member Company" },
          { label: "PCAM", sub: "Designation" },
          { label: "FLCAJ", sub: "Featured Firm" },
          { label: "BBB A+", sub: "Accredited Business" }
        ]}
      />

      <EducationBand
        eyebrow="Edison Education"
        title="HOA Board Education & Resources"
        sub="Serving on a board is easier when you have the right information. Explore our guides and articles on HOA governance, compliance, and best practices — written specifically for Florida community leaders."
        hero="/assets/img-11.jpg"
        posts={[
          {
            category: "Finance & Audit",
            title: "HOA Audit: What It Is, When It's Required, and How to Prepare",
            excerpt: "An HOA audit confirms your community's finances are accurate, transparent, and compliant with Florida law. Learn what's required based on your association's revenue, and how strong year-round financial management makes the process faster and less expensive for your board.",
            image: "/assets/img-accounting.jpg",
            href: "/blog/hoa-audit/"
          },
          {
            category: "Governance",
            title: "HOA Bylaws vs CC&Rs: Key Differences Explained",
            excerpt: "Board members often reach for the wrong document when a decision needs to be made quickly. Understanding the difference between HOA bylaws and CC&Rs — and knowing which one governs your situation — is how volunteer leaders make confident, defensible decisions.",
            image: "/assets/img-17.jpg",
            href: "/blog/hoa-bylaws-vs-ccrs/"
          }
        ]}
      />

      <ServiceArea
        eyebrow="Service Area"
        title="Serving Associations Throughout Central Florida"
        body="Based in Orlando, Edison proudly manages homeowner and condominium associations across Central Florida — from Orange and Seminole counties to Osceola, Lake, and beyond."
        cities={[
          "Orange County", "Seminole County", "Osceola County", "Lake County",
          "Orlando", "Winter Garden", "Clermont", "Kissimmee", "Lake Mary",
          "Altamonte Springs", "Oviedo", "Apopka"
        ]}
        mapImg="/assets/img-neighborhood-aerial.jpg"
        mapEmbed={true}
      />

      <FinalCTA
        eyebrow="Let's Talk"
        title="Ready for a Better Association Management Experience?"
        body="Tell us about your community and receive a customized management proposal tailored to your association's needs."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal/" }}
        secondary={{ label: "Contact Us", href: "/contact/" }}
      />

    </main>
  );
}

export { HomePage };
