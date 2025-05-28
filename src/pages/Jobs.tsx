
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Jobs = () => {
  const jobListings = [
    {
      id: 1,
      title: "Bio-Energy Engineer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description: "Lead the development of bio-CNG production processes and optimize napier grass feedstock conversion systems.",
      requirements: ["Bachelor's in Chemical/Mechanical Engineering", "5+ years renewable energy experience", "Knowledge of biogas systems"]
    },
    {
      id: 2,
      title: "Sustainability Specialist",
      department: "Environmental",
      location: "Field Operations",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      description: "Develop and implement sustainability strategies for our bio-CNG operations and feedstock management.",
      requirements: ["Environmental Science degree", "3+ years sustainability experience", "Project management skills"]
    },
    {
      id: 3,
      title: "Research & Development Scientist",
      department: "R&D",
      location: "Laboratory",
      type: "Full-time",
      salary: "$75,000 - $100,000",
      description: "Research bio-plastics applications and improve napier grass processing technologies.",
      requirements: ["PhD in Chemistry/Materials Science", "Biotechnology research experience", "Innovation mindset"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Be part of the renewable energy revolution. Help us create sustainable solutions for a cleaner future.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">Discover exciting opportunities to make an impact in sustainable energy.</p>
          </div>

          <div className="space-y-6">
            {jobListings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{job.title}</h3>
                          <p className="text-emerald-600 font-medium">{job.department}</p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{job.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <DollarSign className="w-4 h-4 mr-2" />
                          {job.salary}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:ml-6">
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
