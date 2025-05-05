import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate frontend developer and UI/UX designer with 5 years of experience building modern web applications. I specialize in creating intuitive interfaces that provide exceptional user experiences.
            </p>
            <p className="text-gray-600 mb-6">
              After graduating with a degree in Computer Science from MIT, I've worked with several startups and established companies to help them achieve their digital goals.
            </p>
            <p className="text-gray-600 mb-8">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-primary">Education</h4>
                <p className="text-gray-600">MIT, Computer Science</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Location</h4>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Email</h4>
                <p className="text-gray-600">john@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Employment</h4>
                <p className="text-gray-600">Open to opportunities</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              <Card className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <CardContent className="p-0 h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                    alt="John working on a project" 
                    className="w-full h-full object-cover" 
                  />
                </CardContent>
              </Card>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-lg shadow-lg">
                <p className="text-lg font-semibold">5+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
