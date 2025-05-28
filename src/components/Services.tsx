
import { Fuel, Recycle, Sun, Battery, Zap, Factory } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: "Solar Power Projects",
      description: "Large-scale solar installations providing clean, abundant energy from photovoltaic and thermal technologies.",
      features: ["Grid-scale installations", "Distributed solar systems", "Government partnerships"]
    },
    {
      icon: Zap,
      title: "Pumped Storage Hydro",
      description: "Advanced energy storage solutions using gravity and water to store and release electrical energy on demand.",
      features: ["Grid stabilization", "Peak load management", "Long-duration storage"]
    },
    {
      icon: Factory,
      title: "Small Hydro Power",
      description: "Environmentally-friendly hydroelectric projects that harness flowing water for sustainable power generation.",
      features: ["Run-of-river systems", "Low environmental impact", "Local community benefits"]
    },
    {
      icon: Battery,
      title: "Battery Energy Storage",
      description: "State-of-the-art battery systems for grid stability, renewable integration, and backup power solutions.",
      features: ["Grid-scale storage", "Fast response times", "Renewable integration"]
    },
    {
      icon: Fuel,
      title: "Bio-CNG Production",
      description: "Converting organic feedstock including napier grass into clean, renewable compressed natural gas.",
      features: ["Zero carbon emissions", "Renewable feedstock", "Circular economy solutions"]
    },
    {
      icon: Recycle,
      title: "Bio-Plastics Development",
      description: "Innovative bio-based materials and sustainable plastic alternatives from renewable organic sources.",
      features: ["Biodegradable materials", "Reduced plastic waste", "Sustainable manufacturing"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Renewable Energy Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive renewable energy solutions across multiple technologies, working with local and central government bodies to build sustainable infrastructure
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                    <service.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
