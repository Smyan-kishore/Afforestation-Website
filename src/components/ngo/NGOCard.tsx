import { Star, MapPin, TreePine, Users, School } from 'lucide-react';
import { NGO } from '../../types';
import DonateButton from './DonateButton';

interface NGOCardProps {
  ngo: NGO;
}

export default function NGOCard({ ngo }: NGOCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={ngo.logo} alt={ngo.name} className="w-full h-48 object-cover" />
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{ngo.name}</h3>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1">{ngo.rating}</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{ngo.location}</span>
        </div>

        <p className="text-gray-600 mb-6">{ngo.description}</p>

        <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
          <div className="flex flex-col items-center">
            <TreePine className="h-5 w-5 mb-1" />
            <span>{ngo.achievements.treesPlanted}</span>
            <span>Trees</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-5 w-5 mb-1" />
            <span>{ngo.achievements.communityPrograms}</span>
            <span>Programs</span>
          </div>
          <div className="flex flex-col items-center">
            <School className="h-5 w-5 mb-1" />
            <span>{ngo.achievements.projects}</span>
            <span>Projects</span>
          </div>
        </div>

        <DonateButton upiId={ngo.upiId} />
      </div>
    </div>
  );
}