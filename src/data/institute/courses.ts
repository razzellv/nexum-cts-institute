export type CourseAccessTier = 'explorer' | 'professional' | 'practitioner';

export interface Course {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  domain: string;
  domainLabel: string;
  description: string;
  objectives: string[];
  durationHours: number;
  moduleCount: number;
  accessTier: CourseAccessTier;
  isCertificationExam?: boolean;
  prerequisites?: string[];
  badge: 'teal' | 'blue' | 'gold' | 'orange' | 'green' | 'purple';
}

export const COURSES: Course[] = [
  {
    id: 'cts-foundations',
    number: 1,
    title: 'CTS™ Foundations',
    subtitle: 'The Methodology, Philosophy & Framework',
    domain: 'facility-management',
    domainLabel: 'Facility Management',
    description:
      'Establish the conceptual foundation of the CTS™ methodology. Understand why Operational Intelligence™ exists, how it differs from traditional facility management, and how the CTS™ framework governs every assessment, decision, and outcome in the Nexum Suum ecosystem.',
    objectives: [
      'Define the CTS™ methodology and its governing principles',
      'Distinguish Operational Intelligence™ from reactive facility management',
      'Identify the five CTS™ assessment criteria and their application',
      'Describe the role of Operational Memory™ and Decision History™',
      'Map the full CTS™ lifecycle from discovery to governance',
    ],
    durationHours: 3.5,
    moduleCount: 5,
    accessTier: 'explorer',
    badge: 'teal',
  },
  {
    id: 'assessment-methodology',
    number: 2,
    title: 'Assessment Methodology & Criteria',
    subtitle: 'How CTS™ Scores, Prioritizes & Recommends',
    domain: 'boiler-systems',
    domainLabel: 'Boiler Systems',
    description:
      'Master the CTS™ assessment framework. Learn how to identify assessment triggers, apply scoring criteria to real systems, conduct gap analysis, and generate defensible recommendations using boiler systems as the primary example domain.',
    objectives: [
      'Apply the five CTS™ assessment criteria to a physical system',
      'Conduct a structured gap analysis from baseline to target state',
      'Score system performance using the CTS™ 0–100 scoring matrix',
      'Generate prioritized recommendations with evidence chains',
      'Document findings in a formal assessment record',
    ],
    durationHours: 4.5,
    moduleCount: 5,
    accessTier: 'explorer',
    badge: 'blue',
    prerequisites: ['cts-foundations'],
  },
  {
    id: 'lifecycle-intelligence',
    number: 3,
    title: 'Lifecycle Intelligence & Process Cycles',
    subtitle: 'Positioning Intelligence Across Asset Life',
    domain: 'chiller-cooling',
    domainLabel: 'Chiller & Cooling Systems',
    description:
      'Learn to map assets through their full lifecycle and identify where CTS™ intelligence applies at each stage. Using chiller and cooling systems as the domain, students master the concept of process cycles — repeating operational loops that CTS™ monitors, optimizes, and governs.',
    objectives: [
      'Map an asset through its complete lifecycle: install → operate → maintain → optimize → replace',
      'Identify and name the process cycles of a chiller system',
      'Position CTS™ assessment triggers at each lifecycle stage',
      'Distinguish predictive intelligence from reactive maintenance models',
      'Design a lifecycle monitoring plan for a complex cooling system',
    ],
    durationHours: 4.5,
    moduleCount: 5,
    accessTier: 'professional',
    badge: 'blue',
    prerequisites: ['assessment-methodology'],
  },
  {
    id: 'operational-phases',
    number: 4,
    title: 'Operational Phases & Governance',
    subtitle: 'Assess → Design → Execute → Govern',
    domain: 'hvac-systems',
    domainLabel: 'HVAC Systems',
    description:
      'The four CTS™ operational phases define how intelligence moves from observation to outcome. Using HVAC systems as the domain, students learn to execute each phase, document transitions, and build the governance record that makes operational decisions defensible.',
    objectives: [
      'Execute the Assess phase: data collection, source validation, baseline establishment',
      'Execute the Design phase: recommendation framing, decision documentation',
      'Execute the Execute phase: implementation tracking, variance monitoring',
      'Execute the Govern phase: outcome recording, learning feedback, policy update',
      'Build a complete four-phase record for an HVAC system',
    ],
    durationHours: 5.5,
    moduleCount: 5,
    accessTier: 'professional',
    badge: 'gold',
    prerequisites: ['lifecycle-intelligence'],
  },
  {
    id: 'energy-intelligence',
    number: 5,
    title: 'Energy Intelligence & Strategy',
    subtitle: 'From Consumption Data to Strategic Decisions',
    domain: 'energy-management',
    domainLabel: 'Energy Management',
    description:
      'Energy data is one of the richest intelligence inputs available to facility operators. This course teaches CTS™ practitioners how to classify energy data, identify strategic patterns, design energy intelligence frameworks, and produce compliance-grade reporting.',
    objectives: [
      'Classify energy consumption data by source, type, and significance',
      'Apply CTS™ criteria to energy systems: efficiency, compliance, lifecycle position',
      'Detect anomalies using baseline deviation and trend analysis',
      'Design a tiered energy strategy using CTS™ conservation hierarchy',
      'Produce ENERGY STAR, LEED, or government-grade compliance reports from CTS™ data',
    ],
    durationHours: 4.5,
    moduleCount: 5,
    accessTier: 'professional',
    badge: 'teal',
    prerequisites: ['operational-phases'],
  },
  {
    id: 'manufacturing-industrial',
    number: 6,
    title: 'Manufacturing & Industrial Application',
    subtitle: 'CTS™ at Industrial Scale and Complexity',
    domain: 'manufacturing',
    domainLabel: 'Manufacturing Systems',
    description:
      'Industrial and manufacturing environments present multi-system complexity, safety criticality, and production dependencies that test the limits of traditional management approaches. This course applies CTS™ at industrial scale, integrating safety intelligence, quality management, and production system governance.',
    objectives: [
      'Apply CTS™ criteria to production systems using OEE, downtime, and yield metrics',
      'Integrate OSHA safety data as a CTS™ intelligence input',
      'Build quality management intelligence flows from floor data to governance record',
      'Design escalation protocols and shutdown decision frameworks using CTS™',
      'Document a complete industrial assessment with multi-system interdependency mapping',
    ],
    durationHours: 5.5,
    moduleCount: 5,
    accessTier: 'practitioner',
    badge: 'orange',
    prerequisites: ['energy-intelligence'],
  },
  {
    id: 'advanced-engineering',
    number: 7,
    title: 'Advanced CTS™: Engineering Integration',
    subtitle: 'Multi-System Intelligence & Strategic Architecture',
    domain: 'engineering',
    domainLabel: 'Engineering Systems',
    description:
      'The most advanced course in the CTS™ methodology track. Students design the complete intelligence architecture for a multi-system engineering environment, mapping interdependencies, designing long-cycle assessment frameworks, and producing the governance structure for a full facility intelligence program.',
    objectives: [
      'Map multi-system interdependencies using CTS™ relationship diagrams',
      'Design assessment criteria for engineering systems with long operational cycles',
      'Build a complete facility intelligence architecture from scratch',
      'Apply advanced governance protocols to capital equipment decisions',
      'Produce a practitioner-grade CTS™ program design document',
    ],
    durationHours: 7,
    moduleCount: 6,
    accessTier: 'practitioner',
    badge: 'purple',
    prerequisites: ['manufacturing-industrial'],
  },
  {
    id: 'cts-practitioner-exam',
    number: 8,
    title: 'CTS™ Practitioner Certification Exam',
    subtitle: 'Formal Evaluation — Submitted to OI™ HQ',
    domain: 'all',
    domainLabel: 'All Domains',
    description:
      'The formal CTS™ Practitioner Certification Exam covers all seven course domains. Responses are submitted to OI™ HQ for evaluation by a certified CTS™ instructor. Upon passing, students receive the CTS™ Certified Practitioner™ credential — a formal Nexum Suum certification they may present to their organization.',
    objectives: [
      'Demonstrate mastery of CTS™ methodology across all seven course domains',
      'Apply assessment criteria, scoring, and gap analysis in timed conditions',
      'Produce governance-quality documentation under exam conditions',
      'Receive formal evaluation from a CTS™ certified instructor via OI™ HQ',
      'Earn the CTS™ Certified Practitioner™ credential',
    ],
    durationHours: 2,
    moduleCount: 1,
    accessTier: 'practitioner',
    isCertificationExam: true,
    badge: 'gold',
    prerequisites: ['advanced-engineering'],
  },
];

export function getCourse(id: string): Course | undefined {
  return COURSES.find(c => c.id === id);
}

export function getCoursesByTier(tier: CourseAccessTier): Course[] {
  const order: CourseAccessTier[] = ['explorer', 'professional', 'practitioner'];
  const tierIndex = order.indexOf(tier);
  return COURSES.filter(c => order.indexOf(c.accessTier) <= tierIndex);
}

export const TIER_COURSE_ACCESS: Record<CourseAccessTier, number[]> = {
  explorer:     [1, 2],
  professional: [1, 2, 3, 4, 5],
  practitioner: [1, 2, 3, 4, 5, 6, 7, 8],
};
