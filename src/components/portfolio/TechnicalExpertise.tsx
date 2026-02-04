import { Microscope, Hammer, Code } from "lucide-react";

const TechnicalExpertise = () => {
  const expertise = [
    {
      icon: Microscope,
      title: "Characterization",
      skills: ["AFM", "SEM", "Raman", "XRD", "Tribometer", "Nanoindenter", "FT-IR", "EDS"]
    },
    {
      icon: Hammer,
      title: "Fabrication",
      skills: ["CVD transfer", "Spray coating", "Drop-casting", "RTP", "Plasma etching"]
    },
    {
      icon: Code,
      title: "Data & Automation",
      skills: ["Python-based data analysis", "Experimental automation"]
    }
  ];

  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-slide-up">Technical Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {expertise.map((category, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl bg-card border border-border animate-slide-up stagger-${index + 1}`}
            >
              <category.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 rounded-full bg-muted text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
