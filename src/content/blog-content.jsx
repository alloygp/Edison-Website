/* ============================================================
   Blog Spoke Content, all 11 Phase 1 spokes
   Each uses the BlogSpokeA template (locked Variant A).
   Tight long-form: 4-6 sections, summary, callouts, FAQ-shaped
   list items where statute is involved.
   ============================================================ */

const BLOG_CONTENT = {

  "hoa-audit": {
    category: "Financial Management",
    title: "HOA Audit: What It Is, When It's Required, and How to Prepare",
    dek: "An HOA audit confirms your community's finances are accurate and FL-compliant. Here's what's required by revenue, what documents to prepare, and how strong year-round bookkeeping makes the process faster and less expensive.",
    author: "Edison Editorial",
    date: "April 2026",
    readTime: "9 min",
    heroImage: "/assets/img-accounting.jpg",
    summary: "If your Florida HOA collects $300,000 or more in annual revenue, you're likely required to commission an audited financial statement each year. Boards that prepare year-round, clean ledgers, documented vendor invoices, reconciled reserves, finish audits faster, cheaper, and without surprises.",
    sections: [
      { id: "what-is-an-audit", heading: "What an HOA audit actually is",
        body: [
          "An HOA audit is an independent examination of the association's financial records by a licensed CPA. The auditor verifies that the financial statements fairly represent the association's actual financial position, assessments collected, expenses paid, reserves funded, obligations outstanding.",
          "Florida statute distinguishes between three levels of financial reporting: compilation (least scrutiny), review (some scrutiny), and audit (independent examination with formal opinion). Which level your association needs depends on annual revenue."
        ]
      },
      { id: "when-required", heading: "When Florida HOAs are required to audit",
        body: ["Under FL Statute Ch. 720 (and Ch. 718 for condos), the reporting level tied to annual revenue is mandatory unless waived by a vote with specific procedural rules. A waiver covers one year only; next year's obligation returns."],
        list: [
          "Annual revenue under $150,000, report of cash receipts and expenditures",
          "Annual revenue $150,000 to $300,000, compiled financial statements",
          "Annual revenue $300,000 to $500,000, reviewed financial statements",
          "Annual revenue $500,000 or more, audited financial statements"
        ],
        callout: { label: "Important", text: "These thresholds apply to HOAs (Ch. 720). Condominium associations under Ch. 718 follow similar but distinct thresholds. Confirm with your governing documents and CPA." }
      },
      { id: "how-to-prepare", heading: "How to prepare for an HOA audit",
        body: ["The audit itself takes weeks; preparation takes a year. Boards that finish audits cleanly maintain four things year-round: clean general ledgers, complete invoice documentation, reconciled reserve accounts, and well-organized minutes that show how the board authorized major spending."],
        list: [
          "Pull monthly bank statements, reserve account statements, and reconciliations",
          "Gather all paid vendor invoices with W-9s on file for 1099-eligible vendors",
          "Compile board meeting minutes that document authorization for capital expenditures",
          "Provide the most recent reserve study and updated funding plan",
          "Have prior-year audit and tax returns ready for the new auditor's review"
        ]
      },
      { id: "what-it-costs", heading: "What an HOA audit typically costs",
        body: [
          "Audit fees vary by association size, complexity, and the cleanliness of the books. A small association with audit-ready accrual books pays $3,500–$6,500. A larger or messier community can hit $12,000+. Most of that increase reflects the auditor's time untangling what should have been documented as the year unfolded.",
          "The single biggest cost driver is records prep time. If books are on a cash basis with informal documentation, the CPA reconstructs a year of bookkeeping before the audit begins. Edison keeps accrual-basis books with invoice documentation required, which typically drops audit fees by 20–40%."
        ]
      },
      { id: "how-edison-helps", heading: "How Edison's accounting model makes audits easier",
        body: [
          "Edison treats audit readiness as a year-round responsibility, not an April scramble. A dedicated accounting specialist, not the manager wearing two hats, maintains accrual books, requires invoice documentation, reconciles reserve banking against the most recent study, and packages a year-end binder the auditor can work from on day one.",
          "The result for boards: shorter audit timelines, lower CPA fees, no panicked emails. For homeowners: published audited statements that reflect what the association actually did with their money."
        ],
        callout: { label: "Talk to Edison", text: "If your association is preparing for an audit, switching companies, or just wants a cleaner financial picture, our accounting team can review your current setup and outline the gaps." }
      }
    ],
    related: [
      { category: "Financial Management", title: "HOA Reserve Study Guide (Florida)", image: "/assets/img-21.jpg", href: "/blog/hoa-reserve-study-guide-florida/" },
      { category: "Financial Management", title: "HOA Management Fees, What Boards Actually Pay", image: "/assets/img-13.jpg", href: "/blog/hoa-management-fees/" },
      { category: "Florida Compliance", title: "Florida HOA Laws Guide, Ch. 720 and Ch. 718", image: "/assets/img-22.jpg", href: "/blog/florida-hoa-laws-guide/" }
    ]
  },

  "florida-hoa-laws-guide": {
    category: "Florida Compliance",
    title: "Florida HOA Laws Guide: Ch. 720 and Ch. 718 Explained",
    dek: "A plain-language overview of the two Florida statutes that govern community associations, what they cover, where they differ, and what every board member should know.",
    author: "Edison Editorial", date: "March 2026", readTime: "12 min",
    heroImage: "/assets/img-13.jpg",
    summary: "Florida governs homeowner associations under Chapter 720 and condominium associations under Chapter 718. They look similar from a distance but differ in reserve study mandates, milestone inspection requirements, governing-document conventions, and homeowner rights. Boards that confuse them make expensive mistakes.",
    sections: [
      { id: "chapter-720", heading: "Chapter 720, The HOA statute",
        body: [
          "Florida Chapter 720 governs homeowner associations, typically single-family neighborhoods, townhome communities, and master associations. It covers governing-document hierarchy (CC&Rs above bylaws above rules), board powers and duties, meeting and notice requirements, financial reporting thresholds, and homeowner rights including the right to inspect records.",
          "Recent legislative sessions added significant requirements around board member certification (required within 90 days of election or by completing an approved course), reserve disclosure, and homeowner communication. The statute changes nearly every year."
        ]
      },
      { id: "chapter-718", heading: "Chapter 718, The condo statute",
        body: [
          "Chapter 718 governs condominium associations. It runs parallel to Ch. 720 in many respects but diverges sharply on structural requirements after Senate Bill 4D. Buildings 3+ stories face mandatory milestone inspections and Structural Integrity Reserve Studies (SIRS) under timelines tied to building age.",
          "Ch. 718 also has different conventions on common elements vs limited common elements, master insurance, and reserve funding, boards generally cannot waive SIRS-component reserves the way they sometimes can for traditional reserves."
        ],
        callout: { label: "SB-4D", text: "Senate Bill 4D, passed in 2022 in response to the Champlain Towers collapse, reshaped condo statute. If your building is 3+ stories, milestone inspection and SIRS obligations apply." }
      },
      { id: "key-differences", heading: "Where HOAs and condos diverge",
        list: [
          "Reserve studies, Ch. 718 mandates SIRS for 3+ story buildings; Ch. 720 does not",
          "Milestone inspections, Ch. 718 requires them; Ch. 720 does not",
          "Governing documents, HOAs are declared under CC&Rs; condos under a Declaration of Condominium",
          "Common elements, Different conventions on what's association vs unit responsibility",
          "Voting weight, Frequently equal in HOAs; often by unit type or percentage in condos",
          "Insurance, Ch. 718 requires specific master policy coverages; Ch. 720 is more flexible"
        ]
      },
      { id: "board-cert", heading: "Board member certification",
        body: ["Both statutes now require new board members to complete certification within 90 days of election, either by signing an affidavit confirming they've read the governing documents and statutes, or by completing a state-approved course. The course route is generally safer. Failure to certify creates personal liability exposure and can be raised by homeowners challenging board actions."]
      },
      { id: "staying-current", heading: "How boards stay current",
        body: ["Florida legislative sessions reshape community association statute every year. Boards that rely on memory of how things were two years ago tend to fall behind. Edison's management team tracks legislative changes the day they pass, surfaces what's relevant per community type, and updates board operations accordingly. Boards aren't expected to be lawyers, but they are expected to govern under current law."]
      }
    ],
    related: [
      { category: "Florida Compliance", title: "Florida Milestone Inspection Guide", image: "/assets/img-22.jpg", href: "/blog/florida-milestone-inspection-guide/" },
      { category: "For Boards", title: "HOA Board Member Responsibilities", image: "/assets/img-11.jpg", href: "/blog/hoa-board-member-responsibilities/" },
      { category: "For Boards", title: "Condo Association vs HOA: Which Are You?", image: "/assets/img-21.jpg", href: "/blog/condo-association-vs-hoa/" }
    ]
  },

  "florida-milestone-inspection-guide": {
    category: "Florida Compliance",
    title: "Florida Milestone Inspection Guide (SB-4D)",
    dek: "What Senate Bill 4D requires, when it triggers, and how Florida condo boards coordinate the work, by Phase 1 and Phase 2.",
    author: "Edison Editorial", date: "April 2026", readTime: "10 min",
    heroImage: "/assets/img-22.jpg",
    summary: "Florida Senate Bill 4D requires condominium and cooperative buildings 3+ habitable stories to commission phased milestone inspections by a licensed engineer at the 30-year mark (25 in coastal counties), and every 10 years after. Most coastal Florida boards have either completed Phase 1 or are behind on it.",
    sections: [
      { id: "what-is-sb4d", heading: "What SB-4D actually requires",
        body: ["Senate Bill 4D was passed in 2022 in response to the 2021 Champlain Towers South collapse. It created a recurring structural inspection requirement for condominium and cooperative buildings 3+ habitable stories. The inspection has two phases, Phase 1 is a visual assessment by a licensed engineer; Phase 2 is more invasive and triggered only when Phase 1 identifies substantial structural deterioration."]
      },
      { id: "who-is-affected", heading: "Who's affected",
        body: ["The requirement applies to associations of condominium and cooperative buildings three habitable stories or more, counting stories above grade. Buildings under three stories are not subject. The trigger age is 30 years; for buildings located within three miles of the coastline, the trigger is 25 years. Recurring inspections every 10 years after the initial inspection."]
      },
      { id: "phase-1-vs-phase-2", heading: "Phase 1 versus Phase 2",
        body: ["Phase 1 is a visual structural assessment by a licensed engineer or architect. The engineer reviews load-bearing elements, building envelope, and primary structural components. If no substantial deterioration is identified, the requirement is satisfied until the next 10-year cycle."],
        list: [
          "Phase 1, Visual structural assessment, licensed engineer/architect",
          "Phase 2, Triggered only by Phase 1 findings; more invasive testing and analysis",
          "Filing, Required with local building department on the statutory schedule",
          "Cost, Phase 1 typically $6,000–$18,000; Phase 2 can be substantially more"
        ]
      },
      { id: "edisons-role", heading: "How Edison coordinates milestone work",
        body: ["Edison doesn't perform the engineering, that's the licensed engineer's job. Edison sources 3 competing engineer bids, coordinates document preparation and site access, reviews the draft report against actual building history, and translates findings into a board-friendly summary plus a funding plan if structural work is required. Filing with the local building department is handled on the statutory timeline."],
        callout: { label: "Behind deadline?", text: "Missing a milestone inspection deadline doesn't eliminate the requirement, it creates personal liability for board members and stalls unit sales as buyer due diligence catches the gap. Edison's first step is intake; we'll tell you exactly where you stand." }
      },
      { id: "milestone-vs-sirs", heading: "Milestone inspection vs SIRS",
        body: ["The milestone inspection is a structural condition assessment. The Structural Integrity Reserve Study (SIRS), also created by SB-4D, is a reserve study scoped to the structural components the milestone inspection identifies. They're complementary, often sequenced, milestone first, SIRS second. Most affected buildings need both."]
      }
    ],
    related: [
      { category: "Florida Compliance", title: "Florida HOA Laws Guide", image: "/assets/img-13.jpg", href: "/blog/florida-hoa-laws-guide/" },
      { category: "Financial Management", title: "HOA Reserve Study Guide (Florida)", image: "/assets/img-21.jpg", href: "/blog/hoa-reserve-study-guide-florida/" },
      { category: "For Boards", title: "Condo Association vs HOA", image: "/assets/img-22.jpg", href: "/blog/condo-association-vs-hoa/" }
    ]
  },

  "hoa-reserve-study-guide-florida": {
    category: "Financial Management",
    title: "HOA Reserve Study Guide (Florida)",
    dek: "What a reserve study covers, how often Florida communities need one, and how to read the report your engineer hands you.",
    author: "Edison Editorial", date: "March 2026", readTime: "10 min",
    heroImage: "/assets/img-21.jpg",
    summary: "A reserve study is an engineer's inventory of community capital components, roofs, paving, pools, infrastructure, with remaining useful life and replacement cost estimates. Florida HOAs typically refresh every 3–5 years. Condos 3+ stories also need the SIRS under SB-4D.",
    sections: [
      { id: "what-is-it", heading: "What a reserve study is",
        body: ["A reserve study is a professional analysis of a community's capital components, what they cost to replace, how much useful life remains, and how much the association needs to set aside annually to fund replacement without special assessments. It's the foundation of capital planning."]
      },
      { id: "how-often", heading: "How often Florida HOAs need one",
        body: ["Standard practice is a full reserve study every 3–5 years with annual updates between full studies. Condos 3+ stories under FL Ch. 718 also need a SIRS, a separate, statute-driven study scoped to 8 structural and life-safety components, on its own cadence."]
      },
      { id: "what-it-covers", heading: "What components a study covers",
        list: [
          "Roofing and waterproofing assemblies",
          "Paving, roads, parking lots, walkways",
          "Pool, spa, and pool deck infrastructure",
          "Clubhouse, fitness, and amenity buildings",
          "Mechanical systems, HVAC, elevators, generators",
          "Site work, irrigation, lighting, retaining walls",
          "Signage, entry features, and gates"
        ]
      },
      { id: "reading-the-report", heading: "How to read the report",
        body: ["A reserve study report typically includes a component inventory, an analysis of useful life remaining, a replacement cost estimate per component, and a funding plan, usually scenarios ranging from baseline (statutory minimum) to fully funded. Boards approve the funding scenario; Edison's accounting team integrates it into the annual budget."],
        callout: { label: "Funding levels", text: "FL Ch. 720 sets reserve disclosure obligations but allows boards (with the right vote) to waive reserve funding for some components. Ch. 718 after SB-4D is much stricter for condo SIRS components. Read both, they don't say the same thing." }
      },
      { id: "how-edison-helps", heading: "Edison's reserve study coordination",
        body: ["Edison doesn't perform reserve studies; we coordinate them. Three competing engineer bids, document and history prep, site access, draft review against actual capital history, and integration of recommendations into the next annual budget. The reserve study by itself doesn't fund anything, turning it into an adopted funding plan is the work."]
      }
    ],
    related: [
      { category: "Financial Management", title: "HOA Audit Guide", image: "/assets/img-accounting.jpg", href: "/blog/hoa-audit/" },
      { category: "Florida Compliance", title: "Florida Milestone Inspection Guide", image: "/assets/img-22.jpg", href: "/blog/florida-milestone-inspection-guide/" },
      { category: "Financial Management", title: "HOA Special Assessment Guide", image: "/assets/img-13.jpg", href: "/blog/hoa-special-assessment/" }
    ]
  },

  "hoa-board-member-responsibilities": {
    category: "For Boards",
    title: "HOA Board Member Responsibilities",
    dek: "Fiduciary duty, Florida board certification, and what board members actually owe their communities, and themselves.",
    author: "Edison Editorial", date: "March 2026", readTime: "11 min",
    heroImage: "/assets/img-11.jpg",
    summary: "Florida HOA and condo board members owe their communities a fiduciary duty, duty of care, duty of loyalty, duty to act in good faith. Failing those duties creates personal liability that the association's D&O insurance may not fully cover. Knowing the duties is step one; documenting them is step two.",
    sections: [
      { id: "fiduciary-duty", heading: "What fiduciary duty actually means",
        body: ["Board members owe three core duties to their associations: care, loyalty, and good faith. Duty of care means making informed decisions with reasonable diligence. Duty of loyalty means putting the association's interests above personal interests. Good faith means acting honestly and within the scope of the board's authority."]
      },
      { id: "fl-certification", heading: "Florida board member certification",
        body: ["Both Ch. 720 and Ch. 718 now require new board members to complete certification within 90 days of election, either by signed affidavit confirming they've read the governing documents and statutes, or by completing a state-approved course. The course route is generally safer because it documents actual learning, not just an attestation."]
      },
      { id: "what-boards-control", heading: "What boards control, and don't",
        list: [
          "Setting policy and approving the budget, board authority",
          "Day-to-day operational decisions, typically delegated to management",
          "Enforcement decisions, board votes; management runs the procedure",
          "Capital projects above board-set thresholds, require board approval",
          "Vendor contracts, typically board-approved, with management coordination"
        ]
      },
      { id: "documenting-decisions", heading: "Documenting board decisions",
        body: ["Board decisions are only as defensible as their documentation. Minutes should reflect what was discussed, what was decided, and on what basis. Edison's manager prepares draft minutes; the board's secretary reviews and the board approves at the following meeting. The minutes are the legal record."]
      },
      { id: "personal-liability", heading: "Where personal liability comes in",
        body: ["Most board decisions are protected by the business judgment rule, courts defer to good-faith board decisions made with reasonable diligence. Decisions made without that diligence (no minutes, no records, no documented rationale), or decisions that breach fiduciary duty (self-dealing, conflicts of interest), can pierce that protection. D&O insurance helps; it doesn't cover everything."],
        callout: { label: "Why this matters", text: "Volunteer board members don't sign up to take personal financial risk. Edison's documented workflow, Action Item List, board-approved decisions in writing, minutes, is the procedural protection that keeps boards out of court." }
      }
    ],
    related: [
      { category: "Florida Compliance", title: "Florida HOA Laws Guide", image: "/assets/img-13.jpg", href: "/blog/florida-hoa-laws-guide/" },
      { category: "For Boards", title: "HOA Bylaws vs CC&Rs Explained", image: "/assets/img-17.jpg", href: "/blog/hoa-bylaws-vs-ccrs/" },
      { category: "For Boards", title: "Unenforceable HOA Rules in Florida", image: "/assets/img-inspector.jpg", href: "/blog/unenforceable-hoa-rules-florida/" }
    ]
  },

  "hoa-bylaws-vs-ccrs": {
    category: "For Boards",
    title: "HOA Bylaws vs CC&Rs: Key Differences Explained",
    dek: "Different documents, different authority, different processes for amendment. Knowing which one governs your situation is how boards make confident decisions.",
    author: "Edison Editorial", date: "April 2026", readTime: "7 min",
    heroImage: "/assets/img-17.jpg",
    summary: "CC&Rs (Covenants, Conditions, and Restrictions) are the foundational governing document, they run with the land, bind every owner, and are hard to amend. Bylaws govern how the association operates as a corporate entity. Rules sit below both and are easier to change. The hierarchy matters when documents conflict.",
    sections: [
      { id: "the-hierarchy", heading: "The governing document hierarchy",
        body: ["Florida community associations are governed by a stack of documents, and when they conflict, the higher document wins. Top to bottom: state and federal law, then the Declaration / CC&Rs, then the Articles of Incorporation, then the Bylaws, then Rules and Regulations adopted by the board."]
      },
      { id: "ccrs", heading: "CC&Rs, Covenants, Conditions, and Restrictions",
        body: ["CC&Rs are recorded in the public records and run with the land. Every owner is bound by them when they buy. They typically cover what owners can and can't do with their property (architectural changes, paint colors, fences, rentals), how assessments work, and the board's enforcement authority. Amending CC&Rs usually requires a high vote threshold, often 2/3 or 75% of all owners."]
      },
      { id: "bylaws", heading: "Bylaws, How the association operates",
        body: ["Bylaws govern the association as a corporate entity, how directors are elected, how meetings are called, how committees are formed, how quorum is calculated, how votes are conducted. They cover internal operations rather than what individual owners can do. Amendment thresholds are typically lower than CC&Rs but higher than rules."]
      },
      { id: "rules", heading: "Rules and Regulations",
        body: ["Rules are adopted by the board (sometimes ratified by the membership) and cover the day-to-day specifics, pool hours, parking rules, pet limits, guest policies, ARC submission procedures. They're the most flexible layer and the one boards change most often. Rules cannot contradict CC&Rs or bylaws."]
      },
      { id: "which-applies", heading: "Which document applies to your situation?",
        list: [
          "Architectural changes (paint, fences, additions), usually CC&Rs + ARC procedure in rules",
          "Board elections and meetings, Bylaws",
          "Pool hours and amenity use, Rules",
          "Assessment authority and lien rights, CC&Rs",
          "Quorum for an annual meeting, Bylaws",
          "Pet weight limits, Could be CC&Rs or Rules; check both"
        ],
        callout: { label: "Read both", text: "When in doubt, check the higher document. If CC&Rs say nothing about an issue, the bylaws govern. If the bylaws say nothing, the board has rule-making authority within the scope the documents allow." }
      }
    ],
    related: [
      { category: "For Boards", title: "Unenforceable HOA Rules in Florida", image: "/assets/img-inspector.jpg", href: "/blog/unenforceable-hoa-rules-florida/" },
      { category: "Florida Compliance", title: "Florida HOA Laws Guide", image: "/assets/img-13.jpg", href: "/blog/florida-hoa-laws-guide/" },
      { category: "For Boards", title: "HOA Board Member Responsibilities", image: "/assets/img-11.jpg", href: "/blog/hoa-board-member-responsibilities/" }
    ]
  },

  "unenforceable-hoa-rules-florida": {
    category: "For Boards",
    title: "Unenforceable HOA Rules in Florida",
    dek: "Just because a rule is on the books doesn't mean a court will uphold it. What Florida law says about which HOA rules stick, and which don't.",
    author: "Edison Editorial", date: "February 2026", readTime: "8 min",
    heroImage: "/assets/img-inspector.jpg",
    summary: "Florida law protects homeowners from HOA rules that conflict with statute, exceed the board's documented authority, or are enforced selectively. Boards that try to enforce unenforceable rules create legal exposure for themselves, and lose the homeowner's trust along the way.",
    sections: [
      { id: "why-rules-fail", heading: "Why some HOA rules are unenforceable",
        body: ["Florida courts and statute have established categories of rules that boards can't enforce regardless of what the governing documents say. Some are pre-empted by state or federal law; some exceed the scope of authority granted by the CC&Rs; some are valid in principle but enforced so inconsistently that selective-enforcement defenses succeed."]
      },
      { id: "common-categories", heading: "Common categories of unenforceable rules",
        list: [
          "Display of religious or political symbols, protected by FL statute in many cases",
          "Display of the American flag, federally protected (Freedom to Display the American Flag Act)",
          "Service animals, protected by ADA, not subject to standard pet rules",
          "Solar panels, strong FL statutory protection against HOA restrictions",
          "Rules adopted without the procedural requirements specified in the bylaws",
          "Rules retroactively applied to existing conditions without grandfathering"
        ]
      },
      { id: "selective-enforcement", heading: "The selective-enforcement defense",
        body: ["Even a valid rule becomes hard to enforce when the board has enforced it against some owners and not others. Florida courts apply equitable estoppel and waiver doctrines, if the board let it slide for years for one homeowner, it can't suddenly enforce against another. The fix is documented, consistent enforcement on a defined cadence."],
        callout: { label: "How Edison handles this", text: "Address-not-name inspections and documented enforcement workflow are how Edison defends boards against selective-enforcement claims. Inspectors record addresses; the workflow treats every violation the same way." }
      },
      { id: "fair-housing", heading: "Fair housing and accommodation rules",
        body: ["Federal fair housing law protects against discrimination on the basis of race, color, religion, national origin, sex, familial status, and disability. HOA rules that produce disparate impact on protected classes, or that refuse reasonable accommodations for disabled owners, are unenforceable and create federal liability exposure."]
      },
      { id: "before-enforcing", heading: "Before enforcing, three questions",
        body: ["Before issuing a violation notice, boards should answer three questions: (1) Is the rule properly adopted under our governing documents? (2) Is it consistent with FL statute and federal law? (3) Have we enforced it consistently against everyone in similar circumstances? If any answer is uncertain, talk to counsel before enforcing."]
      }
    ],
    related: [
      { category: "For Boards", title: "HOA Bylaws vs CC&Rs Explained", image: "/assets/img-17.jpg", href: "/blog/hoa-bylaws-vs-ccrs/" },
      { category: "For Boards", title: "HOA Board Member Responsibilities", image: "/assets/img-11.jpg", href: "/blog/hoa-board-member-responsibilities/" },
      { category: "Florida Compliance", title: "Florida HOA Laws Guide", image: "/assets/img-13.jpg", href: "/blog/florida-hoa-laws-guide/" }
    ]
  },

  "condo-association-vs-hoa": {
    category: "For Boards",
    title: "Condo Association vs HOA: Which Are You?",
    dek: "Different statutes, different governing documents, different rules. A quick decision tree for boards who aren't sure which framework applies.",
    author: "Edison Editorial", date: "January 2026", readTime: "6 min",
    heroImage: "/assets/img-21.jpg",
    summary: "If your community is declared under a Declaration of Condominium, you're a condo association under Florida Chapter 718. Otherwise, single-family neighborhoods, townhomes, master associations, you're typically an HOA under Chapter 720. The distinction matters for reserves, milestone inspections, and homeowner rights.",
    sections: [
      { id: "the-decision-tree", heading: "The decision tree",
        body: ["The simplest way to tell: read the recorded governing document. If it's a Declaration of Condominium, you're a condo (Ch. 718). If it's a Declaration of Covenants, Conditions, and Restrictions (CC&Rs), you're an HOA (Ch. 720). Townhomes are almost always HOAs even though the buildings are attached. Cooperative associations follow a third statute (Ch. 719)."]
      },
      { id: "key-statute-differences", heading: "Key statutory differences",
        list: [
          "Reserve studies, Ch. 718 mandates SIRS for 3+ story buildings; Ch. 720 doesn't",
          "Milestone inspections, Ch. 718 requires them after age 30 (25 coastal); Ch. 720 doesn't",
          "Common element structure, Different in condos (shared building); HOAs share land + amenities",
          "Master insurance, Ch. 718 has prescriptive coverage requirements; Ch. 720 is flexible",
          "Voting weight, Often weighted in condos; usually equal in HOAs"
        ]
      },
      { id: "operational-differences", heading: "Operational differences boards feel",
        body: ["Condo boards spend more time on building maintenance, insurance, and statutory compliance, the building itself is association property. HOA boards spend more time on amenities, common-area landscaping, and homeowner-property enforcement. Edison runs both as distinct practices because the operating profile genuinely differs."]
      },
      { id: "which-edison-page", heading: "Which Edison page applies to you?",
        body: ["Single-family HOAs and townhome HOAs, see /services/hoa-management/. Condominium associations, see /services/condo-management/. Brevard County coastal communities are predominantly condo and have their own geo page noting the SB-4D compliance focus."]
      }
    ],
    related: [
      { category: "Florida Compliance", title: "Florida HOA Laws Guide", image: "/assets/img-13.jpg", href: "/blog/florida-hoa-laws-guide/" },
      { category: "Florida Compliance", title: "Florida Milestone Inspection Guide", image: "/assets/img-22.jpg", href: "/blog/florida-milestone-inspection-guide/" },
      { category: "For Boards", title: "HOA Bylaws vs CC&Rs Explained", image: "/assets/img-17.jpg", href: "/blog/hoa-bylaws-vs-ccrs/" }
    ]
  },

  "hoa-management-fees": {
    category: "Financial Management",
    title: "HOA Management Fees: What Boards Actually Pay",
    dek: "What's standard, what's premium, and how to read a management proposal without losing the plot.",
    author: "Edison Editorial", date: "January 2026", readTime: "10 min",
    heroImage: "/assets/img-13.jpg",
    summary: "HOA management fees in Florida typically run a monthly per-door rate based on community size, service scope, and complexity. The headline number is rarely the whole story, what's included, what's an upcharge, and what happens after year one matters more than the per-door rate.",
    sections: [
      { id: "fee-structure", heading: "How management fees are usually structured",
        body: ["Most Florida HOA management proposals quote a monthly base fee, calculated per door or per unit. A 200-unit HOA paying $18 per door per month would have a base management fee of $3,600/month, or roughly $43,000 annually. The base fee covers the manager's time and standard administrative scope."]
      },
      { id: "whats-typically-included", heading: "What's typically included in the base fee",
        list: [
          "Dedicated association manager, visits, board meetings, day-to-day decisions",
          "Monthly financial statements, balance sheet, P&L, budget-to-actual",
          "Vendor coordination, bid solicitation, contract management, COI tracking",
          "Resident communication, portal, email, phone coverage",
          "Annual meeting support and election coordination",
          "Routine compliance, annual filings, FL statute updates, basic governance"
        ]
      },
      { id: "common-upcharges", heading: "Common upcharges to watch for",
        list: [
          "Per-violation enforcement fees, Edison doesn't charge these; many companies do",
          "ARC review fees, sometimes billed per submission",
          "After-hours emergency coverage, sometimes a separate retainer",
          "Capital project coordination, sometimes billed as a % of project cost",
          "Special assessments processing, sometimes a flat per-event fee",
          "Technology fees, per-resident portal access, ACH processing surcharges"
        ],
        callout: { label: "Edison's approach", text: "Edison doesn't charge per-violation enforcement fees, per-submission ARC fees, or per-resident technology fees. The proposal is fixed-scope; the agreement says exactly what's included. No surprise upcharges." }
      },
      { id: "year-two-pricing", heading: "What happens after year one",
        body: ["Most management agreements include an annual renewal with a CPI-pegged or fixed percentage increase. Read the renewal clause carefully, some companies front-load the first-year discount knowing the increase resets the economics in year two. Edison's agreements are 12-month terms with transparent renewal mechanics; if a board chooses not to renew, they walk free with all records intact."]
      },
      { id: "how-to-evaluate", heading: "How to evaluate a management proposal",
        body: ["The base per-door fee is the starting point, not the conclusion. Compare what's included, what's an upcharge, what the renewal terms look like, and what the company's portfolio sizes per manager actually are. A cheap proposal from a 20-communities-per-manager firm is often more expensive in 18 months than a slightly higher proposal from a boutique firm, because the cost of poor service shows up as legal bills, special assessments, and homeowner attrition."]
      }
    ],
    related: [
      { category: "Financial Management", title: "HOA Audit Guide", image: "/assets/img-accounting.jpg", href: "/blog/hoa-audit/" },
      { category: "Financial Management", title: "HOA Special Assessment Guide", image: "/assets/img-13.jpg", href: "/blog/hoa-special-assessment/" },
      { category: "Local Authority", title: "Best HOA Management Companies in Orlando", image: "/assets/img-community-aerial.jpg", href: "/blog/best-hoa-management-companies-orlando/" }
    ]
  },

  "hoa-special-assessment": {
    category: "Financial Management",
    title: "HOA Special Assessment Guide",
    dek: "When special assessments make sense, how they're approved, what they look like in Florida, and the alternatives most boards skip past.",
    author: "Edison Editorial", date: "February 2026", readTime: "8 min",
    heroImage: "/assets/img-accounting.jpg",
    summary: "A special assessment is a one-time charge to homeowners outside the regular assessment cycle, usually to fund a capital project that reserves can't cover. They work, but they damage homeowner trust, drive owner attrition, and are usually preventable with disciplined reserve banking.",
    sections: [
      { id: "what-it-is", heading: "What a special assessment is",
        body: ["A special assessment is a non-recurring charge levied on every owner to fund a specific need, typically a capital project (new roof, repaving, structural repair) that the reserve fund can't cover, or an emergency expense (hurricane damage, insurance shortfall) that wasn't in the budget."]
      },
      { id: "approval-process", heading: "How special assessments get approved",
        body: ["The approval process is governed by the association's bylaws and FL statute. HOAs typically require a board vote with proper notice and an opportunity for homeowner input. Condos under Ch. 718 have specific notice and meeting requirements. A few governing documents require a homeowner vote above certain thresholds, check yours carefully."]
      },
      { id: "alternatives", heading: "Alternatives boards often skip past",
        list: [
          "Phasing the project, sequence work over 2–4 years to match reserve cash flow",
          "Bank financing, community-level loans against reserves can spread the impact",
          "Reserve banking optimization, sometimes the funds exist but aren't yielding",
          "Insurance claims, for damage events, the master policy may cover more than assumed",
          "Vendor renegotiation, competitive re-bidding sometimes drops project cost meaningfully"
        ],
        callout: { label: "Why this matters", text: "Special assessments are the loudest signal of reserve underfunding. Boards that go to special assessment once tend to do it again, until the underlying reserve discipline gets fixed. Edison's accounting team flags reserve gaps years before they become special-assessment territory." }
      },
      { id: "homeowner-impact", heading: "What homeowners feel",
        body: ["A $5,000 special assessment is a lot to ask of a homeowner who didn't see it coming. Owners on fixed incomes or recent buyers tend to feel it hardest. Communities that special-assess frequently see slower unit sales, lower resale values, and more contentious annual meetings. The financial damage to community standing often outweighs the cost being assessed."]
      },
      { id: "communicating-it", heading: "Communicating a special assessment well",
        body: ["When a special assessment is genuinely necessary, communication is everything. Edison's playbook: name the specific project, show the reserve study calculation, explain the alternatives considered, and provide payment-plan options. Homeowners can accept hard news; they can't accept being surprised."]
      }
    ],
    related: [
      { category: "Financial Management", title: "HOA Reserve Study Guide (Florida)", image: "/assets/img-21.jpg", href: "/blog/hoa-reserve-study-guide-florida/" },
      { category: "Financial Management", title: "HOA Audit Guide", image: "/assets/img-accounting.jpg", href: "/blog/hoa-audit/" },
      { category: "Financial Management", title: "HOA Management Fees", image: "/assets/img-13.jpg", href: "/blog/hoa-management-fees/" }
    ]
  },

  "best-hoa-management-companies-orlando": {
    category: "Local Authority",
    title: "Best HOA Management Companies in Orlando: An Honest Field Guide",
    dek: "Written for boards comparing options. What to look for, what to watch out for, and how Edison stacks up, without disparaging competitors.",
    author: "Edison Editorial", date: "December 2025", readTime: "11 min",
    heroImage: "/assets/img-community-aerial.jpg",
    summary: "Orlando has more HOA management options than any other city in Central Florida, from national operators with hundreds of communities to single-manager boutiques. The right choice for your board depends on portfolio size per manager, depth of back-office, transition discipline, and how loud the company's voicemail gets.",
    sections: [
      { id: "what-to-look-for", heading: "What to look for in any HOA management company",
        list: [
          "Portfolio size per manager, 8–10 is boutique; 15+ is industry-standard but stretched",
          "Dedicated departments, is accounting separate from management, or is the manager the bookkeeper?",
          "Manager turnover, ask explicitly; most firms see 30–40% annually",
          "Leadership credentials, PCAM, CMCA, CAI involvement signal real industry standing",
          "Technology stack, CINC, AppFolio, and similar purpose-built systems are table stakes",
          "Transition discipline, is there a defined onboarding program, or is it ad hoc?",
          "Response standard, what's the same-day vs 24-hour response guarantee?"
        ]
      },
      { id: "the-orlando-market", heading: "The Orlando HOA management market",
        body: ["Orlando's HOA market includes large national firms (multi-state operators), regional firms (Florida-only but multi-city), and boutique firms like Edison. National firms scale through process and technology; regional firms scale through relationships and local knowledge; boutiques scale through portfolio discipline and back-office depth. None is automatically better, fit matters."]
      },
      { id: "questions-to-ask", heading: "Questions to ask in any interview",
        list: [
          "How many communities will our specific manager carry?",
          "What's your manager turnover rate? (Ask for a number, not 'low')",
          "Who handles our accounting, the manager, or a dedicated specialist?",
          "What does your transition look like? Show us the timeline.",
          "What's the renewal mechanism in year two? What does the price escalate to?",
          "How do you handle covenant enforcement? Are inspections address-only or name-based?",
          "Will your principal personally meet with our board?"
        ],
        callout: { label: "Edison's answers, in case you're wondering", text: "8–10 communities per manager. Manager turnover a fraction of industry average. Dedicated accounting specialist with CPA-led oversight. 60–90 day transition with defined COO supervision. 12-month terms with transparent renewal. Address-not-name enforcement. Tracy onboards every association personally." }
      },
      { id: "the-pricing-trap", heading: "The pricing trap most boards fall into",
        body: ["The cheapest proposal almost always becomes the most expensive one in 18 months. Cheap usually means overloaded managers, thin back-office, high turnover, and a renewal mechanism that resets the economics in year two. The real cost of a management company shows up as legal exposure, special assessments, homeowner attrition, and the time the board spends doing the management company's job."]
      },
      { id: "how-edison-shows-up", heading: "How Edison shows up in the market",
        body: ["Edison is deliberately a boutique. Manager portfolios are 8–10 communities. Tracy Durham (PCAM, 2025 CAI Central Florida Chapter President) personally onboards every new association. Back-office departments, accounting, enforcement, collections, are separate from management. Same-day response for board members; 24-hour for homeowners; non-negotiable. We don't try to be the cheapest. We try to be the firm boards stay with."]
      }
    ],
    related: [
      { category: "Financial Management", title: "HOA Management Fees: What Boards Actually Pay", image: "/assets/img-13.jpg", href: "/blog/hoa-management-fees/" },
      { category: "For Boards", title: "HOA Board Member Responsibilities", image: "/assets/img-11.jpg", href: "/blog/hoa-board-member-responsibilities/" },
      { category: "Florida Compliance", title: "Florida HOA Laws Guide", image: "/assets/img-13.jpg", href: "/blog/florida-hoa-laws-guide/" }
    ]
  }
};

export { BLOG_CONTENT };
