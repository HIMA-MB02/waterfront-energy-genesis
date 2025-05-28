
import { Target, Users, Globe, Award, Building, Handshake } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Target, label: "Carbon Neutral", value: "100%" },
    { icon: Users, label: "Team Members", value: "50+" },
    { icon: Building, label: "Active Projects", value: "25+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Globe, label: "Environmental Impact", value: "Positive" },
    { icon: Handshake, label: "Government Partners", value: "Multiple" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              About Waterfront Energy
            </h2>
            <p className="text-xl text-emerald-100 mb-6 leading-relaxed">
              We are comprehensive renewable energy specialists, delivering diverse clean energy solutions across multiple technologies. From solar power and hydroelectric projects to advanced energy storage and bio-energy systems, we're building the sustainable infrastructure of tomorrow.
            </p>
            <p className="text-lg text-emerald-200 mb-6 leading-relaxed">
              Our portfolio spans Solar Power Projects, Pumped Storage Hydro, Small Hydro Power, Battery Energy Storage Systems, Bio-CNG production, and bio-plastics development.
            </p>
            <p className="text-lg text-emerald-200 leading-relaxed">
              Working closely with both local and central government bodies, we develop strategic partnerships that create lasting environmental benefits and economic opportunities for communities nationwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-emerald-900" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-emerald-200 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
