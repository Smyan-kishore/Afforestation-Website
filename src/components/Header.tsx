import { Menu, X, TreePine } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'NGOs', href: '/ngos' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-green-800 text-white">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <TreePine className="h-8 w-8" />
            <span className="text-xl font-bold">GreenEarth</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="hover:text-green-200 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/register-ngo"
              className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500 transition-colors"
            >
              Register NGO
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block hover:text-green-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/register-ngo"
              className="block bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Register NGO
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}