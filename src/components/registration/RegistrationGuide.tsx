import { CheckCircle2 } from 'lucide-react';

const requirements = [
  'Valid incorporation certificate',
  'Active bank account',
  'Minimum 2 years of operation',
  'Previous afforestation experience',
  'Local community engagement',
];

export default function RegistrationGuide() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Registration Requirements</h2>
      
      <ul className="space-y-4">
        {requirements.map((req) => (
          <li key={req} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>{req}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <h3 className="font-semibold mb-2">Note:</h3>
        <p className="text-sm text-gray-600">
          After submission, our team will review your application within 5-7 business days.
          You'll receive updates via email about your registration status.
        </p>
      </div>
    </div>
  );
}