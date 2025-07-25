import { TreePine, Users, School } from 'lucide-react';

const stats = [
  {
    icon: TreePine,
    value: '22.5K+',
    label: 'Trees Planted',
  },
  {
    icon: Users,
    value: '65+',
    label: 'Community Programs',
  },
  {
    icon: School,
    value: '75+',
    label: 'Projects Completed',
  },
];

export default function ImpactStats() {
  return (
    <section className="bg-green-800 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <Icon className="h-12 w-12 mb-4" />
              <div className="text-4xl font-bold mb-2">{value}</div>
              <div className="text-lg">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}