import { Copy, QrCode } from 'lucide-react';
import { useState } from 'react';
import QRCodeModal from './QRCodeModal';

interface DonateButtonProps {
  upiId: string;
}

export default function DonateButton({ upiId }: DonateButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-2">
        <button
          onClick={handleCopy}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition-colors mb-2 flex items-center"
        >
          <span className="mr-2">Copy UPI ID</span>
          <Copy className="h-4 w-4" />
        </button>
        <button
          onClick={() => setIsQRModalOpen(true)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition-colors mb-2 flex items-center"
        >
          <span className="mr-2">Show QR</span>
          <QrCode className="h-4 w-4" />
        </button>
      </div>
      {copied && (
        <span className="text-sm text-green-600">UPI ID copied!</span>
      )}
      <QRCodeModal
        upiId={upiId}
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
    </div>
  );
}