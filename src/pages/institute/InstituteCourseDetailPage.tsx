import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, BookOpen, ChevronRight, Check, ArrowLeft, Lock, Target, Award } from 'lucide-react';
import { useInstituteAuth } from '@/context/InstituteAuthContext';
import { getCourse, COURSES, type CourseAccessTier } from '@/data/institute/courses';
import { getModulesForCourse } from '@/data/institute/modules';
import { Badge } from '@/components/InstituteUI';

const TIER_ORDER: CourseAccessTier[] = ['explorer', 'professional', 'practitioner'];

function canAccess(userTier: CourseAccessTier | undefined, courseTier: CourseAccessTier): boolean {
  if (!userTier) return courseTier === 'explorer';
  return TIER_ORDER.indexOf(userTier) >= TIER_ORDER.indexOf(courseTier);
}

export default function InstituteCourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const { profile } = useInstituteAuth();
  const navigate = useNavigate();

  const course = getCourse(courseId ?? '');
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 mb-4">Course not found.</p>
          <Link to="/institute/courses" className="text-[#00FFE1] text-sm hover:underline">← Back to courses</Link>
        </div>
      </div>
    );
  }

  const userTier = profile?.tier as CourseAccessTier | undefined;
  const accessible = canAccess(userTier, course.accessTier);
  const modules = getModulesForCourse(course.id);
  const prereqCourse = course.prerequisites?.[0] ? getCourse(course.prerequisites[0]) : null;

  const courseIndex = COURSES.findIndex(c => c.id === course.id);
  const nextCourse = courseIndex < COURSES.length - 1 ? COURSES[courseIndex + 1] : null;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Back nav */}
        <button
          onClick={() => navigate('/institute/courses')}
          className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> All Courses
        </button>

        {/* Course header */}
        <div className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-8 mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FFE1]">
              Course {course.number}
            </span>
            <span className="text-white/20">·</span>
            <span className="text-[10px] text-white/40 uppercase tracking-wide">{course.domainLabel}</span>
            <Badge variant={course.badge}>{course.accessTier.charAt(0).toUpperCase() + course.accessTier.slice(1)}</Badge>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{course.title}</h1>
          <p className="text-[#00FFE1] font-medium mb-4">{course.subtitle}</p>
          <p className="text-white/50 text-sm leading-relaxed mb-6">{course.description}</p>

          <div className="flex flex-wrap gap-5 text-sm text-white/40 mb-6">
            <span className="flex items-center gap-1.5"><Clock size={13} />{course.durationHours} hours</span>
            <span className="flex items-center gap-1.5"><BookOpen size={13} />{course.moduleCount} modules</span>
            {prereqCourse && (
              <span className="flex items-center gap-1.5">
                Prerequisite: <Link to={`/institute/courses/${prereqCourse.id}`} className="text-[#00FFE1] hover:underline">{prereqCourse.title}</Link>
              </span>
            )}
          </div>

          {accessible ? (
            <Link
              to={`/institute/courses/${course.id}/modules/${modules[0]?.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00FFE1] text-black font-bold text-sm hover:bg-[#00FFE1]/90 transition-colors"
            >
              Begin Course <ChevronRight size={15} />
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/30 text-sm">
                <Lock size={14} />
                <span>
                  Requires {course.accessTier.charAt(0).toUpperCase() + course.accessTier.slice(1)} membership
                </span>
              </div>
              <Link
                to={`/institute/signup?tier=${course.accessTier}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c9a96e] text-black font-bold text-sm hover:bg-[#c9a96e]/90 transition-colors"
              >
                Upgrade Access
              </Link>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left — modules */}
          <div className="md:col-span-2">
            <h2 className="text-white font-bold text-lg mb-4">Course Modules</h2>
            <div className="space-y-3">
              {modules.map((mod, idx) => (
                <div
                  key={mod.id}
                  className={`rounded-xl border transition-all ${
                    accessible
                      ? 'bg-white/[0.025] border-white/[0.07] hover:border-white/[0.14]'
                      : 'bg-white/[0.015] border-white/[0.04] opacity-50'
                  }`}
                >
                  <div className="p-4 flex items-center gap-4">
                    <div
                      className={`flex-none w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border ${
                        accessible
                          ? 'bg-[#00FFE1]/10 border-[#00FFE1]/20 text-[#00FFE1]'
                          : 'bg-white/5 border-white/10 text-white/20'
                      }`}
                    >
                      {mod.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold leading-snug ${accessible ? 'text-white' : 'text-white/30'}`}>
                        {mod.title}
                      </p>
                      <p className={`text-xs mt-0.5 ${accessible ? 'text-white/40' : 'text-white/20'}`}>
                        {mod.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/30">
                      <span className="flex items-center gap-1"><Clock size={11} />{mod.estimatedMinutes} min</span>
                      {accessible ? (
                        <Link
                          to={`/institute/courses/${course.id}/modules/${mod.id}`}
                          className="text-[#00FFE1] hover:underline text-xs"
                        >
                          {idx === 0 ? 'Start' : 'View'} →
                        </Link>
                      ) : (
                        <Lock size={11} className="text-white/20" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Knowledge test notice */}
            {accessible && (
              <div className="mt-4 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 flex items-start gap-3">
                <div className="flex-none w-6 h-6 rounded bg-[#00FFE1]/10 flex items-center justify-center mt-0.5">
                  <Check size={12} className="text-[#00FFE1]" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">Knowledge test after each module</p>
                  <p className="text-xs text-white/40 mt-0.5">
                    Pass at 70% or higher to unlock the next module. Retakes allowed. Results saved to your profile.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right — objectives + next */}
          <div className="space-y-5">
            {/* Learning objectives */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Target size={14} className="text-[#c9a96e]" />
                <h3 className="text-white font-semibold text-sm">Learning Objectives</h3>
              </div>
              <ul className="space-y-2.5">
                {course.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-white/50">
                    <span className="flex-none w-4 h-4 rounded bg-[#c9a96e]/10 text-[#c9a96e] text-[10px] flex items-center justify-center mt-0.5 font-bold">
                      {i + 1}
                    </span>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certification track */}
            <div className="bg-[#c9a96e]/[0.04] border border-[#c9a96e]/15 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Award size={14} className="text-[#c9a96e]" />
                <h3 className="text-[#c9a96e] font-semibold text-sm">Certification Track</h3>
              </div>
              <p className="text-xs text-white/40 mb-3">
                Complete all 7 courses to unlock the CTS™ Practitioner Certification Exam.
              </p>
              <div className="flex items-center gap-1">
                {COURSES.filter(c => !c.isCertificationExam).map((c, i) => (
                  <div
                    key={c.id}
                    className={`flex-1 h-1.5 rounded-full ${c.id === course.id ? 'bg-[#c9a96e]' : i < courseIndex ? 'bg-[#c9a96e]/40' : 'bg-white/10'}`}
                  />
                ))}
              </div>
              <p className="text-[10px] text-white/30 mt-2">Course {course.number} of 7</p>
            </div>

            {/* Next course */}
            {nextCourse && !nextCourse.isCertificationExam && (
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4">
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Up Next</p>
                <p className="text-sm font-semibold text-white">{nextCourse.title}</p>
                <p className="text-xs text-white/40 mt-1">{nextCourse.domainLabel}</p>
                <Link
                  to={`/institute/courses/${nextCourse.id}`}
                  className="flex items-center gap-1 text-[#00FFE1] text-xs mt-3 hover:underline"
                >
                  View Course <ChevronRight size={11} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
