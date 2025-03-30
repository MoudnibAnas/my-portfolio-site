
import { useContext, useState } from "react";
import { PortfolioModeContext } from "@/App";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { mode } = useContext(PortfolioModeContext);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "both",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      interest: "both",
      message: ""
    });
  };
  
  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl font-bold mb-2 text-center ${
          mode === "design" ? "text-design-primary" : "text-dev-primary"
        }`}>
          Contact Me
        </h2>
        <p className="text-gray-600 text-center mb-4 max-w-2xl mx-auto">
          {mode === "design" 
            ? "Need a mobile app designed? Let's talk!" 
            : "Ready to build your MVP? Get in touch!"}
        </p>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          I'm available for freelance projects and full-time opportunities.
        </p>
        
        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none transition-all"
                required
              />
            </div>
            
            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none transition-all"
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                I'm interested in
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none transition-all"
              >
                <option value="design">Design Services</option>
                <option value="dev">Development Services</option>
                <option value="both">Both Design & Development</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none transition-all"
                required
              />
            </div>
            
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className={`px-6 py-2 rounded-full text-white font-medium transition-all ${
                  mode === "design" 
                    ? "design-gradient hover:shadow-lg hover:shadow-design-primary/20" 
                    : "dev-gradient hover:shadow-lg hover:shadow-dev-primary/20"
                }`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
