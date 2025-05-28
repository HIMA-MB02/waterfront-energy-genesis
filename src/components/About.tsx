
import { Target, Users, Globe, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Target, label: "Carbon Neutral", value: "100%" },
    { icon: Users, label: "Team Members", value: "50+" },
    { icon: Globe, label: "Environmental Impact", value: "Positive" },
    { icon: Award, label: "Years Experience", value: "10+" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              About Waterfront Energy
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              We are pioneers in sustainable energy production, committed to creating a cleaner future through innovative bio-CNG technology. Our mission is to transform renewable feedstock into clean energy solutions that benefit both our planet and communities.
            </p>
            <p className="text-lg text-emerald-200 leading-relaxed">
              By utilizing napier grass as our primary feedstock, we're not only producing clean energy but also supporting sustainable agriculture and creating new economic opportunities in rural communities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-emerald-900" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-emerald-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
