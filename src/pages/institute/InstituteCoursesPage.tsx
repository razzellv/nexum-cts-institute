import { Link } from 'react-router-dom';
import { BookOpen, Clock, Lock, ChevronRight, Award, GraduationCap } from 'lucide-react';
import { useInstituteAuth } from '@/context/InstituteAuthContext';
import { COURSES, type CourseAccessTier } from '@/data/institute/courses';
import { Badge } from '@/components/InstituteUI';

const TIER_ORDER: CourseAccessTier[] = ['explorer', 'professional', 'practitioner'];

function tierLabel(tier: CourseAccessTier): string {
  return { explorer: 'Explorer', professional: 'Professional', practitioner: 'Practitioner' }[tier];
}

function tierColor(tier: CourseAccessTier): string {
  return { explorer: '#00FFE1', professional: '#60a5fa', practitioner: '#c9a96e' }[tier];
}

function canAccess(userTier: CourseAccessTier | undefined, courseTier: CourseAccessTier): boolean {
  if (!userTier) return false;
  return TIER_ORDER.indexOf(userTier) >= TIER_ORDER.indexOf(courseTier);
}

export default function InstituteCoursesPage() {
  const { profile } = useInstituteAuth();
  const userTier = profile?.tier as CourseAccessTier | undefined;

  const totalHours = COURSES.filter(c => !c.isCertificationExam).reduce((s, c) => s + c.durationHours, 0);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#00C2A8]/[0.06] border border-[#00C2A8]/20 rounded-full px-4 py-1.5 mb-6">
            <GraduationCap size={12} className="text-[#D4AF57]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF57] font-bold">
              CTS™ Methodology Certification Track
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2C1F0E] mb-4">
            CTS™ Course Library
          </h1>
          <p className="text-[#4A3828] text-base max-w-2xl mx-auto">
            Comprehensive courses teaching the CTS™ methodology through real-world examples across Boiler, Chiller, HVAC, Energy, Manufacturing, and Engineering domains. Complete the track to earn the CTS™ Certified Practitioner™ credential.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-[#6E5E34]">
            <span className="flex items-center gap-1.5"><Clock size={13} />{totalHours} hours of curriculum</span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-1.5"><BookOpen size={13} />{COURSES.length - 1} courses + certification exam</span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-1.5"><Award size={13} />CTS™ Certified Practitioner™</span>
          </div>
        </div>

        {/* Tier access notice for guests */}
        {!profile && (
          <div className="mb-10 bg-white/[0.03] border border-[#E2D8CC] rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-[#2C1F0E] font-semibold text-sm">Create a free Explorer account to access Courses 1 & 2</p>
              <p className="text-[#6E5E34] text-xs mt-1">Upgrade to Professional or Practitioner for the full certification track and exam eligibility.</p>
            </div>
            <Link
              to="/institute/signup"
              className="flex-none inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00C2A8] text-black text-sm font-bold hover:bg-[#00C2A8]/90 transition-colors"
            >
              Join Free
            </Link>
          </div>
        )}

        {/* Course grid */}
        <div className="space-y-4">
          {COURSES.map((course) => {
            const accessible = canAccess(userTier, course.accessTier);
            const isExam = course.isCertificationExam;

            if (isExam) {
              return (
                <div
                  key={course.id}
                  className={`relative rounded-xl border p-6 transition-all duration-200 ${
                    accessible
                      ? 'bg-[#D4AF57]/[0.04] border-[#D4AF57]/25 hover:border-[#D4AF57]/50'
                      : 'bg-white/[0.02] border-[#E2D8CC] opacity-50'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-none w-12 h-12 rounded-xl bg-[#D4AF57]/10 border border-[#D4AF57]/25 flex items-center justify-center">
                      <Award size={22} className="text-[#D4AF57]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF57]">Course 8 — Certification Exam</span>
                        <Badge variant="gold">All Domains</Badge>
                      </div>
                      <h3 className="text-[#2C1F0E] font-bold text-lg">{course.title}</h3>
                      <p className="text-[#4A3828] text-sm mt-1">{course.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#6E5E34]">
                      <span className="flex items-center gap-1"><Clock size={12} />{course.durationHours} hr exam</span>
                      {accessible ? (
                        <Link
                          to={`/institute/courses/${course.id}/exam`}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D4AF57] text-black text-sm font-bold hover:bg-[#D4AF57]/90 transition-colors"
                        >
                          Begin Exam <ChevronRight size={14} />
                        </Link>
                      ) : (
                        <span className="flex items-center gap-1.5 text-[#6E5E34]">
                          <Lock size={12} /> Practitioner required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={course.id}
                className={`relative rounded-xl border transition-all duration-200 ${
                  accessible
                    ? 'bg-[#F3F0EA] border-[#E2D8CC] hover:border-[#E2D8CC] hover:bg-white/[0.035]'
                    : 'bg-[#F5F2EC] border-[#E2D8CC]'
                }`}
              >
                <div className="p-6 flex flex-col md:flex-row md:items-start gap-5">
                  {/* Course number */}
                  <div className="flex-none">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold border"
                      style={{
                        background: accessible ? `${tierColor(course.accessTier)}10` : 'rgba(255,255,255,0.03)',
                        borderColor: accessible ? `${tierColor(course.accessTier)}25` : 'rgba(255,255,255,0.06)',
                        color: accessible ? tierColor(course.accessTier) : 'rgba(255,255,255,0.2)',
                      }}
                    >
                      {course.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest"
                        style={{ color: accessible ? tierColor(course.accessTier) : 'rgba(255,255,255,0.25)' }}
                      >
                        {course.domainLabel}
                      </span>
                      <span className="text-[#7A6A55] text-xs">·</span>
                      <span className="text-[10px] text-[#6E5E34] uppercase tracking-wide">
                        {tierLabel(course.accessTier)} access
                      </span>
                    </div>
                    <h3 className={`font-bold text-lg leading-snug ${accessible ? 'text-[#2C1F0E]' : 'text-[#6E5E34]'}`}>
                      {course.title}
                    </h3>
                    <p className={`text-sm mt-1 ${accessible ? 'text-[#4A3828]' : 'text-[#7A6A55]'}`}>
                      {course.subtitle}
                    </p>
                    {accessible && (
                      <p className="text-xs text-[#6E5E34] mt-2 line-clamp-2">{course.description}</p>
                    )}

                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#6E5E34]">
                      <span className="flex items-center gap-1"><Clock size={11} />{course.durationHours} hrs</span>
                      <span className="flex items-center gap-1"><BookOpen size={11} />{course.moduleCount} modules</span>
                      {course.prerequisites && course.prerequisites.length > 0 && (
                        <span>Prereq: Course {COURSES.find(c => c.id === course.prerequisites![0])?.number}</span>
                      )}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex-none flex items-center">
                    {accessible ? (
                      <Link
                        to={`/institute/courses/${course.id}`}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-[#2C1F0E] text-sm font-medium hover:bg-[#EDE8E0] transition-all"
                      >
                        Start Course <ChevronRight size={14} />
                      </Link>
                    ) : !userTier ? (
                      <div className="flex flex-col items-end gap-1.5">
                        <div className="flex items-center gap-1.5 text-[#7A6A55] text-sm">
                          <Lock size={12} />
                          <span>Sign in required</span>
                        </div>
                        <Link
                          to="/institute/login"
                          className="text-[10px] text-[#00C2A8]/50 hover:text-[#00C2A8] transition-colors"
                        >
                          Sign in →
                        </Link>
                      </div>
                    ) : (
                      <div className="flex flex-col items-end gap-1.5">
                        <div className="flex items-center gap-1.5 text-[#7A6A55] text-sm">
                          <Lock size={12} />
                          <span>Locked</span>
                        </div>
                        <Link
                          to={`/institute/signup?tier=${course.accessTier}`}
                          className="text-[10px] text-[#00C2A8]/50 hover:text-[#00C2A8] transition-colors"
                        >
                          Upgrade →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {!profile && (
          <div className="mt-14 text-center">
            <p className="text-[#6E5E34] text-sm mb-4">
              Courses 3–8 require Professional or Practitioner membership
            </p>
            <Link
              to="/institute/signup?tier=practitioner"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D4AF57] text-black font-bold text-sm hover:bg-[#D4AF57]/90 transition-colors"
            >
              <Award size={15} /> Get Full Access — Practitioner
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
