import React, { useEffect, useState } from 'react';

/**
 * Futuristic Custom Cursor for Desktop Only
 * Shows an electric targeting crosshair & glowing tracker
 */
export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    // Check reduced motion
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

  // Smooth trailing effect
  useEffect(() => {
    if (isTouchDevice) return;

    let animId;
    const smoothFollow = () => {
      setTrailingPos(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22
      }));
      animId = requestAnimationFrame(smoothFollow);
    };

    animId = requestAnimationFrame(smoothFollow);
    return () => cancelAnimationFrame(animId);
  }, [pos, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision Core Point */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : isPointer ? 1.4 : 1})`,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-cyber-neon shadow-[0_0_10px_#00f5ff]" />
      </div>

      {/* Futuristic Outer Ring / Reticle */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-150 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : isPointer ? 1.5 : 1})`,
        }}
      >
        <div className={`w-8 h-8 rounded-full border transition-colors duration-200 ${
          isPointer
            ? 'border-cyber-neon/80 bg-cyber-blue/10 shadow-[0_0_15px_rgba(0,245,255,0.4)]'
            : 'border-cyan-400/30'
        }`}>
          {/* Subtle crosshair accents when hovering interactive element */}
          {isPointer && (
            <>
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-cyber-neon" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-cyber-neon" />
              <span className="absolute top-1/2 -left-1 -translate-y-1/2 h-0.5 w-1 bg-cyber-neon" />
              <span className="absolute top-1/2 -right-1 -translate-y-1/2 h-0.5 w-1 bg-cyber-neon" />
            </>
          )}
        </div>
      </div>
    </>
  );
};
