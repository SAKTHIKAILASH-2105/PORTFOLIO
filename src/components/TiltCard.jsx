import React, { useRef, useState, useEffect } from 'react';

/**
 * REUSABLE 3D TILT CARD WRAPPER
 * Provides hardware-accelerated 3D perspective tilt on hover,
 * dynamic metallic specular glare following the cursor,
 * and spatial Z-axis popout for internal elements.
 */
export const TiltCard = ({
  children,
  className = '',
  maxTilt = 10,
  scale = 1.02,
  perspective = 1000,
  glare = true,
  glareColor = 'rgba(0, 240, 255, 0.22)',
  onClick,
  ...props
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalised from -1 to 1
    const normX = (mouseX / width - 0.5) * 2;
    const normY = (mouseY / height - 0.5) * 2;

    const rotX = normY * -maxTilt;
    const rotY = normX * maxTilt;

    setTilt({ x: rotX, y: rotY });
    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className="w-full"
      {...props}
    >
      <div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${scale}, ${scale}, ${scale})`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          transition: isHovered
            ? 'transform 0.12s cubic-bezier(0.2, 0, 0.4, 1)'
            : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className={`relative will-change-transform ${className}`}
      >
        {/* Child Content (inherits preserve-3d) */}
        {children}

        {/* Dynamic 3D Specular Metallic Glare Layer */}
        {glare && isHovered && (
          <div
            className="card-3d-sheen pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, ${glareColor} 0%, transparent 65%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}
      </div>
    </div>
  );
};
