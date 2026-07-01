import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Mail, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useInstituteAuth } from '@/context/InstituteAuthContext';
import { Button } from '@/components/InstituteUI';

export default function InstituteLoginPage() {
  const { signIn, loading } = useInstituteAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const { error: err } = await signIn(email.trim(), password);
    setSubmitting(false);
    if (err) {
      setError(err);
    } else {
      navigate('/institute/dashboard');
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-[#00C2A8]/30 border-t-[#00FFE1] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <div className="w-9 h-9 rounded-xl bg-[#00C2A8]/10 border border-[#00C2A8]/20 flex items-center justify-center">
            <BookOpen className="h-4.5 w-4.5 text-[#00C2A8]" size={18} />
          </div>
          <div>
            <p className="text-sm font-bold text-[#2C1F0E] leading-none">
              Operational Intelligence Institute<span className="text-[#D4AF57]">™</span>
            </p>
            <p className="text-[10px] text-[#6E5E34]">Member Sign In</p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-[#F3F0EA] border border-[#E2D8CC] rounded-2xl p-8">
          <h1 className="text-xl font-bold text-[#2C1F0E] mb-1 text-center">Welcome back</h1>
          <p className="text-sm text-[#6E5E34] text-center mb-7">Sign in to your institute account</p>

          {error && (
            <div className="flex items-start gap-2.5 bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-5">
              <AlertCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
              <p className="text-sm text-red-300">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-[#4A3828] mb-1.5 font-medium uppercase tracking-wide">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7A6A55]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-[#EDE8E0] border border-[#E2D8CC] rounded-lg pl-9 pr-4 py-2.5 text-sm text-[#2C1F0E] placeholder:text-[#7A6A55] focus:outline-none focus:border-[#00C2A8]/40 focus:bg-white/[0.06] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#4A3828] mb-1.5 font-medium uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7A6A55]" />
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#EDE8E0] border border-[#E2D8CC] rounded-lg pl-9 pr-10 py-2.5 text-sm text-[#2C1F0E] placeholder:text-[#7A6A55] focus:outline-none focus:border-[#00C2A8]/40 focus:bg-white/[0.06] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A6A55] hover:text-[#4A3828] transition-colors"
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={submitting}
              className="w-full mt-2"
            >
              {submitting ? 'Signing in…' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-[#6E5E34]">
              Don't have an account?{' '}
              <Link to="/institute/signup" className="text-[#00C2A8] hover:underline font-medium">
                Join free
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-[11px] text-[#7A6A55] mt-6">
          Operational Intelligence Institute™ — professional membership platform.
        </p>
      </div>
    </div>
  );
}
