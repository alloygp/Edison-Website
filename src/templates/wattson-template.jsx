import React, { useState as useFeatState } from 'react';
import { Breadcrumb, FeatureGrid, FinalCTA, InteriorButton, MidCTA, SectionHeading } from '../components/interior-components';

/* ---------- WATTSON brand mark ---------- */
function WattsonMark({ size = 96 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.22,
      background: "linear-gradient(135deg, var(--edison-teal) 0%, var(--edison-teal-dark) 100%)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      boxShadow: "var(--shadow-md)",
      position: "relative"
    }}>
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none">
        {/* bulb with sparkle */}
        <path d="M12 3a6 6 0 00-3.5 10.9c.3.2.5.6.5 1V16h6v-1.1c0-.4.2-.8.5-1A6 6 0 0012 3z"
              stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M9.5 18h5M10.5 21h3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="18" cy="6" r="1" fill="#fff"/>
        <circle cx="20" cy="9" r="0.6" fill="#fff" opacity="0.8"/>
      </svg>
    </div>
  );
}

/* ---------- Email capture (shared) ---------- */
function EmailCapture({ variant = "light", placeholder = "board@yourcommunity.org" }) {
  const [email, setEmail] = useFeatState("");
  const [submitted, setSubmitted] = useFeatState(false);
  if (submitted) {
    return (
      <div style={{
        padding: "18px 22px", borderRadius: 10,
        background: variant === "dark" ? "rgba(60,200,200,.15)" : "var(--edison-teal-pale)",
        border: `1px solid ${variant === "dark" ? "rgba(60,200,200,.3)" : "var(--edison-teal)"}`,
        color: variant === "dark" ? "#fff" : "var(--edison-navy)",
        fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14
      }}>
        <strong>Thanks!</strong> We'll let you know when WATTSON is live.
      </div>
    );
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          style={{ display: "flex", gap: 8, maxWidth: 460 }}>
      <input type="email" value={email} required
             placeholder={placeholder}
             onChange={(e) => setEmail(e.target.value)}
             style={{
               flex: 1, padding: "13px 16px", borderRadius: 8,
               border: "1px solid var(--border-strong)", outline: 0,
               fontFamily: "var(--font-body)", fontSize: 14.5,
               background: variant === "dark" ? "rgba(255,255,255,.08)" : "#fff",
               color: variant === "dark" ? "#fff" : "var(--edison-text-body)",
               borderColor: variant === "dark" ? "rgba(255,255,255,.2)" : "var(--border-strong)"
             }}/>
      <InteriorButton variant={variant === "dark" ? "onDark" : "primary"} size="md" type="submit">
        Notify Me
      </InteriorButton>
    </form>
  );
}

/* ============================================================
   WATTSON FEATURE PAGE, VARIANT A (Product Teaser · Coming 2026)
   Big branded hero with launch badge, what-it-does grid, email
   capture inline. Hero-led, marketing-forward.
   ============================================================ */
