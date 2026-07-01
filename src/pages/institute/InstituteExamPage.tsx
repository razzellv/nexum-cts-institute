import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Award, Clock, Shield, CheckCircle, ArrowLeft, Send } from 'lucide-react';
import { useInstituteAuth } from '@/context/InstituteAuthContext';
import { Button } from '@/components/InstituteUI';
import { type CourseAccessTier } from '@/data/institute/courses';

type ExamPhase = 'gate' | 'intro' | 'exam' | 'submitted';

interface ExamQuestion {
  id: string;
  domain: string;
  question: string;
  options: string[];
  correctIndex: number;
}

const EXAM_QUESTIONS: ExamQuestion[] = [
  { id: 'e1', domain: 'CTS™ Foundations', question: 'Which of the five CTS™ governing principles directly enables organizational learning over time?', options: ['Every operational decision must have an evidence chain', 'Every finding must be scored against defined criteria', 'Every outcome must be compared to its projection', 'Every score must be traceable to source data'], correctIndex: 2, },
  { id: 'e2', domain: 'CTS™ Foundations', question: 'A CTS™ practitioner is beginning work at a facility with 15 years of paper maintenance records. The most important first action is:', options: ['Begin scoring all five criteria using the records as Tier 1 data', 'Conduct a Discovery phase to catalog all available data sources and assess their reliability', 'Establish the baseline immediately to maximize time with the client', 'Interview all operators before reviewing any written records'], correctIndex: 1, },
  { id: 'e3', domain: 'Assessment Methodology', question: 'A boiler system\'s state inspection certificate expired 2 days ago. Which CTS™ assessment trigger is active?', options: ['Performance Threshold Breach', 'Lifecycle Milestone', 'Regulatory Event', 'Scheduled Interval'], correctIndex: 2, },
  { id: 'e4', domain: 'Assessment Methodology', question: 'In the CTS™ scoring matrix, which action is a governance violation?', options: ['Adjusting criterion weights after seeing the calculated scores', 'Reporting confidence intervals alongside criterion scores', 'Applying lifecycle position as a modifier to criterion interpretation', 'Documenting data gaps in the assessment record'], correctIndex: 0, },
  { id: 'e5', domain: 'Assessment Methodology', question: 'A boiler has a compliance score of 55. What is the maximum composite CTS™ score possible regardless of other criteria?', options: ['100 if all other criteria score 100', '85 with high scores in other criteria', '70 if risk and reliability are both above 90', 'The composite is capped and cannot exceed 60 due to the compliance cap rule'], correctIndex: 3, },
  { id: 'e6', domain: 'Lifecycle Intelligence', question: 'A 19-year-old centrifugal chiller shows declining efficiency. Per CTS™ lifecycle methodology, the practitioner should:', options: ['Score efficiency normally using the standard rubric with no modification', 'Apply a +5 tolerance before dropping an efficiency tier and initiate a Replace assessment in parallel', 'Recommend immediate replacement without conducting the full assessment', 'Defer assessment until the chiller shows active failure symptoms'], correctIndex: 1, },
  { id: 'e7', domain: 'Lifecycle Intelligence', question: 'Process cycles in CTS™ methodology are best defined as:', options: ['The regulatory inspection cycles mandated by state law for pressure vessels', 'The repeating operational loops within a system that CTS™ monitors, optimizes, and governs', 'The payment and contract renewal cycles in a facility management agreement', 'The quarterly assessment cycles required for high-risk systems'], correctIndex: 1, },
  { id: 'e8', domain: 'Operational Phases', question: 'In the CTS™ Govern phase, the primary activity is:', options: ['Collecting baseline data for a new assessment', 'Measuring outcomes, closing Decision History™ records, and updating Operational Memory™', 'Designing recommendations for a newly identified finding', 'Executing approved capital improvements from the Design phase'], correctIndex: 1, },
  { id: 'e9', domain: 'Operational Phases', question: 'What distinguishes the CTS™ Assess phase from the Design phase?', options: ['Assess produces recommendations while Design produces findings', 'Assess establishes the evidence-based current state; Design frames recommendations and decisions', 'Assess is done by field technicians; Design is done by the practitioner', 'Assess applies to new facilities only; Design applies to existing facilities'], correctIndex: 1, },
  { id: 'e10', domain: 'Energy Intelligence', question: 'A facility\'s energy consumption increases 11% above seasonal baseline with no corresponding load increase. Per CTS™, this is:', options: ['Expected variance within the 15% acceptable range', 'An anomaly that likely reflects equipment degradation, requiring immediate investigation', 'Insignificant unless the trend continues for 6 consecutive months', 'A Tier 4 finding requiring only operator testimony to classify'], correctIndex: 1, },
  { id: 'e11', domain: 'Energy Intelligence', question: 'The CTS™ conservation hierarchy for energy strategy prioritizes actions in which order?', options: ['Cost Reduction > Compliance > Efficiency > Safety', 'Safety > Compliance > Reliability > Efficiency > Cost Reduction', 'Efficiency > Cost Reduction > Compliance > Safety > Reliability', 'Compliance > Efficiency > Safety > Cost Reduction > Reliability'], correctIndex: 1, },
  { id: 'e12', domain: 'Manufacturing Application', question: 'OEE (Overall Equipment Effectiveness) in a manufacturing CTS™ assessment is used as an input to which criterion?', options: ['Compliance', 'Efficiency', 'Risk', 'Lifecycle Position'], correctIndex: 1, },
  { id: 'e13', domain: 'Manufacturing Application', question: 'When OSHA safety data is integrated into a CTS™ manufacturing assessment, it functions as:', options: ['A replacement for the Compliance criterion in industrial environments', 'An intelligence input that feeds the Risk and Compliance criteria', 'A Tier 4 data source requiring operator testimony for validation', 'A standalone assessment separate from CTS™ methodology'], correctIndex: 1, },
  { id: 'e14', domain: 'Advanced Engineering', question: 'Multi-system interdependency mapping in CTS™ engineering assessments is required when:', options: ['A system has been in operation for more than 10 years', 'The performance or failure of one system materially affects another system\'s CTS™ criteria scores', 'Capital budget exceeds $500,000 for the assessment period', 'The practitioner is conducting an assessment for the first time at a facility'], correctIndex: 1, },
  { id: 'e15', domain: 'Decision History™', question: 'A Decision History™ record projected a 12% energy reduction in 90 days. The actual result was 8%. This is best described as:', options: ['A failed recommendation that should be removed from the record', 'Positive Decision Variance indicating the recommendation was approximately correct', 'Negative Decision Variance — a learning signal that should be analyzed to improve future projections', 'An insignificant result that does not affect Operational Memory™'], correctIndex: 2, },
];

