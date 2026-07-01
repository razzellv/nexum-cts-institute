/**
 * InstituteUI — lightweight component primitives for Operational Intelligence Institute™ pages
 * Exports Button, Card, and Badge with the design API used across all institute pages
 */

import { forwardRef } from 'react';
import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// ── Button ────────────────────────────────────────────────────────────────────

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'primary' && 'bg-[#00FFE1] text-black hover:bg-[#00FFE1]/90 hover:shadow-[0_0_20px_rgba(0,255,225,0.25)]',
        variant === 'outline' && 'border border-[#00FFE1]/40 text-[#00FFE1] hover:bg-[#00FFE1]/10 bg-transparent',
        variant === 'gold'    && 'border border-[#c9a96e]/40 text-[#c9a96e] hover:bg-[#c9a96e]/10 bg-transparent',
        variant === 'ghost'   && 'text-[#4A3828] hover:text-[#00C2A8] hover:bg-white/[0.04] bg-transparent',
        size === 'sm' && 'px-3 py-1.5 text-xs',
        size === 'md' && 'px-5 py-2.5 text-sm',
        size === 'lg' && 'px-7 py-3.5 text-base',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
Button.displayName = 'InstituteButton';

// ── Card ──────────────────────────────────────────────────────────────────────

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gold?: boolean;
}

export function Card({ children, className, hover, gold }: CardProps) {
  return (
    <div className={cn(
      'bg-white/[0.025] border rounded-xl p-6 transition-all duration-300',
      gold ? 'border-[#c9a96e]/20 hover:border-[#c9a96e]/40' : 'border-white/[0.07]',
      hover && 'hover:border-white/[0.14] hover:bg-white/[0.04] cursor-pointer',
      className,
    )}>
      {children}
    </div>
  );
}

// ── Badge ─────────────────────────────────────────────────────────────────────

interface BadgeProps {
  children: ReactNode;
  variant?: 'teal' | 'gold' | 'gray' | 'green' | 'red' | 'blue' | 'orange' | 'purple';
  className?: string;
}

export function Badge({ children, variant = 'gray', className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] border',
      variant === 'teal'   && 'bg-[#00FFE1]/10 text-[#00FFE1] border-[#00FFE1]/20',
      variant === 'gold'   && 'bg-[#c9a96e]/10 text-[#c9a96e] border-[#c9a96e]/20',
      variant === 'gray'   && 'bg-white/[0.05] text-[#4A3828] border-white/[0.08]',
      variant === 'green'  && 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      variant === 'red'    && 'bg-red-500/10 text-red-400 border-red-500/20',
      variant === 'blue'   && 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      variant === 'orange' && 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      variant === 'purple' && 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      className,
    )}>
      {children}
    </span>
  );
}

export default Button;
