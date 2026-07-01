/**
 * InstituteLayout — CTS Institute™ public-facing layout
 * Top navigation + warm cream theme matching design spec
 * Typography: Playfair Display (headings) + Inter (body)
 */

import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  BookOpen,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { useInstituteAuth } from '@/context/InstituteAuthContext';

// Design tokens (from spec)
const C = {
  cream:      '#FAF9F1',
  beige:      '#F3F0EA',
  tan:        '#E7DDD4',
  brown:      '#6E5E34',
  darkBrown:  '#4C3D21',
  gold:       '#D4AF57',
  turquoise:  '#6ECAB6',
  teal:       '#00C2A8',
  tealDark:   '#005677',
  text:       '#2C1F0E',
  textMuted:  '#7A6A55',
  border:     '#E2D8CC',
};

const NAV_LINKS = [
  { label: 'Home',        href: '/institute' },
  { label: 'Library',     href: '/institute/publications' },
  { label: 'Standards',   href: '/institute/standards' },
  { label: 'Courses',     href: '/institute/courses' },
  { label: 'Community',   href: '/institute/forums' },
  { label: 'Events',      href: '/institute/events' },
  { label: 'Resources',   href: '/institute/downloads' },
  { label: 'About',       href: '/institute/about' },
];

const FOOTER_MARKS = [
  'Operational Intelligence™',
  'Decision Defensibility™',
  'Knowledge Continuity™',
  'Evidence Governance™',
  'Continuous Improvement™',
];

