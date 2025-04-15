
import { Icon } from '@iconify/react';

const skillCategories = {
  featured: [
    { name: 'Astro', icon: 'devicon:astro' },
    { name: 'CSS', icon: 'devicon:css3' },
    { name: 'HTML', icon: 'devicon:html5' },
    { name: 'JavaScript', icon: 'devicon:javascript' },
    { name: 'TypeScript', icon: 'devicon:typescript' },
    { name: 'PHP', icon: 'devicon:php' },
    { name: 'React', icon: 'devicon:react' },
    { name: 'Node.js', icon: 'devicon:nodejs' },
    { name: 'Express', icon: 'skill-icons:expressjs-dark' },
    { name: 'Nuxt', icon: 'devicon:nuxtjs' },
    { name: 'Svelte', icon: 'devicon:svelte' },
    { name: 'Vue', icon: 'devicon:vuejs' },
    { name: 'Tailwind CSS', icon: 'devicon:tailwindcss' },
    { name: 'Prisma', icon: 'devicon:prisma' },
    { name: 'Fastify', icon: 'devicon:fastify' }
  ]
};

const SkillSection = ({ skills }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="bg-[#EAEAEA] p-6 rounded-lg flex flex-col items-center gap-3 transform transition-all duration-300 hover:scale-110 hover:shadow-lg group"
      >
        <Icon icon={skill.icon} className="w-12 h-12 group-hover:scale-110 transition-transform" />
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
