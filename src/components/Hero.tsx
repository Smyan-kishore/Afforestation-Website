import { Link } from 'react-router-dom';
import { TreePine } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&auto=format&fit=crop&q=60")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <TreePine className="h-16 w-16 mb-6" />
        <h1 className="text-5xl font-bold mb-4">
          Planting Trees, Growing Hope
        </h1>
        <p className="text-xl mb-8">
          Join Us in Combating Climate Change
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link
            to="/ngos"
            className="bg-green-600 hover:bg-green-500 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Donate Now
          </Link>
          <Link
            to="/register-ngo"
            className="bg-white text-green-800 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Join Us
          </Link>
          <Link
            to="/about"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}