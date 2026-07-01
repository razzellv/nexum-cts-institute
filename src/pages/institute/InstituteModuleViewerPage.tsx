import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, ChevronRight, BookOpen, Clock, Lightbulb, Target, GitBranch } from 'lucide-react';
import { getCourse, type CourseAccessTier } from '@/data/institute/courses';
import { getModule, getModulesForCourse } from '@/data/institute/modules';
import { getQuiz } from '@/data/institute/quizzes';
import { useInstituteAuth } from '@/context/InstituteAuthContext';
import KnowledgeTest from '@/components/institute/KnowledgeTest';
import { Button } from '@/components/InstituteUI';

type ViewSection = 'content' | 'quiz';

const TIER_ORDER: CourseAccessTier[] = ['explorer', 'professional', 'practitioner'];
function canAccess(userTier: CourseAccessTier | undefined, courseTier: CourseAccessTier): boolean {
  if (!userTier) return courseTier === 'explorer';
  return TIER_ORDER.indexOf(userTier) >= TIER_ORDER.indexOf(courseTier);
}

export default function InstituteModuleViewerPage() {
  const { courseId, moduleId } = useParams<{ courseId: string; moduleId: string }>();
  const { profile } = useInstituteAuth();
  const navigate = useNavigate();
  const [section, setSection] = useState<ViewSection>('content');
  const [quizPassed, setQuizPassed] = useState(false);

  const course = getCourse(courseId ?? '');
  const mod = getModule(moduleId ?? '');

  if (!course || !mod) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white/40">Module not found.</p>
      </div>
    );
  }

  const userTier = profile?.tier as CourseAccessTier | undefined;
  if (!canAccess(userTier, course.accessTier)) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <p className="text-white font-semibold mb-2">Access restricted</p>
          <p className="text-white/40 text-sm mb-5">This course requires {course.accessTier} membership.</p>
          <Link to={`/institute/signup?tier=${course.accessTier}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c9a96e] text-black font-bold text-sm">
            Upgrade Access
          </Link>
        </div>
      </div>
    );
  }

  const allModules = getModulesForCourse(course.id);
  const currentIndex = allModules.findIndex(m => m.id === mod.id);
  const nextModule = currentIndex < allModules.length - 1 ? allModules[currentIndex + 1] : null;
  const quiz = getQuiz(mod.quizId);

  function handleQuizPass(score: number) {
    setQuizPassed(true);
    // TODO: save progress to Supabase
    console.log('Module passed with score:', score);
  }

  function handleContinue() {
    if (nextModule) {
      navigate(`/institute/courses/${course!.id}/modules/${nextModule.id}`);
    } else {
      navigate(`/institute/courses/${course!.id}`);
    }
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/30 mb-8">
          <button onClick={() => navigate('/institute/courses')} className="hover:text-white transition-colors">Courses</button>
          <ChevronRight size={12} />
          <button onClick={() => navigate(`/institute/courses/${course.id}`)} className="hover:text-white transition-colors">{course.title}</button>
          <ChevronRight size={12} />
          <span className="text-white/60">{mod.title}</span>
        </div>

        {/* Module header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2 text-xs text-white/40 uppercase tracking-widest">
            <span>Module {mod.number} of {allModules.length}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={11} />{mod.estimatedMinutes} min</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">{mod.title}</h1>
          <p className="text-[#00FFE1] mt-1 font-medium">{mod.subtitle}</p>
        </div>

        {/* Section tabs */}
        <div className="flex gap-1 bg-white/[0.03] rounded-xl p-1 mb-8 border border-white/[0.06]">
          {(['content', 'quiz'] as ViewSection[]).map(s => (
            <button
              key={s}
              onClick={() => setSection(s)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                section === s
                  ? 'bg-white/[0.07] text-white'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {s === 'content' ? 'Module Content' : 'Knowledge Test'}
            </button>
          ))}
        </div>

        {/* Content section */}
        {section === 'content' && (
          <div className="space-y-8">

            {/* Overview */}
            <section>
              <p className="text-white/60 leading-relaxed text-base">{mod.overview}</p>
            </section>

            {/* Key Terms */}
            {mod.keyTerms.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={15} className="text-[#c9a96e]" />
                  <h2 className="text-white font-bold text-lg">Key Terms</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {mod.keyTerms.map(kt => (
                    <div key={kt.term} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
                      <p className="text-[#c9a96e] font-bold text-sm mb-1">{kt.term}</p>
                      <p className="text-white/50 text-xs leading-relaxed">{kt.definition}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Concepts */}
            {mod.concepts.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb size={15} className="text-[#00FFE1]" />
                  <h2 className="text-white font-bold text-lg">Core Concepts</h2>
                </div>
                <div className="space-y-4">
                  {mod.concepts.map((c, i) => (
                    <div key={i} className="bg-white/[0.025] border border-white/[0.06] rounded-xl p-5">
                      <h3 className="text-white font-semibold mb-2 text-sm">{c.title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{c.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Diagram */}
            {mod.diagram && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <GitBranch size={15} className="text-[#00FFE1]" />
                  <h2 className="text-white font-bold text-lg">{mod.diagram.title}</h2>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
                  {/* Flow diagram */}
                  <div className="overflow-x-auto">
                    <div className="flex flex-wrap gap-3 items-center justify-center min-w-max mx-auto">
                      {mod.diagram.nodes.map((node, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="bg-[#00FFE1]/[0.06] border border-[#00FFE1]/20 rounded-lg px-4 py-2.5 text-[#00FFE1] text-xs font-medium text-center max-w-[140px]">
                            {node}
                          </div>
                          {i < mod.diagram!.nodes.length - 1 && (
                            <ChevronRight size={14} className="text-white/20 flex-none" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/40 text-xs mt-5 leading-relaxed text-center max-w-2xl mx-auto">
                    {mod.diagram.description}
                  </p>
                </div>
              </section>
            )}

            {/* Strategies */}
            {mod.strategies.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Target size={15} className="text-[#c9a96e]" />
                  <h2 className="text-white font-bold text-lg">Practitioner Strategies</h2>
                </div>
                <ul className="space-y-3">
                  {mod.strategies.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="flex-none w-5 h-5 rounded bg-[#c9a96e]/10 text-[#c9a96e] text-[10px] font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Practice Example */}
            <section>
              <div className="bg-[#c9a96e]/[0.04] border border-[#c9a96e]/15 rounded-xl p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#c9a96e] mb-4">
                  Practice Example — {mod.practiceExample.domain}
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-white/70 uppercase tracking-wide mb-1">Scenario</p>
                    <p className="text-white/60 text-sm leading-relaxed">{mod.practiceExample.scenario}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/70 uppercase tracking-wide mb-1">Application</p>
                    <p className="text-white/60 text-sm leading-relaxed">{mod.practiceExample.application}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/70 uppercase tracking-wide mb-1">Expected Outcome</p>
                    <p className="text-white/60 text-sm leading-relaxed">{mod.practiceExample.expectedOutcome}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Move to quiz */}
            <div className="flex justify-end pt-4 border-t border-white/[0.05]">
              <Button variant="primary" size="md" onClick={() => setSection('quiz')}>
                Take Knowledge Test <ChevronRight size={14} className="ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* Quiz section */}
        {section === 'quiz' && quiz && (
          <KnowledgeTest
            quiz={quiz}
            onPass={handleQuizPass}
            onContinue={handleContinue}
          />
        )}

        {!quiz && section === 'quiz' && (
          <div className="text-center py-16 text-white/30">
            <p>Knowledge test not yet available for this module.</p>
            <Button variant="ghost" size="md" className="mt-4" onClick={handleContinue}>
              Continue Anyway
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
