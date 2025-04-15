
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Show success message (in a real app)
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-soft-gray">
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
                    <a href="mailto:contact@example.com" className="text-gray-700 hover:text-portfolio-purple">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center shrink-0">
                    <Phone className="text-portfolio-purple" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-700 hover:text-portfolio-purple">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center shrink-0">
                    <MapPin className="text-portfolio-purple" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                    <p className="text-gray-700">
                      San Francisco, California, USA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-sm font-medium text-gray-500 mb-4">Social Profiles</h4>
                <div className="flex gap-4">
                  {['github', 'linkedin', 'twitter', 'dribbble'].map(social => (
                    <a 
                      key={social}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width={18}
                        height={18}
                      >
                        {social === 'github' && (
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        )}
                        {social === 'linkedin' && (
                          <>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </>
                        )}
                        {social === 'twitter' && (
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        )}
                        {social === 'dribbble' && (
                          <>
                            <circle cx="12" cy="12" r="10" />
                            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                          </>
                        )}
                      </svg>
                    </a>
                  ))}
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
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-500 mb-1 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="text-sm font-medium text-gray-500 mb-1 block">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-500 mb-1 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-portfolio-purple hover:bg-portfolio-dark-purple text-white w-full sm:w-auto"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
