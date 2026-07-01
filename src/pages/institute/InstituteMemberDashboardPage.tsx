import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen, Users, MessageSquare, Download, Zap, Settings,
  LogOut, Shield, Star, Building2, Briefcase, Clock
} from 'lucide-react';
import { useInstituteAuth, type InstituteTier } from '@/context/InstituteAuthContext';
import { Button, Card, Badge } from '@/components/InstituteUI';

const TIER_LABELS: Record<InstituteTier, string> = {
  explorer: 'Explorer',
  professional: 'Professional',
  practitioner: 'Practitioner',
  enterprise: 'Enterprise',
  founding: 'Founding Member',
};

const TIER_BADGE: Record<InstituteTier, 'teal' | 'blue' | 'gold' | 'orange' | 'green'> = {
  explorer: 'teal',
  professional: 'blue',
  practitioner: 'gold',
  enterprise: 'orange',
  founding: 'green',
};

const UPGRADE_LINKS: Partial<Record<InstituteTier, { label: string; link: string }>> = {
  explorer: { label: 'Upgrade to Professional', link: '/institute/signup?tier=professional' },
  professional: { label: 'Upgrade to Practitioner', link: '/institute/signup?tier=practitioner' },
};

interface QuickLink {
  icon: typeof BookOpen;
  label: string;
  description: string;
  href: string;
  tiers: InstituteTier[];
}

const QUICK_LINKS: QuickLink[] = [
  {
    icon: BookOpen,
    label: 'CTS™ Standards',
    description: 'Browse the official standards library',
    href: '/institute/standards',
    tiers: ['explorer', 'professional', 'practitioner', 'enterprise', 'founding'],
  },
  {
    icon: Users,
    label: 'Forums',
    description: 'Join professional discussions',
    href: '/institute/forums',
    tiers: ['explorer', 'professional', 'practitioner', 'enterprise', 'founding'],
  },
  {
    icon: MessageSquare,
    label: 'Roundtables',
    description: 'Collaborate in private workspaces',
    href: '/institute/roundtables',
    tiers: ['practitioner', 'enterprise', 'founding'],
  },
  {
    icon: Download,
    label: 'Downloads',
    description: 'Free resources and guides',
    href: '/institute/downloads',
    tiers: ['explorer', 'professional', 'practitioner', 'enterprise', 'founding'],
  },
  {
    icon: Zap,
    label: 'OI Pulse',
    description: 'Industry intelligence digest',
    href: '/institute/pulse',
    tiers: ['explorer', 'professional', 'practitioner', 'enterprise', 'founding'],
  },
  {
    icon: Star,
    label: 'Publications',
    description: 'Research and member publications',
    href: '/institute/publications',
    tiers: ['professional', 'practitioner', 'enterprise', 'founding'],
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export default function InstituteMemberDashboardPage() {
  const { user, profile, loading, signOut } = useInstituteAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/institute/login');
    }
  }, [loading, user, navigate]);

  async function handleSignOut() {
    await signOut();
    navigate('/institute');
  }

  if (loading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-[#00FFE1]/30 border-t-[#00FFE1] rounded-full animate-spin" />
      </div>
    );
  }

  const tier = profile.tier as InstituteTier;
  const badgeVariant = TIER_BADGE[tier];
  const accessibleLinks = QUICK_LINKS.filter(l => l.tiers.includes(tier));
  const lockedLinks = QUICK_LINKS.filter(l => !l.tiers.includes(tier));
  const upgrade = UPGRADE_LINKS[tier];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold mb-1">
            Member Dashboard
          </p>
          <h1 className="text-2xl font-bold text-white">
            Welcome back, {profile.display_name.split(' ')[0]}
          </h1>
          <p className="text-white/40 text-sm mt-0.5">{user?.email}</p>
        </div>
        <div className="flex items-center gap-2.5">
          <Badge variant={badgeVariant}>{TIER_LABELS[tier]}</Badge>
          <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-1.5">
            <LogOut size={13} />
            Sign out
          </Button>
        </div>
      </div>

      {/* Profile card */}
      <Card className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#00FFE1]/10 border border-[#00FFE1]/20 flex items-center justify-center shrink-0">
            <span className="text-[#00FFE1] font-bold text-xl">
              {profile.display_name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-white text-lg">{profile.display_name}</p>
            <div className="flex flex-wrap items-center gap-3 mt-1.5">
              {profile.organization && (
                <span className="flex items-center gap-1.5 text-sm text-white/50">
                  <Building2 size={13} />
                  {profile.organization}
                </span>
              )}
              {profile.job_title && (
                <span className="flex items-center gap-1.5 text-sm text-white/50">
                  <Briefcase size={13} />
                  {profile.job_title}
                </span>
              )}
              <span className="flex items-center gap-1.5 text-sm text-white/50">
                <Clock size={13} />
                Member since {formatDate(profile.created_at)}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Badge
              variant={profile.subscription_status === 'active' ? 'green' : 'orange'}
            >
              {profile.subscription_status}
            </Badge>
          </div>
        </div>
      </Card>

      {/* Upgrade banner */}
      {upgrade && (
        <div className="bg-[#00FFE1]/[0.04] border border-[#00FFE1]/15 rounded-xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <Shield size={16} className="text-[#00FFE1] mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Unlock more access</p>
              <p className="text-sm text-white/45">
                Upgrade your membership to unlock posting, roundtables, and member publications.
              </p>
            </div>
          </div>
          <Link to={upgrade.link}>
            <Button variant="outline" size="sm" className="shrink-0 whitespace-nowrap">
              {upgrade.label}
            </Button>
          </Link>
        </div>
      )}

      {/* Quick access */}
      <div className="mb-10">
        <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
          Your access
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {accessibleLinks.map(({ icon: Icon, label, description, href }) => (
            <Link key={label} to={href}>
              <Card hover className="h-full">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00FFE1]/10 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-[#00FFE1]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Locked features */}
      {lockedLinks.length > 0 && (
        <div className="mb-10">
          <h2 className="text-sm font-semibold text-white/30 uppercase tracking-wider mb-4">
            Available on higher tiers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lockedLinks.map(({ icon: Icon, label, description }) => (
              <div key={label} className="opacity-40 cursor-not-allowed">
                <Card className="h-full">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-white/30" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/60">{label}</p>
                      <p className="text-xs text-white/30 mt-0.5 leading-relaxed">{description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Account settings */}
      <div className="border-t border-white/[0.06] pt-6 flex items-center justify-between">
        <p className="text-xs text-white/25">
          CTS Institute™ member account · {user?.email}
        </p>
        <button className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/50 transition-colors">
          <Settings size={12} />
          Account settings
        </button>
      </div>
    </div>
  );
}
