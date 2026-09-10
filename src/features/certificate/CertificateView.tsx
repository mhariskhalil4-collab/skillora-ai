import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import signatureImage from '@/assets/signature.png';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

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

  useEffect(() => {
    QRCode.toDataURL(verifyUrl, {
      width: 200,
      margin: 1,
      color: { dark: '#635BFF', light: '#FCFBFF' },
    })
      .then(setQrDataUrl)
      .catch((err) => console.error('[CertificateView] QR generation failed:', err));
  }, [verifyUrl]);

  const handleDownloadPdf = async () => {
    if (!certificateRef.current) return;
    setDownloading(true);
    setDownloadError(null);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 3,
        backgroundColor: '#FCFBFF',
        useCORS: true,
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
      <div
        ref={certificateRef}
        style={{
          width: 1000,
          height: 706,
          background: '#FCFBFF',
          position: 'relative',
          fontFamily: "'Inter', sans-serif",
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, background: '#635BFF' }} />

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
                fontWeight: 500,
                fontSize: 12,
                color: '#3C3489',
              }}
            >
              SKILLORA
              <br />
              AI
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', top: 70, left: 70, right: 260 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#8A85B8', marginBottom: 20 }}>
            {issuedDate.toUpperCase()}
          </div>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: 40,
              color: '#15131F',
              marginBottom: 20,
            }}
          >
            {recipientName}
          </div>
          <div style={{ fontSize: 16, color: '#5B5870', marginBottom: 8 }}>has successfully completed</div>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: 26,
              color: '#3C3489',
              marginBottom: 8,
              maxWidth: 620,
            }}
          >
            {courseTitle}
          </div>
          <div style={{ fontSize: 14, color: '#5B5870' }}>
            an AI-guided skill roadmap completed on Skillora AI
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 130, left: 70 }}>
          <img src={signatureImage} alt="Founder signature" style={{ width: 160, height: 'auto', marginBottom: 4 }} />
          <div style={{ borderTop: '1px solid #635BFF', width: 220, paddingTop: 10 }}>
            <div style={{ fontSize: 13, color: '#15131F', fontWeight: 500 }}>Muhammad Haris Khalil</div>
            <div style={{ fontSize: 12, color: '#5B5870' }}>Founder &amp; CEO — Skillora AI</div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 60, right: 60, textAlign: 'center' }}>
          {qrDataUrl && <img src={qrDataUrl} alt="Verify QR code" style={{ width: 90, height: 90 }} />}
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#8A85B8', marginTop: 6 }}>
            Scan to verify
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 70,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: '#8A85B8',
          }}
        >
          Verify at {verifyUrl.replace('https://', '')}
        </div>
      </div>

      {downloadError && (
        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-red-500 text-sm font-medium animate-in fade-in duration-200 max-w-md text-center">
          <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />
          <span>{downloadError}</span>
        </div>
      )}

      <button
        onClick={handleDownloadPdf}
        disabled={downloading}
        style={{
          background: '#635BFF',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '12px 24px',
          fontSize: 14,
          fontWeight: 500,
          cursor: downloading ? 'not-allowed' : 'pointer',
          opacity: downloading ? 0.7 : 1,
        }}
      >
        {downloading ? 'Preparing PDF…' : 'Download certificate (PDF)'}
      </button>
    </div>
  );
}