export default function InstituteExamPage() {
  const { profile } = useInstituteAuth();
  const navigate = useNavigate();
  const [phase, setPhase] = useState<ExamPhase>('gate');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitting, setSubmitting] = useState(false);

  const userTier = profile?.tier as CourseAccessTier | undefined;
  const canTakeExam = userTier === 'practitioner' || userTier === 'enterprise' || userTier === 'founding';

  const answered = Object.keys(answers).length;
  const total = EXAM_QUESTIONS.length;

  async function submitExam() {
    setSubmitting(true);
    // Calculate score
    const correct = EXAM_QUESTIONS.filter(q => answers[q.id] === q.correctIndex).length;
    const score = Math.round((correct / total) * 100);

    // TODO: Submit to OI™ HQ via InstituteSyncEvent API
    // POST /v1/institute/events { type: 'exam_submitted', memberId: profile.id, score, answers, submittedAt }
    console.log('Exam submitted. Score:', score, 'Answers:', answers);

    await new Promise(r => setTimeout(r, 1200));
    setSubmitting(false);
    setPhase('submitted');
  }

  if (phase === 'gate') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full">
          <button onClick={() => navigate('/institute/courses')} className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={14} /> Back to Courses
          </button>

          <div className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center mx-auto mb-5">
              <Award size={28} className="text-[#c9a96e]" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-[#c9a96e] font-bold mb-2">Course 8</p>
            <h1 className="text-2xl font-bold text-white mb-2">CTS™ Practitioner Certification Exam</h1>
            <p className="text-white/50 text-sm mb-6">Formal evaluation submitted to OI™ HQ</p>

            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 mb-6 text-left space-y-3">
              {[
                ['Questions', `${total} questions across all 7 course domains`],
                ['Duration', 'Approximately 2 hours at a focused pace'],
                ['Passing Score', '75% or higher (11 of 15 correct)'],
                ['Evaluation', 'Submitted to OI™ HQ for formal review by a CTS™ instructor'],
                ['Certificate', 'CTS™ Certified Practitioner™ issued upon passing evaluation'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3 text-sm">
                  <span className="text-white/40 min-w-[110px] shrink-0">{label}</span>
                  <span className="text-white/70">{value}</span>
                </div>
              ))}
            </div>

            {canTakeExam ? (
              <Button variant="primary" size="lg" onClick={() => setPhase('intro')}>
                Begin Exam
              </Button>
            ) : (
              <div>
                <p className="text-white/40 text-sm mb-4">
                  Exam eligibility requires Practitioner membership and completion of all 7 courses.
                </p>
                <Link
                  to="/institute/signup?tier=practitioner"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c9a96e] text-black font-bold text-sm"
                >
                  Upgrade to Practitioner
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'intro') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full">
          <div className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield size={20} className="text-[#00FFE1]" />
              <h2 className="text-white font-bold text-lg">Before You Begin</h2>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'This exam is covered by the CTS™ Professional Honor Code — all answers must reflect your own knowledge.',
                'You may reference the CTS™ standards documentation during the exam.',
                'Your answers are submitted to OI™ HQ and reviewed by a CTS™ certified instructor.',
                'Results and formal evaluation are returned within 5 business days.',
                'You may retake the exam once per 30-day period if you do not pass.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                  <CheckCircle size={14} className="text-[#00FFE1] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-white/40 text-xs mb-6">
              By clicking Begin, you agree to the CTS™ Professional Honor Code and confirm this work is your own.
            </p>
            <Button variant="primary" size="md" onClick={() => setPhase('exam')}>
              I Agree — Begin Exam
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'submitted') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-[#00FFE1]/10 border border-[#00FFE1]/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-[#00FFE1]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">Exam Submitted</h1>
          <p className="text-white/50 text-sm mb-8 max-w-sm mx-auto">
            Your CTS™ Practitioner Certification Exam has been submitted to OI™ HQ for formal evaluation. You'll receive your results within 5 business days.
          </p>
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 mb-8 text-left">
            <p className="text-sm text-white/70 mb-3">What happens next:</p>
            <ul className="space-y-2 text-sm text-white/50">
              <li className="flex items-start gap-2"><CheckCircle size={12} className="text-[#00FFE1] mt-0.5 shrink-0" />A CTS™ instructor reviews your submission in OI™ HQ</li>
              <li className="flex items-start gap-2"><CheckCircle size={12} className="text-[#00FFE1] mt-0.5 shrink-0" />You receive a scorecard showing your performance by domain</li>
              <li className="flex items-start gap-2"><CheckCircle size={12} className="text-[#00FFE1] mt-0.5 shrink-0" />On passing: your CTS™ Certified Practitioner™ certificate is generated</li>
              <li className="flex items-start gap-2"><CheckCircle size={12} className="text-[#00FFE1] mt-0.5 shrink-0" />Certificate is available for download in your member dashboard</li>
            </ul>
          </div>
          <Link
            to="/institute/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00FFE1] text-black font-bold text-sm"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  // Exam phase
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Exam header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#c9a96e] font-bold">CTS™ Practitioner Certification Exam</p>
            <p className="text-white/40 text-sm mt-0.5">{answered} of {total} answered</p>
          </div>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <Clock size={13} />
            <span>~2 hours</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-white/[0.06] rounded-full mb-10">
          <div
            className="h-full bg-[#c9a96e] rounded-full transition-all duration-300"
            style={{ width: `${(answered / total) * 100}%` }}
          />
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {EXAM_QUESTIONS.map((q, idx) => (
            <div key={q.id} className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FFE1]">{q.domain}</span>
                <span className="text-white/20 text-xs">·</span>
                <span className="text-xs text-white/30">Q{idx + 1}</span>
              </div>
              <p className="text-white font-medium text-base leading-relaxed mb-5">{q.question}</p>
              <div className="space-y-2.5">
                {q.options.map((opt, oi) => (
                  <label
                    key={oi}
                    className={`flex items-start gap-3 rounded-xl border p-4 text-sm cursor-pointer transition-all ${
                      answers[q.id] === oi
                        ? 'border-[#00FFE1]/40 bg-[#00FFE1]/[0.06] text-white'
                        : 'border-white/[0.06] bg-white/[0.02] text-white/60 hover:border-white/[0.12]'
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={oi}
                      checked={answers[q.id] === oi}
                      onChange={() => setAnswers(prev => ({ ...prev, [q.id]: oi }))}
                      className="sr-only"
                    />
                    <span className={`flex-none w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold ${
                      answers[q.id] === oi
                        ? 'border-[#00FFE1] bg-[#00FFE1] text-black'
                        : 'border-white/20 text-white/30'
                    }`}>
                      {String.fromCharCode(65 + oi)}
                    </span>
                    <span className="leading-relaxed">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="mt-10 pt-8 border-t border-white/[0.05]">
          {answered < total && (
            <p className="text-white/40 text-sm text-center mb-4">
              {total - answered} question{total - answered !== 1 ? 's' : ''} remaining before you can submit.
            </p>
          )}
          <div className="flex justify-center">
            <Button
              variant="primary"
              size="lg"
              disabled={answered < total || submitting}
              onClick={submitExam}
            >
              {submitting ? (
                'Submitting to OI™ HQ…'
              ) : (
                <><Send size={15} className="mr-2" />Submit to OI™ HQ for Evaluation</>
              )}
            </Button>
          </div>
          <p className="text-center text-xs text-white/25 mt-3">
            Submission is final. Review all answers before submitting.
          </p>
        </div>
      </div>
    </div>
  );
}
