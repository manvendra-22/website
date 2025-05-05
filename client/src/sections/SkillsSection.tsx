import { Card, CardContent } from "@/components/ui/card";
import { skillsData } from "@/lib/data";
import { Code, Palette, Wrench, Server, FlaskRound, Users } from "lucide-react";

const SkillsSection = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case "Frontend Development":
        return <Code className="text-xl" />;
      case "UI/UX Design":
        return <Palette className="text-xl" />;
      case "Tools & Technologies":
        return <Wrench className="text-xl" />;
      case "Backend Knowledge":
        return <Server className="text-xl" />;
      case "Testing & Deployment":
        return <FlaskRound className="text-xl" />;
      case "Soft Skills":
        return <Users className="text-xl" />;
      default:
        return <Code className="text-xl" />;
    }
  };

  const getCategoryClass = (category: string) => {
    switch (category) {
      case "Frontend Development":
        return "bg-blue-100 text-secondary";
      case "UI/UX Design":
        return "bg-purple-100 text-accent";
      case "Tools & Technologies":
        return "bg-green-100 text-green-600";
      case "Backend Knowledge":
        return "bg-yellow-100 text-yellow-600";
      case "Testing & Deployment":
        return "bg-red-100 text-red-600";
      case "Soft Skills":
        return "bg-indigo-100 text-indigo-600";
      default:
        return "bg-blue-100 text-secondary";
    }
  };

  return (
    <section id="skills" className="py-20 bg-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <Card key={index} className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className={`w-12 h-12 flex items-center justify-center ${getCategoryClass(skill.category)} rounded-lg mb-4`}>
                  {getIcon(skill.category)}
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                <p className="text-gray-600 mb-6">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex} 
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full transition-all duration-300 hover:bg-secondary hover:text-white hover:scale-105"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
