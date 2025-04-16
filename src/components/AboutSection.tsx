import { User, Calendar, MapPin } from 'lucide-react';
const AboutSection = () => {
  return <section id="about" className="py-20 bg-portfolio-soft-gray">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200" alt="About Me" className="w-full h-auto" />
            </div>
            <div className="absolute top-8 -right-8 w-full h-full bg-portfolio-purple/20 rounded-lg -z-10"></div>
          </div>
          
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="portfolio-subheading mb-2">About Me</h2>
            <h3 className="portfolio-heading mb-6">Let me introduce myself</h3>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p className="text-black">I'm a second-year Electronics Engineering student at MIT World Peace University with a strong interest in cybersecurity and emerging technologies. I'm passionate about exploring the intersection of electronics and security, and I enjoy diving into projects that challenge me to think creatively and solve real-world problems.


Through hands-on learning and collaborative work, I aim to contribute to innovation—whether it's through hardware design, secure systems, or unique tech solutions. I'm always curious, always learning, and excited to be part of the ever-evolving tech space.</p>
              
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center">
                  <User className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Name</h4>
                  <p className="font-medium">Naman Ladha</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center">
                  <Calendar className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Degree</h4>
                  <p className="font-medium">B.Tech in ECE</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center">
                  <MapPin className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Location</h4>
                  <p className="font-medium">Pune,India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                
                <div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;