import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { Eye, ZoomIn, FileCheck, Loader2 } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

/**
 * High-performance, responsive HTML5 Canvas PDF certificate previewer.
 * Renders page 1 of the credential PDF in high resolution.
 * Supports touch interactions, click-to-expand lightbox, and metallic framing.
 */
export const CertificateCanvas = ({
  pdfUrl,
  title,
  organization,
  credentialId,
  score,
  onExpand,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(1.414); // Default A4 landscape aspect ratio

  useEffect(() => {
    let isCancelled = false;
    let renderTask = null;

    async function renderPage() {
      if (!pdfUrl) return;
      try {
        setLoading(true);
        setError(false);

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        if (isCancelled) return;

        const page = await pdf.getPage(1);
        if (isCancelled) return;

        const originalViewport = page.getViewport({ scale: 1.0 });
        const width = originalViewport.width;
        const height = originalViewport.height;
        const ratio = width / height;
        setAspectRatio(ratio);

        const canvas = canvasRef.current;
        if (!canvas) return;

        // Render at 2x scale for Retina/High-DPI sharpness on both mobile & desktop
        const dpr = window.devicePixelRatio || 2;
        const targetWidth = Math.min(600, window.innerWidth - 60);
        const scale = (targetWidth / width) * Math.min(dpr, 2.0);
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const ctx = canvas.getContext('2d', { alpha: false });
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };

        renderTask = page.render(renderContext);
        await renderTask.promise;

        if (!isCancelled) {
          setLoading(false);
        }
      } catch (err) {
        if (err?.name === 'RenderingCancelledException') return;
        if (!isCancelled) {
          console.warn('PDF render error for ' + pdfUrl, err);
          setError(true);
          setLoading(false);
        }
      }
    }

    renderPage();

    return () => {
      isCancelled = true;
      if (renderTask) {
        try {
          renderTask.cancel();
        } catch (e) {}
      }
    };
  }, [pdfUrl]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl bg-graphite-950 border border-titanium-800 group/cert cursor-pointer shadow-inner"
      style={{ aspectRatio: `${aspectRatio}` }}
      onClick={() => onExpand && onExpand(pdfUrl, title, organization, credentialId)}
      title="Click to inspect certificate in high resolution"
    >
      {/* Blueprint grid watermark in canvas background */}
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

      {/* The HTML5 Canvas displaying the actual rendered certificate */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-contain transition-all duration-300 ${
          loading ? 'opacity-0 scale-98' : 'opacity-100 scale-100'
        }`}
      />

      {/* Loading Skeleton */}
      {loading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-graphite-950/90 text-metallic-steel p-4 space-y-2">
          <Loader2 className="w-6 h-6 animate-spin text-copper-400" />
          <span className="text-[11px] font-mono tracking-wider text-slate-300">
            DECODING CREDENTIAL VECTOR...
          </span>
          <div className="w-24 h-1 bg-graphite-800 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-copper-500 to-cyber-cyan animate-pulse" />
          </div>
        </div>
      )}

      {/* Fallback if PDF fails to decode */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-graphite-900 p-4 text-center">
          <FileCheck className="w-8 h-8 text-copper-400 mb-2 opacity-80" />
          <span className="text-xs font-mono text-white font-medium mb-1">
            {title}
          </span>
          <span className="text-[10px] font-mono text-metallic-steel">
            {organization}
          </span>
        </div>
      )}

      {/* Hover/Tap Overlay with Magnify / Expand prompt */}
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 via-graphite-950/30 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3">
        <div className="flex items-center justify-between text-white text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-copper-500/90 text-white font-semibold shadow-md">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Click to Expand</span>
          </span>
          {score && (
            <span className="px-2 py-0.5 rounded bg-black/70 text-amber-300 border border-amber-500/40 text-[10px]">
              {score.split(' ')[0]}
            </span>
          )}
        </div>
      </div>

      {/* Subtle corner tech crosshairs */}
      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-cyber-cyan/50 pointer-events-none" />
      <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-cyber-cyan/50 pointer-events-none" />
      <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-cyber-cyan/50 pointer-events-none" />
      <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-cyber-cyan/50 pointer-events-none" />
    </div>
  );
};
