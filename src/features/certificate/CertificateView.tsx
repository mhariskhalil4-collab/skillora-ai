import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import signatureImage from '@/assets/signature.png';
import { ExclamationTriangleIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { PRODUCTION_VERIFY_BASE_URL } from './certificate.service';

interface CertificateViewProps {
  recipientName: string;
  courseTitle: string;
  issuedDate: string;
  verifyUrl: string;
}

export default function CertificateView({
  recipientName,
  courseTitle,
  issuedDate,
  verifyUrl,
}: CertificateViewProps) {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  // Normalize verifyUrl to ensure it always uses the canonical production endpoint
  const canonicalVerifyUrl = (() => {
    if (!verifyUrl) return PRODUCTION_VERIFY_BASE_URL;
    if (verifyUrl.includes('localhost') || verifyUrl.includes('127.0.0.1')) {
      const parts = verifyUrl.split('/');
      const id = parts[parts.length - 1];
      return `${PRODUCTION_VERIFY_BASE_URL}/${id}`;
    }
    if (verifyUrl.startsWith('/verify-certificate/') || verifyUrl.startsWith('/verify/')) {
      const parts = verifyUrl.split('/');
      const id = parts[parts.length - 1];
      return `${PRODUCTION_VERIFY_BASE_URL}/${id}`;
    }
    return verifyUrl;
  })();

  useEffect(() => {
    // Generate high-contrast, high-resolution QR Code for reliable phone scanning
    QRCode.toDataURL(canonicalVerifyUrl, {
      width: 260,
      margin: 1,
      errorCorrectionLevel: 'M',
      color: {
        dark: '#1E1B4B', // High contrast deep indigo-black
        light: '#FFFFFF', // Clean white background
      },
    })
      .then(setQrDataUrl)
      .catch((err) => console.error('[CertificateView] QR generation failed:', err));
  }, [canonicalVerifyUrl]);

  const handleDownloadPdf = async () => {
    if (!certificateRef.current) return;
    setDownloading(true);
    setDownloadError(null);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 3,
        backgroundColor: '#FCFBFF',
        useCORS: true,
        logging: false,
      });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgAspect = canvas.width / canvas.height;
      let renderWidth = pageWidth;
      let renderHeight = pageWidth / imgAspect;
      if (renderHeight > pageHeight) {
        renderHeight = pageHeight;
        renderWidth = pageHeight * imgAspect;
      }
      const x = (pageWidth - renderWidth) / 2;
      const y = (pageHeight - renderHeight) / 2;

      pdf.addImage(imgData, 'PNG', x, y, renderWidth, renderHeight);
      pdf.save(`Skillora-Certificate-${courseTitle.replace(/\s+/g, '-')}.pdf`);
    } catch (err) {
      console.error('[CertificateView] PDF generation failed:', err);
      setDownloadError("Couldn't generate the PDF — please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      {/* Certificate Frame */}
      <div
        ref={certificateRef}
        style={{
          width: 1000,
          height: 706,
          background: '#FCFBFF',
          position: 'relative',
          fontFamily: "'Inter', sans-serif",
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          overflow: 'hidden',
          borderRadius: 8,
        }}
      >
        {/* Top Accent Strip */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, background: '#635BFF' }} />

        {/* Decorative Corner Borders */}
        {[
          { top: 30, left: 30, hasTop: true, hasLeft: true },
          { top: 30, right: 30, hasTop: true, hasRight: true },
          { bottom: 30, left: 30, hasBottom: true, hasLeft: true },
          { bottom: 30, right: 30, hasBottom: true, hasRight: true },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: 36,
              height: 36,
              borderColor: '#635BFF',
              borderStyle: 'solid',
              borderWidth: 0,
              borderTopWidth: pos.hasTop ? 2 : 0,
              borderLeftWidth: pos.hasLeft ? 2 : 0,
              borderBottomWidth: pos.hasBottom ? 2 : 0,
              borderRightWidth: pos.hasRight ? 2 : 0,
              top: pos.top,
              left: pos.left,
              right: pos.right,
              bottom: pos.bottom,
            }}
          />
        ))}

        {/* Certificate Ribbon & Badge */}
        <div style={{ position: 'absolute', top: 0, right: 60, width: 130, height: 220 }}>
          <div style={{ width: 130, height: 190, background: '#EEEDFE' }} />
          <svg width="130" height="36" style={{ display: 'block' }}>
            <polygon points="0,0 130,0 65,36" fill="#EEEDFE" />
          </svg>
          <div
            style={{
              position: 'absolute',
              top: 20,
              left: 0,
              right: 0,
              textAlign: 'center',
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              letterSpacing: 1,
              fontWeight: 700,
              color: '#3C3489',
            }}
          >
            COURSE
            <br />
            CERTIFICATE
          </div>
          <div
            style={{
              position: 'absolute',
              top: 78,
              left: 15,
              width: 100,
              height: 100,
              borderRadius: '50%',
              border: '2px solid #635BFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FFFFFF',
            }}
          >
            <div
              style={{
                width: 78,
                height: 78,
                borderRadius: '50%',
                border: '1px solid #635BFF',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                color: '#3C3489',
                textAlign: 'center',
              }}
            >
              SKILLORA
              <br />
              AI
            </div>
          </div>
        </div>

        {/* Main Content Body */}
        <div style={{ position: 'absolute', top: 70, left: 70, right: 260 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#8A85B8', marginBottom: 20, letterSpacing: '0.05em' }}>
            ISSUED: {issuedDate.toUpperCase()}
          </div>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 40,
              color: '#15131F',
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            {recipientName}
          </div>
          <div style={{ fontSize: 16, color: '#5B5870', marginBottom: 8, fontWeight: 500 }}>
            has successfully completed
          </div>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 26,
              color: '#3C3489',
              marginBottom: 8,
              maxWidth: 620,
              lineHeight: 1.3,
            }}
          >
            {courseTitle}
          </div>
          <div style={{ fontSize: 14, color: '#5B5870' }}>
            an AI-guided skill roadmap completed on Skillora AI
          </div>
        </div>

        {/* Founder Signature Area */}
        <div style={{ position: 'absolute', bottom: 120, left: 70 }}>
          <img src={signatureImage} alt="Founder signature" style={{ width: 160, height: 'auto', marginBottom: 4 }} />
          <div style={{ borderTop: '1px solid #635BFF', width: 230, paddingTop: 10 }}>
            <div style={{ fontSize: 13, color: '#15131F', fontWeight: 600 }}>Muhammad Haris Khalil</div>
            <div style={{ fontSize: 12, color: '#5B5870' }}>Founder &amp; CEO — Skillora AI</div>
          </div>
        </div>

        {/* High-Contrast QR Code Area */}
        <div style={{ position: 'absolute', bottom: 45, right: 60, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ padding: 6, background: '#FFFFFF', borderRadius: 8, border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            {qrDataUrl && <img src={qrDataUrl} alt="Verify QR code" style={{ width: 84, height: 84, display: 'block' }} />}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#64748B', marginTop: 6, fontWeight: 500 }}>
            Scan to verify
          </div>
        </div>

        {/* Canonical Verification Link Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 50,
            left: 70,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: '#8A85B8',
          }}
        >
          Verify at {canonicalVerifyUrl.replace('https://', '')}
        </div>
      </div>

      {/* Download Error Alert */}
      {downloadError && (
        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-red-500 text-sm font-medium animate-in fade-in duration-200 max-w-md text-center">
          <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />
          <span>{downloadError}</span>
        </div>
      )}

      {/* PDF Download Action Button */}
      <button
        onClick={handleDownloadPdf}
        disabled={downloading}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-white font-medium text-sm shadow-md hover:bg-brand/90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ArrowDownTrayIcon className="w-4 h-4" />
        {downloading ? 'Preparing PDF…' : 'Download certificate (PDF)'}
      </button>
    </div>
  );
}
