export interface KeyTerm {
  term: string;
  definition: string;
}

export interface ConceptBlock {
  title: string;
  body: string;
}

export interface DiagramSpec {
  title: string;
  type: 'flow' | 'lifecycle' | 'matrix' | 'hierarchy';
  nodes: string[];
  edges?: [string, string][];
  description: string;
}

export interface PracticeExample {
  domain: string;
  scenario: string;
  application: string;
  expectedOutcome: string;
}

export interface CourseModule {
  id: string;
  courseId: string;
  number: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  overview: string;
  keyTerms: KeyTerm[];
  concepts: ConceptBlock[];
  diagram?: DiagramSpec;
  strategies: string[];
  practiceExample: PracticeExample;
  quizId: string;
}

export const MODULES: CourseModule[] = [

  // ─── COURSE 1: CTS™ Foundations ────────────────────────────────────────────

  {
    id: 'cts-f-1',
    courseId: 'cts-foundations',
    number: 1,
    title: 'What Is CTS™?',
    subtitle: 'Methodology, Philosophy & Why It Exists',
    estimatedMinutes: 35,
    overview:
      'CTS™ — the Comprehensive Technical Standard — is the governing methodology of the Nexum Suum Operational Intelligence™ ecosystem. This module establishes what CTS™ is, why it was designed, and how it differs from conventional facility management, reactive maintenance, and static compliance approaches.',
    keyTerms: [
      { term: 'CTS™', definition: 'Comprehensive Technical Standard — the governing methodology that structures how operational intelligence is gathered, scored, recorded, and acted upon across all facility systems.' },
      { term: 'Operational Intelligence™ (OI™)', definition: 'The practice of converting raw facility data into structured, governed, defensible intelligence that drives operational decisions with evidence and accountability.' },
      { term: 'CTS™ Practitioner', definition: 'A professional trained and certified in applying the CTS™ methodology to real facility environments, capable of conducting assessments, documenting findings, and producing governance-quality decisions.' },
      { term: 'Reactive Management', definition: 'The conventional model of responding to failures after they occur, as opposed to CTS™\'s proactive intelligence model which anticipates, scores, and governs before failure.' },
    ],
    concepts: [
      {
        title: 'The Problem CTS™ Solves',
        body: 'Facility operations generate enormous volumes of data — equipment readings, work orders, compliance records, energy bills, inspection reports. In most organizations, this data exists in silos: maintenance uses one system, finance uses another, compliance uses a third. No single view connects them. Decisions are made from memory, habit, or reaction to emergencies. CTS™ exists to solve this: it provides a structured methodology for connecting data, scoring performance, and producing decisions that are defensible, documented, and continuously improving.',
      },
      {
        title: 'CTS™ vs. Traditional Facility Management',
        body: 'Traditional facility management is asset-centric and event-driven: something breaks, a work order is created, a repair is made, the record is closed. CTS™ is intelligence-centric and lifecycle-driven: every system is assessed continuously against defined criteria, every decision is recorded with evidence, and every outcome feeds back into the intelligence record. The result is an organization that gets smarter over time rather than repeating the same problems.',
      },
      {
        title: 'The CTS™ Governing Principles',
        body: 'Five principles govern everything in CTS™: (1) Every operational decision must have an evidence chain. (2) Every finding must be scored against defined criteria. (3) Every score must be traceable to source data. (4) Every decision must be recorded with its rationale and projected outcome. (5) Every outcome must be compared to its projection to build organizational learning.',
      },
      {
        title: 'Operational Memory™ — The Intelligence Record',
        body: 'Operational Memory™ is the persistent intelligence record of an organization. Every assessment, finding, recommendation, decision, and outcome is stored in Operational Memory™. It is not a database of events — it is a structured knowledge base that makes the organization\'s intelligence cumulative and searchable. A new practitioner inheriting a facility with mature Operational Memory™ immediately has access to years of structured intelligence, not just maintenance logs.',
      },
    ],
    diagram: {
      title: 'CTS™ Intelligence Flow',
      type: 'flow',
      nodes: ['Facility Data', 'CTS™ Assessment', 'Scoring & Gap Analysis', 'Recommendation', 'Decision Record', 'Operational Memory™', 'Future Assessment'],
      edges: [['Facility Data', 'CTS™ Assessment'], ['CTS™ Assessment', 'Scoring & Gap Analysis'], ['Scoring & Gap Analysis', 'Recommendation'], ['Recommendation', 'Decision Record'], ['Decision Record', 'Operational Memory™'], ['Operational Memory™', 'Future Assessment'], ['Future Assessment', 'CTS™ Assessment']],
      description: 'CTS™ operates as a continuous intelligence loop: raw data enters, is assessed and scored, generates recommendations and decisions, all of which are stored in Operational Memory™ and feed the next assessment cycle.',
    },
    strategies: [
      'Begin every engagement by identifying what data exists and where it lives before making any assessment.',
      'Frame CTS™ to stakeholders as a governance and defensibility tool, not a software product.',
      'Build Operational Memory™ from day one — even a single well-documented assessment creates lasting value.',
      'Use the reactive-vs-proactive contrast to help clients understand the cost of their current approach.',
    ],
    practiceExample: {
      domain: 'Facility Management',
      scenario: 'A hospital facility manager has 12 years of maintenance records in paper binders and a CMMS that is used only for work orders. They experience a chiller failure that costs $2.4M in downtime and emergency repairs.',
      application: 'Apply CTS™ framing: identify what data existed before the failure, map what would have been scored under CTS™ criteria (equipment age, efficiency trend, maintenance frequency, compliance status), and document what a CTS™ practitioner would have found 6 months prior.',
      expectedOutcome: 'A structured pre-failure assessment record that demonstrates how CTS™ would have flagged the risk, scored it, and generated a recommendation that — if acted upon — would have prevented the failure.',
    },
    quizId: 'quiz-cts-f-1',
  },
  {
    id: 'cts-f-2',
    courseId: 'cts-foundations',
    number: 2,
    title: 'The Five CTS™ Assessment Criteria',
    subtitle: 'What Gets Scored and Why',
    estimatedMinutes: 40,
    overview:
      'Every CTS™ assessment evaluates a system against five governing criteria. Understanding these criteria — and how they interact — is the foundation of all CTS™ methodology work. This module defines each criterion, explains its scoring rationale, and shows how criteria combine to produce a composite intelligence score.',
    keyTerms: [
      { term: 'Efficiency Criterion', definition: 'Measures how effectively a system converts inputs to outputs relative to its design specification and current lifecycle position.' },
      { term: 'Compliance Criterion', definition: 'Measures whether a system meets all applicable regulatory, code, and policy requirements at the time of assessment.' },
      { term: 'Reliability Criterion', definition: 'Measures the consistency and predictability of system performance over time, including maintenance history and failure frequency.' },
      { term: 'Lifecycle Position', definition: 'The stage within an asset\'s operational life — from new installation through optimal performance, declining performance, and end-of-life — which affects how all other criteria are weighted.' },
      { term: 'Risk Criterion', definition: 'Measures the consequence and probability of system failure, including safety implications, operational impact, and recovery cost.' },
    ],
    concepts: [
      {
        title: 'Criterion 1 — Efficiency',
        body: 'Efficiency in CTS™ is not just energy efficiency. It encompasses operational efficiency: how much of the system\'s designed capacity is being used productively? A boiler running at 60% of rated efficiency when it was designed for 85% carries an efficiency gap. CTS™ scores this gap against the system\'s age and lifecycle position — a 10-year-old boiler at 60% efficiency is a different finding than a 2-year-old boiler at the same performance.',
      },
      {
        title: 'Criterion 2 — Compliance',
        body: 'Compliance in CTS™ is treated as a binary threshold with a severity gradient. A system is either compliant or non-compliant at any given regulatory standard. CTS™ tracks compliance across multiple regulatory layers simultaneously: federal codes (OSHA, EPA, FDA), state requirements, local authority jurisdictions, and organizational policy. Non-compliance at any layer generates an automatic escalation flag regardless of other criteria scores.',
      },
      {
        title: 'Criterion 3 — Reliability',
        body: 'Reliability is assessed from maintenance history, failure records, and performance trends. CTS™ looks for three signals: frequency of unplanned work orders (reactive index), variance from scheduled maintenance intervals (maintenance discipline score), and performance degradation trend (slope of decline). Together these produce a reliability profile that predicts future behavior with statistical confidence.',
      },
      {
        title: 'Criterion 4 — Lifecycle Position',
        body: 'Lifecycle position is not a score itself — it is the lens through which all other criteria are interpreted. A system in the Decline phase of its lifecycle is expected to show reduced efficiency and reliability; CTS™ adjusts scoring expectations accordingly. The lifecycle criterion also drives the Replace vs. Optimize decision — the most consequential capital decision a CTS™ practitioner guides.',
      },
      {
        title: 'Criterion 5 — Risk',
        body: 'Risk in CTS™ is the product of consequence and probability. Consequence covers safety risk (injury/death potential), operational risk (production or service continuity), financial risk (replacement and downtime cost), and compliance risk (regulatory penalty). Probability is derived from reliability data and lifecycle position. High-consequence systems with low reliability scores receive the highest risk ratings and drive the most urgent recommendations.',
      },
    ],
    diagram: {
      title: 'CTS™ Five Criteria Composite Score Model',
      type: 'matrix',
      nodes: ['Efficiency (0–100)', 'Compliance (0–100)', 'Reliability (0–100)', 'Lifecycle Position (Modifier)', 'Risk (0–100)', 'Composite CTS™ Score'],
      description: 'The five criteria combine with lifecycle position as a modifier to produce a composite CTS™ score from 0–100. Scores above 75 indicate governed performance; 50–75 indicate watchlist status; below 50 trigger formal assessment and recommendation requirements.',
    },
    strategies: [
      'Always assess compliance first — non-compliance overrides all other criteria and must be flagged immediately.',
      'Use lifecycle position to calibrate expectations before scoring efficiency or reliability.',
      'Document the source data for each criterion score — defensibility depends on traceable evidence.',
      'When two criteria conflict (e.g., high efficiency but high risk), document the tension explicitly in the assessment record.',
    ],
    practiceExample: {
      domain: 'Facility Management — Administrative Building Chiller',
      scenario: 'A 12-year-old centrifugal chiller is operating at 78% of rated efficiency, had 3 unplanned work orders in the past 12 months, passed its last annual inspection with one minor citation, and serves a data center that cannot tolerate more than 15 minutes of cooling loss.',
      application: 'Score each of the five criteria: Efficiency (~72 given age), Compliance (~88 with minor citation noted), Reliability (~62 based on unplanned work order frequency), Lifecycle Position (Decline — significant modifier), Risk (~85 given consequence of data center dependency).',
      expectedOutcome: 'Composite score approximately 68 — Watchlist status. The risk criterion combined with lifecycle position generates an escalation recommendation to begin capital planning for replacement within 18–24 months.',
    },
    quizId: 'quiz-cts-f-2',
  },
  {
    id: 'cts-f-3',
    courseId: 'cts-foundations',
    number: 3,
    title: 'Decision History™ — The Governance Record',
    subtitle: 'How CTS™ Makes Decisions Defensible',
    estimatedMinutes: 30,
    overview:
      'Decision History™ is the formal record of every governed decision made within a CTS™ program. It is not a log of actions taken — it is a structured governance record that includes the decision, its rationale, the evidence that supported it, the projected outcome, and the actual outcome once the action is complete. This module teaches how to create, maintain, and use Decision History™ records.',
    keyTerms: [
      { term: 'Decision History™', definition: 'The governed record of every consequential operational decision, including rationale, evidence, projected outcome, and actual outcome.' },
      { term: 'Evidence Chain', definition: 'The documented link between a decision and the assessment data that justified it — required for every Decision History™ entry.' },
      { term: 'Projected Outcome', definition: 'The expected result of a decision, stated at the time of the decision and later compared to the actual outcome to build organizational learning.' },
      { term: 'Decision Variance', definition: 'The difference between the projected outcome and the actual outcome — the primary learning signal in a mature CTS™ program.' },
    ],
    concepts: [
      {
        title: 'Why Decisions Must Be Governed Records',
        body: 'In most organizations, decisions happen in meetings, in emails, or in someone\'s head. When a decision produces a poor outcome, there is no record of why the decision was made, what alternatives were considered, or what data was available at the time. CTS™ requires every consequential operational decision to be a formal, structured record — making it possible to learn from decisions, defend them to auditors or leadership, and transfer knowledge when personnel change.',
      },
      {
        title: 'Anatomy of a Decision History™ Record',
        body: 'Every Decision History™ record contains seven fields: (1) Decision Statement — what was decided, (2) Decision Date, (3) Decision Maker(s), (4) CTS™ Stage — which phase generated this decision, (5) Evidence Chain — the assessment findings that justified the decision, (6) Projected Outcome — what was expected, (7) Actual Outcome — populated once the action is complete and the result is known.',
      },
      {
        title: 'Decision Variance as Learning Signal',
        body: 'When a projected outcome differs from the actual outcome, CTS™ calls this Decision Variance. Positive variance (better than projected) and negative variance (worse than projected) both carry learning value. A mature CTS™ program analyzes decision variance patterns to improve scoring accuracy, refine criteria weights, and make future projections more reliable. This is how CTS™ organizations get smarter over time.',
      },
    ],
    diagram: {
      title: 'Decision History™ Record Lifecycle',
      type: 'lifecycle',
      nodes: ['Assessment Finding', 'Recommendation Generated', 'Decision Made', 'Record Created (with Projection)', 'Action Executed', 'Outcome Measured', 'Record Closed (Variance Calculated)', 'Operational Memory™ Updated'],
      description: 'A Decision History™ record is opened at the moment a consequential decision is made and remains open until the outcome is measured and variance is calculated. Closed records feed Operational Memory™ permanently.',
    },
    strategies: [
      'Create the Decision History™ record at the time of the decision — retrofitting records is unreliable and legally problematic.',
      'State the projected outcome in measurable terms: "Expected 12% energy reduction within 90 days" rather than "should improve efficiency."',
      'Assign a closing date for every record — outcomes must be measured, not assumed.',
      'Use Decision Variance reports in quarterly governance reviews to demonstrate CTS™ program maturity.',
    ],
    practiceExample: {
      domain: 'Facility Management — Replace vs. Repair Decision',
      scenario: 'A cooling tower shows a CTS™ score of 48 (critical threshold). The options are: (A) full replacement at $340,000 or (B) major repair at $85,000 that extends life by an estimated 3 years.',
      application: 'Create a Decision History™ record documenting both options, the evidence chain (assessment score, lifecycle position, failure history, risk rating), the decision made, and the projected outcome with specific metrics (efficiency target, failure rate target, compliance maintained).',
      expectedOutcome: 'A complete Decision History™ record that can be presented to ownership, auditors, or board members as evidence that the decision was made with structured intelligence, not gut instinct.',
    },
    quizId: 'quiz-cts-f-3',
  },
  {
    id: 'cts-f-4',
    courseId: 'cts-foundations',
    number: 4,
    title: 'The CTS™ Lifecycle — Discovery to Governance',
    subtitle: 'How a CTS™ Engagement Flows From Start to Finish',
    estimatedMinutes: 35,
    overview:
      'A CTS™ engagement follows a defined lifecycle: from initial discovery through baseline establishment, gap analysis, recommendation design, execution, and governance. This module walks through the complete lifecycle, explaining what happens at each stage, what is produced, and what handoffs occur.',
    keyTerms: [
      { term: 'Discovery Phase', definition: 'The initial stage of a CTS™ engagement in which existing data sources are identified, cataloged, and assessed for reliability and completeness.' },
      { term: 'Baseline Establishment', definition: 'The documented current-state performance profile of a system or facility, measured against all five CTS™ criteria.' },
      { term: 'Gap Analysis', definition: 'The structured comparison between the established baseline and the target state defined by CTS™ standards, producing a prioritized list of findings.' },
      { term: 'Governance Phase', definition: 'The ongoing phase of a CTS™ program in which outcomes are measured, Decision History™ records are closed, and Operational Memory™ is continuously updated.' },
    ],
    concepts: [
      { title: 'Stage 1 — Discovery', body: 'Discovery is the intelligence-gathering phase. The practitioner catalogs every available data source: maintenance records, equipment specifications, inspection reports, energy bills, work order history, compliance records, and personnel knowledge. Every source is assessed for reliability and recency. The output of Discovery is a Data Inventory — a structured record of what intelligence exists and what gaps must be filled before assessment can begin.' },
      { title: 'Stage 2 — Baseline Establishment', body: 'The baseline is the current-state snapshot of a facility or system, measured against all five CTS™ criteria. It is the reference point against which all future assessments are compared. A well-established baseline is permanent — it represents a documented truth about the facility at a specific moment in time and becomes part of Operational Memory™.' },
      { title: 'Stage 3 — Gap Analysis', body: 'Gap analysis compares the baseline against two targets: the CTS™ standard for a system of this type and lifecycle position, and the organization\'s stated operational goals. Every gap is documented as a finding with a severity level (Critical, Significant, Advisory), a root cause assessment, and an initial recommendation direction.' },
      { title: 'Stage 4 — Recommendation Design', body: 'Recommendations are structured, not informal. Each CTS™ recommendation includes: the finding it addresses, the proposed action, the expected outcome, the estimated cost and timeline, the risk of inaction, and the CTS™ criteria scores that will result from implementation. Recommendations are ranked by priority: Safety > Compliance > Reliability > Efficiency > Cost.' },
      { title: 'Stage 5 — Governance', body: 'Governance is not the end of a CTS™ engagement — it is the permanent operating mode. Once a facility enters governance, CTS™ criteria are scored on a defined frequency (monthly, quarterly, annually depending on risk level), Decision History™ records are closed as outcomes are measured, and Operational Memory™ is continuously updated. Governance is what transforms a one-time assessment into a perpetual intelligence program.' },
    ],
    strategies: [
      'Never skip Discovery — assessments built on incomplete data inventories produce findings that cannot be defended.',
      'Establish the baseline with the client present — shared ownership of the baseline prevents disputes later.',
      'Rank recommendations by the CTS™ priority order, not by cost or convenience.',
      'Set governance review cadences at the close of every engagement — returning annually without a scheduled review cadence is not governance.',
    ],
    practiceExample: {
      domain: 'Facility Management — Multi-Building Campus',
      scenario: 'A university campus with 40 buildings wants to implement CTS™ across its entire facility portfolio. They have 20 years of records in paper files, a CMMS for the last 3 years, and annual inspection reports for all buildings.',
      application: 'Design the Discovery phase: catalog all data sources, assess reliability, identify which 5 buildings to baseline first based on risk and operational priority, and design the baseline template that will be applied consistently across all 40 buildings.',
      expectedOutcome: 'A CTS™ Data Inventory document and a prioritized baseline schedule — the formal beginning of a Nexum Suum OI™ engagement.',
    },
    quizId: 'quiz-cts-f-4',
  },
  {
    id: 'cts-f-5',
    courseId: 'cts-foundations',
    number: 5,
    title: 'CTS™ in the Nexum Suum Ecosystem',
    subtitle: 'How the Methodology Connects to OI™ HQ, FI™ & the Institute',
    estimatedMinutes: 25,
    overview:
      'CTS™ is not a standalone methodology — it is the governing framework of the entire Nexum Suum ecosystem. This module maps how CTS™ connects to each product: OI™ HQ as the intelligence command center, FI™ as the operational execution layer, and CTS Institute™ as the professional development and certification authority.',
    keyTerms: [
      { term: 'OI™ HQ', definition: 'Operational Intelligence™ Headquarters — the command center where CTS™ assessments are executed, Decision History™ is maintained, and Operational Memory™ is stored.' },
      { term: 'FI™ Platform', definition: 'Facility Intelligence™ Platform — the operational execution layer where daily facility work (work orders, asset tracking, compliance recording) occurs under the governance of OI™ HQ.' },
      { term: 'Controller™', definition: 'The governance layer in OI™ HQ that manages the relationship between the intelligence command center and the FI™ operational platform.' },
    ],
    concepts: [
      { title: 'CTS™ as the Constitutional Layer', body: 'Every product in the Nexum Suum ecosystem operates under CTS™. The methodology defines what gets assessed, how it gets scored, and what decisions are defensible. OI™ HQ is the platform where CTS™ is executed at enterprise scale. FI™ is where the day-to-day operational data is collected that feeds CTS™ assessments. CTS Institute™ trains and certifies the practitioners who deliver the methodology.' },
      { title: 'The Practitioner Role in the Ecosystem', body: 'A CTS™ Certified Practitioner™ is the professional authority for every Nexum Suum engagement. They conduct OI™ HQ assessments, govern FI™ operational data quality, interpret AI engine outputs, and produce the Decision History™ records that make every client\'s operational decisions defensible. The Institute exists to ensure practitioners meet a consistent, verifiable standard before touching client environments.' },
    ],
    strategies: [
      'Present CTS™ certification as a professional credential that distinguishes practitioners in a competitive facility management market.',
      'Help clients understand that OI™ HQ is the command center where their practitioner delivers intelligence — the tool serves the methodology.',
      'Use the Institute as a client-facing credential: "Your facility is served by a CTS™ Certified Practitioner™" is a defensible commitment.',
    ],
    practiceExample: {
      domain: 'Facility Management — Client Onboarding',
      scenario: 'A new OI™ HQ client asks: "What exactly is CTS™ and why do I need a certified practitioner working on my facility?"',
      application: 'Construct a client-facing explanation of CTS™ that connects the methodology to their operational outcomes, explains the role of OI™ HQ in their engagement, and positions the CTS™ Certified Practitioner™ credential as a quality assurance commitment.',
      expectedOutcome: 'A clear, non-technical explanation that a facility director, CFO, or board member can understand and use to justify the engagement internally.',
    },
    quizId: 'quiz-cts-f-5',
  },

  // ─── COURSE 2: Assessment Methodology & Criteria (Boiler) ──────────────────

  {
    id: 'am-1',
    courseId: 'assessment-methodology',
    number: 1,
    title: 'Assessment Triggers & Initiation',
    subtitle: 'When and Why an Assessment Begins',
    estimatedMinutes: 35,
    overview:
      'CTS™ assessments are not random — they are triggered by defined conditions. This module identifies the five classes of assessment triggers, explains how to document an assessment initiation, and uses boiler systems as the primary example to show triggers in action.',
    keyTerms: [
      { term: 'Assessment Trigger', definition: 'A defined condition that initiates a formal CTS™ assessment: regulatory event, performance threshold breach, lifecycle milestone, client request, or scheduled interval.' },
      { term: 'Scheduled Assessment', definition: 'An assessment initiated by a pre-defined calendar interval based on system risk level and lifecycle position.' },
      { term: 'Performance Threshold Breach', definition: 'An automated trigger initiated when a monitored metric crosses a defined threshold — e.g., boiler efficiency drops below 75%.' },
    ],
    concepts: [
      { title: 'Trigger Class 1 — Scheduled Interval', body: 'High-risk systems (Risk criterion > 70) require assessment quarterly. Moderate-risk systems assess semi-annually. Low-risk systems assess annually. Boiler systems serving critical loads (hospitals, data centers, industrial processes) typically qualify as high-risk and trigger quarterly assessments.' },
      { title: 'Trigger Class 2 — Performance Threshold Breach', body: 'When a monitored metric crosses a defined threshold, an automatic assessment trigger is generated. For boiler systems, common thresholds include: stack temperature exceeding 400°F (indicating combustion inefficiency), flue gas O2 outside the 2–4% optimal range, or fuel consumption increasing more than 8% above seasonal baseline without a corresponding load increase.' },
      { title: 'Trigger Class 3 — Regulatory Event', body: 'Any change in applicable code, regulation, or inspection status triggers an immediate compliance assessment. For boiler systems: annual certificate of inspection expiration, ASME code update affecting operating pressure, EPA emission standard revision, or state boiler license lapse.' },
      { title: 'Trigger Class 4 — Lifecycle Milestone', body: 'Key lifecycle milestones trigger assessments regardless of scheduled interval: 10-year equipment age (initial decline assessment), 15-year age (replace/optimize decision assessment), major repair completion (post-repair baseline reassessment), or ownership transfer (full facility assessment).' },
      { title: 'Trigger Class 5 — Client Request', body: 'A client-initiated assessment may occur at any time. It must still follow the full CTS™ methodology — the trigger is different but the process is identical. Client-requested assessments often occur before capital budget cycles, insurance renewals, or refinancing events.' },
    ],
    strategies: [
      'Configure automated threshold monitoring for all high-risk systems to ensure no performance breach goes un-assessed.',
      'Tie scheduled assessment intervals to a calendar system that notifies practitioners 30 days in advance.',
      'Document the specific trigger class in every assessment initiation record — auditors will ask.',
    ],
    practiceExample: {
      domain: 'Boiler Systems — Hospital Facility',
      scenario: 'A 15-year-old steam boiler serving a hospital\'s heating and sterilization loads shows a 9% increase in gas consumption over 45 days with no corresponding load increase. The annual state inspection is due in 60 days.',
      application: 'Identify all active assessment triggers: (1) Performance threshold breach — 9% fuel consumption increase, (2) Regulatory event — impending inspection, (3) Lifecycle milestone — 15 years of age. Document the multi-trigger initiation and assign priority based on the highest-urgency trigger.',
      expectedOutcome: 'A formal assessment initiation record citing three concurrent triggers, initiating an immediate assessment rather than waiting for the scheduled interval.',
    },
    quizId: 'quiz-am-1',
  },
  {
    id: 'am-2',
    courseId: 'assessment-methodology',
    number: 2,
    title: 'Data Collection & Source Validation',
    subtitle: 'Building the Evidence Foundation',
    estimatedMinutes: 40,
    overview:
      'A CTS™ assessment is only as strong as its data. This module teaches the four-tier data source hierarchy, explains how to validate source reliability, and demonstrates data collection in the context of a boiler system assessment.',
    keyTerms: [
      { term: 'Data Source Hierarchy', definition: 'CTS™ ranks data sources in four tiers: Tier 1 (metered/sensor data), Tier 2 (inspection records), Tier 3 (maintenance logs and work orders), Tier 4 (operator testimony).' },
      { term: 'Source Reliability Score', definition: 'A 0–100 score assigned to each data source based on its recency, calibration status, chain of custody, and cross-validation against other sources.' },
      { term: 'Data Gap', definition: 'A required data point that cannot be sourced from available records — documented in the assessment record with its impact on scoring confidence.' },
    ],
    concepts: [
      { title: 'Tier 1 Sources — Metered and Sensor Data', body: 'The highest-reliability data for boiler assessments comes from calibrated instruments: combustion analyzers (O2, CO, CO2, stack temperature), fuel meters (BTU/hr consumption), steam output meters, feedwater meters, and water quality analyzers. Tier 1 data must have documented calibration dates within the required service interval. Out-of-calibration instruments are downgraded to Tier 3.' },
      { title: 'Tier 2 Sources — Inspection Records', body: 'State boiler inspection certificates, ASME national board records, insurance inspection reports, and third-party engineering reports constitute Tier 2. These carry high reliability because they were produced by credentialed inspectors under regulatory authority. Recency matters: an inspection record older than 13 months is considered stale and must be noted in the assessment.' },
      { title: 'Tier 3 Sources — Maintenance Logs and Work Orders', body: 'The maintenance history tells the reliability story. CTS™ analyzes work order frequency (reactive index), types of repairs (parts replaced vs. emergency interventions), parts repeat rates (same component repaired more than twice), and maintenance labor hours. A CMMS export covering at least 24 months is preferred; less than 12 months is flagged as a data limitation.' },
      { title: 'Tier 4 Sources — Operator Testimony', body: 'Operator knowledge is real intelligence — experienced operators often know the behavioral patterns of equipment better than any instrument. CTS™ documents operator testimony as structured interviews with specific questions: What does this equipment do when it\'s about to fail? What do you do that\'s not in the maintenance procedures? What has changed in the last 12 months that hasn\'t been written down? Testimony is always Tier 4 — it supplements but never replaces documented data.' },
    ],
    strategies: [
      'Collect data in tier order — always start with Tier 1 before accepting Tier 3 or 4 as substitutes.',
      'Calculate the Source Reliability Score before beginning scoring — a low aggregate reliability degrades all criterion scores.',
      'Document every data gap explicitly — undisclosed data gaps that are later discovered destroy assessment credibility.',
      'Cross-validate Tier 4 testimony against Tier 3 records — consistency increases confidence, conflict increases inquiry.',
    ],
    practiceExample: {
      domain: 'Boiler Systems — Manufacturing Facility',
      scenario: 'You arrive at a 1985 firetube boiler serving a food processing plant. Available data: a combustion analysis performed 8 months ago, CMMS work orders for the last 14 months, a state inspection certificate that expired 3 months ago, and a 22-year veteran operator who has been maintaining this boiler since 1998.',
      application: 'Tier every data source: combustion analysis (Tier 1, but 8 months old — recency flag), CMMS (Tier 3, 14 months — adequate), inspection certificate (Tier 2, expired — compliance trigger), operator testimony (Tier 4, high confidence given tenure). Calculate the aggregate source reliability and document two data gaps: no current metered fuel consumption data, no current water quality records.',
      expectedOutcome: 'A structured Data Inventory for the assessment with source tiers, reliability scores, data gaps noted, and the expired inspection certificate flagged as a compliance trigger initiating an immediate regulatory assessment track.',
    },
    quizId: 'quiz-am-2',
  },
  {
    id: 'am-3',
    courseId: 'assessment-methodology',
    number: 3,
    title: 'The CTS™ Scoring Matrix',
    subtitle: 'Translating Evidence into Scores',
    estimatedMinutes: 40,
    overview:
      'With validated data in hand, the CTS™ practitioner scores the system against each of the five criteria using a structured scoring matrix. This module explains how scores are calculated, how to weight criteria based on system type and risk, and how to produce a composite score with confidence intervals.',
    keyTerms: [
      { term: 'Criterion Score', definition: 'A 0–100 numerical score for each of the five CTS™ criteria, derived from validated source data and the scoring rubric for that system type.' },
      { term: 'Weighting Factor', definition: 'A multiplier applied to each criterion score based on the system type, use case, and organizational priority. Weights must sum to 1.0.' },
      { term: 'Composite Score', definition: 'The weighted average of all five criterion scores, producing a single 0–100 intelligence score that represents the overall CTS™ health of the system.' },
      { term: 'Confidence Interval', definition: 'The range around a criterion score that reflects data quality — wide intervals indicate low-quality source data; narrow intervals indicate high-quality metered data.' },
    ],
    concepts: [
      { title: 'Boiler Scoring Rubric — Efficiency', body: 'Boiler efficiency is scored against combustion efficiency (target: 82–88% for natural gas firetube), thermal efficiency (varies by system age and design), and fuel consumption variance from seasonal baseline. Score 90–100: operating within 2% of design specification. Score 70–89: 3–8% below design. Score 50–69: 9–15% below design. Score below 50: >15% below design or non-calibrated instruments.' },
      { title: 'Boiler Scoring Rubric — Compliance', body: 'Compliance for boiler systems is binary-threshold scoring: valid state certificate of inspection (required, 20 points), ASME stamp present and legible (required, 20 points), operating within rated pressure (required, 20 points), current water treatment program documented (10 points), current operator license (10 points), annual blowdown log maintained (10 points), safety valve last tested within 12 months (10 points). Maximum: 100 points. Any required item missing: cap at 60 regardless of other items.' },
      { title: 'Lifecycle Position Modifiers', body: 'Lifecycle position does not carry its own 0–100 score — it modifies how other scores are interpreted. System age 0–7 years (New/Early Operation): no modifier. Age 7–12 years (Optimal Performance): no modifier. Age 12–18 years (Declining Performance): efficiency and reliability scores are reviewed with a +5 tolerance before dropping a tier. Age 18+ years (End-of-Life): Replace assessment is automatically initiated in parallel with current assessment.' },
      { title: 'Producing the Composite Score', body: 'Default boiler weighting: Efficiency 0.25, Compliance 0.30, Reliability 0.25, Risk 0.20 (Lifecycle is a modifier, not a weight). A facility serving critical healthcare may increase Compliance to 0.40 and decrease Efficiency to 0.15. The weighting must be documented and approved by the lead practitioner before scoring begins — it cannot be adjusted after scores are calculated.' },
    ],
    strategies: [
      'Always lock the weighting before calculating criterion scores — changing weights after seeing scores is a governance violation.',
      'Report confidence intervals alongside scores — a score of 78 ± 12 is very different from 78 ± 3.',
      'When a compliance item is missing, apply the compliance cap before calculating the composite — the cap affects the composite score significantly.',
      'Document every scoring decision that required practitioner judgment in the assessment notes.',
    ],
    practiceExample: {
      domain: 'Boiler Systems — University Central Plant',
      scenario: 'A 16-year-old 2,000 HP fire-tube boiler. Combustion efficiency: 81.2%. State certificate valid through next month. CMMS shows 4 unplanned repairs in 12 months. Operating pressure within rating. Water treatment program active. Annual blowdown log complete. Safety valve tested 14 months ago.',
      application: 'Score each criterion: Efficiency: 76 (81.2% vs. 85% design target, lifecycle modifier applied). Compliance: 80 (all required items present except safety valve test — 1 month overdue, partial penalty). Reliability: 62 (4 unplanned repairs is above threshold for this system class). Apply lifecycle modifier (16 years = Declining). Risk: 74 (university heating — high impact but not life-safety critical). Composite (default weights): ~72.5.',
      expectedOutcome: 'Composite score 72.5 — Watchlist status. Formal findings: (1) Safety valve testing overdue — immediate action required. (2) Reliability declining — initiate 36-month capital planning for replacement. (3) Efficiency at lower boundary of acceptable — combustion tune-up recommended Q1.',
    },
    quizId: 'quiz-am-3',
  },
  {
    id: 'am-4',
    courseId: 'assessment-methodology',
    number: 4,
    title: 'Gap Analysis & Finding Classification',
    subtitle: 'From Score to Structured Findings',
    estimatedMinutes: 35,
    overview:
      'A CTS™ score is the beginning of the finding, not the end. This module teaches how to convert criterion scores into classified findings, build the gap analysis from baseline to target state, and structure each finding for inclusion in the formal assessment record.',
    keyTerms: [
      { term: 'Finding', definition: 'A specific, documented gap between current performance and the CTS™ standard for a given criterion, classified by severity and linked to source evidence.' },
      { term: 'Critical Finding', definition: 'A finding that creates immediate safety risk, active regulatory non-compliance, or imminent system failure risk. Requires immediate action and escalation.' },
      { term: 'Significant Finding', definition: 'A finding that reduces performance materially below standard but does not create immediate risk. Requires action within a defined timeframe.' },
      { term: 'Advisory Finding', definition: 'A finding that represents a performance gap or emerging risk but allows operational continuity. Documented for inclusion in the next planning cycle.' },
    ],
    concepts: [
      { title: 'The Gap Analysis Framework', body: 'Gap analysis compares the assessed state (current criterion scores) against two baselines: the CTS™ standard for the system type and lifecycle position, and the previous assessment scores if this is a re-assessment. Every criterion where the current score falls below the standard generates a finding. The size of the gap determines the initial severity classification.' },
      { title: 'Anatomy of a CTS™ Finding', body: 'Every finding has six required fields: (1) Finding ID — unique identifier in the assessment record. (2) Criterion — which of the five criteria generated this finding. (3) Current Score — what was measured. (4) Target Score — what the standard requires. (5) Gap — the difference and its magnitude. (6) Evidence — the specific data points that support the finding. (7) Severity Classification — Critical, Significant, or Advisory.' },
      { title: 'Severity Classification Rules', body: 'Critical: compliance score below 60, risk score above 80, or any finding involving immediate safety hazard. Significant: efficiency gap >15 points below lifecycle-adjusted standard, reliability score below 65, risk score 60–80. Advisory: efficiency gap 5–15 points, reliability score 65–75, any trend suggesting future significant finding within 12 months. When findings from multiple criteria interact (e.g., low efficiency AND low reliability), severity must be evaluated as a composite — two Significant findings with interaction effects may be upgraded to Critical.' },
    ],
    strategies: [
      'Classify findings independently before looking at the composite — individual finding severity is determined by criterion data, not the overall score.',
      'Always state the gap in both absolute terms (score difference) and practical terms (what does this mean for operations?).',
      'Critical findings must be communicated to the client before the assessment report is delivered — do not wait for the final document.',
      'When findings interact, document the interaction explicitly — it is the most defensible indicator of practitioner judgment.',
    ],
    practiceExample: {
      domain: 'Boiler Systems — Hotel Mechanical Room',
      scenario: 'Assessment results for a hotel boiler: Efficiency 64 (target 80 — gap of 16 points). Compliance 72 (target 85 — inspection certificate needs renewal in 45 days — gap of 13 points, trending toward non-compliance). Reliability 71 (target 75 — gap of 4 points, two unplanned repairs in 6 months). Risk 77 (target 70 — gap negative, risk is elevated).',
      application: 'Classify all findings: Finding 1 (Efficiency): Significant — 16-point gap exceeds threshold. Finding 2 (Compliance): Advisory now, upgrading to Critical in 45 days if certificate not renewed — document the time-sensitive escalation path. Finding 3 (Reliability): Advisory — gap small but two unplanned repairs flagged. Finding 4 (Risk): Significant — risk above target, driven by efficiency and reliability findings. Interaction effect between Findings 1, 3, and 4 upgrades the composite severity to Critical.',
      expectedOutcome: 'Four classified findings, one interaction-effect upgrade to Critical, and a time-sensitive compliance action item with a specific calendar date.',
    },
    quizId: 'quiz-am-4',
  },
  {
    id: 'am-5',
    courseId: 'assessment-methodology',
    number: 5,
    title: 'Recommendations & Assessment Record Completion',
    subtitle: 'Turning Findings into Defensible Action Plans',
    estimatedMinutes: 40,
    overview:
      'The final stage of a CTS™ assessment converts classified findings into structured recommendations, prioritizes them using the CTS™ hierarchy, and assembles the complete assessment record ready for governance review and client delivery.',
    keyTerms: [
      { term: 'CTS™ Recommendation', definition: 'A structured action directive derived from a classified finding, containing the proposed action, expected outcome, cost estimate, timeframe, and risk of inaction.' },
      { term: 'Priority Hierarchy', definition: 'CTS™ recommendation priority order: Safety > Compliance > Reliability > Efficiency > Cost Reduction.' },
      { term: 'Risk of Inaction', definition: 'A required field in every CTS™ recommendation documenting what happens if the recommendation is not implemented within the stated timeframe.' },
      { term: 'Assessment Record', definition: 'The complete, signed document produced at the conclusion of a CTS™ assessment: data inventory, criterion scores, findings, recommendations, and practitioner certification.' },
    ],
    concepts: [
      { title: 'Structuring a CTS™ Recommendation', body: 'Every recommendation contains: Recommendation ID, linked Finding ID, priority tier (using CTS™ hierarchy), action statement (specific and measurable), expected outcome (measurable and time-bound), implementation timeframe (immediate/30/90/180/365 days), estimated cost range, risk of inaction statement, and responsible party. Vague recommendations ("improve maintenance") are not CTS™-compliant. Specific recommendations ("conduct full combustion analysis and tune within 30 days, targeting 85% combustion efficiency") are.' },
      { title: 'The Priority Hierarchy Applied', body: 'When multiple recommendations compete for limited budget or schedule, the CTS™ priority hierarchy governs: Safety findings must be addressed regardless of cost. Compliance findings must be addressed within regulatory timeframes regardless of operational disruption. Reliability findings are addressed before efficiency improvements because an unreliable efficient system produces neither value nor defensibility. Cost reduction recommendations are implemented only after safety, compliance, and reliability are secured.' },
      { title: 'Completing the Assessment Record', body: 'The assessment record is a formal governance document. It contains: assessment header (date, system, triggering event, practitioner), data inventory (all sources, tiers, reliability scores, data gaps), baseline scores (all five criteria with confidence intervals), findings (all classified findings with evidence), recommendations (all structured recommendations in priority order), and practitioner certification (the practitioner attests to the accuracy of the record and the methodology used). The client signs the record as acknowledgment — not as agreement with the findings.' },
    ],
    strategies: [
      'Write the Risk of Inaction before writing the Action Statement — knowing the cost of inaction sharpens the recommendation.',
      'Never let the client\'s budget preference change a recommendation\'s priority tier — document their decision to defer as a client-directed deviation in the record.',
      'The practitioner certification is a professional commitment — do not certify findings you cannot defend.',
      'Deliver the assessment record in writing within 5 business days of completing data collection — memory degrades faster than most practitioners realize.',
    ],
    practiceExample: {
      domain: 'Boiler Systems — Completing the Full Assessment',
      scenario: 'You have completed a four-finding assessment of the hotel boiler system. All findings are classified. You now have a budget conversation with the Director of Facilities who says: "We can only afford one of these right now — which one?" The options are the combustion tune (Efficiency finding, $3,200, Advisory) vs. the safety valve test (Compliance finding, $450, time-critical).',
      application: 'Apply the priority hierarchy. Document the Director\'s question in the assessment notes. Select the compliance/safety item first ($450 safety valve test) and explain why using the CTS™ priority hierarchy. Document the Director\'s agreement, the deferred item timeline, and the risk of inaction for the deferred item.',
      expectedOutcome: 'A complete recommendation prioritization record with the budget conversation documented, priority hierarchy applied and cited, deferred recommendation properly noted with a risk-of-inaction statement that the Director has acknowledged.',
    },
    quizId: 'quiz-am-5',
  },

  // ─── COURSE 3: Lifecycle Intelligence & Process Cycles (Chiller) ────────────

  {
    id: 'li-1',
    courseId: 'lifecycle-intelligence',
    number: 1,
    title: 'Asset Lifecycle Stages',
    subtitle: 'Mapping Equipment from Installation Through Replacement',
    estimatedMinutes: 38,
    overview:
      'Every asset follows a predictable lifecycle. CTS™ divides this lifecycle into five formal stages, each with defined performance expectations, assessment frequencies, and strategic postures. This module establishes the lifecycle framework using centrifugal chillers as the primary example.',
    keyTerms: [
      { term: 'New/Commissioning Stage', definition: 'The 0–2 year period immediately following installation. Equipment should meet or exceed design specifications. CTS™ establishes the permanent baseline during this stage.' },
      { term: 'Early Operation Stage', definition: 'Years 2–7. Equipment is operating within expected parameters with minimal reactive maintenance. CTS™ tracks efficiency against design baseline and monitors for early reliability signals.' },
      { term: 'Optimal Performance Stage', definition: 'Years 7–12 (varies by equipment class). Peak operational intelligence. Efficiency and reliability data is richest here. CTS™ decisions are highest-confidence during this stage.' },
      { term: 'Declining Performance Stage', definition: 'Years 12–18+. Efficiency and reliability begin measurable decline. CTS™ applies lifecycle modifiers and initiates capital planning triggers.' },
      { term: 'End-of-Life Stage', definition: 'Equipment exceeds useful service life for its class. CTS™ automatically initiates Replace assessment in parallel with current performance monitoring.' },
    ],
    concepts: [
      {
        title: 'Why Lifecycle Stage Changes Everything',
        body: 'A centrifugal chiller operating at 82% efficiency means something very different at year 3 versus year 16. At year 3, 82% is below the commissioning expectation (likely 90–92%) and signals an early reliability problem. At year 16, 82% is above the lifecycle-adjusted expectation and signals a well-maintained machine approaching its optimization window. Without lifecycle stage context, practitioners misclassify findings, over-recommend replacements on young equipment, and under-recommend on aging assets.',
      },
      {
        title: 'The Five Stage Definitions — Chiller Example',
        body: 'Centrifugal chiller lifecycle benchmarks: New/Commissioning (0–2 yr): commissioned efficiency 92–95% COP equivalent. Early Operation (2–7 yr): steady-state 88–92%. Optimal Performance (7–12 yr): 85–90% with stable maintenance profile. Declining Performance (12–18 yr): 78–85% with increasing reactive work orders. End-of-Life (18+ yr): below 78% with compressor wear signals, refrigerant management issues, and control system obsolescence. These benchmarks are inputs to CTS™ scoring, not ceilings — some machines outperform their lifecycle stage, creating positive variance worth documenting.',
      },
      {
        title: 'Baseline Establishment at Commissioning',
        body: 'The most important lifecycle action a CTS™ practitioner can take is establishing a rigorous baseline at or near commissioning. This permanent record — kW/ton at design load, EER, refrigerant charge, vibration signature, current draw per phase — becomes the reference point against which every future assessment compares. A facility without a commissioning baseline has no evidence of what the equipment was designed to do, only what it does now. This is recoverable but expensive in practitioner time.',
      },
      {
        title: 'Capital Planning and Lifecycle Position',
        body: 'CTS™ uses lifecycle position to trigger capital planning at the right time — not too early (wasting budget on a machine still in Optimal Performance) and not too late (emergency replacement at full cost with no planning window). For chillers, the Declining Performance trigger at 12–14 years should initiate a 36–60 month capital replacement plan: budget request in Year 1, engineering analysis in Year 2, procurement in Year 3, installation in Year 4–5. This window closes to 12–18 months if the trigger is missed.',
      },
    ],
    diagram: {
      title: 'Centrifugal Chiller Lifecycle Stage Map',
      type: 'lifecycle',
      nodes: ['Commissioning (0–2yr)', 'Early Operation (2–7yr)', 'Optimal Performance (7–12yr)', 'Declining Performance (12–18yr)', 'End-of-Life (18+yr)', 'Replace Assessment'],
      description: 'Each lifecycle stage carries defined CTS™ assessment frequencies, scoring expectations, and strategic postures. The transition from Optimal to Declining triggers capital planning; End-of-Life triggers parallel Replace assessment.',
    },
    strategies: [
      'Always establish the lifecycle stage before scoring any criterion — the stage changes how every score is interpreted.',
      'Document commissioning data as a formal CTS™ baseline even if no engagement exists yet — this data is irreplaceable.',
      'Identify the capital planning trigger point for each major asset at the start of every engagement: when does Declining Performance begin for this equipment class?',
      'Chiller compressor hour meters are the most reliable lifecycle position indicator — cross-reference with age, not age alone.',
    ],
    practiceExample: {
      domain: 'Chiller & Cooling — Hospital Campus',
      scenario: 'A hospital campus has three centrifugal chillers: Unit A (4 years old, 91% efficiency), Unit B (14 years old, 81% efficiency), Unit C (22 years old, 74% efficiency). You are asked to assess all three and advise on capital planning.',
      application: 'Assign lifecycle stages: Unit A (Early Operation — baseline vs. commissioning data needed), Unit B (Declining Performance — capital planning trigger reached, initiate 36-month plan), Unit C (End-of-Life — initiate parallel Replace assessment immediately, operational risk assessment for interim period). Score efficiency relative to lifecycle stage, not absolute values.',
      expectedOutcome: 'Three assessments with lifecycle-adjusted scores, a staged capital plan (Unit C replacement in 12–18 months, Unit B in 36–48 months, Unit A monitoring), and a Risk finding for Unit C citing End-of-Life status with hospital critical-load dependency.',
    },
    quizId: 'quiz-li-1',
  },
  {
    id: 'li-2',
    courseId: 'lifecycle-intelligence',
    number: 2,
    title: 'Process Cycle Identification',
    subtitle: 'Naming and Mapping the Repeating Loops CTS™ Governs',
    estimatedMinutes: 40,
    overview:
      'Process cycles are the repeating operational loops within a system — the predictable sequences that repeat continuously during normal operation. CTS™ uses process cycle identification to determine assessment frequency, monitoring parameters, and the intelligence triggers that emerge from cycle behavior. Chiller systems are the primary example.',
    keyTerms: [
      { term: 'Process Cycle', definition: 'A repeating sequence of operational states within a system that produces a measurable, predictable pattern — the fundamental unit CTS™ monitors for behavioral intelligence.' },
      { term: 'Cycle Variance', definition: 'The deviation of a measured cycle from its established normal — the primary intelligence signal for predictive assessment triggering.' },
      { term: 'Refrigerant Cycle', definition: 'The four-stage thermodynamic cycle (compression → condensation → expansion → evaporation) that is the primary process cycle of a chiller system.' },
      { term: 'Condenser Water Cycle', definition: 'The closed loop that transfers heat from the chiller condenser to the cooling tower — a secondary process cycle with its own behavioral signature.' },
      { term: 'Load Cycle', definition: 'The pattern of cooling demand variation over time (daily, weekly, seasonal) that drives chiller staging decisions and efficiency optimization opportunities.' },
    ],
    concepts: [
      {
        title: 'The Three Chiller Process Cycles',
        body: 'Every centrifugal chiller system contains three primary process cycles that CTS™ monitors: (1) The Refrigerant Cycle — compression, condensation, expansion, evaporation. Monitored via: suction and discharge pressures, refrigerant temperatures, compressor current and vibration. (2) The Condenser Water Cycle — heat transfer from refrigerant to condenser water, transport to cooling tower, heat rejection to atmosphere. Monitored via: entering/leaving water temperatures, condenser water flow rate, tower approach temperature. (3) The Load Cycle — the pattern of building cooling demand over time. Monitored via: chilled water supply/return temperatures, chilled water flow rate, kW input vs. ton output (kW/ton efficiency metric).',
      },
      {
        title: 'Establishing Cycle Norms',
        body: 'Before CTS™ can detect meaningful cycle variance, it must establish what "normal" looks like for this specific system. Normal is not the manufacturer specification — it is the baseline performance of this particular machine under this facility\'s specific load patterns. A chiller in Phoenix has very different condenser water cycle norms than the same model in Minneapolis. CTS™ establishes cycle norms through 12 months of monitoring data, capturing daily, weekly, and seasonal variation to build a statistically valid baseline.',
      },
      {
        title: 'Cycle Variance as Intelligence Signal',
        body: 'When a process cycle deviates from its established norm, CTS™ treats this as a potential intelligence signal requiring interpretation. A 4°F increase in condenser approach temperature (the difference between condenser water leaving temperature and ambient wet-bulb temperature) signals cooling tower fouling or reduced airflow — addressable with $2,000 of cleaning versus $180,000 if ignored until the chiller trips on high discharge pressure. The cycle variance was detectable weeks before the crisis. CTS™ exists to catch these signals.',
      },
      {
        title: 'Process Cycles Across Other Systems',
        body: 'The chiller examples teach a framework applicable to all facility systems. A boiler has combustion cycles (air/fuel ratio → ignition → heat transfer → flue gas exhaust) and water treatment cycles. An HVAC system has supply air cycles and refrigerant cycles. A manufacturing press has hydraulic pressure cycles and die cycles. CTS™ practitioners learn to identify process cycles in any system they encounter — the methodology is consistent even when the engineering domain changes.',
      },
    ],
    diagram: {
      title: 'Chiller System Process Cycles',
      type: 'flow',
      nodes: ['Building Load', 'Chilled Water Cycle', 'Refrigerant Cycle (Evaporator)', 'Compressor', 'Refrigerant Cycle (Condenser)', 'Condenser Water Cycle', 'Cooling Tower', 'Heat Rejection'],
      description: 'Three process cycles operate simultaneously in a chiller system. CTS™ monitors each cycle independently and tracks their interaction — because cycle problems often originate in one cycle and manifest as failures in another.',
    },
    strategies: [
      'Always identify all process cycles in a system before designing the monitoring plan — monitoring only the primary cycle misses critical interaction effects.',
      'Build cycle norms from measured data, not manufacturer specs — real-world cycle behavior is always facility-specific.',
      'Cycle variance thresholds should trigger assessment, not just alarms — the variance is an intelligence signal, not just an operations problem.',
      'Document the interaction relationships between cycles: what happens to the refrigerant cycle when condenser water cycle norms are breached?',
    ],
    practiceExample: {
      domain: 'Chiller & Cooling — University District Cooling Plant',
      scenario: 'A campus district cooling plant with three 1,500-ton centrifugal chillers. Over 6 weeks, CTS™ monitoring shows: Chiller 2 condenser approach temperature increased from a 5°F baseline to 9°F. Condenser water supply temperature remained stable. Cooling tower airflow is unchanged.',
      application: 'Identify the cycle anomaly: The increase in condenser approach temperature with stable condenser water supply and unchanged airflow points to fouling on the condenser tube surfaces (inside the chiller, not the tower). Map this to the Refrigerant Cycle: higher approach = higher condensing pressure = increased compressor work = decreased efficiency. Calculate the efficiency impact: 4°F approach increase typically causes 3–5% efficiency loss on a centrifugal chiller at this size.',
      expectedOutcome: 'A CTS™ cycle variance finding: condenser tube fouling causing 3–5% efficiency loss on Chiller 2. Recommendation: condenser tube cleaning ($8,000) with 45-day target. Risk of inaction: continued fouling will increase compressor load, accelerate wear, and risk high-discharge-pressure trip within the cooling season.',
    },
    quizId: 'quiz-li-2',
  },
  {
    id: 'li-3',
    courseId: 'lifecycle-intelligence',
    number: 3,
    title: 'CTS™ Positioning Within the Lifecycle',
    subtitle: 'Where Intelligence Applies at Each Stage',
    estimatedMinutes: 35,
    overview:
      'Not all CTS™ activities are equal across the lifecycle. The type of intelligence produced, the assessment questions asked, and the decisions generated change as an asset moves through its stages. This module maps CTS™ activities to lifecycle positions, showing practitioners where to focus energy for maximum impact.',
    keyTerms: [
      { term: 'Commissioning Intelligence', definition: 'The CTS™ activity set focused on establishing permanent baselines and verifying that new equipment meets design specifications.' },
      { term: 'Optimization Intelligence', definition: 'The CTS™ activity set focused on extracting maximum performance from equipment in its Optimal Performance stage through continuous cycle monitoring and fine-tuning.' },
      { term: 'End-of-Life Intelligence', definition: 'The CTS™ activity set focused on managing risk and planning capital replacement for equipment in Declining Performance and End-of-Life stages.' },
    ],
    concepts: [
      { title: 'Stage 1–2: Commissioning and Early Operation Intelligence', body: 'CTS™ priority at commissioning: establish permanent baseline, verify design performance, document all as-built conditions, establish cycle norms under actual load conditions. In Early Operation, CTS™ monitors for infant mortality signals — failures that appear in the first 2–5 years due to manufacturing defects, installation errors, or commissioning oversights. These are often warranty-recoverable but only if CTS™ has the baseline to prove deviation from specification.' },
      { title: 'Stage 3: Optimal Performance Intelligence', body: 'The Optimal Performance stage is the richest intelligence period. CTS™ activities: continuous efficiency optimization (kW/ton trending), predictive maintenance scheduling based on cycle data, operational memory building (the longest period of normal operation creates the most statistically reliable norms), and value documentation (calculating avoided costs from CTS™-driven preventive actions). This stage is also where the ROI of CTS™ is most clearly demonstrated.' },
      { title: 'Stage 4–5: Declining Performance and End-of-Life Intelligence', body: 'In the declining stages, CTS™ intelligence shifts from optimization to risk management. Activities: increasing assessment frequency to quarterly or monthly for high-risk systems, modeling remaining useful life against capital availability, calculating total cost of ownership comparison (repair vs. replace), documenting operational risk for leadership decision-making, and producing the Replace assessment that drives capital budget requests. CTS™ at end-of-life is often what prevents an unplanned emergency replacement.' },
    ],
    strategies: [
      'Match your CTS™ activity intensity to the lifecycle stage — commissioning and end-of-life demand more intensive engagement than the stable middle stages.',
      'Use Optimal Performance stage data to build the strongest possible Operational Memory™ record — it will be the baseline that makes declining stage assessments defensible.',
      'At end-of-life, never present only cost data to leadership — present risk data, remaining useful life estimates, and the cost of emergency replacement vs. planned replacement.',
    ],
    practiceExample: {
      domain: 'Chiller & Cooling — Corporate Campus Portfolio',
      scenario: 'You manage CTS™ for a corporate campus with a mixed chiller fleet: 2 units at 4 years (Early Operation), 1 unit at 9 years (Optimal Performance), 2 units at 16 years (Declining Performance). Budget planning cycle opens in 60 days.',
      application: 'Design the lifecycle-appropriate CTS™ strategy for each group before the budget cycle: Early Operation units (verify cycle norms, check for infant mortality signals, confirm baseline integrity). Optimal unit (run efficiency optimization analysis, document avoided costs for ROI presentation). Declining units (quantify replacement cost vs. continued repair cost, calculate risk profile, produce capital planning recommendation with 36-month timeline).',
      expectedOutcome: 'A budget cycle submission with lifecycle-differentiated intelligence: avoided cost documentation for the Optimal unit, capital replacement recommendation with risk quantification for the Declining units, and early-operation health confirmation for the newest units.',
    },
    quizId: 'quiz-li-3',
  },
  {
    id: 'li-4',
    courseId: 'lifecycle-intelligence',
    number: 4,
    title: 'Predictive vs. Reactive Frameworks',
    subtitle: 'How CTS™ Intelligence Shifts the Operational Model',
    estimatedMinutes: 38,
    overview:
      'The contrast between predictive intelligence and reactive maintenance is at the heart of CTS™\'s value proposition. This module quantifies that contrast, builds the practitioner\'s ability to make the financial case for predictive intelligence, and demonstrates how process cycle monitoring enables prediction.',
    keyTerms: [
      { term: 'Reactive Index', definition: 'The ratio of unplanned work orders to total work orders over a defined period — the primary measure of how reactive vs. proactive a facility\'s maintenance posture is.' },
      { term: 'Predictive Intelligence', definition: 'The CTS™ practice of monitoring process cycles and criterion scores continuously to identify degradation before it produces failure — enabling intervention at planned cost rather than emergency cost.' },
      { term: 'Failure Mode Economics', definition: 'The financial analysis of what a specific failure costs at different intervention points — the core argument for predictive intelligence investment.' },
    ],
    concepts: [
      { title: 'The Three Intervention Points', body: 'Every equipment degradation follows a progression with three possible intervention points: (1) Predictive: intervene based on cycle variance and criterion trends before any performance impact is visible. Lowest cost — typically preventive maintenance or minor adjustment. (2) Preventive Threshold: intervene when performance scores cross defined thresholds. Moderate cost — repair or component replacement. (3) Reactive: intervene after failure. Highest cost — emergency labor, expedited parts, operational downtime, potential cascading damage. CTS™ enables Predictive and Preventive Threshold intervention for every monitored system.' },
      { title: 'Quantifying the Cost Differential — Chiller Example', body: 'A centrifugal chiller compressor bearing failure presents a clear cost differential: Predictive intervention (vibration variance detected, bearing replacement scheduled): $14,000 parts and labor, 8 hours planned downtime, zero disruption to facility cooling. Preventive Threshold intervention (efficiency score drops below threshold, full compressor inspection): $28,000 parts and labor, 3 days planned downtime, temporary cooling with portable units. Reactive intervention (compressor failure during cooling season): $180,000–$280,000 emergency repair or compressor replacement, 2–4 weeks downtime, facility cooling loss, reputation damage. The investment required to move from Reactive to Predictive is typically 8–12% of the reactive failure cost.' },
      { title: 'The Reactive Index as a Management Metric', body: 'The Reactive Index (unplanned work orders / total work orders) is one of the clearest metrics for demonstrating CTS™ program impact. Industry baseline for facilities without structured intelligence programs: 40–60% reactive index. Target for mature CTS™ programs: below 15%. Every percentage point of reduction represents real dollars — fewer emergency callouts, less overtime, lower parts cost from emergency procurement, and reduced equipment wear from unmanaged failure modes.' },
    ],
    strategies: [
      'Calculate the facility\'s current Reactive Index at the start of every engagement — it sets the improvement baseline for ROI reporting.',
      'Use three-point failure cost analysis in every capital justification for predictive monitoring investment.',
      'Never argue predictive intelligence on principle — always on dollars. Leadership responds to the cost differential, not the methodology.',
      'Track Reactive Index quarterly and report it in governance reviews — a declining index is the most visible indicator of CTS™ program health.',
    ],
    practiceExample: {
      domain: 'Chiller & Cooling — Data Center Facility',
      scenario: 'A data center facility has a reactive index of 52% on its chiller plant. The CTS™ assessment shows: 3 chillers with unmonitored condenser approach temperatures, no vibration monitoring, no refrigerant leak detection trend data, and compressor hours not tracked. Annual unplanned chiller work order cost: $340,000.',
      application: 'Design the predictive intelligence program for this facility: monitoring parameters (condenser approach, vibration by bearing location, refrigerant pressure trend, compressor hours), threshold triggers for assessment initiation, estimated investment in monitoring hardware and CTS™ program, projected reduction in reactive index from 52% to 18% over 18 months, and estimated avoided cost calculation.',
      expectedOutcome: 'A predictive intelligence business case: monitoring investment of $45,000, projected reactive cost reduction of $220,000/year at target index, 5-month payback period. This is the document a CFO approves.',
    },
    quizId: 'quiz-li-4',
  },
  {
    id: 'li-5',
    courseId: 'lifecycle-intelligence',
    number: 5,
    title: 'Lifecycle Monitoring Plan Design',
    subtitle: 'Building the Ongoing Intelligence Structure for a Chiller System',
    estimatedMinutes: 40,
    overview:
      'A CTS™ Lifecycle Monitoring Plan is the formal document that defines what gets measured, how often, at what threshold, and what happens when a threshold is crossed — for the life of the asset. This module walks through designing a complete monitoring plan for a centrifugal chiller system.',
    keyTerms: [
      { term: 'Monitoring Parameter', definition: 'A specific measurable characteristic of a process cycle or criterion that is tracked on a defined frequency as part of the Lifecycle Monitoring Plan.' },
      { term: 'Assessment Threshold', definition: 'The value of a monitoring parameter at which a formal CTS™ assessment is automatically triggered.' },
      { term: 'Monitoring Frequency', definition: 'The interval at which a parameter is measured — ranging from continuous (real-time sensors) to annual (specialized testing).' },
    ],
    concepts: [
      { title: 'The Four Components of a Monitoring Plan', body: 'A CTS™ Lifecycle Monitoring Plan has four sections: (1) Parameter Registry — every monitoring parameter with its measurement method, frequency, and data source. (2) Threshold Table — assessment trigger values for each parameter, differentiated by lifecycle stage. (3) Response Matrix — what happens when each threshold is crossed (who is notified, what assessment type is initiated, what timeframe). (4) Plan Governance — who owns the plan, when it is reviewed, how thresholds are updated as norms evolve.' },
      { title: 'Chiller Monitoring Parameter Registry', body: 'Core parameters for a centrifugal chiller monitoring plan: kW/ton efficiency (continuous via BMS integration), condenser approach temperature (continuous), refrigerant suction and discharge pressure (continuous), compressor vibration by bearing location (monthly vibration survey or continuous if vibration sensors installed), compressor motor current draw per phase (continuous), refrigerant leak rate via pressure trend analysis (weekly trend review), condenser water entering/leaving temperature differential (continuous), chilled water supply temperature variance from setpoint (continuous), compressor run hours (continuous).' },
      { title: 'Threshold Setting by Lifecycle Stage', body: 'Thresholds must be set relative to the established cycle norm for this machine, not generic industry benchmarks. Example: condenser approach temperature threshold. Industry generic: >8°F triggers action. CTS™ lifecycle-adjusted for this 9-year chiller with a 4°F established norm: >2°F variance from norm (6°F) triggers Advisory assessment. >4°F variance (8°F) triggers Significant assessment. >6°F variance (10°F) triggers Critical assessment with immediate operational response. The lifecycle-adjusted threshold catches problems earlier and avoids false alarms.' },
    ],
    strategies: [
      'Build the threshold table with three levels (Advisory/Significant/Critical) for every parameter — binary alarms are not CTS™-grade intelligence.',
      'Automate threshold monitoring wherever BMS or building controls allow — manual parameter review is the first thing to be skipped during busy periods.',
      'Review and update thresholds annually as seasonal norms and equipment age change what "normal" looks like.',
      'Design the Response Matrix before an incident — practitioners under pressure make better decisions with pre-approved protocols.',
    ],
    practiceExample: {
      domain: 'Chiller & Cooling — Producing the Monitoring Plan',
      scenario: 'You are designing a Lifecycle Monitoring Plan for a 12-year-old 800-ton centrifugal chiller serving a pharmaceutical manufacturing facility. Established cycle norms: kW/ton 0.62 (±0.04), condenser approach 5°F (±1°F), compressor vibration 0.08 in/sec RMS at primary bearing.',
      application: 'Build the Parameter Registry (9 core parameters), Threshold Table (Advisory at 8% deviation from norm, Significant at 15%, Critical at 25%), Response Matrix (Advisory → practitioner review in 5 days, Significant → assessment in 48 hours, Critical → immediate assessment + operations notification), and Plan Governance (annual review, pharmaceutical facility requires monthly threshold report to quality team).',
      expectedOutcome: 'A complete Lifecycle Monitoring Plan document ready for client signature and BMS integration — the formal instrument that governs CTS™ intelligence for this asset through end-of-life.',
    },
    quizId: 'quiz-li-5',
  },

  // ─── COURSE 4: Operational Phases & Governance (HVAC) ──────────────────────

  {
    id: 'op-1',
    courseId: 'operational-phases',
    number: 1,
    title: 'The Four CTS™ Operational Phases',
    subtitle: 'Overview: Assess → Design → Execute → Govern',
    estimatedMinutes: 30,
    overview:
      'CTS™ structures every engagement around four operational phases: Assess, Design, Execute, and Govern. These phases are not sequential stages that complete and close — they are a continuous cycle that governs every system in the CTS™ program indefinitely. This module introduces all four phases and establishes how they interact.',
    keyTerms: [
      { term: 'Assess Phase', definition: 'The evidence-gathering and scoring phase where current system state is documented, criteria are scored, and findings are classified.' },
      { term: 'Design Phase', definition: 'The recommendation-framing phase where findings are converted to structured action plans with projected outcomes and Decision History™ records opened.' },
      { term: 'Execute Phase', definition: 'The implementation-tracking phase where approved recommendations are actioned, progress is monitored, and variance from plan is documented.' },
      { term: 'Govern Phase', definition: 'The permanent operational phase where outcomes are measured, records are closed, Operational Memory™ is updated, and the next assessment cycle is triggered.' },
    ],
    concepts: [
      { title: 'The Cycle, Not the Sequence', body: 'A common misunderstanding: Assess → Design → Execute → Govern describes a project, not a program. In reality, these four phases are always simultaneously active in a mature CTS™ program. While an HVAC system is in the Govern phase for a completed recommendation, a new finding may have already triggered a new Assess cycle. A second system may be in Design while a third is in Execute. CTS™ practitioners manage multiple phase cycles simultaneously across the portfolio of systems they govern.' },
      { title: 'Phase Transitions and Triggers', body: 'Each phase has a defined completion condition that triggers the next phase. Assess → Design: all findings classified and communicated. Design → Execute: recommendations approved and resources allocated. Execute → Govern: implementation complete and initial outcome measurable. Govern → Assess: scheduled re-assessment interval reached or new trigger event detected. These transitions are documented — informal phase transitions (starting work without design approval, or closing records without outcome measurement) are governance violations.' },
      { title: 'HVAC Systems as the Four-Phase Example Domain', body: 'HVAC systems are ideal for teaching the four phases because they have well-defined assessment criteria (efficiency, compliance, reliability, risk), clear design choices (equipment replacement, controls upgrade, recommissioning, operational change), measurable execution phases (installation, commissioning, performance verification), and ongoing governance requirements (filter maintenance tracking, seasonal commissioning, IAQ compliance monitoring). The HVAC examples in this course will trace a complete four-phase cycle from initial assessment to closed governance record.' },
    ],
    strategies: [
      'Always know which phase every system in your portfolio is in — an undocumented phase transition means the system is ungoverned.',
      'Communicate phase status to clients using the four-phase language — it creates shared governance vocabulary and client accountability.',
      'Never skip a phase transition — moving from Assess to Execute without Design (approved recommendations) generates ungoverned work that cannot be defended.',
    ],
    practiceExample: {
      domain: 'HVAC Systems — Mid-Size Commercial Office Building',
      scenario: 'You begin a CTS™ engagement for a 180,000 SF office building with a 15-year-old VAV HVAC system. The facility director says: "We just want to know what needs to be fixed."',
      application: 'Reframe the engagement using the four-phase model. Explain that the engagement begins with Assess (what is the current state of all five criteria for this HVAC system?), moves to Design (what recommendations address the findings?), then Execute (implementation of approved recommendations), and settles into Govern (ongoing intelligence program). "What needs to be fixed" is one output of the Assess phase — not the entire engagement.',
      expectedOutcome: 'A scoped four-phase engagement proposal: Phase 1 Assess (4 weeks), Phase 2 Design (2 weeks), Phase 3 Execute (timeline depends on approved recommendations), Phase 4 Govern (ongoing). This is the governance structure the client is buying, not just a one-time inspection.',
    },
    quizId: 'quiz-op-1',
  },
  {
    id: 'op-2',
    courseId: 'operational-phases',
    number: 2,
    title: 'The Assess Phase Deep Dive',
    subtitle: 'Data Collection, Source Validation & Baseline for HVAC',
    estimatedMinutes: 45,
    overview:
      'The Assess phase is where CTS™ intelligence begins. This module walks through a complete Assess phase for an HVAC system: data collection, source validation, five-criterion scoring, finding classification, and the documentation package that completes the phase and triggers Design.',
    keyTerms: [
      { term: 'IAQ', definition: 'Indoor Air Quality — a compliance and performance criterion for HVAC systems covering temperature, humidity, CO2, particulate, and VOC levels.' },
      { term: 'Static Pressure', definition: 'The pressure within an HVAC duct system, which affects airflow distribution, fan energy consumption, and equipment wear — a key efficiency monitoring parameter.' },
      { term: 'ASHRAE 62.1', definition: 'The primary HVAC ventilation standard for acceptable indoor air quality — a compliance reference in every commercial HVAC CTS™ assessment.' },
    ],
    concepts: [
      { title: 'HVAC Data Sources by Tier', body: 'Tier 1 (metered): BMS trend data (supply/return air temperatures, static pressure, economizer position, fan current draws), automated IAQ sensors (CO2, temperature, humidity), energy meter data. Tier 2 (inspection): ASHRAE 62.1 commissioning report, mechanical contractor as-built drawings, filter change logs with MERV ratings, most recent TAB (test and balance) report. Tier 3 (maintenance logs): work order history for AHUs, VAV boxes, and controls, refrigerant logs (for DX units), coil cleaning records. Tier 4 (testimony): facilities staff knowledge of zones with persistent comfort complaints, informal controls overrides and workarounds.' },
      { title: 'Scoring HVAC Efficiency', body: 'HVAC efficiency in CTS™ is multi-metric: Fan power efficiency (kW per CFM vs. design), cooling plant efficiency (kW/ton for DX or chilled water systems), heating efficiency (AFUE or COP depending on system type), economizer utilization (hours of economizer operation vs. available hours from weather data), static pressure optimization (systems running at higher-than-designed static pressure waste significant fan energy). A building automation system with trend logging makes Tier 1 efficiency data collection straightforward. Without BMS trends, efficiency scoring relies on spot measurements with data gaps disclosed.' },
      { title: 'Compliance Scoring for HVAC Systems', body: 'HVAC compliance has multiple regulatory layers: ASHRAE 62.1 ventilation rates (minimum outside air per occupancy type), Title 24 or local energy codes (efficiency minimums for installed equipment), ASHRAE 90.1 (energy efficiency compliance for commercial buildings), local mechanical code requirements (equipment installation, clearances, ductwork), and organizational policy requirements (filtration standards for sensitive facilities). A complete compliance assessment maps every applicable standard against current documented performance — not estimated performance.' },
    ],
    strategies: [
      'Always pull BMS trend data for the previous 12 months before conducting any field assessment — the trend data tells you what questions to ask when you arrive.',
      'The TAB report is the HVAC system\'s commissioning baseline — if it doesn\'t exist or is more than 5 years old, note this as a significant data gap.',
      'Comfort complaints from occupants are informal Tier 4 data, but their spatial distribution (which zones are always cold, always hot) often maps directly to VAV box or controls findings.',
    ],
    practiceExample: {
      domain: 'HVAC Systems — Class A Office Tower, Floors 12–24',
      scenario: 'You are conducting an Assess phase for the upper floors of a Class A office tower. BMS trend data shows: average supply air temperature 3°F warmer than setpoint across 6 AHUs on peak cooling days. Static pressure is 0.8" w.g. above design on all six units. CO2 levels in 4 conference rooms exceed 1,100 ppm during peak occupancy. Last TAB report: 7 years ago.',
      application: 'Score five criteria from this data: Efficiency (elevated static pressure and off-setpoint supply air = significant efficiency loss — score ~68). Compliance (CO2 exceeding ASHRAE 62.1 limits in 4 rooms = compliance finding, cap at 72 for this criterion). Reliability (BMS data consistent, no evidence of major failures — score ~82). Lifecycle Position (ask for equipment age). Risk (CO2 compliance failure + efficiency loss creates Significant risk — score ~74). Classify findings: CO2 finding = Significant (approaching Critical if unaddressed). Static pressure finding = Significant. TAB report gap = Advisory.',
      expectedOutcome: 'Assess phase complete with three classified findings, composite CTS™ score approximately 73 (Watchlist), and a formal transition to Design phase with two Significant findings requiring action within 90 days.',
    },
    quizId: 'quiz-op-2',
  },
  {
    id: 'op-3',
    courseId: 'operational-phases',
    number: 3,
    title: 'The Design Phase Deep Dive',
    subtitle: 'Recommendation Framing & Decision History™ Creation',
    estimatedMinutes: 40,
    overview:
      'The Design phase converts classified findings into structured recommendations and opens the Decision History™ records that govern accountability from commitment through outcome. This module demonstrates the complete Design phase for the office tower HVAC findings identified in the Assess phase.',
    keyTerms: [
      { term: 'Recommendation Scope Statement', definition: 'The opening section of a CTS™ recommendation that bounds exactly what the recommendation covers and what it does not — preventing scope creep during Execute.' },
      { term: 'Implementation Scenario', definition: 'An alternative approach to addressing a finding, presented alongside the primary recommendation — required when the primary recommendation has a material alternative with different risk/cost profiles.' },
      { term: 'Design Approval', definition: 'The formal client review and approval of the Design phase output — the document that authorizes transition to Execute and initiates Decision History™ records.' },
    ],
    concepts: [
      { title: 'The Design Phase Output Package', body: 'The Design phase produces four deliverables: (1) Recommendation Set — all structured recommendations from the Assess phase findings, formatted per CTS™ standard. (2) Implementation Scenarios — alternative approaches for recommendations where material alternatives exist. (3) Priority Matrix — all recommendations ranked using CTS™ priority hierarchy (Safety > Compliance > Reliability > Efficiency > Cost). (4) Decision History™ Records — one record opened per approved recommendation, with Decision Statement, Evidence Chain, and Projected Outcome documented at the moment of approval.' },
      { title: 'Writing Recommendations for HVAC Findings', body: 'The three office tower HVAC findings translate to specific recommendations: Finding 1 (CO2 non-compliance, Significant): Recommendation — commission an ASHRAE 62.1 ventilation audit of 4 non-compliant conference rooms and recalibrate or replace malfunctioning outside air dampers and controls within 60 days. Expected outcome: CO2 levels below 1,000 ppm during peak occupancy. Cost: $12,000–$18,000. Risk of inaction: continued ASHRAE 62.1 non-compliance, potential regulatory action, occupant health complaints escalation. Finding 2 (Static pressure, Significant): Recommendation — commission static pressure optimization study and adjust duct pressure controls to design specification on all 6 AHUs. Expected outcome: 8–12% fan energy reduction. Cost: $4,000–$6,000. Risk of inaction: continued energy waste of approximately $18,000/year plus accelerated fan motor wear.' },
      { title: 'Opening Decision History™ Records at Design Approval', body: 'The moment the client approves the Design phase output, Decision History™ records are opened for every approved recommendation. For the CO2 recommendation: Decision Statement — "Commission ASHRAE 62.1 ventilation audit and recalibrate/replace outside air damper controls on 4 non-compliant conference room zones." Decision Date — today. Evidence Chain — Assess phase finding reference, BMS CO2 trend data, ASHRAE 62.1 occupancy calculation. Projected Outcome — CO2 below 1,000 ppm within 60 days of implementation. The record stays open until the outcome is measured.' },
    ],
    strategies: [
      'Never write a recommendation without a measurable Projected Outcome — "improve air quality" is not a measurable target.',
      'Present Implementation Scenarios when a client faces a real choice — offering only one option when alternatives exist reduces the defensibility of the Design phase.',
      'Open Decision History™ records at Design Approval, not after — the record is about the decision, not about the outcome.',
      'Get Design Approval in writing — a verbal approval is not a governed transition.',
    ],
    practiceExample: {
      domain: 'HVAC Systems — Design Phase for Office Tower Findings',
      scenario: 'The office tower client has reviewed your Assess phase findings. They approve the CO2 compliance recommendation immediately. For the static pressure finding, they ask: "Can we just lower the setpoints ourselves without a study?" You also need to open Decision History™ records for both approved recommendations.',
      application: 'Address the static pressure question: present the Implementation Scenario (Option A — full optimization study: $4,000, highest confidence outcome; Option B — manual setpoint adjustment by in-house staff: $500, lower confidence, risk of zone comfort complaints if over-adjusted). Document the client\'s choice as the Design Approval. Open two Decision History™ records with client-approved projected outcomes and evidence chains linked to Assess phase findings.',
      expectedOutcome: 'A complete Design phase package: two approved recommendations with projected outcomes, two open Decision History™ records, and client choice for static pressure scenario documented with its risk profile.',
    },
    quizId: 'quiz-op-3',
  },
  {
    id: 'op-4',
    courseId: 'operational-phases',
    number: 4,
    title: 'The Execute Phase Deep Dive',
    subtitle: 'Implementation Tracking & Variance Monitoring',
    estimatedMinutes: 38,
    overview:
      'The Execute phase is where approved recommendations become physical actions. CTS™ practitioners don\'t just watch implementation happen — they track it against the Design phase plan, monitor for variance, document deviations, and maintain the intelligence quality of the open Decision History™ records throughout.',
    keyTerms: [
      { term: 'Implementation Milestone', definition: 'A defined checkpoint within the Execute phase that must be documented before proceeding — e.g., "outside air dampers replaced" before "controls recalibrated."' },
      { term: 'Execute Variance', definition: 'A deviation from the Design phase implementation plan during Execute — must be documented and assessed for impact on the Projected Outcome in the Decision History™ record.' },
      { term: 'Performance Verification', definition: 'The measurement activity at the close of Execute that determines whether the implementation achieved the Design phase Projected Outcome — the trigger for transitioning to Govern.' },
    ],
    concepts: [
      { title: 'CTS™ Practitioner Role in Execute', body: 'The CTS™ practitioner is not the contractor during Execute — they are the intelligence quality governor. Their responsibilities: confirm that contractors are working to the approved recommendation scope, document milestone completions, identify and record any Execute variances that affect the projected outcome, and conduct the Performance Verification measurement that closes Execute. A practitioner who is absent during Execute risks receiving a completed implementation that does not match the Design phase scope — making the Decision History™ record undefendable.' },
      { title: 'Documenting Execute Variances', body: 'Execute variances happen in every real-world implementation. The static pressure optimization study finds a VAV box with a stuck actuator not identified in the Design phase. The CO2 damper replacement finds existing controls wiring that cannot accommodate the new dampers without a panel upgrade. Each variance is: documented in the Decision History™ record (noting what changed from the Design phase plan), assessed for impact on the Projected Outcome (does this change the expected CO2 result?), and approved by the lead practitioner and client before work continues.' },
      { title: 'Performance Verification — Closing Execute', body: 'The Execute phase closes when Performance Verification is complete. For the CO2 recommendation: measure CO2 in all 4 conference rooms during peak occupancy after damper recalibration. Document measured values against the Projected Outcome (below 1,000 ppm). If achieved: close Execute, transition to Govern, update Decision History™ with preliminary outcome measurement. If not achieved: document the gap, assess root cause, determine whether a Design phase revision is needed before re-Execute, or whether the gap falls within acceptable variance.' },
    ],
    strategies: [
      'Attend at least the milestone completions in person — review of contractor-submitted photos and reports is not a substitute for direct verification.',
      'Document every Execute variance, no matter how small — undisclosed variances discovered later destroy the credibility of the entire Decision History™ record.',
      'Never close Execute without Performance Verification — assumption of successful completion is a governance violation.',
    ],
    practiceExample: {
      domain: 'HVAC Systems — Execute Phase for CO2 Recommendation',
      scenario: 'Contractor is on-site replacing outside air dampers on the 4 non-compliant conference room zones. Milestone 1 (damper replacement) is complete. During Milestone 2 (controls recalibration), the BMS technician discovers that 2 of the 4 zones have outside air actuators wired to the wrong control points — a wiring error present since the building opened 12 years ago.',
      application: 'Document the Execute variance: 2 zones have incorrect controls wiring. Assess impact on Projected Outcome: the wiring error means recalibration alone is insufficient — panel rewire required. Document scope change: original recommendation scope (recalibration, $12,000–$18,000) expands to include controls panel rewire ($6,000–$8,000 additional). Get client approval for scope and budget change before proceeding. Update Decision History™ record with variance documentation.',
      expectedOutcome: 'Execute variance documented, client approval obtained, Decision History™ record updated to reflect scope change, Projected Outcome confirmed as still achievable with the expanded scope, and contractor authorized to proceed with rewire.',
    },
    quizId: 'quiz-op-4',
  },
  {
    id: 'op-5',
    courseId: 'operational-phases',
    number: 5,
    title: 'The Govern Phase Deep Dive',
    subtitle: 'Outcomes, Decision Variance & Operational Memory™ Permanence',
    estimatedMinutes: 40,
    overview:
      'The Govern phase is where CTS™ intelligence becomes permanent. Outcomes are measured, Decision History™ records are closed with variance calculated, and Operational Memory™ absorbs the record forever. This module completes the four-phase cycle using the office tower HVAC engagement and introduces the governance cadence that sustains the CTS™ program indefinitely.',
    keyTerms: [
      { term: 'Governance Review', definition: 'A scheduled meeting where the CTS™ practitioner presents criterion score trends, closed Decision History™ records, open findings, and portfolio risk status to the client leadership team.' },
      { term: 'Decision Closure', definition: 'The formal closing of a Decision History™ record when the Actual Outcome has been measured and Decision Variance has been calculated.' },
      { term: 'Governance Cadence', definition: 'The defined schedule of re-assessment intervals, governance reviews, and trigger monitoring that keeps the CTS™ program active indefinitely.' },
    ],
    concepts: [
      { title: 'Measuring Actual Outcomes — Closing the Records', body: 'The CO2 recommendation was approved, implemented with a documented scope variance, and Performance Verified at Execute close. Now, 90 days after implementation, the Govern phase measures the sustained outcome: CO2 readings in all 4 conference rooms during 3 peak occupancy periods over 2 weeks. Results: all 4 zones below 850 ppm (target was below 1,000 ppm). Projected Outcome: below 1,000 ppm. Actual Outcome: below 850 ppm. Decision Variance: positive — outperformed projection by 150 ppm. Close the Decision History™ record with this data. This positive variance now lives in Operational Memory™ as evidence of CTS™ program effectiveness.' },
      { title: 'Sustaining the Governance Cadence', body: 'Once a system enters Govern, it stays in Govern. The governance cadence defines what happens next: assessment interval (this HVAC system is now Watchlist at score 73 — annual re-assessment with quarterly criterion spot-checks), trigger monitoring (CO2 thresholds active via BMS alerts, static pressure monthly spot-check), and governance review schedule (quarterly review with facility director covering criterion trends, open Decision History™ records, and emerging findings). The cadence is documented and agreed by the client — it is the operational commitment that makes CTS™ a program rather than a project.' },
      { title: 'Govern Phase and Operational Memory™ Growth', body: 'Every closed Decision History™ record, every governance review report, and every re-assessment baseline update adds to Operational Memory™. A facility that has been in the CTS™ Govern phase for 5 years has a rich intelligence record: before-and-after performance comparisons for every major recommendation, decision variance trends that validate projection accuracy, avoided cost documentation for practitioner and client use, and a continuously updated risk profile. This is the compounding return of CTS™ — the longer the program runs, the more intelligent it becomes.' },
    ],
    strategies: [
      'Schedule governance reviews on a fixed calendar before leaving the Execute phase — a governance review with no scheduled date will not happen.',
      'Use positive Decision Variance records as marketing evidence for the CTS™ program — "our CO2 recommendation outperformed projection by 15%" is a compelling governance story.',
      'Re-score all five criteria at each re-assessment, not just the criteria associated with closed recommendations — new findings may have emerged.',
      'Report Operational Memory™ growth to clients annually — "your facility now has 23 closed Decision History™ records covering $2.1M in implemented recommendations" makes the program\'s value tangible.',
    ],
    practiceExample: {
      domain: 'HVAC Systems — 12-Month Governance Review',
      scenario: 'It is 12 months after the Execute phase closed for the office tower HVAC engagement. You are presenting the first annual governance review to the facility director and CFO. Closed Decision History™ records: 2 (CO2 and static pressure). New finding: one AHU showing supply fan bearing vibration increasing above baseline norm.',
      application: 'Structure the governance review: (1) Closed record summary: CO2 (positive variance, $0 additional cost), static pressure (target achieved, $22,400/year energy savings documented). (2) Avoided cost summary: $22,400 energy savings + estimated $45,000 in reactive costs avoided by proactive static pressure correction. (3) Operational Memory™ update: 2 records closed, all field data absorbed. (4) New finding: AHU bearing vibration — initiate new Assess cycle for this finding, present preliminary classification (Advisory trending Significant). (5) Cadence confirmation: next re-assessment in 12 months, quarterly spot-checks continue.',
      expectedOutcome: 'A governance review that demonstrates quantified value ($67,400 in documented avoided and real savings), validates the CTS™ program investment, and initiates the next assess cycle — demonstrating that Govern feeds back into Assess in the continuous intelligence loop.',
    },
    quizId: 'quiz-op-5',
  },

  // ─── COURSE 5: Energy Intelligence & Strategy ───────────────────────────────

  {
    id: 'ei-1',
    courseId: 'energy-intelligence',
    number: 1,
    title: 'Energy as an Intelligence Domain',
    subtitle: 'Why Energy Data Matters Beyond the Utility Bill',
    estimatedMinutes: 35,
    overview:
      'Energy consumption is one of the most information-dense data streams available to facility operators. It reflects the behavior of every major system simultaneously, responds to operational changes in near real-time, and carries compliance obligations that affect organizational risk. This module establishes energy as a formal CTS™ intelligence domain.',
    keyTerms: [
      { term: 'Energy Use Intensity (EUI)', definition: 'Energy consumption normalized by building area (kBtu/sf/yr) — the primary benchmark for comparing energy performance across buildings of different sizes and types.' },
      { term: 'Energy Signature', definition: 'The characteristic pattern of a facility\'s energy consumption over time — its unique behavioral fingerprint that makes anomaly detection possible.' },
      { term: 'Baseload', definition: 'The minimum energy consumption a facility maintains regardless of operational hours or occupancy — represents continuously operating systems (servers, refrigeration, lighting in 24/7 spaces).' },
    ],
    concepts: [
      { title: 'What Energy Data Reveals', body: 'A utility bill tells you what you paid. An energy intelligence dataset tells you: which systems consumed how much energy and when, which consumption patterns deviate from established norms, which operational changes produced energy consequences, where efficiency opportunities are quantifiable, and where compliance obligations are at risk. CTS™ treats energy data as a multi-system intelligence source — not just a cost metric.' },
      { title: 'Energy Baseline and Signature', body: 'Every facility has a unique energy signature — the characteristic pattern of its consumption over daily, weekly, and seasonal cycles. CTS™ establishes this signature through 12–24 months of interval energy data (15-minute or hourly) and builds three baseline components: (1) Baseload — minimum consumption during unoccupied hours. (2) Occupied load profile — energy consumption pattern during operational hours, segmented by day type and season. (3) Weather regression — the relationship between energy consumption and outdoor temperature, expressed as a regression model that allows energy performance to be compared across seasons with different weather.' },
      { title: 'EUI as CTS™ Criterion Input', body: 'Energy Use Intensity is used in CTS™ as an input to the Efficiency criterion for energy-consuming systems. ENERGY STAR median EUI by facility type provides the compliance benchmark: hospitals (~250 kBtu/sf/yr), office buildings (~70 kBtu/sf/yr), schools (~55 kBtu/sf/yr), warehouses (~30 kBtu/sf/yr). A facility at double the median EUI for its type has a significant efficiency finding regardless of what individual systems show — the portfolio-level inefficiency signals that one or more major systems are significantly underperforming.' },
    ],
    strategies: [
      'Establish the 12-month energy baseline before conducting equipment-level assessments — the baseline tells you where to look.',
      'Treat energy anomalies as assessment triggers, not just operational alerts — an unexplained 8% consumption increase is a CTS™ finding waiting to be classified.',
      'Use EUI benchmarking to set client expectations before conducting system-level assessments — "your building uses 40% more energy than comparable facilities" frames the value of what you\'re about to find.',
    ],
    practiceExample: {
      domain: 'Energy Management — Urban Office Portfolio',
      scenario: 'A real estate company manages a portfolio of 8 office buildings ranging from 45,000 to 280,000 SF. They receive a single consolidated utility bill showing total energy spend of $2.4M/year. They have never analyzed consumption at the building or system level.',
      application: 'Design the energy intelligence baseline program: request 24 months of interval data (15-min) from utilities for each building, calculate EUI for each building and compare to ENERGY STAR median for office (70 kBtu/sf/yr), identify the 2–3 buildings with the highest EUI deviation as highest-priority assessment targets, build energy signature profiles for each building to enable anomaly detection going forward.',
      expectedOutcome: 'Portfolio-level energy intelligence baseline revealing which buildings are performing worst relative to type benchmark — the first CTS™ Assess phase output that directs system-level investigation.',
    },
    quizId: 'quiz-ei-1',
  },
  {
    id: 'ei-2',
    courseId: 'energy-intelligence',
    number: 2,
    title: 'Energy Criteria & Assessment Framework',
    subtitle: 'Applying CTS™ Five Criteria to Energy Systems',
    estimatedMinutes: 40,
    overview:
      'Applying CTS™ criteria to energy systems requires understanding how energy performance maps to efficiency, compliance, reliability, lifecycle position, and risk. This module builds the energy-specific scoring rubrics for each criterion and demonstrates their application.',
    keyTerms: [
      { term: 'Energy Efficiency Gap', definition: 'The difference between a system\'s current energy performance and its design or benchmark target, expressed as a percentage of excess consumption.' },
      { term: 'Carbon Compliance', definition: 'Compliance obligations related to greenhouse gas emissions from energy consumption — increasingly relevant for commercial and government facilities under state and local climate regulations.' },
      { term: 'Peak Demand', definition: 'The maximum rate of energy consumption during a billing period — often carrying demand charges that exceed the commodity energy cost.' },
    ],
    concepts: [
      { title: 'Efficiency Criterion for Energy Systems', body: 'Energy efficiency in CTS™ is assessed at two levels: system-level (kW/ton for cooling, AFUE for heating, W/SF for lighting) and portfolio-level (EUI vs. type benchmark). System-level efficiency is compared against design specification adjusted for lifecycle position. Portfolio-level efficiency is compared against ENERGY STAR or equivalent benchmarks. A building at the 50th percentile EUI for its type scores approximately 65 on the CTS™ Efficiency criterion — in the Watchlist range, indicating meaningful improvement opportunity. The 75th percentile scores approximately 80 (Optimal). The 90th percentile scores approximately 92 (Exceeding Standard).' },
      { title: 'Compliance Criterion for Energy Systems', body: 'Energy compliance operates across multiple layers simultaneously: ENERGY STAR certification thresholds (where applicable), Local Law 97 or equivalent carbon emission limits (NYC and expanding), ASHRAE 90.1 for equipment replacements, LEED or green building standard requirements (where certified), utility incentive program participation requirements, and state/federal reporting mandates. Non-compliance at any layer creates a compliance finding regardless of efficiency performance. Carbon compliance is the fastest-growing compliance dimension — practitioners must track local legislation.' },
      { title: 'Risk Criterion for Energy Systems', body: 'Energy risk in CTS™ covers three dimensions: (1) Financial risk — exposure to demand charges, carbon penalties, and rate increases without efficiency programs. (2) Compliance risk — regulatory penalties from carbon or energy efficiency non-compliance. (3) Operational risk — dependency on single energy sources without resilience planning. For facilities in deregulated energy markets or climate-regulated jurisdictions, the Risk criterion for energy systems often scores highest in the portfolio — it is frequently the strongest motivator for client action.' },
    ],
    strategies: [
      'Build a compliance calendar for every energy engagement — carbon and energy compliance deadlines are proliferating faster than most facility operators realize.',
      'Always calculate demand charge impact when presenting energy findings — the demand charge ($/kW) often exceeds the commodity charge ($/kWh) in commercial facilities.',
      'Use the Risk criterion to open the conversation about resilience — energy risk assessments naturally lead to backup power, fuel switching, and demand response discussions.',
    ],
    practiceExample: {
      domain: 'Energy Management — Manufacturing Facility Compliance',
      scenario: 'A 400,000 SF manufacturing facility in New York City. Current EUI: 185 kBtu/sf/yr (industrial benchmark median: 95 kBtu/sf/yr). The facility has not assessed its carbon emissions. Local Law 97 penalties begin applying to industrial facilities in 2030.',
      application: 'Score energy criteria: Efficiency (EUI is 95% above median — score 42, Critical range). Compliance (no carbon assessment, LL97 compliance status unknown — score 55, compliance cap applied). Risk (financial exposure to LL97 penalties estimated at $180,000+/year at current efficiency level — score 78, Significant). Composite energy intelligence score: 55 (Critical). Three findings generated: Critical efficiency gap, Compliance gap (LL97 assessment required immediately), Significant financial risk.',
      expectedOutcome: 'CTS™ energy assessment placing this facility in the Critical range — triggering an immediate LL97 compliance assessment and a comprehensive energy intelligence program to document the improvement path.',
    },
    quizId: 'quiz-ei-2',
  },
  {
    id: 'ei-3',
    courseId: 'energy-intelligence',
    number: 3,
    title: 'Consumption Lifecycle & Anomaly Detection',
    subtitle: 'Using Baseline Deviation to Find Intelligence Signals',
    estimatedMinutes: 38,
    overview:
      'Anomaly detection in energy data is the practice of identifying consumption patterns that deviate from the established energy signature in ways that signal equipment degradation, operational changes, or emerging compliance problems. This module builds the CTS™ anomaly detection framework.',
    keyTerms: [
      { term: 'Weather Normalization', definition: 'Adjusting energy consumption data to account for weather variation — making it possible to compare energy performance across seasons and years with different temperatures.' },
      { term: 'Consumption Anomaly', definition: 'An energy consumption pattern that deviates from the weather-normalized baseline beyond the established variance threshold — the primary automated CTS™ assessment trigger for energy systems.' },
      { term: 'Trend Analysis', definition: 'The evaluation of energy consumption data over time to identify gradual degradation patterns that are too small to trigger single-event alerts but significant in aggregate.' },
    ],
    concepts: [
      { title: 'Building the Anomaly Detection Framework', body: 'The CTS™ energy anomaly detection framework has three components: (1) Baseline model — 12-month weather-normalized consumption curve with statistical variance bounds. (2) Threshold triggers — three-level anomaly classification (Advisory: 5–10% deviation from normalized baseline; Significant: 10–20% deviation; Critical: >20% deviation or sudden step-change indicating acute equipment failure). (3) Attribution protocol — when an anomaly is detected, the attribution protocol routes the anomaly signal to the correct system for investigation (HVAC anomalies look different from lighting anomalies, which look different from plug load changes).' },
      { title: 'Gradual vs. Acute Anomalies', body: 'CTS™ distinguishes two anomaly types. Acute anomalies: sudden step-changes in baseline consumption (a chiller running inefficiently due to refrigerant loss, an HVAC system defaulting to 100% heating due to a failed economizer). These are typically large and visible on a monthly bill comparison. Gradual anomalies: slow drift from baseline over months or years (a boiler efficiency declining 0.5% per month due to heat exchanger fouling, a compressed air system leak rate growing gradually). Gradual anomalies are the most dangerous because they are invisible to operators focused on acute events — CTS™ trend analysis exists specifically to catch them.' },
      { title: 'Attribution — Which System Is the Anomaly?', body: 'When the energy baseline model signals an anomaly, the practitioner must attribute it to a specific system. Attribution uses submetering data where available, temporal pattern matching (does the anomaly appear during HVAC operating hours?), weather correlation (does the anomaly only appear on cooling-degree-day days?), and end-use disaggregation (statistical techniques that estimate end-use contribution from whole-building interval data when submetering is unavailable). Attribution converts an energy signal into a system-specific CTS™ assessment trigger.' },
    ],
    strategies: [
      'Build the anomaly detection framework with three threshold levels — a single alarm level produces too many false positives and gets ignored.',
      'Always weather-normalize before comparing months or years — month-over-month comparison without normalization is noise, not intelligence.',
      'When an anomaly is detected, attribute it before presenting it to the client — "your energy went up 12%" with no attribution is an alarm, not intelligence.',
    ],
    practiceExample: {
      domain: 'Energy Management — Mixed-Use Commercial Building',
      scenario: 'A 12-month energy baseline is established for a 120,000 SF mixed-use building. Month 7 shows a 14% above-baseline consumption that is not explained by weather (cooling degree days were actually 8% below the same period last year). Submetering shows the anomaly is concentrated in the east wing mechanical systems.',
      application: 'Classify the anomaly: Significant (14% deviation above weather-normalized baseline). Begin attribution: submetering isolates east wing mechanicals. Temporal pattern: anomaly is present 24 hours/day including unoccupied hours — rules out occupancy-driven causes. Check east wing mechanical schedule: cooling plant in east wing is operating during overnight hours when the building is unoccupied. Root cause hypothesis: cooling controls stuck in occupied mode due to scheduling system failure. CTS™ finding: Significant energy anomaly attributed to east wing cooling controls — initiate Assess phase for HVAC controls.',
      expectedOutcome: 'Anomaly classified as Significant, attributed to cooling controls failure, formal HVAC controls assessment initiated. Estimated additional energy waste: 14% of east wing cooling load × 7 months = approximately $18,000 in excess energy cost identified and eliminated.',
    },
    quizId: 'quiz-ei-3',
  },
  {
    id: 'ei-4',
    courseId: 'energy-intelligence',
    number: 4,
    title: 'Energy Strategy Design',
    subtitle: 'Conservation Hierarchy, Priority Matrix & Implementation Sequencing',
    estimatedMinutes: 42,
    overview:
      'Energy strategy in CTS™ is not a list of efficiency projects — it is a structured, sequenced program that addresses opportunities in a defined order to maximize value, manage risk, and build compounding improvement. This module teaches the CTS™ energy conservation hierarchy and how to translate it into a multi-year strategic plan.',
    keyTerms: [
      { term: 'Conservation Hierarchy', definition: 'The CTS™ priority order for energy strategy: Safety and Compliance → Load Reduction → Operational Efficiency → Equipment Efficiency → Renewable and Resilience.' },
      { term: 'Measure and Verification (M&V)', definition: 'The formal protocol for measuring actual energy savings from implemented efficiency measures — required for incentive program compliance and ROI documentation.' },
      { term: 'Simple Payback Period', definition: 'The time required for energy savings to recover the initial investment — the most widely used screening metric for energy efficiency measures.' },
    ],
    concepts: [
      { title: 'The CTS™ Conservation Hierarchy', body: 'CTS™ energy strategy follows a five-tier hierarchy: Tier 1 — Safety and Compliance (address any energy-related safety hazards or compliance gaps first, always). Tier 2 — Load Reduction (reduce the energy demand before improving how that demand is met — better to reduce demand by 20% first than to install efficient equipment to serve 100% of a reducible demand). Tier 3 — Operational Efficiency (optimize how existing equipment operates before replacing it — controls optimization, scheduling, recommissioning). Tier 4 — Equipment Efficiency (replace equipment that cannot be sufficiently improved operationally). Tier 5 — Renewable and Resilience (add renewable generation and storage after the base load has been reduced and optimized). Violating this hierarchy wastes capital on higher-tier investments when lower-tier work would have been more cost-effective.' },
      { title: 'Load Reduction Before Equipment Replacement', body: 'The most common energy strategy mistake is replacing equipment at full size when load reduction would have allowed a smaller, less expensive replacement. A 500-ton chiller serving a building that could reduce its cooling load by 20% through envelope improvements and controls optimization needs only a 400-ton replacement. The 100-ton difference may represent $200,000 in first cost — before counting the higher efficiency of appropriately-sized equipment. CTS™ always quantifies load reduction potential before scoping equipment replacements.' },
      { title: 'Multi-Year Energy Strategy Sequencing', body: 'A CTS™ energy strategy translates the conservation hierarchy into a time-sequenced plan: Year 1 (Safety/Compliance + highest-ROI operational measures), Year 2 (load reduction and controls optimization), Year 3–4 (equipment efficiency investments sequenced by lifecycle position and payback), Year 5+ (renewable and resilience investments after base efficiency is established). The sequencing is not arbitrary — early measures generate savings that help finance later measures, creating a compounding improvement model.' },
    ],
    strategies: [
      'Always quantify load reduction potential before scoping equipment replacements — the hierarchy is not just methodological principle, it is capital optimization.',
      'Present energy strategies as a multi-year roadmap with cumulative savings projections, not a list of individual projects — the compounding nature of sequential implementation is the most compelling element.',
      'Build M&V requirements into every approved recommendation — documented savings are the program\'s evidence of value.',
    ],
    practiceExample: {
      domain: 'Energy Management — Hotel Complex',
      scenario: 'A 450-room hotel with an EUI of 210 kBtu/sf/yr (ENERGY STAR hotel median: 110 kBtu/sf/yr). Findings: lighting non-compliant with local code (LED retrofit required), kitchen exhaust fans running 24/7 at full speed regardless of cooking load, chiller plant at 16 years old running at 0.78 kW/ton (design spec: 0.62 kW/ton), 15% of guest room HVAC units older than 20 years.',
      application: 'Apply conservation hierarchy: Tier 1 (lighting compliance — immediate), Tier 2 (kitchen exhaust load reduction — demand control ventilation, reduces kitchen cooling load 30%), Tier 3 (chiller controls recommissioning before replacement decision), Tier 4 (chiller replacement assessment after recommissioning establishes true remaining efficiency gap, guest room HVAC replacement program), Tier 5 (rooftop solar feasibility after load is reduced). Sequence into 4-year roadmap with year-by-year savings projections.',
      expectedOutcome: 'A 4-year energy strategy roadmap: Year 1 savings $85,000 (lighting + exhaust controls), Year 2 $140,000 cumulative (chiller recommissioning), Year 3–4 $320,000 cumulative (chiller replacement). Total 4-year avoided cost: $545,000. Investment: $890,000. Simple payback: 6.5 years. This is the document that gets approved at the CFO level.',
    },
    quizId: 'quiz-ei-4',
  },
  {
    id: 'ei-5',
    courseId: 'energy-intelligence',
    number: 5,
    title: 'Compliance Reporting — ENERGY STAR, LEED & Government Standards',
    subtitle: 'Producing Governance-Grade Energy Reports',
    estimatedMinutes: 38,
    overview:
      'Energy compliance reporting is a formal CTS™ governance output. This module covers the major reporting standards — ENERGY STAR Portfolio Manager, LEED for Operations, and government energy mandates — and shows how CTS™ intelligence data is structured to produce compliant, defensible reports.',
    keyTerms: [
      { term: 'ENERGY STAR Portfolio Manager', definition: 'The EPA\'s online benchmarking tool for tracking and reporting building energy and water performance — the most widely used energy compliance platform in the US.' },
      { term: 'LEED O+M', definition: 'LEED for Building Operations and Maintenance — a voluntary certification program that uses ongoing energy and environmental performance data to rate existing buildings.' },
      { term: 'Benchmarking Mandate', definition: 'A local law requiring building owners to report energy consumption annually to a public registry — active in over 30 major US cities with expanding geographic reach.' },
    ],
    concepts: [
      { title: 'ENERGY STAR Portfolio Manager as CTS™ Data Structure', body: 'ENERGY STAR Portfolio Manager is the compliance-grade container for CTS™ energy intelligence data. CTS™ structures energy data to meet Portfolio Manager requirements: 12 months of consecutive utility data (electricity, natural gas, fuel oil, steam — all sources), monthly interval entry or automated utility data connection, building characteristics (area, occupancy hours, occupancy type, computer density for offices, laundry cycles for hotels). A CTS™ energy intelligence program that populates Portfolio Manager monthly has compliance reporting ready at any time — benchmarking mandate submissions become a scheduled export rather than an annual crisis.' },
      { title: 'Government Reporting Requirements', body: 'Federal facilities report under the Federal Energy Management Program (FEMP) with specific EUI targets by facility type. State government facilities operate under state energy office mandates that vary by jurisdiction. Local government facilities are subject to both state requirements and local benchmarking mandates. Healthcare facilities may have Joint Commission-related energy reporting. Military facilities operate under DoD Installation Energy Management standards. CTS™ practitioners working in government contexts must maintain a current compliance calendar for every reporting obligation — missing a government energy report is never an Advisory finding.' },
      { title: 'The CTS™ Compliance Report Package', body: 'A CTS™ energy compliance report package contains: (1) ENERGY STAR score or EUI trend (12-month rolling). (2) Consumption summary by energy type and end use. (3) Weather-normalized comparison to prior year. (4) Compliance status for each applicable mandate. (5) Carbon emissions calculation (Scope 1 and Scope 2 where required). (6) Progress toward defined energy or carbon targets. (7) M&V documentation for implemented efficiency measures. This package, produced quarterly, keeps compliance current and provides the intelligence basis for the annual governance review.' },
    ],
    strategies: [
      'Connect utility accounts to ENERGY STAR Portfolio Manager automation — manual monthly data entry is the most common compliance failure mode.',
      'Build the compliance calendar for every client before completing the Assess phase — knowing what reports are due and when is part of the intelligence product you deliver.',
      'Carbon emissions reporting (Scope 1 and 2) is the fastest-growing compliance dimension — build CTS™ energy intelligence to produce emissions data from the start, not as a retroactive addition.',
    ],
    practiceExample: {
      domain: 'Energy Management — Municipal Government Portfolio',
      scenario: 'A mid-size city government manages 42 buildings including city hall, 6 community centers, 12 fire stations, 8 libraries, and 16 maintenance/operations facilities. They have a state mandate to report energy consumption annually and a city council resolution to reduce municipal energy use 30% by 2035. They have never used Portfolio Manager.',
      application: 'Design the CTS™ compliance reporting program: establish Portfolio Manager accounts for all 42 buildings, connect automated utility data feeds for each, assign CTS™ assessors to each building category to establish EUI baselines and set 2035 target EUIs by type, create a compliance reporting calendar (state mandate submission deadline, city council quarterly progress report), and build the M&V framework for tracking efficiency measure savings against the 30% reduction target.',
      expectedOutcome: 'A Portfolio Manager-based compliance reporting program that converts 42 buildings from manual annual reporting to automated monthly intelligence — with progress tracking toward the 2035 reduction commitment built into the CTS™ governance cadence.',
    },
    quizId: 'quiz-ei-5',
  },
];

export function getModulesForCourse(courseId: string): CourseModule[] {
  return MODULES.filter(m => m.courseId === courseId).sort((a, b) => a.number - b.number);
}

export function getModule(moduleId: string): CourseModule | undefined {
  return MODULES.find(m => m.id === moduleId);
}
