import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-primary">#</span>about-me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Hello, I'm Stanford Kangethe!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm an IT Support Professional based in Nanyuki, Kenya. I specialize in computer networking, 
              cloud infrastructure, and system administration. I'm passionate about solving complex technical 
              problems and optimizing IT systems for better performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I hold a degree in Mathematics and Computer Science from IIITA, and I'm certified as an 
              AWS Cloud Practitioner and AWS Solutions Architect. My expertise spans across Python development, 
              Linux systems, and cloud infrastructure management.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about leveraging my coding skills and technical knowledge to develop innovative 
              applications and websites. I always strive to learn about the latest technologies and frameworks.
            </p>
            
            <Button className="group">
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Resume
            </Button>
          </div>
          
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 gradient-bg rounded-lg blur-2xl opacity-20"></div>
              <div className="relative bg-card border border-border rounded-lg p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-64 h-64 mx-auto bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-8xl">🎓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <Card className="mt-12 border-l-4 border-l-primary">
          <CardContent className="p-6">
            <blockquote className="space-y-2">
              <p className="text-xl italic text-muted-foreground">
                "Control can sometimes be an illusion. But sometimes you need illusion to gain control."
              </p>
              <footer className="text-right text-sm text-muted-foreground">- Mr. Who</footer>
            </blockquote>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};

export default About;
