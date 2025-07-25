import { useState } from 'react';
import { ngos } from '../data/ngos';
import NGOCard from '../components/ngo/NGOCard';
import SearchBar from '../components/ngo/SearchBar';
import FilterSection from '../components/ngo/FilterSection';

export default function NGOs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const filteredNGOs = ngos.filter(ngo => {
    const matchesSearch = ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ngo.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || ngo.location.includes(locationFilter);
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Support Our NGO Partners</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <FilterSection value={locationFilter} onChange={setLocationFilter} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNGOs.map(ngo => (
            <NGOCard key={ngo.id} ngo={ngo} />
          ))}
        </div>
      </div>
    </div>
  );
}