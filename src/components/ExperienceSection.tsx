import { CircleDot } from 'lucide-react';

const experiences = [
  {
    period: "Aug 2024 - Sept 2024",
    title: "Cybersecurity Intern",
    company: "Threat Prism",
    description: "Completed a comprehensive cybersecurity internship focused on developing security tools and conducting penetration testing activities.",
    achievements: [
      "Developed a Python-based network and port scanner tool for detecting live hosts and analyzing port status",
      "Created an automated reconnaissance tool for web penetration testing, including IP scanning, port scanning, and various security testing utilities",
      "Implemented tools for generating security wordlists, QR codes, and conducting subdomain enumeration",
      "Gained hands-on experience with information gathering techniques and security assessment methodologies"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="portfolio-subheading">My Journey</h2>
          <h3 className="portfolio-heading mb-6">Experience</h3>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-0.5 bg-portfolio-purple/20"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <CircleDot className="w-6 h-6 text-portfolio-purple" />
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <span className="inline-block px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm font-medium mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-heading font-semibold text-portfolio-dark-purple mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-gray-700 mb-4">{exp.company}</h4>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-portfolio-purple rounded-full mt-2 mr-2 shrink-0"></span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
