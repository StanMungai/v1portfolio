import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I'm a <span className="code-text">IT Support Professional</span> and{" "}
            <span className="code-text">Cloud Infrastructure Specialist</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            I'm currently into Computer Networking, Cloud Infrastructure, and System Administration
          </p>
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group"
          >
            Scroll Down
            <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
        
        <div className="relative">
          <div className="w-full aspect-square max-w-md mx-auto relative">
            <div className="absolute inset-0 gradient-bg rounded-lg blur-3xl opacity-30"></div>
            <div className="relative bg-card border border-border rounded-lg p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded px-4 py-2 inline-block">
                  <p className="text-sm code-text">Currently working at Nanyuki Water & Sanitation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;