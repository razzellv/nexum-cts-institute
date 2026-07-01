export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  moduleId: string;
  passingScore: number;
  estimatedMinutes: number;
  questions: QuizQuestion[];
}

export const QUIZZES: Quiz[] = [
  {
    id: 'quiz-cts-f-1',
    moduleId: 'cts-f-1',
    passingScore: 70,
    estimatedMinutes: 8,
    questions: [
      {
        id: 'q1', question: 'What is the primary purpose of CTS™ in the Nexum Suum ecosystem?',
        options: ['To replace CMMS software with a new work order system', 'To convert raw facility data into structured, governed, defensible intelligence', 'To automate all maintenance scheduling across facility systems', 'To provide building management system integration'],
        correctIndex: 1,
        explanation: 'CTS™ is the governing methodology for Operational Intelligence™ — it converts raw data into structured, scored, documented intelligence that makes operational decisions defensible.',
      },
      {
        id: 'q2', question: 'Which of the following best describes the difference between CTS™ and traditional facility management?',
        options: ['CTS™ uses newer software tools than traditional FM', 'Traditional FM is proactive while CTS™ is reactive', 'CTS™ is intelligence-centric and lifecycle-driven while traditional FM is asset-centric and event-driven', 'CTS™ focuses only on compliance while traditional FM covers all operations'],
        correctIndex: 2,
        explanation: 'Traditional FM responds to events (break-fix). CTS™ is lifecycle-driven and intelligence-centric — every system is continuously assessed against defined criteria with all decisions formally recorded.',
      },
      {
        id: 'q3', question: 'How many governing principles form the foundation of CTS™?',
        options: ['Three', 'Four', 'Five', 'Seven'],
        correctIndex: 2,
        explanation: 'The five CTS™ governing principles require: evidence chains for every decision, scoring against defined criteria, traceable source data, recorded decision rationale, and outcome comparison with projections.',
      },
      {
        id: 'q4', question: 'What is Operational Memory™?',
        options: ['A type of computer RAM used in OI™ HQ servers', 'The cumulative, structured knowledge base of all assessments, decisions, and outcomes in a CTS™ program', 'A backup system for CMMS data', 'A practitioner\'s personal notes about a facility'],
        correctIndex: 1,
        explanation: 'Operational Memory™ is the persistent intelligence record — not a log of events but a structured knowledge base that makes organizational intelligence cumulative and searchable over time.',
      },
      {
        id: 'q5', question: 'A new practitioner inheriting a facility with mature Operational Memory™ would primarily benefit from:',
        options: ['Not needing to conduct any new assessments', 'Access to years of structured intelligence rather than just maintenance logs', 'Automatic generation of work orders for all findings', 'Reduced need to interact with facility operators'],
        correctIndex: 1,
        explanation: 'Mature Operational Memory™ gives a new practitioner immediate access to structured historical intelligence — assessment records, decision history, and outcome data — dramatically reducing the discovery phase required.',
      },
    ],
  },
  {
    id: 'quiz-cts-f-2',
    moduleId: 'cts-f-2',
    passingScore: 70,
    estimatedMinutes: 10,
    questions: [
      {
        id: 'q1', question: 'In CTS™, the Compliance criterion is best described as:',
        options: ['A suggestion to meet regulatory requirements when budget allows', 'A binary threshold with a severity gradient across multiple regulatory layers', 'Only applicable to systems with EPA permits', 'A score derived primarily from insurance inspection reports'],
        correctIndex: 1,
        explanation: 'Compliance in CTS™ is binary (compliant/non-compliant) at each regulatory standard, but operates across multiple layers simultaneously. Non-compliance at any layer generates an automatic escalation flag.',
      },
      {
        id: 'q2', question: 'The Lifecycle Position criterion differs from the other four criteria because it:',
        options: ['Has a higher maximum score of 150', 'Is only assessed once during an equipment\'s life', 'Functions as an interpretive modifier that affects how other scores are understood', 'Is scored by a third-party inspector, not the CTS™ practitioner'],
        correctIndex: 2,
        explanation: 'Lifecycle Position is not a score — it is a modifier. A system in the Decline phase is expected to show reduced efficiency and reliability, and CTS™ adjusts scoring expectations accordingly rather than penalizing normal age-related decline.',
      },
      {
        id: 'q3', question: 'A composite CTS™ score below 50 indicates:',
        options: ['The system is performing above standard', 'Watchlist status requiring monitoring', 'A formal assessment and recommendation requirement is triggered', 'The system should be replaced immediately without further assessment'],
        correctIndex: 2,
        explanation: 'Scores below 50 are in the Critical range and trigger formal assessment and recommendation requirements. Replacement is one possible recommendation, but the process must follow the full CTS™ assessment methodology.',
      },
      {
        id: 'q4', question: 'Which criterion most directly drives the Replace vs. Optimize decision for a facility asset?',
        options: ['Efficiency', 'Compliance', 'Lifecycle Position', 'Risk'],
        correctIndex: 2,
        explanation: 'Lifecycle Position most directly drives Replace vs. Optimize decisions. A system at end-of-life (18+ years for most equipment classes) triggers an automatic Replace assessment in parallel with the current assessment.',
      },
      {
        id: 'q5', question: 'In CTS™ risk scoring, Risk is calculated as:',
        options: ['The cost of the most recent emergency repair', 'The probability of failure multiplied by the consequence of failure', 'The number of unplanned work orders in the last 12 months', 'The difference between efficiency score and compliance score'],
        correctIndex: 1,
        explanation: 'CTS™ Risk is the product of consequence (safety, operational, financial, compliance) and probability (derived from reliability data and lifecycle position). Both factors must be present to produce a defensible risk score.',
      },
    ],
  },
  {
    id: 'quiz-cts-f-3',
    moduleId: 'cts-f-3',
    passingScore: 70,
    estimatedMinutes: 8,
    questions: [
      {
        id: 'q1', question: 'How many required fields does every Decision History™ record contain?',
        options: ['Three', 'Five', 'Seven', 'Ten'],
        correctIndex: 2,
        explanation: 'Every Decision History™ record has seven fields: Decision Statement, Decision Date, Decision Maker(s), CTS™ Stage, Evidence Chain, Projected Outcome, and Actual Outcome.',
      },
      {
        id: 'q2', question: 'Decision Variance in CTS™ refers to:',
        options: ['The difference between two practitioners\' scores for the same system', 'The gap between a projected outcome and the actual outcome of a decision', 'The range of acceptable scores within a criterion', 'The time difference between a trigger event and assessment initiation'],
        correctIndex: 1,
        explanation: 'Decision Variance is the difference between projected and actual outcomes. Both positive and negative variance carry learning value and feed the improvement of future projections.',
      },
      {
        id: 'q3', question: 'When should a Decision History™ record be created?',
        options: ['After the action has been completed and the outcome is known', 'At the time the decision is made', 'During the annual governance review', 'When the client requests documentation'],
        correctIndex: 1,
        explanation: 'Decision History™ records must be created at the time of the decision. Retrofitting records after the outcome is known is unreliable and legally problematic — it removes the governance value of the prospective projection.',
      },
      {
        id: 'q4', question: 'The Projected Outcome field in a Decision History™ record should be stated as:',
        options: ['A general direction of improvement (e.g., "should improve efficiency")', 'A measurable, time-bound statement (e.g., "Expected 12% energy reduction within 90 days")', 'A qualitative description of the desired state', 'The practitioner\'s professional opinion without specific metrics'],
        correctIndex: 1,
        explanation: 'Projected outcomes must be measurable and time-bound to create a defensible comparison with actual outcomes. Vague projections cannot produce meaningful Decision Variance data.',
      },
      {
        id: 'q5', question: 'A Decision History™ record is considered closed when:',
        options: ['The action has been implemented', 'The client signs off on the recommendation', 'The outcome has been measured and Decision Variance calculated', 'The practitioner submits the record to OI™ HQ'],
        correctIndex: 2,
        explanation: 'A Decision History™ record remains open until the actual outcome is measured and variance from the projection is calculated. Closing a record before measuring the outcome defeats the governance purpose of the record.',
      },
    ],
  },
  {
    id: 'quiz-cts-f-4',
    moduleId: 'cts-f-4',
    passingScore: 70,
    estimatedMinutes: 10,
    questions: [
      {
        id: 'q1', question: 'The output of the CTS™ Discovery stage is:',
        options: ['A complete scoring of all five criteria', 'A Data Inventory — a structured record of what intelligence exists and what gaps must be filled', 'A list of recommendations for the client', 'A replacement schedule for all aging equipment'],
        correctIndex: 1,
        explanation: 'Discovery produces a Data Inventory, not scores or recommendations. Assessments built without a complete data inventory produce findings that cannot be defended.',
      },
      {
        id: 'q2', question: 'In what order should the CTS™ lifecycle stages be executed?',
        options: ['Gap Analysis → Discovery → Baseline → Recommendations → Governance', 'Discovery → Baseline → Gap Analysis → Recommendations → Execution → Governance', 'Baseline → Discovery → Gap Analysis → Governance → Execution', 'Recommendations → Baseline → Gap Analysis → Discovery → Governance'],
        correctIndex: 1,
        explanation: 'The CTS™ lifecycle follows: Discovery (catalog data sources), Baseline Establishment (current state snapshot), Gap Analysis (comparison to standard), Recommendation Design (structured action plan), Execution (implementation tracking), Governance (ongoing intelligence program).',
      },
      {
        id: 'q3', question: 'A baseline established in a CTS™ assessment is best described as:',
        options: ['A temporary working document that is replaced at the next assessment', 'A permanent documented truth about a facility at a specific moment in time that becomes part of Operational Memory™', 'An estimate of what conditions probably were before the assessment', 'A target state for the facility to achieve within 12 months'],
        correctIndex: 1,
        explanation: 'The baseline is permanent and becomes part of Operational Memory™. It is the reference point against which all future assessments are compared — its permanence is what makes it valuable for tracking improvement over time.',
      },
      {
        id: 'q4', question: 'Governance in CTS™ is best described as:',
        options: ['The final stage of a CTS™ engagement after which the practitioner\'s work is complete', 'The ongoing, permanent operating mode of a mature CTS™ program', 'A regulatory compliance review conducted annually', 'The process of obtaining client signature on the assessment record'],
        correctIndex: 1,
        explanation: 'Governance is not an ending — it is the permanent state of a mature CTS™ program. Once established, governance continues indefinitely: criteria are scored on defined intervals, Decision History™ records are closed, and Operational Memory™ is continuously updated.',
      },
      {
        id: 'q5', question: 'What is the most critical failure a CTS™ practitioner can make in the Discovery phase?',
        options: ['Spending too much time interviewing operators', 'Cataloging data sources that are older than 2 years', 'Skipping Discovery and beginning Gap Analysis directly from available data', 'Using electronic records instead of paper records'],
        correctIndex: 2,
        explanation: 'Skipping Discovery is the most critical failure — assessments built on incomplete data inventories produce findings that cannot be defended. Undisclosed data gaps that are later discovered destroy assessment credibility.',
      },
    ],
  },
  {
    id: 'quiz-cts-f-5',
    moduleId: 'cts-f-5',
    passingScore: 70,
    estimatedMinutes: 8,
    questions: [
      {
        id: 'q1', question: 'The relationship between CTS™ and OI™ HQ is best described as:',
        options: ['OI™ HQ is a separate product unrelated to CTS™', 'OI™ HQ is the platform where CTS™ is executed at enterprise scale', 'CTS™ is a module inside OI™ HQ that can be turned on or off', 'OI™ HQ manages the software while CTS™ manages the hardware'],
        correctIndex: 1,
        explanation: 'OI™ HQ is the command center platform where CTS™ assessments are executed, Decision History™ is maintained, and Operational Memory™ is stored. The methodology and the platform are distinct — CTS™ governs what happens inside OI™ HQ.',
      },
      {
        id: 'q2', question: 'The FI™ Platform\'s primary role in the CTS™ ecosystem is to:',
        options: ['Replace OI™ HQ for smaller facilities', 'Collect and manage the operational data that feeds CTS™ assessments', 'Train practitioners on the CTS™ methodology', 'Conduct formal certifications for CTS™ practitioners'],
        correctIndex: 1,
        explanation: 'FI™ is the operational execution layer where daily work orders, asset records, and compliance data are collected. This operational data is what feeds CTS™ assessments in OI™ HQ.',
      },
      {
        id: 'q3', question: 'What is the Controller™ in the Nexum Suum ecosystem?',
        options: ['A hardware device that controls HVAC systems', 'The governance layer in OI™ HQ that manages the relationship between the intelligence command center and FI™', 'A practitioner role responsible for overseeing other practitioners', 'The AI engine that scores criterion data automatically'],
        correctIndex: 1,
        explanation: 'Controller™ is the governance layer within OI™ HQ that manages the OI-to-FI relationship — ensuring that intelligence decisions from OI™ HQ are properly directed to FI™ for operational execution.',
      },
      {
        id: 'q4', question: 'A CTS™ Certified Practitioner™ credential primarily distinguishes the holder by:',
        options: ['Their years of experience in the facility management industry', 'Their verified ability to apply the CTS™ methodology to real facility environments with governance-quality outcomes', 'Their software certification in OI™ HQ platform tools', 'Their employment with Nexum Suum Incorporated'],
        correctIndex: 1,
        explanation: 'The CTS™ Certified Practitioner™ credential certifies methodology competency — the ability to conduct assessments, document findings, and produce governance-quality Decision History™ records — not software proficiency or years of experience.',
      },
      {
        id: 'q5', question: 'When presenting CTS™ to a CFO, the most effective framing is:',
        options: ['A technology platform that automates facility management', 'A governance and defensibility framework that makes operational decisions traceable and improvable over time', 'A compliance tool that ensures regulatory adherence', 'A maintenance management system that reduces work order costs'],
        correctIndex: 1,
        explanation: 'CFOs respond to governance and defensibility. CTS™ converts facility operations from a liability (decisions made without records) to an asset (decisions documented with evidence, outcomes tracked, and learning embedded). This framing addresses CFO concerns about risk, audit exposure, and capital decision quality.',
      },
    ],
  },
  {
    id: 'quiz-am-1',
    moduleId: 'am-1',
    passingScore: 70,
    estimatedMinutes: 8,
    questions: [
      {
        id: 'q1', question: 'How many classes of CTS™ assessment triggers exist?',
        options: ['Three', 'Four', 'Five', 'Six'],
        correctIndex: 2,
        explanation: 'There are five trigger classes: Scheduled Interval, Performance Threshold Breach, Regulatory Event, Lifecycle Milestone, and Client Request.',
      },
      {
        id: 'q2', question: 'A boiler serving a hospital with a fuel consumption increase of 9% over 45 days with no corresponding load increase should trigger which class of assessment?',
        options: ['Scheduled Interval', 'Performance Threshold Breach', 'Client Request', 'Lifecycle Milestone'],
        correctIndex: 1,
        explanation: 'A fuel consumption increase exceeding 8% above seasonal baseline without a corresponding load increase is a defined Performance Threshold Breach trigger for boiler systems.',
      },
      {
        id: 'q3', question: 'High-risk systems (Risk criterion > 70) require CTS™ assessment:',
        options: ['Annually', 'Semi-annually', 'Quarterly', 'Monthly'],
        correctIndex: 2,
        explanation: 'High-risk systems require quarterly assessments. Moderate-risk systems assess semi-annually; low-risk systems assess annually.',
      },
      {
        id: 'q4', question: 'When multiple assessment triggers are active simultaneously, the practitioner should:',
        options: ['Wait for the scheduled interval to conduct one combined assessment', 'Choose only the highest-priority trigger and initiate one assessment', 'Document all active triggers and assign priority based on the highest-urgency trigger, initiating assessment immediately', 'Contact the client and let them choose which trigger to respond to'],
        correctIndex: 2,
        explanation: 'Multiple concurrent triggers increase urgency. All triggers must be documented in the assessment initiation record, and priority is assigned based on the highest-urgency trigger — which determines the assessment timeline.',
      },
      {
        id: 'q5', question: 'Which lifecycle milestone automatically triggers a Replace assessment in parallel with the current assessment for boiler systems?',
        options: ['10 years of age', '15 years of age', '18 years of age', '20 years of age'],
        correctIndex: 2,
        explanation: 'Systems at 18+ years of age are in the End-of-Life lifecycle stage, which automatically initiates a Replace assessment in parallel with the current performance assessment.',
      },
    ],
  },
  {
    id: 'quiz-am-2',
    moduleId: 'am-2',
    passingScore: 70,
    estimatedMinutes: 10,
    questions: [
      {
        id: 'q1', question: 'In the CTS™ data source hierarchy, calibrated instrument readings (combustion analyzers, fuel meters) are classified as:',
        options: ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4'],
        correctIndex: 0,
        explanation: 'Metered and sensor data from calibrated instruments is Tier 1 — the highest-reliability source. Calibration status must be verified; out-of-calibration instruments are downgraded to Tier 3.',
      },
      {
        id: 'q2', question: 'A state boiler inspection certificate is classified as which data source tier?',
        options: ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4'],
        correctIndex: 1,
        explanation: 'Regulatory inspection records produced by credentialed inspectors under regulatory authority are Tier 2. An inspection certificate older than 13 months is flagged as stale.',
      },
      {
        id: 'q3', question: 'An operator with 22 years of experience who can describe the behavioral patterns of equipment before failure provides data classified as:',
        options: ['Tier 1 due to their extensive experience', 'Tier 2 because it supplements inspection records', 'Tier 3 if cross-validated against maintenance logs', 'Tier 4 — operator testimony always regardless of experience'],
        correctIndex: 3,
        explanation: 'Operator testimony is always Tier 4 regardless of the operator\'s experience or knowledge. It supplements but never replaces documented data from higher tiers.',
      },
      {
        id: 'q4', question: 'What is the minimum preferred CMMS work order history period for a CTS™ boiler assessment?',
        options: ['6 months', '12 months', '24 months', '36 months'],
        correctIndex: 2,
        explanation: 'CTS™ prefers at least 24 months of CMMS history for boiler assessments to identify meaningful patterns in unplanned work, repair types, and maintenance discipline.',
      },
      {
        id: 'q5', question: 'If a data gap exists for a required assessment input, the practitioner should:',
        options: ['Estimate the missing data from comparable equipment benchmarks and proceed', 'Decline to conduct the assessment until the data is available', 'Document the gap explicitly in the assessment record and note its impact on scoring confidence', 'Substitute operator testimony for the missing data as an equivalent source'],
        correctIndex: 2,
        explanation: 'Data gaps must be explicitly documented in the assessment record with their impact on scoring confidence. Undisclosed gaps that are later discovered destroy assessment credibility. Estimation without disclosure is a methodology violation.',
      },
    ],
  },
  {
    id: 'quiz-am-3',
    moduleId: 'am-3',
    passingScore: 70,
    estimatedMinutes: 10,
    questions: [
      {
        id: 'q1', question: 'The default weighting for the Compliance criterion in a boiler system assessment is:',
        options: ['0.20', '0.25', '0.30', '0.35'],
        correctIndex: 2,
        explanation: 'Default boiler weighting: Compliance 0.30, Efficiency 0.25, Reliability 0.25, Risk 0.20. Compliance carries the highest weight because non-compliance triggers regulatory consequences regardless of other performance metrics.',
      },
      {
        id: 'q2', question: 'When can the weighting factors for a CTS™ assessment be adjusted?',
        options: ['After criterion scores are calculated if they seem too low', 'Before scoring begins, with practitioner approval and documentation', 'At any time during the assessment to reflect new information', 'Only by the client based on their priorities'],
        correctIndex: 1,
        explanation: 'Weighting must be locked before calculating criterion scores. Changing weights after seeing scores is a governance violation — it compromises the objectivity and defensibility of the assessment.',
      },
      {
        id: 'q3', question: 'A boiler system at 20 years of age (End-of-Life lifecycle stage) with a combustion efficiency of 81% would receive an Efficiency criterion score of approximately:',
        options: ['90 — efficiency is still above the 80% threshold', '76 — scored against design target with End-of-Life lifecycle context', '55 — End-of-Life position significantly penalizes all criterion scores', '81 — the score equals the efficiency percentage directly'],
        correctIndex: 1,
        explanation: 'Efficiency is scored against the design target and lifecycle position. At 81% with a design target of ~85%, the raw gap produces a score around 76, with the End-of-Life lifecycle position confirming the Declining modifier context rather than further penalizing.',
      },
      {
        id: 'q4', question: 'If a boiler\'s safety valve has not been tested within the required 12-month interval, what is the maximum possible Compliance criterion score?',
        options: ['100 if all other compliance items are met', '90 with a 10-point deduction for the overdue test', '80 reflecting the missing test item weighting', '60 — missing required items cap compliance at 60 regardless of other items'],
        correctIndex: 3,
        explanation: 'Any required compliance item that is missing caps the compliance score at 60 regardless of all other items being met. This ensures that critical compliance failures cannot be offset by performance on secondary items.',
      },
      {
        id: 'q5', question: 'A Confidence Interval in CTS™ scoring represents:',
        options: ['The practitioner\'s level of professional confidence in their assessment', 'The range around a criterion score reflecting data quality', 'The probability that the system will fail within 12 months', 'The acceptable variance between two practitioners scoring the same system'],
        correctIndex: 1,
        explanation: 'The Confidence Interval reflects data quality: high-quality Tier 1 data produces narrow intervals (e.g., 78 ± 3) while low-quality or sparse data produces wide intervals (e.g., 78 ± 12). Wide intervals must be disclosed and affect recommendation confidence.',
      },
    ],
  },
  {
    id: 'quiz-am-4',
    moduleId: 'am-4',
    passingScore: 70,
    estimatedMinutes: 10,
    questions: [
      {
        id: 'q1', question: 'A Critical Finding in CTS™ classification requires which of the following conditions?',
        options: ['Any criterion score below 75', 'Compliance score below 60, Risk score above 80, or any immediate safety hazard', 'Three or more Significant findings in the same assessment', 'Client request for immediate action'],
        correctIndex: 1,
        explanation: 'Critical findings have specific thresholds: compliance below 60, risk above 80, or any finding involving immediate safety hazard. Composite effects (multiple Significant findings interacting) may also be upgraded to Critical with documented rationale.',
      },
      {
        id: 'q2', question: 'How many required fields does every CTS™ Finding contain?',
        options: ['Four', 'Five', 'Seven', 'Nine'],
        correctIndex: 2,
        explanation: 'Every finding has seven required fields: Finding ID, Criterion, Current Score, Target Score, Gap, Evidence, and Severity Classification. All seven must be present for the finding to be included in a compliant assessment record.',
      },
      {
        id: 'q3', question: 'A Compliance criterion score of 72 that is trending toward non-compliance in 45 days due to an expiring certificate should be classified as:',
        options: ['Critical — any compliance gap is immediately critical', 'Significant — the gap is 13 points below the 85-point standard', 'Advisory now, with a documented escalation to Critical if not addressed within 45 days', 'Not classified until the certificate actually expires'],
        correctIndex: 2,
        explanation: 'The finding is Advisory now because current compliance is maintained, but the time-sensitive escalation path must be documented with the specific calendar date when the finding becomes Critical. Time-critical compliance items require date-specific documentation.',
      },
      {
        id: 'q4', question: 'When two findings interact (e.g., low efficiency AND low reliability), CTS™ methodology requires the practitioner to:',
        options: ['Average the two finding severities to produce a composite severity', 'Evaluate the combined effect and potentially upgrade severity, documenting the interaction explicitly', 'Report them separately with no interaction assessment', 'Classify the higher-severity finding and discard the lower'],
        correctIndex: 1,
        explanation: 'Finding interactions must be explicitly documented and may justify upgrading composite severity. Two Significant findings with interaction effects may be upgraded to Critical — this is practitioner judgment that must be documented and defended.',
      },
      {
        id: 'q5', question: 'Critical findings discovered during an assessment must be communicated to the client:',
        options: ['Within the formal assessment report after all findings are compiled', 'Before the assessment report is delivered — immediately upon classification', 'Only if the client specifically requests interim updates', 'At the annual governance review'],
        correctIndex: 1,
        explanation: 'Critical findings must be communicated to the client before the formal assessment report is delivered. Waiting for the final document to disclose a Critical finding is a methodology violation and potentially a professional liability issue.',
      },
    ],
  },
  {
    id: 'quiz-am-5',
    moduleId: 'am-5',
    passingScore: 70,
    estimatedMinutes: 10,
    questions: [
      {
        id: 'q1', question: 'The CTS™ recommendation priority hierarchy, from highest to lowest priority, is:',
        options: ['Cost Reduction > Efficiency > Reliability > Compliance > Safety', 'Safety > Compliance > Reliability > Efficiency > Cost Reduction', 'Compliance > Safety > Efficiency > Reliability > Cost Reduction', 'Reliability > Safety > Compliance > Cost Reduction > Efficiency'],
        correctIndex: 1,
        explanation: 'CTS™ priority hierarchy: Safety > Compliance > Reliability > Efficiency > Cost Reduction. Safety findings are absolute — they must be addressed regardless of cost. This hierarchy cannot be changed by client budget preference.',
      },
      {
        id: 'q2', question: 'A CTS™ recommendation is considered compliant when it includes:',
        options: ['A general description of the action needed and the practitioner\'s professional opinion', 'Specific action, expected measurable outcome, timeframe, cost estimate, and risk of inaction', 'Client approval and a signed work order', 'Only the most critical findings from the assessment'],
        correctIndex: 1,
        explanation: 'CTS™ recommendations must be specific and complete: action statement, expected outcome (measurable), implementation timeframe, cost range, and risk of inaction. Vague recommendations ("improve maintenance") are not CTS™-compliant.',
      },
      {
        id: 'q3', question: 'If a client directs the practitioner to defer a high-priority recommendation due to budget constraints, the practitioner should:',
        options: ['Remove the recommendation from the assessment record to avoid confusion', 'Change the recommendation\'s priority tier to match the client\'s budget', 'Document the client-directed deferral as a deviation in the assessment record, including the risk of inaction', 'Accept the deferral verbally without formal documentation'],
        correctIndex: 2,
        explanation: 'Client-directed deviations must be formally documented in the assessment record. The practitioner cannot change a recommendation\'s priority tier based on client budget — they can only document that the client has chosen to defer a high-priority item and the associated risk.',
      },
      {
        id: 'q4', question: 'The "Risk of Inaction" field in a CTS™ recommendation should be written:',
        options: ['As a general warning that inaction is not advisable', 'Before the Action Statement — knowing the cost of inaction sharpens the recommendation', 'After the cost estimate, as a secondary consideration', 'Only for Critical findings, not Significant or Advisory'],
        correctIndex: 1,
        explanation: 'Write the Risk of Inaction before the Action Statement — this is the recommended sequence because understanding the cost of inaction clarifies what the recommendation must prevent, leading to more specific and defensible action statements.',
      },
      {
        id: 'q5', question: 'The practitioner\'s certification section of an assessment record represents:',
        options: ['The client\'s agreement with all findings and recommendations', 'The practitioner\'s professional attestation to the accuracy of the record and the methodology used', 'A legal release from liability for any findings not acted upon', 'The software\'s digital signature that the data was entered correctly'],
        correctIndex: 1,
        explanation: 'The practitioner certification is a professional commitment — it attests to accuracy and methodology compliance. The client signature is acknowledgment, not agreement. These are legally distinct: the client is not certifying the findings are wrong, they are acknowledging receipt.',
      },
    ],
  },
  // ─── Course 3: Lifecycle Intelligence ──────────────────────────────────────

  {
    id: 'quiz-li-1', moduleId: 'li-1', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'A 4-year-old centrifugal chiller running at 88% efficiency should be classified as being in which lifecycle stage?', options: ['New/Commissioning', 'Early Operation', 'Optimal Performance', 'Declining Performance'], correctIndex: 1, explanation: 'Years 2–7 is Early Operation. 88% efficiency is within the expected 88–92% range for this stage.' },
      { id: 'q2', question: 'What is the primary function of lifecycle position in CTS™ scoring?', options: ['It provides a separate 0–100 score added to the composite', 'It modifies how other criterion scores are interpreted relative to stage expectations', 'It determines which compliance standards apply to the equipment', 'It sets the assessment frequency for the system'], correctIndex: 1, explanation: 'Lifecycle position is not a scored criterion — it is an interpretive modifier that changes what a given efficiency or reliability score means depending on the stage of the asset\'s life.' },
      { id: 'q3', question: 'When should capital replacement planning for a centrifugal chiller typically begin?', options: ['At end-of-life (18+ years)', 'At the Declining Performance trigger (12–14 years)', 'When the efficiency criterion falls below 60', 'Only after an emergency failure occurs'], correctIndex: 1, explanation: 'CTS™ triggers capital planning at the Declining Performance stage (12–14 years) to create a 36–60 month planning window — not at End-of-Life, which leaves only 12–18 months and eliminates the planning advantage.' },
      { id: 'q4', question: 'A chiller at year 16 running at 84% efficiency receives a CTS™ Efficiency score of approximately 80. A chiller at year 3 running at the same 84% efficiency receives a score of approximately 65. This difference is caused by:', options: ['Different compliance requirements for different equipment ages', 'Lifecycle position modifier — the year 3 chiller is below commissioning expectations; the year 16 chiller is above declining-stage expectations', 'Different weighting factors applied to older vs. newer equipment', 'The year 16 chiller having more Operational Memory™ data'], correctIndex: 1, explanation: 'Lifecycle position modifies scoring expectations. At year 3 (Early Operation), 84% is below the 88–92% expectation — a gap. At year 16 (Declining), 84% exceeds the 78–85% expectation — positive performance.' },
      { id: 'q5', question: 'Which commissioning data point is described as most reliable for determining a chiller\'s lifecycle position?', options: ['State inspection certificate date', 'Compressor hour meter readings cross-referenced with age', 'Manufacturer warranty expiration date', 'Date of most recent refrigerant recharge'], correctIndex: 1, explanation: 'Compressor hours reflect actual operational load, not calendar time — a chiller running 6,000 hours/year ages faster than one running 3,000 hours/year. Cross-referencing hours with age gives the most accurate lifecycle position.' },
    ],
  },
  {
    id: 'quiz-li-2', moduleId: 'li-2', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'How many primary process cycles does a centrifugal chiller system contain?', options: ['One (the refrigerant cycle)', 'Two (refrigerant and condenser water)', 'Three (refrigerant, condenser water, and load)', 'Four (refrigerant, condenser water, load, and controls)'], correctIndex: 2, explanation: 'Three primary process cycles: Refrigerant Cycle (compression → condensation → expansion → evaporation), Condenser Water Cycle (chiller to cooling tower and back), and Load Cycle (building cooling demand pattern over time).' },
      { id: 'q2', question: 'CTS™ establishes cycle norms from measured data rather than manufacturer specifications because:', options: ['Manufacturer specs are not available for older equipment', 'Real-world cycle behavior is always facility-specific — climate, load patterns, and installation variables make every system unique', 'Manufacturer specs apply only to the first 2 years of operation', 'Cycle norms from measured data are easier to document'], correctIndex: 1, explanation: 'A chiller in Phoenix has fundamentally different condenser water cycle norms than the same model in Minneapolis. Manufacturer specs describe design intent; measured data describes how this specific machine behaves in this specific facility under real conditions.' },
      { id: 'q3', question: 'A chiller\'s condenser approach temperature increases from a 4°F baseline to 8°F over 6 weeks. Condenser water supply temperature is stable. This most likely indicates:', options: ['Cooling tower fouling reducing heat rejection capacity', 'Condenser tube fouling inside the chiller causing reduced heat transfer', 'Refrigerant overcharge raising condensing pressure', 'A controls malfunction in the chilled water circuit'], correctIndex: 1, explanation: 'Stable condenser water supply temperature rules out the cooling tower. The problem is inside the chiller — increased approach temperature with stable entering water points to fouling on the condenser tube surfaces reducing heat transfer.' },
      { id: 'q4', question: 'Cycle variance in CTS™ is best defined as:', options: ['The normal variation in cycle performance due to weather changes', 'The deviation of a measured cycle from its established norm — the primary intelligence signal for predictive assessment triggering', 'The difference between two chillers\' cycle performance in the same system', 'The manufacturer\'s stated tolerance for cycle performance variation'], correctIndex: 1, explanation: 'Cycle variance is a deviation from the facility-specific established norm, not from manufacturer specs or from other equipment. It is the primary automated trigger for CTS™ assessment initiation in monitored systems.' },
      { id: 'q5', question: 'Which statement best describes the relationship between chiller process cycles in a CTS™ intelligence framework?', options: ['Each cycle is monitored independently with no interaction assessment', 'Cycle problems originate in one cycle but often manifest as failures in another — interaction effects must be tracked', 'The refrigerant cycle is the only cycle that requires CTS™ monitoring', 'Process cycles only interact during peak load conditions'], correctIndex: 1, explanation: 'Condenser tube fouling (refrigerant cycle) appears as an approach temperature problem (condenser water cycle). Controls failures (load cycle management) manifest as efficiency problems (refrigerant cycle). Cycles interact continuously — CTS™ monitors all three and tracks their interactions.' },
    ],
  },
  {
    id: 'quiz-li-3', moduleId: 'li-3', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'What is the primary CTS™ activity during the New/Commissioning lifecycle stage?', options: ['Capital replacement planning', 'Establishing the permanent baseline and verifying design performance', 'Efficiency optimization and fine-tuning', 'Risk quantification for End-of-Life decision making'], correctIndex: 1, explanation: 'At commissioning, the most important CTS™ activity is establishing the permanent baseline — documenting as-built conditions and verifying design performance. This baseline becomes the reference point for every future assessment.' },
      { id: 'q2', question: 'In which lifecycle stage does CTS™ produce the richest Operational Memory™ records?', options: ['New/Commissioning', 'Early Operation', 'Optimal Performance', 'End-of-Life'], correctIndex: 2, explanation: 'The Optimal Performance stage (typically years 7–12) is the longest period of stable normal operation. This stage builds the most statistically reliable cycle norms and creates the Operational Memory™ records that make declining-stage assessments most defensible.' },
      { id: 'q3', question: 'A CTS™ practitioner is presenting to a CFO about a chiller at 17 years old. The most effective framing is:', options: ['Present only replacement cost data', 'Present efficiency data showing how far below benchmark the chiller performs', 'Present risk data, remaining useful life estimates, and the cost difference between planned and emergency replacement', 'Present the number of unplanned work orders in the last 12 months'], correctIndex: 2, explanation: 'CFOs respond to risk and cost differential, not just efficiency metrics. The gap between planned replacement cost (~$450,000) and emergency replacement cost (~$750,000+) plus downtime quantifies the value of CTS™ intelligence in End-of-Life management.' },
      { id: 'q4', question: 'Which lifecycle stage should receive the highest CTS™ practitioner engagement intensity?', options: ['Early Operation and End-of-Life (transition periods)', 'Optimal Performance (richest data period)', 'New/Commissioning only (baseline establishment)', 'Declining Performance only (highest risk period)'], correctIndex: 0, explanation: 'Early Operation and End-of-Life are transition periods requiring highest engagement: Early Operation for baseline establishment and infant mortality monitoring; End-of-Life for risk management and capital planning. The stable middle stages require less intensive engagement.' },
      { id: 'q5', question: 'A facility has two identical chillers: one with mature Optimal Performance Operational Memory™ and one without any CTS™ history. Both enter the Declining Performance stage. The one with Operational Memory™ has an advantage because:', options: ['It qualifies for better equipment warranties', 'Its established norms allow declining-stage findings to be compared against a documented baseline, making capital arguments more defensible', 'It receives lower insurance rates due to documented maintenance history', 'The BMS automatically generates replacement orders for it'], correctIndex: 1, explanation: 'Operational Memory™ from the Optimal Performance stage provides the baseline against which declining performance is measured. "Efficiency has declined 8% from the 2019 baseline" is far more defensible than "efficiency seems low" — and far more compelling in a capital budget request.' },
    ],
  },
  {
    id: 'quiz-li-4', moduleId: 'li-4', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'The CTS™ Reactive Index measures:', options: ['The percentage of systems below 50 on the composite CTS™ score', 'The ratio of unplanned work orders to total work orders — the primary measure of reactive vs. proactive maintenance posture', 'The average time from trigger event to completed assessment', 'The number of emergency shutdowns per year per 100 systems'], correctIndex: 1, explanation: 'Reactive Index = unplanned work orders / total work orders. Industry baseline without structured intelligence programs: 40–60%. Target for mature CTS™ programs: below 15%.' },
      { id: 'q2', question: 'Three intervention points exist in CTS™ equipment degradation analysis. In order from lowest to highest cost:', options: ['Preventive Threshold → Predictive → Reactive', 'Predictive → Preventive Threshold → Reactive', 'Reactive → Preventive Threshold → Predictive', 'Predictive → Reactive → Preventive Threshold'], correctIndex: 1, explanation: 'Predictive (earliest, lowest cost — cycle variance detected before performance impact), Preventive Threshold (when scores cross defined thresholds — moderate cost repair or component replacement), Reactive (after failure — highest cost with emergency labor, expedited parts, downtime).' },
      { id: 'q3', question: 'For a centrifugal chiller compressor, the approximate cost ratio between Predictive intervention (bearing replacement) and Reactive intervention (compressor failure) is:', options: ['About equal — the same parts are replaced either way', 'Predictive is approximately 5–10% of reactive cost', 'Predictive is approximately 50% of reactive cost', 'Reactive is only slightly more expensive than predictive'], correctIndex: 1, explanation: 'Predictive bearing replacement: ~$14,000. Reactive compressor failure: $180,000–$280,000. Predictive intervention is approximately 5–8% of the reactive failure cost — making the case for monitoring investment straightforward.' },
      { id: 'q4', question: 'When making the business case for predictive intelligence investment to a client, the most effective argument is:', options: ['The methodological superiority of proactive vs. reactive approaches', 'The three-point failure cost differential: Predictive vs. Preventive Threshold vs. Reactive costs for this specific equipment', 'The reduction in Reactive Index from industry average to CTS™ target', 'Testimonials from other facilities that have implemented CTS™'], correctIndex: 1, explanation: 'Specific failure cost data for the client\'s own equipment is the most compelling argument — not general principles or benchmarks. "Your chiller compressor failure costs $220,000 reactive; $14,000 predictive" is a decision, not a discussion.' },
      { id: 'q5', question: 'A facility reduces its Reactive Index from 52% to 18% over 18 months. This indicates:', options: ['The facility now has fewer total work orders', 'A shift from reactive to proactive maintenance posture — more work is now planned and predictive vs. emergency', 'The facility has reduced its CTS™ assessment frequency', 'Equipment is aging out and fewer total repairs are needed'], correctIndex: 1, explanation: 'Reactive Index reduction from 52% to 18% does not mean fewer total work orders — it means a higher proportion of work is now planned, predictive, and executed at lower cost. Total work may be similar; the cost per unit of work drops significantly.' },
    ],
  },
  {
    id: 'quiz-li-5', moduleId: 'li-5', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'A CTS™ Lifecycle Monitoring Plan has four components. Which is responsible for defining what happens when a monitoring threshold is crossed?', options: ['Parameter Registry', 'Threshold Table', 'Response Matrix', 'Plan Governance'], correctIndex: 2, explanation: 'The Response Matrix defines who is notified, what assessment type is initiated, and what timeframe applies when each threshold is crossed. It converts a parameter alert into a governed CTS™ response.' },
      { id: 'q2', question: 'CTS™ monitoring thresholds should be set relative to:', options: ['Generic industry benchmarks for this equipment class', 'The established cycle norm for this specific machine', 'The manufacturer\'s specified operating ranges', 'ASHRAE or ASME standards for this equipment type'], correctIndex: 1, explanation: 'Thresholds set relative to this machine\'s established norm catch problems earlier and avoid false alarms. A machine with a 4°F condenser approach baseline should alarm at 6°F (2°F variance), not at the generic industry threshold of 8°F.' },
      { id: 'q3', question: 'A monitoring plan with binary alarm thresholds (normal/alarm) rather than three-level thresholds (Advisory/Significant/Critical) is not CTS™-grade intelligence because:', options: ['Binary alarms are not compatible with BMS systems', 'Binary alarms produce too many false positives and get ignored, removing the intelligence value', 'ASHRAE standards require three-level monitoring for pressure vessels', 'Binary thresholds cannot be tied to assessment frequency requirements'], correctIndex: 1, explanation: 'Binary (single threshold) alarm systems are prone to operator fatigue — when everything is an alarm, nothing is. CTS™ three-level thresholds provide graduated response that matches the severity of the signal, maintaining both sensitivity and credibility.' },
      { id: 'q4', question: 'Who should own a CTS™ Lifecycle Monitoring Plan and when should it be reviewed?', options: ['The equipment manufacturer; reviewed at each warranty renewal', 'The lead practitioner; reviewed annually as seasonal norms and equipment age change', 'The client\'s operations director; reviewed only when new equipment is installed', 'The facility\'s insurance carrier; reviewed at each policy renewal'], correctIndex: 1, explanation: 'The lead practitioner owns the monitoring plan and reviews it annually — because what "normal" looks like for this machine changes as it ages and as seasonal patterns evolve. A threshold set in year 1 may need adjustment by year 5.' },
      { id: 'q5', question: 'The most important reason to automate threshold monitoring via BMS integration rather than relying on manual parameter review is:', options: ['BMS systems produce more accurate measurements than manual instruments', 'Manual parameter review is the first thing skipped during busy operational periods — automation ensures no threshold breach goes undetected', 'Automated monitoring is required by OSHA for critical HVAC systems', 'BMS integration reduces the practitioner\'s billable hours'], correctIndex: 1, explanation: 'Manual review processes fail under operational pressure. When a facility is dealing with an emergency or high occupancy period, manual parameter logs are the first casualty. Automated BMS-integrated monitoring runs continuously regardless of operational stress.' },
    ],
  },

  // ─── Course 4: Operational Phases ──────────────────────────────────────────

  {
    id: 'quiz-op-1', moduleId: 'op-1', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'The CTS™ four phases are best described as:', options: ['A sequential project that completes after Execute', 'A simultaneous, continuous cycle where multiple phases are active across the portfolio at all times', 'A quarterly review cycle triggered by governance meetings', 'A checklist that resets each year during annual re-assessment'], correctIndex: 1, explanation: 'The four phases are never all "complete" — in a mature CTS™ program, different systems are always in different phases simultaneously. While one system is in Govern, another may be starting a new Assess cycle.' },
      { id: 'q2', question: 'What document formalizes the transition from Assess to Design?', options: ['Client signature on the Design phase proposal', 'All findings classified and communicated to the client', 'Completion of all Performance Verification measurements', 'Opening of Decision History™ records for all findings'], correctIndex: 1, explanation: 'Assess → Design transitions when all findings are classified and formally communicated. Design phase work cannot begin on findings that have not been classified and communicated — this prevents working from incomplete intelligence.' },
      { id: 'q3', question: 'Moving directly from Assess to Execute without completing the Design phase is described as:', options: ['An acceptable shortcut for Advisory findings', 'A governance violation that generates ungoverned work that cannot be defended', 'Permitted when client urgency requires immediate action', 'Standard practice for emergency findings classified as Critical'], correctIndex: 1, explanation: 'Skipping Design means there are no Decision History™ records opened, no Projected Outcomes established, and no approved recommendation scope — the work that follows cannot be governed, defended, or credited to CTS™ intelligence.' },
      { id: 'q4', question: 'A client asks "What phase is our HVAC system in?" The correct CTS™ answer would describe:', options: ['The lifecycle stage of the HVAC equipment', 'Which of the four operational phases (Assess/Design/Execute/Govern) the HVAC system is currently in', 'The last CTS™ composite score for the system', 'The number of open findings for the system'], correctIndex: 1, explanation: 'Phase status is a governance communication tool. Every system in a CTS™ portfolio should have a defined current phase, and the client should be able to track phase status as evidence that their facility is governed intelligently.' },
      { id: 'q5', question: 'When reframing a client request for "a list of what needs to be fixed," the CTS™ practitioner should explain that this output comes from:', options: ['The Execute phase', 'The Govern phase', 'The Assess phase — specifically the findings classification output', 'The Design phase — the recommendation set'], correctIndex: 2, explanation: '"What needs to be fixed" is the classified findings output of the Assess phase — not the complete engagement. The recommendation design, implementation, and ongoing governance are the three remaining phases that transform findings into intelligence outcomes.' },
    ],
  },
  {
    id: 'quiz-op-2', moduleId: 'op-2', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'BMS trend data (supply air temperatures, static pressure) is classified as which CTS™ data source tier for HVAC assessments?', options: ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4'], correctIndex: 0, explanation: 'BMS trend data from calibrated sensors is Tier 1 — metered/sensor data, the highest reliability source. This data must have documented calibration status to maintain Tier 1 classification.' },
      { id: 'q2', question: 'CO2 levels of 1,100 ppm during peak occupancy in 4 conference rooms violates which standard?', options: ['ASHRAE 90.1', 'ASHRAE 62.1', 'Title 24', 'OSHA 1910.146'], correctIndex: 1, explanation: 'ASHRAE 62.1 is the primary ventilation standard for acceptable indoor air quality — it sets minimum outside air requirements by occupancy type that, when met, typically produce CO2 levels below 1,000 ppm in occupied spaces.' },
      { id: 'q3', question: 'A TAB (test and balance) report that is 7 years old should be treated as:', options: ['Current baseline data — TAB reports are permanent documents', 'A Tier 1 source if it was professionally prepared', 'A significant data gap — 7 years of operation without re-balancing means current conditions may differ substantially', 'A Tier 4 source equivalent to operator testimony'], correctIndex: 2, explanation: 'A 7-year-old TAB report is a significant data gap in an HVAC assessment. Seven years of operation, tenant fit-outs, equipment changes, and control modifications can substantially alter airflow distribution from the original balance.' },
      { id: 'q4', question: 'HVAC static pressure running 0.8" above design most directly affects which CTS™ criterion?', options: ['Compliance', 'Reliability', 'Efficiency', 'Risk'], correctIndex: 2, explanation: 'Elevated static pressure above design specification directly impacts Efficiency — fans working against higher resistance consume more energy than designed. The efficiency finding is the primary criterion affected, though sustained over-pressure also contributes to Reliability findings from accelerated fan motor wear.' },
      { id: 'q5', question: 'Comfort complaints from occupants that identify specific zones with persistent temperature problems are classified as which data tier?', options: ['Tier 1 because occupant experience is real-time data', 'Tier 2 because occupants are the authorized end-users of the system', 'Tier 3 if the complaints are documented in work orders', 'Tier 4 — operator or occupant testimony always regardless of specificity'], correctIndex: 3, explanation: 'Occupant testimony is Tier 4 regardless of how specific or consistent it is. However, the spatial distribution of complaints (which zones) is a useful attribution tool — it tells the practitioner where to look with Tier 1 instruments to find the root cause.' },
    ],
  },
  {
    id: 'quiz-op-3', moduleId: 'op-3', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'Decision History™ records are opened during which phase?', options: ['Assess — when findings are classified', 'Design — at the moment of client approval', 'Execute — when contractors begin implementation', 'Govern — when the outcome is measured'], correctIndex: 1, explanation: 'Decision History™ records are opened at Design Approval — the moment the decision is made, with the Projected Outcome documented prospectively. Opening records after the fact removes the governance value of the prospective projection.' },
      { id: 'q2', question: 'An Implementation Scenario in CTS™ is required when:', options: ['The client requests a cheaper alternative', 'A material alternative to the primary recommendation exists with a different risk/cost profile', 'The primary recommendation exceeds the client\'s stated budget', 'Two findings from different criteria address the same system'], correctIndex: 1, explanation: 'Implementation Scenarios are presented when a real alternative exists — not just as a budget accommodation. Offering only one option when material alternatives exist reduces the defensibility of the Design phase and removes client choice from the governance record.' },
      { id: 'q3', question: 'A Projected Outcome of "improve air quality in conference rooms" is not CTS™-compliant because:', options: ['It is too technical for a non-technical client', 'It is not measurable — CTS™ requires specific, time-bound, measurable outcomes', 'It should reference ASHRAE 62.1 standards explicitly', 'It applies to the wrong criterion (should reference Efficiency, not Compliance)'], correctIndex: 1, explanation: 'CTS™ Projected Outcomes must be measurable and time-bound. "CO2 below 1,000 ppm in all 4 conference rooms within 60 days of implementation" is CTS™-compliant. Vague improvement statements cannot produce meaningful Decision Variance when outcomes are measured.' },
      { id: 'q4', question: 'The Design Approval must be:', options: ['Verbal — documented in the practitioner\'s notes', 'Written — the formal document authorizing transition to Execute', 'Digital — submitted through the OI™ HQ platform', 'Witnessed — signed by both client and a CTS™ supervisor'], correctIndex: 1, explanation: 'Design Approval must be written — it is the formal authorization that transitions the engagement to Execute and initiates Decision History™ records. Verbal approval is not a governed transition and cannot be defended if scope disputes arise during Execute.' },
      { id: 'q5', question: 'The Design phase output package contains how many core deliverables?', options: ['Two (Recommendations and Decision History™ Records)', 'Three (Recommendations, Scenarios, and Priority Matrix)', 'Four (Recommendation Set, Implementation Scenarios, Priority Matrix, and Decision History™ Records)', 'Five (all of the above plus Executive Summary)'], correctIndex: 2, explanation: 'Four deliverables: Recommendation Set, Implementation Scenarios (where material alternatives exist), Priority Matrix (CTS™ hierarchy ranking), and Decision History™ Records (opened at Design Approval). All four must be present for a complete Design phase output.' },
    ],
  },
  {
    id: 'quiz-op-4', moduleId: 'op-4', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'The CTS™ practitioner\'s primary role during Execute is:', options: ['Managing the contractor workforce directly', 'Intelligence quality governor — verifying scope compliance, documenting milestones, and conducting Performance Verification', 'Updating the Operational Memory™ database with implementation data', 'Approving invoices for completed implementation work'], correctIndex: 1, explanation: 'The practitioner governs intelligence quality during Execute — they are not the project manager or contractor supervisor. Their role is ensuring the work matches the Design phase scope and that the intelligence record (Decision History™) remains accurate.' },
      { id: 'q2', question: 'An Execute variance should be documented:', options: ['Only if it changes the projected outcome significantly', 'Regardless of size — every deviation from the Design phase plan must be documented', 'Only after the client has approved the variance and authorized additional scope', 'At the close of Execute during Performance Verification'], correctIndex: 1, explanation: 'Every variance, regardless of size, must be documented in the Decision History™ record. Undisclosed variances discovered later destroy the credibility of the entire record and compromise the practitioner\'s professional standing.' },
      { id: 'q3', question: 'Performance Verification in CTS™ is best defined as:', options: ['The contractor\'s final inspection sign-off', 'The measurement activity at Execute close that determines whether implementation achieved the Projected Outcome', 'The BMS commissioning report produced by the controls contractor', 'The client\'s acceptance of the completed work'], correctIndex: 1, explanation: 'Performance Verification is a CTS™ practitioner-conducted measurement — it is the evidence that the implementation achieved (or did not achieve) the Projected Outcome in the Decision History™ record. Contractor sign-off and client acceptance are separate from this governed measurement.' },
      { id: 'q4', question: 'During a controls recalibration (Execute phase), a hidden wiring error is discovered that was not identified in the Design phase. The correct CTS™ response is:', options: ['Continue with the original recommendation scope and document the wiring issue as a new finding for the next Assess cycle', 'Stop work, document the Execute variance, assess impact on Projected Outcome, get client approval for expanded scope, then continue', 'Ask the contractor to correct the wiring as part of the original scope at no additional cost', 'Escalate to OI™ HQ for a Design phase revision before any further work proceeds'], correctIndex: 1, explanation: 'Execute variances that affect scope or Projected Outcome require: stop work, document the variance, assess impact, obtain client approval for scope/budget change, update the Decision History™ record, then proceed. This is the governed response that maintains intelligence quality.' },
      { id: 'q5', question: 'Execute closes and transitions to Govern when:', options: ['The contractor submits a completion certificate', 'The client signs the final invoice', 'Performance Verification is complete and the outcome measurement is documented in the Decision History™ record', 'The next scheduled assessment interval is reached'], correctIndex: 2, explanation: 'Execute closes only after Performance Verification — the practitioner\'s measurement of actual outcomes against the Projected Outcome. Without this measurement, the Decision History™ record cannot be accurately closed in Govern, and the learning value of the decision is lost.' },
    ],
  },
  {
    id: 'quiz-op-5', moduleId: 'op-5', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'The Govern phase is best described as:', options: ['The final phase after which the CTS™ engagement concludes', 'The permanent operating mode of a CTS™ program — continuous, indefinite, feeding back into Assess', 'A quarterly reporting obligation to the client', 'The phase where replacement recommendations are formally issued'], correctIndex: 1, explanation: 'Govern is not an ending — it is the permanent state. Every governed system stays in Govern indefinitely, with re-assessment intervals, trigger monitoring, and governance reviews sustaining the intelligence program.' },
      { id: 'q2', question: 'A Decision History™ record showing a Projected Outcome of "CO2 below 1,000 ppm" and an Actual Outcome of "CO2 below 850 ppm" represents:', options: ['Decision Variance: negative — the outcome underperformed the projection', 'Decision Variance: positive — the outcome outperformed the projection', 'No variance — the outcome was within the acceptable range', 'A measurement error — outcomes should not exceed projections'], correctIndex: 1, explanation: 'Actual outcome better than projected = positive Decision Variance. This is a learning signal that the practitioner\'s model was conservative, and future similar recommendations can project with higher confidence. Positive variance is also a governance success story.' },
      { id: 'q3', question: 'A governance review should be scheduled:', options: ['Whenever the client requests one', 'On a fixed calendar before leaving the Execute phase', 'Only when there are significant findings to report', 'Annually in Q4 as part of the capital budget cycle'], correctIndex: 1, explanation: 'Governance review cadence must be scheduled and confirmed before the Execute phase closes — "we\'ll schedule it later" means it will not happen. The fixed calendar is part of the governance commitment the practitioner makes to the client.' },
      { id: 'q4', question: 'Operational Memory™ grows most meaningfully from which Govern phase activity?', options: ['Opening new Decision History™ records for emerging findings', 'Closing Decision History™ records with measured Actual Outcomes and calculated Decision Variance', 'Scheduling the next governance review', 'Updating the Lifecycle Monitoring Plan thresholds'], correctIndex: 1, explanation: 'Closed Decision History™ records — with measured outcomes and calculated variance — are the most valuable additions to Operational Memory™. They contain the full intelligence cycle: decision, evidence, projection, action, and outcome. This is what makes Operational Memory™ a learning system.' },
      { id: 'q5', question: 'The discovery of a new finding (AHU bearing vibration anomaly) during a governance review should trigger:', options: ['Immediate corrective action without a formal Assess phase', 'A new Assess phase cycle for the finding — Govern feeds back into Assess continuously', 'A Design phase recommendation without completing a new Assess', 'Documentation in the Operational Memory™ record only, with monitoring to follow'], correctIndex: 1, explanation: 'Every new finding initiates a new Assess cycle. This is the mechanism by which Govern feeds back into Assess — the continuous intelligence loop that keeps the CTS™ program perpetually active and growing in intelligence quality.' },
    ],
  },

  // ─── Course 5: Energy Intelligence ─────────────────────────────────────────

  {
    id: 'quiz-ei-1', moduleId: 'ei-1', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'Energy Use Intensity (EUI) is measured in:', options: ['kWh per year', 'kBtu per square foot per year', 'Therms per occupant per year', 'Dollars per ton of cooling capacity'], correctIndex: 1, explanation: 'EUI is expressed as kBtu/sf/yr — energy consumption normalized by building area. This normalization allows meaningful comparison between buildings of different sizes and types.' },
      { id: 'q2', question: 'A facility\'s energy baseload is best described as:', options: ['Energy consumption during peak occupancy periods', 'Minimum energy consumption maintained regardless of operational hours — representing continuously operating systems', 'The monthly average energy consumption across all seasons', 'Energy consumed by HVAC systems only'], correctIndex: 1, explanation: 'Baseload is the energy floor — what the facility consumes during unoccupied hours when all discretionary systems are off. It represents servers, refrigeration, lighting in 24/7 spaces, security systems, and other continuously operating loads.' },
      { id: 'q3', question: 'An office building with an EUI of 140 kBtu/sf/yr compared to the ENERGY STAR median of 70 kBtu/sf/yr receives an approximate CTS™ Efficiency criterion score of:', options: ['90 — EUI is within range for older buildings', '75 — moderate performance gap', '42 — Critical range, 100% above benchmark', '65 — Watchlist range'], correctIndex: 2, explanation: 'EUI at double the benchmark median places this facility in the Critical range (~42) on the CTS™ Efficiency criterion. This is a significant portfolio-level finding that signals one or more major systems are substantially underperforming.' },
      { id: 'q4', question: 'CTS™ treats energy data primarily as:', options: ['A financial reporting input for utility bill management', 'A multi-system intelligence source revealing simultaneous information about multiple facility systems', 'A compliance tool for regulatory reporting', 'A maintenance scheduling trigger for preventive work orders'], correctIndex: 1, explanation: 'Energy data reflects the simultaneous behavior of every major consuming system. A sudden consumption increase may reflect chiller degradation, controls failure, HVAC scheduling error, or envelope failure — energy intelligence directs system-level investigation.' },
      { id: 'q5', question: 'CTS™ establishes an energy signature using how many months of interval data?', options: ['3 months (one season)', '6 months (two seasons)', '12 months (full annual cycle)', '24 months (two full annual cycles for statistical reliability)'], correctIndex: 2, explanation: 'A 12-month interval dataset captures the full daily/weekly/seasonal variation cycle needed to establish a statistically valid energy signature. Less than 12 months misses seasonal variation; 24 months is preferred when available but 12 is the minimum.' },
    ],
  },
  {
    id: 'quiz-ei-2', moduleId: 'ei-2', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'An office building at the 75th ENERGY STAR percentile receives an approximate CTS™ Efficiency criterion score of:', options: ['60 (Watchlist)', '75 (Watchlist upper boundary)', '80 (Optimal range)', '92 (Exceeding Standard)'], correctIndex: 2, explanation: '75th percentile EUI performance scores approximately 80 on the CTS™ Efficiency criterion — Optimal range. The 50th percentile scores ~65 (Watchlist); the 90th percentile scores ~92 (Exceeding Standard).' },
      { id: 'q2', question: 'Local Law 97 in New York City represents which type of CTS™ compliance dimension?', options: ['Energy efficiency compliance (minimum performance standards)', 'Carbon compliance (greenhouse gas emission limits)', 'Ventilation compliance (indoor air quality)', 'Utility reporting compliance (mandatory disclosure)'], correctIndex: 1, explanation: 'Local Law 97 sets carbon emission limits (CO2e/sf/yr) for large buildings — it is carbon compliance, not energy efficiency compliance. A building could meet efficiency benchmarks but still violate LL97 if it uses carbon-intensive fuel sources.' },
      { id: 'q3', question: 'Peak demand charges in commercial energy billing typically:', options: ['Are a minor component of the total utility bill', 'Often exceed the commodity energy charge ($/kWh) in commercial facilities', 'Apply only to industrial facilities consuming more than 1MW', 'Are calculated based on annual peak rather than monthly peak'], correctIndex: 1, explanation: 'In many commercial utility rate structures, the demand charge ($/kW of peak demand) represents the majority of the bill — often 50–70% of total cost. This makes demand reduction a higher priority than consumption reduction in CTS™ energy strategy.' },
      { id: 'q4', question: 'The fastest-growing compliance dimension in CTS™ energy assessments is:', options: ['ENERGY STAR certification', 'ASHRAE 90.1 equipment efficiency', 'Carbon emissions reporting and regulation', 'Utility benchmarking mandates'], correctIndex: 2, explanation: 'Carbon compliance (Local Law 97, building performance standards, carbon pricing) is expanding rapidly across US and international jurisdictions. Energy practitioners who don\'t track carbon compliance exposure are leaving their clients unprotected from material financial risk.' },
      { id: 'q5', question: 'Energy risk in CTS™ covers three dimensions. Which is NOT one of them?', options: ['Financial risk from demand charges and carbon penalties', 'Compliance risk from regulatory penalties', 'Operational risk from energy source dependency', 'Technology risk from equipment obsolescence'], correctIndex: 3, explanation: 'The three CTS™ energy risk dimensions are: Financial (demand charges, carbon penalties, rate increases), Compliance (regulatory penalties from carbon or efficiency mandates), and Operational (dependency on single energy sources without resilience). Equipment obsolescence is addressed through lifecycle position, not the energy risk criterion.' },
    ],
  },
  {
    id: 'quiz-ei-3', moduleId: 'ei-3', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'Weather normalization in energy analysis allows:', options: ['Energy data to be compared across seasons and years with different temperatures', 'HVAC equipment efficiency to be adjusted for outdoor conditions', 'Utility rates to be standardized for billing comparison', 'Carbon emissions to be calculated from energy consumption data'], correctIndex: 0, explanation: 'Weather normalization adjusts consumption data to remove the effect of temperature variation — making it possible to compare July to January or 2023 to 2024 with different weather years on an apples-to-apples basis.' },
      { id: 'q2', question: 'A CTS™ energy anomaly classified as Significant is defined as:', options: ['5–10% deviation from the weather-normalized baseline', '10–20% deviation from the weather-normalized baseline', 'Greater than 20% deviation or any sudden step-change', 'Any unplanned increase above the prior month\'s consumption'], correctIndex: 1, explanation: 'Three-level classification: Advisory (5–10% deviation), Significant (10–20% deviation), Critical (>20% or sudden step-change indicating acute failure). The 14% example in the module falls in the Significant range.' },
      { id: 'q3', question: 'A consumption anomaly that is present 24 hours/day including unoccupied hours rules out which cause category?', options: ['Equipment malfunction', 'Occupancy-driven causes (lighting, plug loads, occupant behavior)', 'Controls scheduling failures', 'Mechanical system degradation'], correctIndex: 1, explanation: 'If the anomaly persists 24/7 including hours when the building is empty, it cannot be caused by occupant behavior, lighting, or plug loads — these disappear when the building empties. The 24/7 pattern points to continuously operating systems or controls that are stuck in occupied mode.' },
      { id: 'q4', question: 'Gradual energy anomalies are more dangerous than acute anomalies because:', options: ['They affect compliance reporting more severely', 'They are invisible to operators focused on acute events — only systematic trend analysis catches them', 'They cause more total energy waste than acute events', 'They are more difficult to attribute to specific systems'], correctIndex: 1, explanation: 'A boiler efficiency declining 0.5% per month looks normal in any single month comparison. Over 24 months it represents a 12% efficiency loss — invisible without trend analysis, significant in aggregate. CTS™ trend analysis exists specifically to catch gradual degradation that acute monitoring misses.' },
      { id: 'q5', question: 'Energy anomaly attribution converts an anomaly signal into:', options: ['A utility billing dispute for the excess consumption period', 'A system-specific CTS™ assessment trigger', 'A carbon emissions calculation for compliance reporting', 'A maintenance work order for the operations team'], correctIndex: 1, explanation: 'Attribution is what turns "energy went up 14%" into "cooling controls in east wing stuck in occupied mode — initiate HVAC controls Assess phase." Without attribution, an anomaly is a financial signal; with attribution, it is an intelligence trigger.' },
    ],
  },
  {
    id: 'quiz-ei-4', moduleId: 'ei-4', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'The CTS™ conservation hierarchy requires which action before equipment replacement?', options: ['Completing a full compliance assessment first', 'Reducing load and optimizing operations before replacing equipment', 'Obtaining ENERGY STAR certification for the building', 'Conducting a 12-month monitoring period'], correctIndex: 1, explanation: 'Tiers 2 and 3 (Load Reduction and Operational Efficiency) must be addressed before Tier 4 (Equipment Efficiency/Replacement). Replacing equipment at full size when load reduction would allow a smaller, cheaper replacement is a capital waste CTS™ systematically prevents.' },
      { id: 'q2', question: 'A hotel identifies its chiller as the highest priority energy target. Per the CTS™ hierarchy, what should the practitioner assess BEFORE recommending chiller replacement?', options: ['Carbon emissions from the current chiller', 'Recommissioning potential of the existing chiller and load reduction opportunities that might allow a smaller replacement', 'Whether the chiller qualifies for utility incentive rebates', 'The financial payback period for a new chiller vs. the existing unit'], correctIndex: 1, explanation: 'Tier 3 (recommissioning/operational optimization) before Tier 4 (replacement). If recommissioning recovers significant efficiency, replacement may be deferred. If load reduction allows a 400-ton replacement instead of 500-ton, the capital savings justify the load assessment investment.' },
      { id: 'q3', question: 'Measure and Verification (M&V) in CTS™ energy programs is required for:', options: ['All utility bill comparisons over $10,000', 'Documenting actual energy savings from implemented efficiency measures — required for incentive compliance and ROI documentation', 'Monthly reporting to the energy management software', 'Annual ENERGY STAR score recalculation'], correctIndex: 1, explanation: 'M&V is the formal protocol that converts "we installed efficient equipment" into "we saved 112,000 kWh in the first year." Without M&V, energy savings exist only in projections — not in the governed Decision History™ record that CTS™ requires.' },
      { id: 'q4', question: 'In a 4-year energy strategy, renewable energy (solar, storage) is placed in Year 5+ because:', options: ['Renewable technology will be cheaper in 5 years', 'Base efficiency must be established before adding renewable generation — oversizing solar to serve an inefficient base load wastes capital', 'Permitting for renewable systems takes 5 years on average', 'Renewable investments require a 5-year financial track record'], correctIndex: 1, explanation: 'Sizing renewable generation to serve an unreduced, unoptimized load means the renewable investment is larger and more expensive than necessary. CTS™ reduces and optimizes the load first, then sizes renewable generation for the smaller, more efficient residual demand.' },
      { id: 'q5', question: 'Simple Payback Period is described as:', options: ['The most sophisticated energy investment metric', 'The most widely used screening metric — time for energy savings to recover the initial investment', 'A CTS™-specific calculation not used in conventional finance', 'The preferred metric for government energy projects'], correctIndex: 1, explanation: 'Simple Payback = Investment ÷ Annual Savings. It is the most widely understood screening metric, though it ignores time value of money and long-term savings. For CTS™ client communications, it is the starting point — supplemented by NPV and IRR for capital-intensive recommendations.' },
    ],
  },
  {
    id: 'quiz-ei-5', moduleId: 'ei-5', passingScore: 70, estimatedMinutes: 8,
    questions: [
      { id: 'q1', question: 'ENERGY STAR Portfolio Manager requires what minimum data to generate a benchmark score?', options: ['6 months of consecutive utility data', '12 months of consecutive utility data from all energy sources', '24 months of data with weather normalization', 'Only electricity data for the benchmark year'], correctIndex: 1, explanation: '12 months of consecutive utility data from all energy sources (electricity, natural gas, fuel oil, steam) is required for a Portfolio Manager benchmark score. Partial-year or single-source data produces an incomplete benchmark.' },
      { id: 'q2', question: 'The primary benefit of automated utility data connection in Portfolio Manager over manual monthly entry is:', options: ['Automated data is more accurate than manually entered data', 'Automated entry eliminates the most common compliance failure mode — data entry missed during busy periods', 'Automated systems produce better ENERGY STAR scores', 'Automation reduces the practitioner\'s billable hours for reporting'], correctIndex: 1, explanation: 'Manual monthly data entry fails under operational pressure. The most common benchmarking mandate violation is not the score — it\'s missing the submission because someone forgot to enter the data. Automation makes compliance structural rather than behavioral.' },
      { id: 'q3', question: 'Carbon emissions reporting in CTS™ energy intelligence should be built in:', options: ['After baseline energy data collection is complete', 'As a retroactive addition when carbon compliance regulations require it', 'From the start of the energy intelligence program — not as a retroactive addition', 'Only for facilities that have voluntarily committed to carbon reduction goals'], correctIndex: 2, explanation: 'Building carbon reporting into the CTS™ energy program from the start means compliance is ready when regulations arrive — not scrambled together under deadline pressure. Retroactive carbon calculations from incomplete data are expensive and often inaccurate.' },
      { id: 'q4', question: 'A facility operating under FEMP (Federal Energy Management Program) standards is most likely:', options: ['A private commercial office building', 'A federal government facility', 'A state-regulated utility company', 'An ENERGY STAR certified building'], correctIndex: 1, explanation: 'FEMP governs federal government facilities specifically — it sets EUI targets by facility type and requires annual reporting to the Department of Energy. State and local government facilities operate under state energy office mandates, not FEMP.' },
      { id: 'q5', question: 'A CTS™ energy compliance report package should be produced:', options: ['Annually for the benchmarking mandate submission', 'Quarterly — keeping compliance current and providing the intelligence basis for annual governance reviews', 'Only when a compliance deadline is approaching', 'Monthly for high-risk facilities; annually for all others'], correctIndex: 1, explanation: 'Quarterly production keeps compliance data current, enables trend identification within the year, and provides the intelligence foundation for governance reviews. Annual-only production means compliance is reactive — assembled under deadline pressure rather than maintained continuously.' },
    ],
  },
];

export function getQuiz(quizId: string): Quiz | undefined {
  return QUIZZES.find(q => q.id === quizId);
}
