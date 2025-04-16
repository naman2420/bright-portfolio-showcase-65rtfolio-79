
import { Award, BookOpen, CheckCircle, CertificateIcon, Target } from 'lucide-react';

const certificates = [
  {
    title: "Signal Processing Onramp",
    issuer: "MathWorks",
    date: "2024",
    icon: BookOpen,
    link: "https://drive.google.com/file/d/1xEn4cBsUGOBHTdrZhs-6QQB04FlDMJyI/view?usp=sharing"
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    date: "2024",
    icon: CheckCircle,
    link: "https://drive.google.com/file/d/17AovP-EuPP1jkBxbBGOfIJj-n6LPJqyW/view?usp=sharing"
  },
  {
    title: "Internship in Cyber Security",
    issuer: "Threat Prism",
    date: "September 2024",
    icon: Target,
    link: "https://drive.google.com/file/d/1YIs7Wtxn_GDkDIGBBp250xeGD7WKMLtJ/view?usp=sharing"
  },
  {
    title: "Project Completion Certificate",
    issuer: "Threat Prism",
    date: "August 2024",
    icon: Award,
    link: "https://drive.google.com/file/d/1wc_kfQyjuRa6LvP9tSuIn6waiVxiBbvT/view?usp=sharing"
  },
  {
    title: "Arduino Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    date: "September 2024",
    icon: CertificateIcon,
    link: "https://drive.google.com/file/d/1YywMdAPjXzvstqy7xelRuKCO3gMi3es2/view?usp=sharing"
  }
];

const CertificateSection = () => {
  return (
    <section id="certificates" className="py-20 bg-portfolio-soft-gray">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="portfolio-subheading">Certifications</h2>
          <h3 className="portfolio-heading mb-6">Professional Development</h3>
          <p className="text-gray-700">
            A collection of certifications showcasing my continuous learning and skill development across various technologies and domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <a 
                href={cert.link} 
                key={cert.title} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:no-underline"
              >
                <div 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-portfolio-purple/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-portfolio-purple" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{cert.title}</h4>
                      <p className="text-gray-600">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{cert.date}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
