import { Heart, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className="bg-portfolio-charcoal text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-heading font-bold mb-4">Naman Ladha</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A passionate developer creating beautiful, functional websites and 
              applications with a focus on user experience and clean code.
            </p>
            <p className="text-gray-300">Based in Pune, India.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(link => <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-portfolio-purple transition-colors">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>namanladha2004@gmail.com</li>
              <li>+91 7080814370</li>
              <li>Pune, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© {year} Naman Ladha. All rights reserved.</p>
          
          <div className="flex items-center mt-4 md:mt-0 gap-4">
            <a href="https://github.com/namanladha" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-portfolio-purple transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/naman-ladha-188bb0289/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-portfolio-purple transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/naman_ladha" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-portfolio-purple transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com/namanladha" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-portfolio-purple transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
