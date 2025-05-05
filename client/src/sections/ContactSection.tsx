import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RectangleEllipsis, Phone, MapPin, Linkedin, Github, Twitter, Youtube } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      // In a real implementation, this would send the form data to the server
      // For this demo, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thanks for your message! I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out through the form or via the contact details below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 text-secondary rounded-full">
                  <RectangleEllipsis />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-primary">Email</h4>
                  <p className="text-gray-600">john@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 text-secondary rounded-full">
                  <Phone />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-primary">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 text-secondary rounded-full">
                  <MapPin />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-primary">Location</h4>
                  <p className="text-gray-600">San Francisco, California</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium text-primary mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="h-10 w-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-black transition duration-300">
                  <Github size={18} />
                </a>
                <a href="#" className="h-10 w-10 flex items-center justify-center bg-blue-400 text-white rounded-full hover:bg-blue-500 transition duration-300">
                  <Twitter size={18} />
                </a>
                <a href="#" className="h-10 w-10 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="bg-white shadow-md">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </Label>
                    <Input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      placeholder="Your message here..." 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary" 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
