import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export default function InstituteCTSPage() {
  const stages = [
    {
      num: '1',
      name: 'Context',
      definition: 'Establish the full operational context before forming any conclusions or recommendations.',
      inputs: [
        'Location and physical environment',
        'Asset type and age',
        'Observable field conditions',
        'Existing documentation review',
        'Historical maintenance data',
      ],
      outputs: ['Context Assessment Record (CTS-2 form)', 'Documented environmental baseline'],
      mistake: 'Jumping to conclusions before context is fully established. Observation without documentation is not intelligence.',
    },
    {
      num: '2',
      name: 'Risk',
      definition: 'Identify what could go wrong, what is unknown, and what assumptions are being treated as facts.',
      inputs: [
        'Completed context assessment',
        'Known failure modes and history',
        'Applicable regulatory requirements',
        'Stakeholder constraints and concerns',
      ],
      outputs: ['Risk register', 'Assumption log with confidence levels'],
      mistake: 'Treating visible risks as the complete picture. Undocumented assumptions are the most dangerous risk of all.',
    },
    {
      num: '3',
      name: 'Solution',
      definition: 'Develop evidence-backed recommendations that directly address the documented risks.',
      inputs: [
        'Risk register',
        'Technical standards and specifications',
        'Cost and lifecycle analysis',
        'Operational constraints',
      ],
      outputs: ['Formal recommendation record', 'Decision rationale document'],
      mistake: 'Recommending before verifying the problem is fully understood. Premature solutions are the most expensive mistakes in operational intelligence.',
    },
    {
      num: '4',
      name: 'Verification',
      definition: 'Test and validate the proposed solution before committing organizational resources.',
      inputs: ['Solution design', 'Verification acceptance criteria', 'Test or pilot plan'],
      outputs: ['Verification record', 'Confirmed acceptance criteria'],
      mistake: 'Skipping verification under schedule pressure. Unverified solutions are liability, not intelligence.',
    },
    {
      num: '5',
      name: 'Execution',
      definition: 'Implement with full documentation of every step, decision, deviation, and observation.',
      inputs: ['Verified solution', 'Implementation plan', 'Stakeholder alignment'],
      outputs: ['Execution log', 'Deviation record', 'Completion confirmation'],
      mistake: 'Treating execution as documentation-optional. Field deviations without documentation create future liability and knowledge gaps.',
    },
    {
      num: '6',
      name: 'Learning',
      definition: 'Capture lessons learned, update standards, and apply knowledge to future operations.',
      inputs: ['Execution record', 'Outcome data', 'Stakeholder feedback'],
      outputs: ['Lessons learned record', 'Standard updates', 'Institutional knowledge asset'],
      mistake: 'Treating learning as the \'nice-to-have\' at the end. Organizations that do not learn systematically repeat expensive mistakes at scale.',
    },
  ]

  const oiStages = [
    { num: '1', name: 'Acquire', desc: 'Collect operational data from field instruments, documentation, observations, and interviews.' },
    { num: '2', name: 'Validate', desc: 'Verify data accuracy, completeness, and source reliability before analysis.' },
    { num: '3', name: 'Analyze', desc: 'Apply CTS™ thinking to transform validated data into operational intelligence.' },
    { num: '4', name: 'Decide', desc: 'Make defensible, evidence-backed decisions informed by the intelligence.' },
    { num: '5', name: 'Implement', desc: 'Execute decisions with full documentation at every step.' },
    { num: '6', name: 'Monitor', desc: 'Track outcomes against expected performance indicators.' },
    { num: '7', name: 'Preserve', desc: 'Store intelligence in accessible formats that survive personnel changes.' },
    { num: '8', name: 'Improve', desc: 'Apply lessons learned to future operations and update standards accordingly.' },
  ]

  return (
    <div className="bg-[#04080f] text-white">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold mb-3">CTS™</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Critical Thinking System™</h1>
        <p className="text-white/55 text-sm leading-relaxed max-w-2xl">
          The Governing Methodology for Operational Intelligence™
        </p>
      </section>

      {/* Official Definition Block */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="border-l-4 border-[#c9a96e] bg-[#c9a96e]/[0.04] p-6 rounded-r-xl my-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold mb-3">
            Official Definition — CTS-STD-001 §1.1
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            CTS™ is a structured methodology for helping organizations transform operational evidence, context, risk, engineering analysis, and institutional knowledge into decisions that can be explained, defended, executed, and continuously improved.
          </p>
        </div>
      </section>

      {/* What CTS™ Is / Is Not */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#00FFE1] mb-4">CTS™ IS:</h3>
            <ul className="space-y-3">
              {[
                'A structured thinking methodology',
                'A professional governing standard',
                'A discipline applicable to any operational domain',
                'Evidence-based and defensible by design',
                'Scalable from single-site to enterprise',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="text-[#00FFE1] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-6">
            <h3 className="text-lg font-bold text-white/60 mb-4">CTS™ IS NOT:</h3>
            <ul className="space-y-3">
              {[
                'A software platform or tool',
                'A compliance checklist',
                'A facility audit format',
                'Exclusive to facility management',
                'A replacement for engineering judgment',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                  <span className="text-white/30 mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6-Stage Methodology */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          The CTS™ Methodology — Six Stages of Structured Thinking
        </h2>
        <p className="text-white/55 text-sm leading-relaxed max-w-2xl mb-10">
          Each stage must be completed in sequence. The quality of each stage determines the defensibility of the final decision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-6 hover:border-white/[0.14] hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-4xl font-bold text-[#00FFE1]/30">{stage.num}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Stage {stage.num} — {stage.name}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">{stage.definition}</p>

              <div className="border-t border-white/[0.06] pt-4 mb-4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-bold mb-2">Required Inputs</p>
                <ul className="space-y-1">
                  {stage.inputs.map((input) => (
                    <li key={input} className="text-xs text-white/55 flex items-start gap-2">
                      <span className="text-[#00FFE1]/50 mt-0.5">·</span>
                      {input}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-bold mb-2">Required Outputs</p>
                <ul className="space-y-1">
                  {stage.outputs.map((output) => (
                    <li key={output} className="text-xs text-white/55 flex items-start gap-2">
                      <span className="text-[#00FFE1]/50 mt-0.5">·</span>
                      {output}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-500/[0.06] border border-amber-500/20 rounded-lg p-3">
                <p className="text-[10px] uppercase tracking-[0.15em] text-amber-400/70 font-bold mb-1">Common Mistake</p>
                <p className="text-xs text-amber-300 leading-relaxed">{stage.mistake}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OI Lifecycle Section */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Operational Intelligence™ Lifecycle</h2>
        <div className="bg-[#00FFE1]/[0.04] border border-[#00FFE1]/15 rounded-xl p-4 text-sm text-white/60 mb-8">
          The OI™ Lifecycle describes how operational data transforms into decision intelligence. Triangulation, synthesis, root cause analysis, and evidence correlation are analytical disciplines within the Analyze phase — not separate lifecycle stages.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {oiStages.map((stage) => (
            <div
              key={stage.num}
              className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-4 hover:border-white/[0.14] hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#00FFE1]/10 text-[#00FFE1] text-[10px] font-bold flex items-center justify-center">
                  {stage.num}
                </span>
                <span className="font-bold text-white text-sm">{stage.name}</span>
              </div>
              <p className="text-xs text-white/55 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
