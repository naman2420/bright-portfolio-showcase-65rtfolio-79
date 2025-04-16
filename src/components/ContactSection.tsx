
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, GitHub, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message (in a real app)
    alert('Thank you for your message! I will get back to you soon.');
  };
  
  return <section id="contact" className="py-20 bg-portfolio-soft-gray">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="portfolio-subheading">Get in Touch</h2>
          <h3 className="portfolio-heading mb-6">Contact Me</h3>
          <p className="text-gray-700">
            Interested in working together or have a question? Fill out the form below, 
            and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-portfolio-dark-purple">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center shrink-0">
                    <Mail className="text-portfolio-purple" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                    <a href="mailto:namanladha2004@gmail.com" className="text-gray-700 hover:text-portfolio-purple">namanladha2004@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center shrink-0">
                    <Phone className="text-portfolio-purple" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Phone</h4>
                    <a href="tel:+917080814370" className="text-gray-700 hover:text-portfolio-purple">+91 7080814370</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center shrink-0">
                    <MapPin className="text-portfolio-purple" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                    <p className="text-gray-700">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-sm font-medium text-gray-500 mb-4">Social Profiles</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/namanladha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors">
                    <GitHub size={18} />
                  </a>
                  <a href="https://linkedin.com/in/naman-ladha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://twitter.com/naman_ladha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="https://instagram.com/namanladha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-portfolio-dark-purple">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-500 mb-1 block">
                    Name
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-500 mb-1 block">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Your email" className="w-full" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="text-sm font-medium text-gray-500 mb-1 block">
                  Subject
                </label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-500 mb-1 block">
                  Message
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Your message" className="w-full min-h-[150px]" />
              </div>
              
              <Button type="submit" className="bg-portfolio-purple hover:bg-portfolio-dark-purple text-white w-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
