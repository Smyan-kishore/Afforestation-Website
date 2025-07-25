interface FilterSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export default function FilterSection({ value, onChange }: FilterSectionProps) {
  const locations = ['Bangalore', 'Mumbai', 'Delhi'];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
    >
      <option value="">All Locations</option>
      {locations.map(location => (
        <option key={location} value={location}>{location}</option>
      ))}
    </select>
  );
}