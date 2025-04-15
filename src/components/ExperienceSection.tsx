
import { CircleDot } from 'lucide-react';

const experiences = [
  {
    period: "Jun 2023 - Aug 2023",
    title: "Software Development Intern",
    company: "Company Name",
    description: "Developed and maintained software applications for embedded systems. Collaborated with cross-functional teams to implement new features and resolve bugs.",
    achievements: [
      "Implemented a real-time data processing algorithm that improved system efficiency by 30%",
      "Designed and developed a user interface for monitoring system parameters",
      "Participated in code reviews and contributed to improving development practices"
    ]
  },
  {
    period: "Dec 2022 - Feb 2023",
    title: "Research Assistant",
    company: "University Research Lab",
    description: "Assisted with research on novel IoT applications for smart cities. Contributed to the design and implementation of prototype systems.",
    achievements: [
      "Developed sensor networks for environmental monitoring",
      "Created data visualization tools for analyzing research results"
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
