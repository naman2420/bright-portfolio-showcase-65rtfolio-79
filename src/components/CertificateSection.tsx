
import { Award, BookOpen, CheckCircle } from 'lucide-react';

const certificates = [
  {
    title: "Advanced Web Development",
    issuer: "Udacity",
    date: "2023",
    icon: BookOpen
  },
  {
    title: "Full Stack Development",
    issuer: "freeCodeCamp",
    date: "2022",
    icon: Award
  },
  {
    title: "React Development",
    issuer: "Meta",
    date: "2023",
    icon: CheckCircle
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
            Continuous learning and professional certifications that demonstrate my commitment to growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div 
                key={cert.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
