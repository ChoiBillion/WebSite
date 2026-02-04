import { Award, Trophy, Medal } from "lucide-react";

const Honors = () => {
  const awards = [
    { title: "Best Poster Award", organization: "Korean Tribology Society", year: "2025", icon: Trophy },
    { title: "Best Presentation Award", organization: "KSME Micro/Nano Division", year: "2025", icon: Award },
    { title: "Best Paper Award", organization: "ICMDT", year: "2023", icon: Medal },
    { title: "Best Paper Award", organization: "KTS", year: "2021", icon: Medal },
    { title: "Best Paper Award", organization: "CSS", year: "2022", icon: Medal },
    { title: "Best Researcher Award", organization: "BK21 BKFOUR", year: "2022, 2023", icon: Award },
  ];

  return (
    <section id="honors" className="py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-slide-up">Honors & Recognition</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl bg-gradient-to-br from-card to-muted border border-border hover:border-primary/30 transition-all group animate-slide-up stagger-${Math.min(index + 1, 6)}`}
            >
              <award.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.organization}</p>
              <p className="text-xs text-primary font-medium mt-2">{award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;
