import { Lightbulb, Microscope, Wrench } from "lucide-react";

const AboutSection = () => {
  const philosophyItems = [
    {
      icon: Lightbulb,
      title: "Structure over novelty",
      description: "Focusing on structural and interfacial engineering rather than discovering new materials"
    },
    {
      icon: Microscope,
      title: "Multiscale consistency",
      description: "Ex-situ multi-analysis to physically verify friction mechanisms"
    },
    {
      icon: Wrench,
      title: "Engineering mindset",
      description: "Design and troubleshooting capabilities based on anticipated experimental failures"
    }
  ];

  return (
    <section id="about" className="py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-slide-up">Research Profile</h2>
        
        <div className="space-y-12">
          <div className="prose prose-lg max-w-none animate-slide-up stagger-1">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Ph.D. candidate in Mechanical Engineering at Pusan National University, 
              specializing in 2D-material-based solid tribology across length scales, from 
              nanoscale friction to macroscale wear and durability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              My research focuses on shifting 2D solid tribology from material discovery to 
              property controllability through structural and interfacial engineering, 
              demonstrating that even well-established materials can exhibit entirely new 
              friction regimes when designed correctly.
            </p>
          </div>

          <div className="space-y-6 animate-slide-up stagger-2">
            <h3 className="text-2xl font-semibold">Research Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {philosophyItems.map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
