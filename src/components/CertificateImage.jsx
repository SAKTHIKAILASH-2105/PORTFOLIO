import React, { useState } from 'react';
import { ZoomIn, Award, FileCheck, ShieldCheck } from 'lucide-react';

/**
 * High-performance, responsive Certificate Image component.
 * Displays crisp visual certificate credentials immediately with 0ms delay.
 * Includes interactive hover inspection triggers and tactile metallic frames.
 */
export const CertificateImage = ({
  imageUrl,
  pdfUrl,
  title,
  organization,
  credentialId,
  score,
  onExpand,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-graphite-950 border border-titanium-750 hover:border-copper-500/60 group/cert cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300"
      onClick={() => onExpand && onExpand(imageUrl, pdfUrl, title, organization, credentialId)}
      title="Click to inspect certificate in high resolution"
    >
      {/* Background blueprint watermark grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 245, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 245, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Actual Certificate Image */}
      <img
        src={imageUrl}
        alt={`${title} - ${organization}`}
        onLoad={() => setImageLoaded(true)}
        className={`w-full h-auto object-cover transition-all duration-300 ${
          imageLoaded ? 'opacity-100 scale-100' : 'opacity-90 scale-99'
        } group-hover/cert:scale-[1.02]`}
        loading="lazy"
      />

      {/* Hover / Touch Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 via-graphite-950/25 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3">
        <div className="flex items-center justify-between text-white text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-copper-500/90 text-white font-semibold shadow-md">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Click to Inspect</span>
          </span>
          {score && (
            <span className="px-2 py-0.5 rounded bg-black/80 text-amber-300 border border-amber-500/40 text-[10px] font-mono">
              {score.split(' ')[0]}
            </span>
          )}
        </div>
      </div>

      {/* Corner Tech Fastener Accents */}
      <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-copper-500/70 pointer-events-none" />
      <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-copper-500/70 pointer-events-none" />
      <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-copper-500/70 pointer-events-none" />
      <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-copper-500/70 pointer-events-none" />
    </div>
  );
};
