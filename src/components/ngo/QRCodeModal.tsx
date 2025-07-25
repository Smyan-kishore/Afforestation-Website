import { X, IndianRupee } from 'lucide-react';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { generateUPILink } from '../../utils/upi';

interface QRCodeModalProps {
  upiId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ upiId, isOpen, onClose }: QRCodeModalProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [amount, setAmount] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      const upiLink = generateUPILink(upiId, amount ? Number(amount) : undefined);
      QRCode.toDataURL(upiLink, {
        width: 400,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      })
        .then(url => setQrCodeUrl(url))
        .catch(err => console.error('Error generating QR code:', err));
    }
  }, [upiId, isOpen, amount]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Scan to Pay</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (Optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IndianRupee className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <img
            src={qrCodeUrl}
            alt="UPI QR Code"
            className="w-64 h-64 mb-4"
          />
          <p className="text-gray-600 mb-2">UPI ID: {upiId}</p>
          <p className="text-sm text-gray-500 text-center">
            Scan with any UPI app to make a donation
            {amount && <span className="font-medium"> of ₹{amount}</span>}
          </p>
        </div>
      </div>
    </div>
  );
}