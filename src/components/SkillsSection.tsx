
import { Icon } from '@iconify/react';
import { Code2, Figma, Shield, Wallet, CircuitBoard } from 'lucide-react';

const skillCategories = {
  featured: [
    { name: 'Web Development', icon: 'web', customIcon: <Code2 className="w-12 h-12" /> },
    { name: 'Figma', icon: 'figma', customIcon: <Figma className="w-12 h-12" /> },
    { name: 'Cyber Security', icon: 'security', customIcon: <Shield className="w-12 h-12" /> },
    { name: 'Financial Literacy', icon: 'finance', customIcon: <Wallet className="w-12 h-12" /> },
    { name: 'C Language', icon: 'c', customIcon: <CircuitBoard className="w-12 h-12" /> },
    { name: 'C++', icon: 'devicon:cplusplus' },
    { name: 'Java', icon: 'devicon:java' },
    { name: 'Python', icon: 'devicon:python' },
    { name: 'CSS', icon: 'devicon:css3' },
    { name: 'HTML', icon: 'devicon:html5' },
    { name: 'JavaScript', icon: 'devicon:javascript' },
    { name: 'Node.js', icon: 'devicon:nodejs' },
    { name: 'React', icon: 'devicon:react' }
  ]
};

const SkillSection = ({ skills }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="bg-[#EAEAEA] p-6 rounded-lg flex flex-col items-center gap-3 transform transition-all duration-300 hover:scale-110 hover:shadow-lg group"
      >
        {skill.customIcon || <Icon icon={skill.icon} className="w-12 h-12 group-hover:scale-110 transition-transform" />}
        <span className="font-medium text-gray-700">{skill.name}</span>
      </div>
    ))}
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
            A comprehensive showcase of my technical skills and proficiencies in various technologies.
          </p>
        </div>
        
        <SkillSection skills={skillCategories.featured} />
      </div>
    </section>
  );
};

export default SkillsSection;
