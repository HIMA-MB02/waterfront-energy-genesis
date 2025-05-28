
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-400">Waterfront Energy</h3>
            <p className="text-gray-400 leading-relaxed">
              Leading the future of renewable energy through innovative bio-CNG production and sustainable solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Bio-CNG Production</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Bio-Plastics</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Sustainable Feedstock</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Clean Technology</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Our Impact</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">News</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>info@waterfrontenergy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>123 Green Energy Blvd</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-500 cursor-pointer transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-500 cursor-pointer transition-colors">
                <Twitter className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Waterfront Energy. All rights reserved. | Building a sustainable future through renewable energy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
