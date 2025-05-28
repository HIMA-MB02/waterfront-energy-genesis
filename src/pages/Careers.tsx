
import { Users, Target, Lightbulb, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Careers = () => {
  const benefits = [
    {
      icon: Target,
      title: "Meaningful Work",
      description: "Contribute to sustainable energy solutions that make a real difference for our planet's future."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate professionals in a supportive, innovative environment."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Be at the forefront of bio-energy technology and renewable resource development."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Competitive benefits, flexible schedules, and comprehensive health coverage."
    }
  ];

  const values = [
    {
      title: "Sustainability First",
      description: "Every decision we make considers environmental impact and long-term sustainability."
    },
    {
      title: "Innovation Drive",
      description: "We constantly push boundaries to develop better, cleaner energy solutions."
    },
    {
      title: "Community Impact",
      description: "We believe in creating positive change for local communities and the global environment."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through training, development, and education opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Build Your Career With Us</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Join a team that's passionate about creating sustainable energy solutions for a cleaner, greener future.
          </p>
          <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-100 px-8 py-3 rounded-full">
            View Open Positions
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Waterfront Energy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just a company - we're a mission-driven team working to transform the energy landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Growing Team</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're a diverse group of engineers, scientists, and sustainability experts united by our commitment to renewable energy innovation. Our team brings together decades of experience in bio-energy, environmental science, and clean technology.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From our research labs to our field operations, every team member plays a crucial role in advancing our mission to create sustainable energy solutions using napier grass and other renewable feedstocks.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-600">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">5</div>
                  <div className="text-gray-600">Departments</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Our team at work"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Explore our current openings and take the next step in your career with a company that's shaping the future of sustainable energy.
          </p>
          <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-100 px-8 py-3 rounded-full">
            Browse Open Positions
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
