
import { Icon } from '@iconify/react';

const skillCategories = {
  featured: [
    { name: 'Astro', icon: 'devicon:astro' },
    { name: 'CSS', icon: 'devicon:css3' },
    { name: 'HTML', icon: 'devicon:html5' },
    { name: 'JavaScript', icon: 'devicon:javascript' },
    { name: 'Nuxt', icon: 'devicon:nuxtjs' },
    { name: 'PHP', icon: 'devicon:php' },
    { name: 'Svelte', icon: 'devicon:svelte' },
    { name: 'Tailwind CSS', icon: 'devicon:tailwindcss' },
    { name: 'Vue', icon: 'devicon:vuejs' }
  ],
  languages: [
    { name: 'CSS', icon: 'devicon:css3' },
    { name: 'HTML', icon: 'devicon:html5' },
    { name: 'JavaScript', icon: 'devicon:javascript' },
    { name: 'PHP', icon: 'devicon:php' },
    { name: 'TypeScript', icon: 'devicon:typescript' }
  ],
  frontend: [
    { name: 'Astro', icon: 'devicon:astro' },
    { name: 'Google Maps', icon: 'logos:google-maps' },
    { name: 'Nuxt', icon: 'devicon:nuxtjs' },
    { name: 'React', icon: 'devicon:react' },
    { name: 'SASS', icon: 'devicon:sass' },
    { name: 'Svelte', icon: 'devicon:svelte' },
    { name: 'SvelteKit', icon: 'devicon:sveltekit' },
    { name: 'Tailwind CSS', icon: 'devicon:tailwindcss' },
    { name: 'Vue', icon: 'devicon:vuejs' }
  ],
  backend: [
    { name: 'Appwrite', icon: 'logos:appwrite-icon' },
    { name: 'Express', icon: 'skill-icons:expressjs-dark' },
    { name: 'Fastify', icon: 'devicon:fastify' },
    { name: 'Lucia', icon: 'simple-icons:lucia' },
    { name: 'Node.js', icon: 'devicon:nodejs' },
    { name: 'Prisma', icon: 'devicon:prisma' }
  ]
};

const SkillSection = ({ title, skills }) => (
  <div className="mb-12">
    <h3 className="text-xl font-heading font-semibold mb-6">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-black text-white p-4 rounded-lg flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Icon icon={skill.icon} className="w-6 h-6" />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="portfolio-subheading">My Skills</h2>
          <h3 className="portfolio-heading mb-6">Technical Expertise</h3>
        </div>
        
        <div className="space-y-12">
          <SkillSection title="Featured" skills={skillCategories.featured} />
          <SkillSection title="Languages" skills={skillCategories.languages} />
          <SkillSection title="Frontend" skills={skillCategories.frontend} />
          <SkillSection title="Backend" skills={skillCategories.backend} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
