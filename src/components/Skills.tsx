import { Card, CardContent } from "@/components/ui/card";
import { Code2, Network, Server, Cloud, Lightbulb, MessageSquare } from "lucide-react";

const skills = [
  { name: "Python", icon: Code2, color: "text-yellow-500" },
  { name: "Computer Networking", icon: Network, color: "text-blue-500" },
  { name: "Linux", icon: Server, color: "text-orange-500" },
  { name: "Cloud Infrastructure", icon: Cloud, color: "text-cyan-500" },
  { name: "Problem Solving", icon: Lightbulb, color: "text-purple-500" },
  { name: "Communication", icon: MessageSquare, color: "text-green-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-primary">#</span>skills
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-4 h-32">
                <skill.icon className={`h-12 w-12 ${skill.color} group-hover:scale-110 transition-transform`} />
                <p className="text-sm font-medium text-center">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;