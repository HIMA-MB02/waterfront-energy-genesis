
import { ArrowRight, Leaf, Droplets, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      {/* Navigation Header */}
      <nav className="w-full px-4 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplets className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">Waterfront Energy</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex items-center justify-center px-4 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-2 text-emerald-600">
              <Droplets className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wider uppercase">Comprehensive Renewable Energy Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Waterfront
              <span className="text-emerald-600 block">Energy</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Leading the renewable energy revolution with comprehensive solutions spanning solar power, hydro projects, energy storage, and bio-energy technologies. Partnering with government bodies to create sustainable energy infrastructure for tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full transition-all duration-300">
                Our Projects
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Renewable energy infrastructure"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100% Renewable</p>
                  <p className="text-sm text-gray-600">Multi-Technology Portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
