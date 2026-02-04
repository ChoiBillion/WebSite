import { Building2, GraduationCap } from "lucide-react";

const Experience = () => {
  const labExperience = [
    {
      institution: "Center for Nanoscale Materials (CNM)",
      location: "Argonne National Laboratory",
      roles: [
        { title: "Visiting Student Program", year: "2026" },
        { title: "User Researcher", year: "2024–2025" }
      ]
    },
    {
      institution: "Center for Nanophase Materials Sciences (CNMS)",
      location: "Oak Ridge National Laboratory",
      roles: [
        { title: "User Researcher", year: "2023" }
      ]
    }
  ];

  const researchExperience = [
    {
      title: "Exploring Graphene-Based Solid Lubricants Coating Film for Its Macroscale Applications",
      funder: "National Research Foundation of Korea (NRF) Ph.D. Fellowship",
      period: "2023.03 – 2025.08",
      amount: "$30,000"
    },
    {
      title: "Towards Macroscale Superlubricity of 2D Nanomaterials in Ambient Air for Mechanical Systems",
      funder: "Pusan National University Fellowship Program",
      period: "2022.04 – 2023.02",
      amount: "$4,000"
    },
    {
      title: "2D Nanomaterial-Based Solid State Lubrication for Extreme Environment Applications",
      funder: "Pusan National University Fellowship Program",
      period: "2020.10 – 2021.01",
      amount: "$4,000"
    }
  ];

  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-slide-up">Experience</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* National Lab Experience */}
          <div className="space-y-6 animate-slide-up stagger-1">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">National Laboratory Experience</h3>
            </div>
            
            <div className="space-y-4">
              {labExperience.map((lab, index) => (
                <div key={index} className="p-5 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-lg">{lab.institution}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{lab.location}</p>
                  <div className="space-y-1">
                    {lab.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="flex justify-between text-sm">
                        <span>{role.title}</span>
                        <span className="text-muted-foreground">{role.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Experience */}
          <div className="space-y-6 animate-slide-up stagger-2">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Research Experience</h3>
            </div>
            
            <div className="space-y-4">
              {researchExperience.map((research, index) => (
                <div key={index} className="p-5 rounded-xl bg-card border border-border">
                  <h4 className="font-medium text-sm leading-tight mb-2">{research.title}</h4>
                  <p className="text-xs text-primary font-medium mb-2">{research.funder}</p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{research.period}</span>
                    <span className="font-medium">{research.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
