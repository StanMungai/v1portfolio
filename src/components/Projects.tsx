import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const labs = [
  {
    title: "IPv4 Static Routes",
    description: "Configured and troubleshot IPv4 static routes in network environments",
    tags: ["Networking", "IPv4", "Routing"],
  },
  {
    title: "IPv4 Default Routes",
    description: "Configured and troubleshot IPv4 default routes for network traffic management",
    tags: ["Networking", "IPv4", "Routing"],
  },
  {
    title: "IPv6 Static Routes",
    description: "Configured and troubleshot IPv6 static routes in modern network infrastructures",
    tags: ["Networking", "IPv6", "Routing"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-primary">#</span>projects
          </h2>
          <a href="#" className="text-primary hover:underline flex items-center gap-2">
            View all
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, index) => (
            <Card 
              key={lab.title}
              className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🔧</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{lab.title}</CardTitle>
                <CardDescription>{lab.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {lab.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
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

export default Projects;