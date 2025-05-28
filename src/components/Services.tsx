
import { Fuel, Recycle, TreePine, Factory } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Fuel,
      title: "Bio-CNG Production",
      description: "Converting napier grass into clean, renewable compressed natural gas for sustainable energy solutions.",
      features: ["Zero carbon emissions", "Renewable feedstock", "Efficient conversion process"]
    },
    {
      icon: Recycle,
      title: "Bio-Plastics Development",
      description: "Exploring innovative applications of our bio-based materials for sustainable plastic alternatives.",
      features: ["Biodegradable materials", "Reduced plastic waste", "Circular economy solutions"]
    },
    {
      icon: TreePine,
      title: "Sustainable Feedstock",
      description: "Utilizing napier grass as a renewable, fast-growing feedstock for our bio-energy production.",
      features: ["Rapid growth cycle", "High yield potential", "Environmental benefits"]
    },
    {
      icon: Factory,
      title: "Clean Technology",
      description: "Advanced processing technologies that minimize environmental impact while maximizing energy output.",
      features: ["Low water usage", "Minimal waste generation", "Energy efficient processes"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the transition to renewable energy through innovative bio-CNG production and sustainable material development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <service.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
