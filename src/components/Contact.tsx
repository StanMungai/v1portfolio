import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "stanfordkangethe16@gmail.com",
      href: "mailto:stanfordkangethe16@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0792701908",
      href: "tel:0792701908",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "stanford-kangethe",
      href: "https://www.linkedin.com/in/stanford-kangethe",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-primary">#</span>contacts
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm interested in freelance opportunities and full-time positions. However, 
              if you have other requests or questions, don't hesitate to contact me.
            </p>
            
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold mb-4">Message me here</h3>
                {contactInfo.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <contact.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>{contact.value}</span>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Services Offered</h3>
            <div className="space-y-4">
              {[
                "IT Support & Troubleshooting",
                "Network Infrastructure Setup",
                "System Administration",
                "Cloud Infrastructure Management",
                "Python Development",
                "Linux System Configuration",
              ].map((service, index) => (
                <Card 
                  key={service}
                  className="hover:border-primary transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <p className="flex items-center gap-2">
                      <span className="text-primary">▹</span>
                      {service}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;