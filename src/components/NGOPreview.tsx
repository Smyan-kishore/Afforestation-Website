import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NGO } from '../types';

interface NGOPreviewProps {
  ngo: NGO;
}

export default function NGOPreview({ ngo }: NGOPreviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={ngo.logo}
        alt={ngo.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{ngo.name}</h3>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1">{ngo.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{ngo.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{ngo.location}</span>
          <Link
            to={`/ngos/${ngo.id}`}
            className="text-green-600 hover:text-green-500 font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}