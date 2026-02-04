import { Atom, Layers, Droplets, Scale, Wind, Grid3X3 } from "lucide-react";

const ResearchInterests = () => {
  const interests = [
    { icon: Layers, title: "2D Materials–Based Solid Lubrication" },
    { icon: Scale, title: "Macroscale Superlubricity" },
    { icon: Droplets, title: "Graphene Oxide & Pristine Graphene Coatings" },
    { icon: Atom, title: "Multiscale Tribology (Nano → Macro)" },
    { icon: Wind, title: "Environment-Dependent Friction" },
    { icon: Grid3X3, title: "Structural & Interfacial Engineering" },
  ];

  return (
    <section id="research" className="py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-slide-up">Research Interests</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl bg-muted hover:bg-muted/80 transition-all group animate-slide-up stagger-${Math.min(index + 1, 6)}`}
            >
              <interest.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-medium">{interest.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
