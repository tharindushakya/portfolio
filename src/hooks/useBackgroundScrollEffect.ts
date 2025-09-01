import { useEffect } from 'react';

/**
 * Applies a blur + slight zoom to the global background as the user scrolls past the hero.
 * Hero (initial viewport) stays sharp; effect ramps up after threshold.
 */
export function useBackgroundScrollEffect(options?: { maxBlur?: number; maxScale?: number; start?: number; end?: number }) {
  const { maxBlur = 12, maxScale = 1.08, start = 0.15, end = 0.55 } = options || {};

  useEffect(() => {
    const root = document.body;
    root.classList.add('bg-effect-active');

    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight || 1;
      const progressRaw = (scrollY - vh * start) / (vh * (end - start));
      const progress = Math.min(1, Math.max(0, progressRaw));
      const blur = progress * maxBlur;
      const scale = 1 + (maxScale - 1) * progress;
      root.style.setProperty('--bg-blur-strength', blur.toFixed(2) + 'px');
      root.style.setProperty('--bg-scale', scale.toFixed(4));
      // Fallback: if background-image somehow removed, force a reflow by toggling inherit on pseudo
      if (!getComputedStyle(root).backgroundImage || getComputedStyle(root).backgroundImage === 'none') {
        // no-op placeholder; could reassign a default image here if desired
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      root.style.removeProperty('--bg-blur-strength');
      root.style.removeProperty('--bg-scale');
      root.classList.remove('bg-effect-active');
    };
  }, [maxBlur, maxScale, start, end]);
}
