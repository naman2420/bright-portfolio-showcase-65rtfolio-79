
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website to showcase projects and skills, featuring smooth animations and modern design.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for managing tasks, with features like drag-and-drop, filters, and due dates.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Redux", "Firebase"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application that provides current conditions and forecasts based on location.",
    image: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "API Integration", "CSS"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "An application that helps users find recipes based on available ingredients.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "API Integration", "Styled Components"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A health app that tracks workouts, progress, and provides insights on performance.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["Vue.js", "Chart.js", "Firebase"],
    demoLink: "#",
    githubLink: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="portfolio-subheading">My Projects</h2>
          <h3 className="portfolio-heading mb-6">Recent Work</h3>
          <p className="text-gray-700">
            Here are some of the projects I've worked on. Each project represents my skills, 
            problem-solving abilities, and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-portfolio-purple/10 text-portfolio-dark-purple hover:bg-portfolio-purple/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <a 
                  href={project.demoLink} 
                  className="text-portfolio-purple hover:text-portfolio-dark-purple flex items-center gap-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
                
                <a 
                  href={project.githubLink} 
                  className="text-portfolio-purple hover:text-portfolio-dark-purple flex items-center gap-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  <span>Github</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
