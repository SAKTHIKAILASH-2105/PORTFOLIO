import React, { useEffect, useState } from 'react';

/**
 * ELECTRO-MECHANICAL CUSTOM CURSOR (Desktop Only)
 * Precision targeting reticle featuring:
 * - Electric cyan core node
 * - Rotating mechanical gear-toothed outer reticle
 * - Copper crosshair telemetry brackets
 * Respects prefers-reduced-motion & touch devices
 */
export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Touch device detection
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer');

      setIsPointer(Boolean(isClickable));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing reticle interpolation
  useEffect(() => {
    if (isTouchDevice) return;

    let animId;
    const smoothFollow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.24,
        y: prev.y + (pos.y - prev.y) * 0.24,
      }));
      animId = requestAnimationFrame(smoothFollow);
    };

    animId = requestAnimationFrame(smoothFollow);
    return () => cancelAnimationFrame(animId);
  }, [pos, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision Core Particle */}
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : isPointer ? 1.3 : 1})`,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full transition-colors duration-200 ${
            isPointer
              ? 'bg-copper-400 shadow-[0_0_12px_#ea7e3b]'
              : 'bg-cyber-neon shadow-[0_0_10px_#00f5ff]'
          }`}
        />
      </div>

      {/* Electro-Mechanical Outer Targeting Reticle */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-150 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : isPointer ? 1.45 : 1})`,
        }}
      >
        <div
          className={`relative w-8 h-8 rounded-full border transition-all duration-300 ${
            isPointer
              ? 'border-copper-500/80 bg-copper-500/10 shadow-[0_0_16px_rgba(234,126,59,0.35)]'
              : 'border-cyber-cyan/35 bg-dark-900/15'
          }`}
        >
          {/* Mechanical Gear Notches / Rivets (at 0, 90, 180, 270 deg) */}
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-xs bg-copper-400/90 shadow-[0_0_4px_#ea7e3b]" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-xs bg-copper-400/90 shadow-[0_0_4px_#ea7e3b]" />
          <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-1 h-1 rounded-xs bg-cyber-neon/90 shadow-[0_0_4px_#00f5ff]" />
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1 h-1 rounded-xs bg-cyber-neon/90 shadow-[0_0_4px_#00f5ff]" />

          {/* High-Tech Corner Crosshairs when active */}
          {isPointer && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-[1px] bg-copper-400/60" />
              <div className="h-4 w-[1px] bg-copper-400/60 absolute" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
