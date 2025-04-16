import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Network and Port Scanner",
    description: "A Python-based cybersecurity tool capable of detecting live/non-live hosts and scanning ports to determine their status (open/closed). Essential for network security assessment and monitoring.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Python", "Network Security", "Port Scanning", "Host Detection"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Recon Automation for Web Pentesting",
    description: "Comprehensive Python-based reconnaissance tool for web penetration testing. Features include IP/Port scanning, Barcode/QR generation, password tools, subdomain checking, and security testing utilities.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Python", "Cybersecurity", "Penetration Testing", "Automation"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A productivity app for managing tasks, with features like drag-and-drop, filters, and due dates.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "Redux", "Firebase"],
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
