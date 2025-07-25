import Hero from '../components/Hero';
import NGOPreview from '../components/NGOPreview';
import ImpactStats from '../components/ImpactStats';
import { ngos } from '../data/ngos';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured NGOs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ngos.slice(0, 3).map((ngo) => (
              <NGOPreview key={ngo.id} ngo={ngo} />
            ))}
          </div>
        </div>
      </section>

      <ImpactStats />
    </div>
  );
}