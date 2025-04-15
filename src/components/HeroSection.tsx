import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const roles = ["an Engineer.", "a Web Developer.", "an Electronic Student."];
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      const currentLength = displayText.length;
      
      if (isDeleting) {
        setDisplayText(fullText.substring(0, currentLength - 1));
        setTypingSpeed(60);
        
        if (currentLength <= 1) {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setTypingSpeed(150);
        }
      } else {
        setDisplayText(fullText.substring(0, currentLength + 1));
        setTypingSpeed(150);
        
        if (currentLength >= fullText.length - 1) {
          setTypingSpeed(1500);
          setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(60);
          }, 1500);
        }
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-96 h-96 bg-portfolio-purple/20 rounded-full blur-3xl -top-20 -right-20"></div>
        <div className="absolute w-64 h-64 bg-portfolio-light-purple/30 rounded-full blur-3xl bottom-20 -left-20"></div>
      </div>
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-24 w-24 rounded-full border-2 border-portfolio-purple overflow-hidden animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="portfolio-heading mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hi, I'm <span className="gradient-text">John Doe</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-medium text-gray-700 mb-8 h-14 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center">
              <span className="mr-2">I am</span>
              <span className="text-portfolio-purple font-bold relative min-w-32 inline-block text-left">
                <span className="relative">
                  {displayText}
                  <span className="absolute right-[-4px] top-0 h-[1.1em] w-[2px] bg-portfolio-purple animate-pulse">|</span>
                </span>
              </span>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            A fresher who is curious to learn new technology, can jump into any technology and will be able to swim well within a few weeks.
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              asChild 
              className="bg-portfolio-purple hover:bg-portfolio-dark-purple text-white"
              size="lg"
            >
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10"
              size="lg"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600 hover:text-portfolio-purple transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
