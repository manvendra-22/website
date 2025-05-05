import { Button } from "@/components/ui/button";
import ScrollLink from "@/components/ScrollLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
              Hey, I'm <span className="text-secondary">John Doe</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Frontend Developer & UI/UX Designer
            </p>
            <p className="text-gray-600 mb-8 max-w-lg">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            </p>
            <div className="flex space-x-4">
              <ScrollLink href="#projects">
                <Button className="bg-secondary hover:bg-blue-600 text-white transition duration-300 shadow-md">
                  View My Work
                </Button>
              </ScrollLink>
              <ScrollLink href="#contact">
                <Button variant="outline" className="bg-white text-primary border border-gray-300 hover:bg-gray-100 transition duration-300">
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Avatar className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white shadow-lg">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="John Doe portrait" 
                className="w-full h-full object-cover"
              />
              <AvatarFallback className="text-4xl">JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