function WattsonPageA() {
  return (
    <main data-screen-label="WATTSON, Variant A">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about/" },
        { label: "WATTSON AI" }
      ]}/>

      <section className="wattson-hero" style={{
        background: "linear-gradient(180deg, var(--edison-navy) 0%, var(--edison-navy-dark) 100%)",
        color: "#fff",
        padding: "104px 48px 96px",
        position: "relative", overflow: "hidden"
      }}>
        <div aria-hidden="true" style={{
          position: "absolute", top: -200, right: -200,
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(60,200,200,.18) 0%, transparent 70%)"
        }}/>
        <div className="wattson-hero-grid" style={{ maxWidth: 1200, margin: "0 auto",
                      display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64,
                      alignItems: "center", position: "relative" }}>
          <div>
            <WattsonMark size={88}/>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginTop: 22, marginBottom: 18,
              padding: "6px 12px",
              background: "rgba(60,200,200,.15)",
              border: "1px solid rgba(60,200,200,.3)",
              borderRadius: 999,
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--edison-teal)"
            }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--edison-teal)" }}/>
              In Development · Launching 2026
            </div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 60, lineHeight: 1.06, letterSpacing: "-0.02em",
              color: "#fff", margin: "0 0 22px"
            }}>Meet WATTSON. Edison's branded AI assistant.</h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55,
              color: "rgba(255,255,255,.85)", margin: "0 0 32px", maxWidth: 620
            }}>Named for watts and the light bulb. WATTSON answers homeowner questions 24/7 inside Edison's resident portal, surfacing governing documents, drafting maintenance requests, and routing the rest to a human. But when you call Edison, a person still answers.</p>
            <div style={{ marginBottom: 14 }}>
              <EmailCapture variant="dark"/>
            </div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5,
              color: "rgba(255,255,255,.6)", margin: 0
            }}>We'll send one email when WATTSON goes live. No marketing list, no follow-ups.</p>
          </div>
          <div style={{
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.14)",
            borderRadius: 16, padding: 28,
            position: "relative"
          }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--edison-teal)", marginBottom: 16
            }}>Sneak peek</div>
            {[
              { from: "Resident", msg: "Hey, what time does the pool close on Sundays?" },
              { from: "WATTSON", msg: "Sunday pool hours per your community rules (Section 4.2) are 8am–9pm year-round. Need anything else?" },
              { from: "Resident", msg: "How do I submit a maintenance request for a sprinkler head?" },
              { from: "WATTSON", msg: "I can draft that for you. I'll route it to your management team and copy the maintenance log. One moment..." }
            ].map((m, i) => (
              <div key={i} style={{
                marginBottom: 10,
                display: "flex",
                justifyContent: m.from === "WATTSON" ? "flex-start" : "flex-end"
              }}>
                <div style={{
                  maxWidth: "82%",
                  padding: "11px 14px",
                  borderRadius: 12,
                  background: m.from === "WATTSON" ? "var(--edison-teal)" : "rgba(255,255,255,.08)",
                  color: m.from === "WATTSON" ? "var(--edison-navy)" : "#fff",
                  fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 10.5,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: m.from === "WATTSON" ? "var(--edison-navy)" : "rgba(255,255,255,.6)",
                    marginBottom: 4
                  }}>{m.from}</div>
                  {m.msg}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        background="#fff"
        eyebrow="What WATTSON does"
        title="A resident assistant that actually understands your community"
        sub="WATTSON is grounded in your governing documents, your management calendar, and your homeowner records. It's not a generic chatbot, it knows your community's rules, deadlines, and the difference between an HOA and a condo association."
        columns={3}
        items={[
          { title: "24/7 Document Lookup", body: "Residents ask in plain English. WATTSON pulls the right CC&R section, bylaw, or rule and quotes it." },
          { title: "Maintenance Requests", body: "Drafts the request, routes it to your management team, and copies the maintenance log automatically." },
          { title: "Compliance Reminders", body: "Surfaces upcoming inspections, certifications, and FL statutory deadlines before they become emergencies." },
          { title: "Multilingual Support", body: "Answers in English and Spanish, important in Central Florida's communities." },
          { title: "Human Escalation", body: "Knows when to stop talking and pass to your manager. Routes complex issues with full context attached." },
          { title: "Board Insights", body: "Quarterly reports on what residents are asking about most, so boards can address issues at the source." }
        ]}
      />

      <MidCTA
        variant="teal"
        title="Be among the first communities live on WATTSON."
        lede="We're rolling out to current Edison communities first, then expanding access. Drop your email and we'll keep you posted."
        primary={{ label: "Notify Me", href: "#capture" }}
        secondary={{ label: "Read the Edison story", href: "/about/" }}
      />
    </main>
  );
}

/* ============================================================
   WATTSON FEATURE PAGE, VARIANT B (Conversation-Forward)
   Centered hero, large chat mockup as the centerpiece, then
   technical details and email capture at the end. Quieter brand,
   demo-led.
   ============================================================ */
function WattsonPageB() {
  return (
    <main data-screen-label="WATTSON, Variant B">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about/" },
        { label: "WATTSON AI" }
      ]}/>

      <section style={{ background: "#fff", padding: "88px 48px 32px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <WattsonMark size={72}/>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginTop: 18, marginBottom: 18,
            padding: "5px 12px",
            background: "var(--edison-teal-pale)",
            border: "1px solid var(--edison-teal)",
            borderRadius: 999,
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)"
          }}>
            In Development · Launching 2026
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 20px"
          }}>Meet WATTSON.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55,
            color: "var(--edison-text-body)", margin: 0, maxWidth: 720
          }}>Edison's branded resident AI. Named for watts and the light bulb. WATTSON answers homeowner questions 24/7 inside the resident portal, grounded in your governing documents, your community calendar, and your actual rules.</p>
        </div>
      </section>

      {/* Large chat mockup */}
      <section style={{ background: "#fff", padding: "32px 48px 80px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto",
                      background: "var(--edison-teal-pale)",
                      borderRadius: 20, padding: 36,
                      boxShadow: "var(--shadow-lg)" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            marginBottom: 22, paddingBottom: 18,
            borderBottom: "1px solid var(--border-hairline)"
          }}>
            <WattsonMark size={40}/>
            <div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
                color: "var(--edison-navy)"
              }}>WATTSON</div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 12,
                color: "var(--edison-gray-mid)",
                display: "flex", alignItems: "center", gap: 6
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--status-success)" }}/>
                Online · Resident portal
              </div>
            </div>
          </div>
          {[
            { from: "Resident", msg: "Can I install a satellite dish on my roof?" },
            { from: "WATTSON", msg: "Your CC&Rs (Article 7, Section 7.4) allow satellite dishes under 1 meter on residential structures, subject to ARC review for placement. The ARC review form takes about 5 minutes. Want me to start one?" },
            { from: "Resident", msg: "Yes please. And what's the timeline?" },
            { from: "WATTSON", msg: "ARC reviews for minor installations like this typically return a decision within 14 days. I'm drafting your request now, I'll send you a confirmation once it's submitted, and your ARC reviewer will be in touch." }
          ].map((m, i) => (
            <div key={i} style={{
              marginBottom: 12,
              display: "flex",
              justifyContent: m.from === "WATTSON" ? "flex-start" : "flex-end"
            }}>
              <div style={{
                maxWidth: "82%",
                padding: "12px 16px",
                borderRadius: 14,
                background: m.from === "WATTSON" ? "#fff" : "var(--edison-navy)",
                color: m.from === "WATTSON" ? "var(--edison-navy)" : "#fff",
                fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.5,
                boxShadow: "0 1px 3px rgba(15,29,51,.08)"
              }}>
                {m.msg}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FeatureGrid
        background="var(--edison-teal-pale)"
        eyebrow="How it works"
        title="Grounded in your community, not the internet"
        columns={3}
        items={[
          { title: "Document-Grounded", body: "WATTSON reads your governing documents directly. Answers are quoted from your CC&Rs and bylaws, not generic AI guesses." },
          { title: "Community-Aware", body: "Knows your management calendar, board meeting schedule, vendor contacts, and FL statutory deadlines." },
          { title: "Human Handoff", body: "Knows when to escalate. Routes complex or sensitive issues to your manager with full conversation context." }
        ]}
      />

      <section style={{ background: "#fff", padding: "88px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>Get notified</div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 36, lineHeight: 1.18, letterSpacing: "-0.01em",
            color: "var(--edison-navy)", margin: "0 0 14px"
          }}>Want to know when WATTSON is live?</h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.6,
            color: "var(--edison-text-body)", margin: "0 0 28px"
          }}>One email. No marketing list. We'll let you know the moment WATTSON is available in your community.</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <EmailCapture/>
          </div>
        </div>
      </section>
    </main>
  );
}

export { WattsonPageA, WattsonPageB };
