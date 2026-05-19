import React from 'react';
import { Breadcrumb, FinalCTA, InteriorButton, SectionHeading } from '../components/interior-components';

/* ============================================================
   /blog/ , chronological article index
   Same shape as Edison Education hub but flat, paginated list.
   ============================================================ */
function BlogIndexPage({ content }) {
  const all = content.articles;
  return (
    <main data-screen-label="Blog Index">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Edison Education", href: "/edison-education/" },
        { label: "Blog" }
      ]}/>

      <section style={{ background: "var(--edison-navy)", color: "#fff",
                        padding: "72px 48px 56px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal)", marginBottom: 18
          }}>Edison Blog</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 50, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "#fff", margin: "0 0 20px", maxWidth: 880
          }}>Every article we've published, newest first.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 17.5, lineHeight: 1.55,
            color: "rgba(255,255,255,.82)", margin: 0, maxWidth: 720
          }}>{content.intro}</p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "56px 48px 88px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto",
                      display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 56,
                      alignItems: "start" }}>
          <div>
            <div style={{
              display: "flex", flexDirection: "column", gap: 22
            }}>
              {all.map((a, i) => (
                <a key={i} href={a.href} style={{
                  display: "grid", gridTemplateColumns: "200px 1fr", gap: 22,
                  alignItems: "center",
                  textDecoration: "none",
                  padding: "20px 0",
                  borderBottom: "1px solid var(--border-hairline)",
                  borderBottomStyle: "solid", borderBottomWidth: 1
                }}>
                  <div style={{
                    width: 200, height: 130, borderRadius: 8, overflow: "hidden",
                    backgroundImage: `url(${a.image})`,
                    backgroundSize: "cover", backgroundPosition: "center"
                  }}/>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      color: "var(--edison-teal-dark)", marginBottom: 8
                    }}>{a.category}</div>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
                      lineHeight: 1.25, color: "var(--edison-navy)", margin: "0 0 8px"
                    }}>{a.title}</h3>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                      color: "var(--edison-text-body)", margin: "0 0 8px"
                    }}>{a.dek}</p>
                    <div style={{
                      fontFamily: "var(--font-body)", fontSize: 12.5,
                      color: "var(--edison-gray-mid)"
                    }}>{a.readTime} read · {a.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <aside style={{ position: "sticky", top: 110, display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{
              background: "#fff", border: "1px solid var(--border-hairline)",
              borderRadius: 12, padding: 22
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)", marginBottom: 14
              }}>Topics</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0,
                           display: "flex", flexDirection: "column", gap: 4 }}>
                {content.topics.map((t, i) => (
                  <li key={i}>
                    <a href="/edison-education/" style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "10px 12px", borderRadius: 6,
                      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
                      color: "var(--edison-navy)",
                      textDecoration: "none", borderBottom: 0
                    }}>
                      <span>{t.label}</span>
                      <span style={{
                        background: "var(--edison-teal-pale)",
                        color: "var(--edison-teal-dark)",
                        padding: "3px 10px", borderRadius: 999,
                        fontFamily: "var(--font-body)", fontSize: 12,
                        fontWeight: 700
                      }}>{t.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: "var(--edison-teal-pale)",
              borderRadius: 12, padding: 22
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)", marginBottom: 10
              }}>Browse by topic</div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                color: "var(--edison-text-body)", margin: "0 0 12px"
              }}>Edison Education organizes articles into Florida Compliance, Board Governance, and Financial Management.</p>
              <InteriorButton variant="primary" size="sm" href="/edison-education/">Visit Edison Education →</InteriorButton>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* ---------- Content ---------- */
const BLOG_INDEX_CONTENT = {
  intro: "Long-form guides, statutory explainers, and board-education articles, written for Florida HOA and condo boards by Edison's team. New articles every month.",
  topics: [
    { label: "Florida Compliance", count: 3 },
    { label: "Board Governance", count: 4 },
    { label: "Financial Management", count: 3 },
    { label: "Local Authority", count: 1 }
  ],
  articles: [
    { category: "Financial Management", title: "HOA Audit: What It Is, When It's Required, and How to Prepare", dek: "Florida audit thresholds, prep checklist, and how strong year-round bookkeeping cuts cost and time.", readTime: "9 min", date: "April 2026", image: "/assets/img-accounting.jpg", href: "/blog/hoa-audit/" },
    { category: "For Boards", title: "HOA Bylaws vs CC&Rs: Key Differences Explained", dek: "Which document governs your situation, and how to find out without calling a lawyer.", readTime: "7 min", date: "April 2026", image: "/assets/img-17.jpg", href: "/blog/hoa-bylaws-vs-ccrs/" },
    { category: "Florida Compliance", title: "Florida Milestone Inspection Guide (SB-4D)", dek: "What SB-4D requires, who it applies to, and how Edison coordinates the work end-to-end.", readTime: "10 min", date: "April 2026", image: "/assets/img-22.jpg", href: "/blog/florida-milestone-inspection-guide/" },
    { category: "Florida Compliance", title: "Florida HOA Laws Guide, Ch. 720 + Ch. 718", dek: "A board's plain-language overview of the two FL statutes that govern community associations.", readTime: "12 min", date: "March 2026", image: "/assets/img-13.jpg", href: "/blog/florida-hoa-laws-guide/" },
    { category: "Financial Management", title: "HOA Reserve Study Guide (Florida)", dek: "Reserve study basics, FL-specific funding mandates, and how to read the report your engineer hands you.", readTime: "10 min", date: "March 2026", image: "/assets/img-21.jpg", href: "/blog/hoa-reserve-study-guide-florida/" },
    { category: "For Boards", title: "HOA Board Member Responsibilities", dek: "Fiduciary duty, FL certification, and what board members actually owe their communities, and themselves.", readTime: "11 min", date: "March 2026", image: "/assets/img-11.jpg", href: "/blog/hoa-board-member-responsibilities/" },
    { category: "For Boards", title: "Unenforceable HOA Rules in Florida", dek: "Just because a rule's on the books doesn't mean it sticks. What FL law says boards can and can't enforce.", readTime: "8 min", date: "February 2026", image: "/assets/img-inspector.jpg", href: "/blog/unenforceable-hoa-rules-florida/" },
    { category: "Financial Management", title: "HOA Special Assessment Guide", dek: "When special assessments make sense, how they're approved, and the alternatives boards usually skip past.", readTime: "8 min", date: "February 2026", image: "/assets/img-accounting.jpg", href: "/blog/hoa-special-assessment/" },
    { category: "For Boards", title: "Condo Association vs HOA: Which Are You?", dek: "Different statutes, different governing documents, different rules. A quick decision tree for confused boards.", readTime: "6 min", date: "January 2026", image: "/assets/img-21.jpg", href: "/blog/condo-association-vs-hoa/" },
    { category: "Financial Management", title: "HOA Management Fees: What Boards Actually Pay", dek: "What's standard, what's a premium add-on, and how to read a management proposal without losing the plot.", readTime: "10 min", date: "January 2026", image: "/assets/img-13.jpg", href: "/blog/hoa-management-fees/" },
    { category: "Local Authority", title: "Best HOA Management Companies in Orlando", dek: "Honest field guide, what to look for, what to avoid, and how Edison stacks up. Written for boards comparing options.", readTime: "11 min", date: "December 2025", image: "/assets/img-community-aerial.jpg", href: "/blog/best-hoa-management-companies-orlando/" }
  ]
};


export { BlogIndexPage, BLOG_INDEX_CONTENT };