export default function InstituteLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { user, profile, signOut } = useInstituteAuth();

  const isActive = (href: string) =>
    href === '/institute'
      ? location.pathname === '/institute' || location.pathname === '/institute/'
      : location.pathname === href || location.pathname.startsWith(href + '/');

  return (
    <div className="min-h-screen flex flex-col" style={{ background: C.cream, color: C.text, fontFamily: 'Inter, sans-serif' }}>

      {/* ── Top Navigation ───────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50"
        style={{ background: 'rgba(250,249,241,0.97)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.border}` }}
      >
        {/* Brand bar */}
        <div
          className="flex items-center justify-between px-6 py-2.5 border-b"
          style={{ borderColor: C.tan }}
        >
          {/* Logo */}
          <Link to="/institute" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${C.gold}18`, border: `1px solid ${C.gold}40` }}
            >
              <BookOpen className="h-4.5 w-4.5 h-5 w-5" style={{ color: C.gold }} />
            </div>
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.15em] font-bold leading-none"
                style={{ color: C.textMuted }}
              >
                Nexum Suum™
              </p>
              <p
                className="text-[15px] font-bold leading-tight"
                style={{ color: C.darkBrown, fontFamily: 'Playfair Display, serif' }}
              >
                CTS Institute™
              </p>
            </div>
          </Link>

          {/* Right: search + notifications + user */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(v => !v)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] transition-all"
              style={{ background: C.beige, border: `1px solid ${C.border}`, color: C.textMuted }}
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search Institute…</span>
            </button>

            {/* Notifications */}
            <button
              className="relative p-2 rounded-lg transition-colors"
              style={{ color: C.textMuted }}
            >
              <Bell className="h-4.5 w-4.5 h-5 w-5" />
              <span
                className="absolute top-1 right-1 min-w-[16px] h-4 rounded-full text-[9px] flex items-center justify-center font-bold px-0.5"
                style={{ background: C.teal, color: '#fff' }}
              >
                2
              </span>
            </button>

            {/* User */}
            {user ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate('/institute/dashboard')}
                  className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] transition-all hover:opacity-80"
                  style={{ background: C.beige, border: `1px solid ${C.border}`, color: C.text }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}
                  >
                    {profile?.display_name?.[0] ?? 'U'}
                  </div>
                  <span>{profile?.display_name.split(' ')[0] ?? 'Dashboard'}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </button>
                <button
                  onClick={() => signOut()}
                  className="p-2 rounded-lg transition-colors hover:opacity-70"
                  style={{ color: C.textMuted }}
                  title="Sign out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/institute/login"
                  className="hidden sm:block text-[12px] px-3 py-1.5 transition-colors hover:opacity-70"
                  style={{ color: C.textMuted }}
                >
                  Sign in
                </Link>
                <Link
                  to="/institute/signup"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-[12px] font-bold transition-all hover:opacity-90"
                  style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: '#fff' }}
                >
                  Join Free <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-1.5 rounded-lg"
              style={{ color: C.textMuted }}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Nav links row */}
        <nav className="hidden md:flex items-center gap-0.5 px-6 py-1.5">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className={cn(
                'px-4 py-1.5 rounded-lg text-[13px] transition-all whitespace-nowrap relative',
                isActive(href) ? 'font-semibold' : 'hover:bg-black/[0.04]',
              )}
              style={
                isActive(href)
                  ? { color: C.teal, borderBottom: `2px solid ${C.teal}`, borderRadius: 0, paddingBottom: '5px' }
                  : { color: C.textMuted }
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden border-t px-4 py-4"
            style={{ borderColor: C.border, background: C.cream }}
          >
            <div className="grid grid-cols-2 gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-[13px] transition-colors"
                  style={
                    isActive(href)
                      ? { color: C.teal, background: `${C.teal}12`, fontWeight: 600 }
                      : { color: C.textMuted }
                  }
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ── Page Content ─────────────────────────────────────────────────────── */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer style={{ background: C.darkBrown, color: 'rgba(255,255,255,0.85)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${C.gold}20`, border: `1px solid ${C.gold}40` }}
                >
                  <BookOpen className="h-4 w-4" style={{ color: C.gold }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">Nexum Suum™</p>
                  <p className="text-[13px] font-bold" style={{ fontFamily: 'Playfair Display, serif', color: C.gold }}>
                    CTS Institute™
                  </p>
                </div>
              </div>
              <p className="text-[12px] leading-relaxed opacity-50">
                The professional home for Operational Intelligence™. Standards, community, education, and research.
              </p>
              <p className="text-[10px] mt-3 opacity-30">A division of Nexum Suum Incorporated</p>
            </div>

            {/* Link cols */}
            {[
              {
                title: 'Knowledge',
                links: [
                  { label: 'Library',         href: '/institute/publications' },
                  { label: 'CTS Standards™',  href: '/institute/standards' },
                  { label: 'Research',         href: '/institute/pulse' },
                  { label: 'Downloads',        href: '/institute/downloads' },
                ],
              },
              {
                title: 'Community',
                links: [
                  { label: 'Forums',           href: '/institute/forums' },
                  { label: 'Roundtables',      href: '/institute/roundtables' },
                  { label: 'Events',           href: '/institute/events' },
                  { label: 'Membership',       href: '/institute/membership' },
                ],
              },
              {
                title: 'Platform',
                links: [
                  { label: 'Courses',          href: '/institute/courses' },
                  { label: 'Certifications',   href: '/institute/courses' },
                  { label: 'AI Instructor',    href: '/institute/ai-instructor' },
                  { label: 'OI™ HQ Platform',  href: '/hub' },
                ],
              },
            ].map(col => (
              <div key={col.title}>
                <h4
                  className="text-[9px] uppercase tracking-[0.2em] font-bold mb-3 opacity-40"
                >
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map(l => (
                    <li key={l.label}>
                      <Link
                        to={l.href}
                        className="text-[12px] opacity-55 hover:opacity-90 transition-opacity"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="border-t pt-6 flex flex-col items-center gap-4"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
              {FOOTER_MARKS.map(m => (
                <span key={m} className="text-[10px] opacity-35 uppercase tracking-wider">
                  {m}
                </span>
              ))}
            </div>
            <p className="text-[11px] opacity-30 text-center">
              © 2026 Nexum Suum Incorporated. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
