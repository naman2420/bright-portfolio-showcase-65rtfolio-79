import { Progress } from "@/components/ui/progress";

const frontendSkills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
];

const backendSkills = [
  { name: 'Node.js', level: 75 },
  { name: 'Express', level: 70 },
  { name: 'MongoDB', level: 65 },
  { name: 'Firebase', level: 80 },
  { name: 'GraphQL', level: 60 },
];

const SkillCard = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <h4 className="font-medium text-gray-700">{name}</h4>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <Progress 
      value={level} 
      className="h-2 bg-gray-200" 
      indicatorClassName="bg-portfolio-purple"
    />
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="portfolio-subheading">My Skills</h2>
          <h3 className="portfolio-heading mb-6">Technical Expertise</h3>
          <p className="text-gray-700">
            I've acquired a diverse set of skills throughout my career as a developer, 
            from front-end and back-end technologies to design tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div className="portfolio-card animate-fade-in">
            <h3 className="text-xl font-heading font-semibold mb-6 text-portfolio-dark-purple">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map(skill => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="portfolio-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-heading font-semibold mb-6 text-portfolio-dark-purple">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map(skill => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Other Skills */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['Git', 'Figma', 'Redux', 'Next.js', 'REST API', 'Responsive Design'].map((skill, index) => (
            <div 
              key={skill}
              className="p-4 bg-portfolio-soft-gray rounded-lg text-center shadow-sm animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <span className="font-medium text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
