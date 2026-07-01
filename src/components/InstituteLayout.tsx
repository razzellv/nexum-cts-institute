import { useState, useRef, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  BookOpen, Bell, Search, Menu, X, LogOut, ArrowRight, ChevronDown, User,
} from 'lucide-react';
import { useInstituteAuth } from '@/context/InstituteAuthContext';

const C = {
  cream:     '#FAF9F1',
  beige:     '#F3F0EA',
  tan:       '#E7DDD4',
  brown:     '#6E5E34',
  darkBrown: '#4C3D21',
  gold:      '#D4AF57',
  teal:      '#00C2A8',
  tealDark:  '#005677',
  text:      '#2C1F0E',
  muted:     '#4A3828',
  border:    '#E2D8CC',
};

interface NavGroup {
  label: string;
  href?: string;
  children?: { label: string; href: string; desc?: string }[];
}

const NAV: NavGroup[] = [
  { label: 'Home', href: '/institute' },
  {
    label: 'About',
    children: [
      { label: 'About the Institute', href: '/institute/about', desc: 'Mission, history, leadership' },
      { label: 'Professional Chapters', href: '/institute/chapters', desc: 'Global chapter network' },
      { label: 'Partner Organizations', href: '/institute/partners', desc: 'Strategic alliances' },
      { label: 'Contact', href: '/institute/contact', desc: 'Get in touch' },
    ],
  },
  {
    label: 'Knowledge',
    children: [
      { label: 'Publications', href: '/institute/publications', desc: 'White papers, research & guides' },
      { label: 'Research Center', href: '/institute/research', desc: 'Industry research & surveys' },
      { label: 'Bodies of Knowledge', href: '/institute/bok', desc: 'Formal BOK frameworks' },
      { label: 'News & Journal', href: '/institute/journal', desc: 'OI Journal™ & industry news' },
      { label: 'Standards', href: '/institute/standards', desc: 'Published Institute standards' },
    ],
  },
  {
    label: 'Disciplines',
    children: [
      { label: 'Operational Intelligence™', href: '/institute/operational-intelligence', desc: 'The core discipline' },
      { label: 'CTS™ Center', href: '/institute/cts', desc: 'Comprehensive Thinking System™' },
      { label: 'Resource Library', href: '/institute/downloads', desc: 'Free practitioner downloads' },
    ],
  },
  {
    label: 'Education',
    children: [
      { label: 'Courses', href: '/institute/courses', desc: 'Self-paced professional courses' },
      { label: 'Certifications', href: '/institute/certifications', desc: 'Credential pathways' },
    ],
  },
  {
    label: 'Community',
    children: [
      { label: 'Forums', href: '/institute/forums', desc: 'Member discussion & Q&A' },
      { label: 'Roundtables', href: '/institute/roundtables', desc: 'Domain peer groups' },
      { label: 'Events', href: '/institute/events', desc: 'Webinars, conferences & briefings' },
      { label: 'OI Pulse™', href: '/institute/pulse', desc: 'Research digest & insights' },
    ],
  },
  { label: 'Membership', href: '/institute/membership' },
];

const FOOTER_COLS = [
  {
    title: 'Knowledge',
    links: [
      { label: 'Publications',      href: '/institute/publications' },
      { label: 'Research Center',   href: '/institute/research' },
      { label: 'News & Journal',    href: '/institute/journal' },
      { label: 'Standards',         href: '/institute/standards' },
      { label: 'Downloads',         href: '/institute/downloads' },
    ],
  },
  {
    title: 'Disciplines',
    links: [
      { label: 'Operational Intelligence™', href: '/institute/operational-intelligence' },
      { label: 'CTS™ Center',               href: '/institute/cts' },
      { label: 'Bodies of Knowledge',       href: '/institute/bok' },
    ],
  },
  {
    title: 'Education',
    links: [
      { label: 'Courses',        href: '/institute/courses' },
      { label: 'Certifications', href: '/institute/certifications' },
      { label: 'Forums',         href: '/institute/forums' },
      { label: 'Roundtables',    href: '/institute/roundtables' },
      { label: 'Events',         href: '/institute/events' },
    ],
  },
  {
    title: 'Institute',
    links: [
      { label: 'About',                 href: '/institute/about' },
      { label: 'Membership',            href: '/institute/membership' },
      { label: 'Professional Chapters', href: '/institute/chapters' },
      { label: 'Partner Organizations', href: '/institute/partners' },
      { label: 'Contact',               href: '/institute/contact' },
    ],
  },
];

function DropdownMenu({ items, onClose }: { items: NonNullable<NavGroup['children']>; onClose: () => void }) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-64 rounded-xl shadow-xl border py-2 z-50"
      style={{ background: C.cream, borderColor: C.border }}
    >
      {items.map(item => (
        <Link
          key={item.href}
          to={item.href}
          onClick={onClose}
          className="flex flex-col px-4 py-2.5 transition-colors hover:bg-black/[0.04] group"
        >
          <span className="text-[13px] font-semibold" style={{ color: C.text }}>{item.label}</span>
          {item.desc && (
            <span className="text-[11px] mt-0.5" style={{ color: C.muted }}>{item.desc}</span>
          )}
        </Link>
      ))}
    </div>
  );
}

