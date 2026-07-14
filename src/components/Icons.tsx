/**
 * DTW Consults — Custom Colorless SVG Icon System
 * All icons: stroke-only, currentColor, no fills.
 * Geometric, architectural, lucid. Not from any icon library.
 */

interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const defaults = { size: 20, strokeWidth: 1.5 };

/* Geometric crosshair — used for Mission / Precision */
export function IconCrosshair({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="7" />
      <line x1="12" y1="17" x2="12" y2="22" />
      <line x1="2" y1="12" x2="7" y2="12" />
      <line x1="17" y1="12" x2="22" y2="12" />
      <rect x="9" y="9" width="6" height="6" />
    </svg>
  );
}

/* Angular telescope scope — used for Vision / Foresight */
export function IconScope({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <polygon points="2,8 14,4 14,12 2,8" />
      <line x1="14" y1="8" x2="22" y2="8" />
      <line x1="16" y1="12" x2="13" y2="20" />
      <line x1="20" y1="12" x2="17" y2="20" />
      <line x1="13" y1="20" x2="17" y2="20" />
    </svg>
  );
}

/* Geometric crystal / gem — used for Values / Excellence */
export function IconCrystal({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <polygon points="12,2 20,8 17,22 7,22 4,8" />
      <polyline points="4,8 12,14 20,8" />
      <line x1="12" y1="2" x2="12" y2="14" />
      <line x1="12" y1="14" x2="7" y2="22" />
      <line x1="12" y1="14" x2="17" y2="22" />
    </svg>
  );
}

/* Prism / optical scan — used for Integrity / Examination */
export function IconPrism({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <polygon points="12,3 22,20 2,20" />
      <line x1="12" y1="3" x2="12" y2="20" />
      <line x1="7" y1="20" x2="22" y2="10" />
      <line x1="17" y1="20" x2="22" y2="10" />
    </svg>
  );
}

/* Interlocking rings — used for Collaboration / Interconnection */
export function IconInterlace({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <rect x="2" y="7" width="10" height="10" />
      <rect x="12" y="7" width="10" height="10" />
      <line x1="7" y1="7" x2="7" y2="17" />
      <line x1="17" y1="7" x2="17" y2="17" />
    </svg>
  );
}

/* Branching spark node — used for Innovation / Energy */
export function IconSpark({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <polyline points="13,2 9,13 14,13 11,22" />
      <line x1="3" y1="8" x2="9" y2="13" />
      <line x1="21" y1="8" x2="14" y2="13" />
      <line x1="3" y1="18" x2="9" y2="13" />
      <line x1="21" y1="18" x2="14" y2="13" />
    </svg>
  );
}

/* Network nodes — used for Client-Centricity / People */
export function IconNodes({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <rect x="10" y="2" width="4" height="4" />
      <rect x="2" y="16" width="4" height="4" />
      <rect x="18" y="16" width="4" height="4" />
      <line x1="12" y1="6" x2="4" y2="16" />
      <line x1="12" y1="6" x2="20" y2="16" />
      <line x1="6" y1="18" x2="18" y2="18" />
    </svg>
  );
}

/* Diamond pin — used for Location / Address */
export function IconPin({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <polygon points="12,2 20,10 12,18 4,10" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="10" y1="10" x2="14" y2="10" />
    </svg>
  );
}

/* Geometric envelope — used for Email / Message */
export function IconEnvelope({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <rect x="2" y="5" width="20" height="14" />
      <polyline points="2,5 12,13 22,5" />
      <line x1="2" y1="19" x2="9" y2="12" />
      <line x1="22" y1="19" x2="15" y2="12" />
    </svg>
  );
}

/* Angular handset — used for Phone / Call */
export function IconHandset({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <polyline points="6,2 6,8 10,10 8,14 14,20 18,18 20,22 22,22 22,18 18,14 16,16 8,8 10,6 6,2" />
    </svg>
  );
}

/* Angular check / verify mark — used for Success / Confirmation */
export function IconCheck({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <polyline points="4,13 9,18 20,6" />
      <rect x="2" y="2" width="20" height="20" />
    </svg>
  );
}

/* Angular tick — compact checkmark for feature lists */
export function IconTick({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <polyline points="4,12 10,18 20,6" />
    </svg>
  );
}

/* Geometric chevron down — used for accordion toggle */
export function IconChevronDown({ size = defaults.size, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <polyline points="4,8 12,16 20,8" />
    </svg>
  );
}
