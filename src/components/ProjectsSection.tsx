import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Information Gathering Tool",
    description: "A Python-based tool that retrieves location and IP address information for any given website. Uses multiple Python libraries (sys, requests, json, sockets) and integrates with ipinfo.io API for comprehensive network information gathering.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Python", "Network Tools", "API Integration", "JSON"],
    demoLink: "#",
    githubLink: "#"
  },
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
    title: "Smart Door Lock System",
    description: "An Arduino-based smart door lock system integrating RFID module, keypad, and servo motor for secure access control. Features dual authentication with passcode and RFID card/tag scanning, enhancing home security through modern technology.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["Arduino", "IoT", "RFID", "Security Systems"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Smart Glasses for Visual Aid",
    description: "Innovative Arduino Nano-powered smart glasses designed to assist visually impaired individuals. Utilizes ultrasonic sensors for obstacle detection with haptic/audio feedback, improving mobility and independence.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tags: ["Arduino", "Assistive Technology", "IoT", "Embedded Systems"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Motion-Detecting Camera System",
    description: "ESP32-CAM based intelligent surveillance system featuring PIR motion detection and automated image capture. When motion is detected, the system captures images and provides LED notifications, ideal for security applications.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["ESP32", "IoT", "Computer Vision", "Motion Detection"],
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