export default function InstituteLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, signOut } = useInstituteAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  function isActive(href: string) {
    if (href === '/institute') return location.pathname === '/institute' || location.pathname === '/institute/';
    return location.pathname === href || location.pathname.startsWith(href + '/');
  }

  function groupActive(group: NavGroup) {
    if (group.href) return isActive(group.href);
    return group.children?.some(c => isActive(c.href)) ?? false;
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: C.cream, color: C.text, fontFamily: 'Inter, sans-serif' }}>

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50" style={{ background: 'rgba(250,249,241,0.97)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.border}` }}>

        {/* Brand row */}
        <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: C.tan }}>
          <Link to="/institute" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${C.gold}18`, border: `1px solid ${C.gold}40` }}>
              <BookOpen className="h-5 w-5" style={{ color: C.gold }} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] font-bold leading-none" style={{ color: C.muted }}>Nexum Suum™</p>
              <p className="text-[15px] font-bold leading-tight" style={{ color: C.darkBrown, fontFamily: 'Playfair Display, serif' }}>
                Operational Intelligence Institute™
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] transition-all"
              style={{ background: C.beige, border: `1px solid ${C.border}`, color: C.muted }}
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search…</span>
            </button>

            <button className="relative p-2 rounded-lg transition-colors" style={{ color: C.muted }}>
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: C.teal }} />
            </button>

            {user ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate('/institute/dashboard')}
                  className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-[12px] transition-all hover:opacity-80"
                  style={{ background: C.beige, border: `1px solid ${C.border}`, color: C.text }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-[#2C1F0E]" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}>
                    {profile?.displayName?.[0] ?? 'U'}
                  </div>
                  <span>{profile?.displayName.split(' ')[0] ?? 'Dashboard'}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </button>
                <button onClick={() => signOut()} className="p-2 rounded-lg hover:opacity-70 transition-colors" style={{ color: C.muted }} title="Sign out">
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/institute/login" className="hidden sm:block text-[12px] px-3 py-1.5 hover:opacity-70 transition-colors" style={{ color: C.muted }}>
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

            <button onClick={() => setMobileOpen(v => !v)} className="lg:hidden p-1.5 rounded-lg" style={{ color: C.muted }}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Nav row */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-0.5 px-6 py-1">
          {NAV.map(group => (
            <div key={group.label} className="relative">
              {group.href ? (
                <Link
                  to={group.href}
                  className={cn('flex items-center gap-1 px-3.5 py-2 rounded-lg text-[13px] transition-all whitespace-nowrap', groupActive(group) ? 'font-semibold' : 'hover:bg-black/[0.04]')}
                  style={groupActive(group) ? { color: C.teal } : { color: C.muted }}
                >
                  {group.label}
                </Link>
              ) : (
                <button
                  onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                  className={cn('flex items-center gap-1 px-3.5 py-2 rounded-lg text-[13px] transition-all whitespace-nowrap', groupActive(group) ? 'font-semibold' : 'hover:bg-black/[0.04]')}
                  style={groupActive(group) ? { color: C.teal } : { color: C.muted }}
                >
                  {group.label}
                  <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', openGroup === group.label && 'rotate-180')} />
                </button>
              )}
              {group.children && openGroup === group.label && (
                <DropdownMenu items={group.children} onClose={() => setOpenGroup(null)} />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t px-4 py-4 max-h-[70vh] overflow-y-auto" style={{ borderColor: C.border, background: C.cream }}>
            {NAV.map(group => (
              <div key={group.label} className="mb-2">
                {group.href ? (
                  <Link to={group.href} className="block px-3 py-2.5 rounded-lg text-[13px] font-semibold" style={{ color: isActive(group.href) ? C.teal : C.text }}>
                    {group.label}
                  </Link>
                ) : (
                  <>
                    <p className="px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold" style={{ color: C.muted }}>{group.label}</p>
                    <div className="grid grid-cols-2 gap-0.5">
                      {group.children?.map(c => (
                        <Link key={c.href} to={c.href} className="px-3 py-2 rounded-lg text-[13px] transition-colors" style={isActive(c.href) ? { color: C.teal, background: `${C.teal}10`, fontWeight: 600 } : { color: C.text }}>
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            {!user && (
              <div className="mt-4 pt-4 border-t flex gap-2" style={{ borderColor: C.border }}>
                <Link to="/institute/login" className="flex-1 text-center px-4 py-2.5 rounded-lg text-[13px] border font-medium" style={{ borderColor: C.border, color: C.text }}>Sign in</Link>
                <Link to="/institute/signup" className="flex-1 text-center px-4 py-2.5 rounded-lg text-[13px] font-bold text-[#2C1F0E]" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` }}>Join Free</Link>
              </div>
            )}
          </div>
        )}
      </header>

      {/* ── Content ──────────────────────────────────────────────────────────── */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer style={{ background: C.darkBrown, color: 'rgba(255,255,255,0.85)' }}>
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${C.gold}20`, border: `1px solid ${C.gold}40` }}>
                  <BookOpen className="h-4 w-4" style={{ color: C.gold }} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest opacity-50">Nexum Suum™</p>
                  <p className="text-[12px] font-bold leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: C.gold }}>
                    Operational Intelligence<br />Institute™
                  </p>
                </div>
              </div>
              <p className="text-[12px] leading-relaxed opacity-50 mb-3">
                The professional home for Operational Intelligence™. Research, standards, education, certification, and community.
              </p>
              <p className="text-[10px] opacity-30">A division of Nexum Suum Incorporated</p>
            </div>

            {/* Link columns */}
            {FOOTER_COLS.map(col => (
              <div key={col.title}>
                <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold mb-3 opacity-40">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map(l => (
                    <li key={l.label}>
                      <Link to={l.href} className="text-[12px] opacity-55 hover:opacity-90 transition-opacity">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {['Operational Intelligence™', 'Decision Defensibility™', 'Knowledge Continuity™', 'Evidence Governance™', 'Continuous Improvement™'].map(m => (
                <span key={m} className="text-[10px] opacity-30 uppercase tracking-wider">{m}</span>
              ))}
            </div>
            <p className="text-[11px] opacity-30">© 2026 Nexum Suum Incorporated. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
