import { Heart } from 'lucide-react';
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
              <li>contact@example.com</li>
              <li>+1 (234) 567-890</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          
          
          <div className="flex items-center mt-4 md:mt-0">
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;