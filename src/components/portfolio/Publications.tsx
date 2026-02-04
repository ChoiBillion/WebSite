import { FileText, Star } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      number: 6,
      authors: "Mingi Choi, Ivan V. Vlassiouk, Won-Seok Kim, Jeong Han Kim, Anirundha V. Sumant, Ji-Woong Jang, Junho Suh, Youngjun Jang and Songkil Kim*",
      title: "Graphene Oxide Gluing Layer Enabling Macroscale Tribology Applications of Pristine Graphene",
      journal: "Friction",
      details: "13(10), 9441092 (2025)",
      highlight: "Selected as a Back Cover",
      isFirst: true
    },
    {
      number: 5,
      authors: "Jeonghan Kim, Seonha Park, Mingi Choi, Habeom Lee, Songkil Kim*",
      title: "Unveiling the deposition mechanism of ultra-thin graphene oxide flakes in an aqueous colloidal phase",
      journal: "Applied Surface Science",
      details: "164307 (2025)",
      isFirst: false
    },
    {
      number: 4,
      authors: "Seonha Park, Lien Nguyen Phuong, Ivan V. Vlassiouk, Min Gi Choi, Seokjun Kim, Jaekwang Lee and Songkil Kim*",
      title: "Unveiling the Mechanism of Surface Corrugation Formation on a Quasi Free-Standing Bi-Layer Graphene via Experimental and Modeling Investigations",
      journal: "Applied Surface Science",
      details: "158749 (2023)",
      isFirst: false
    },
    {
      number: 3,
      authors: "Jeonghan Kim, Seonha Park, Mingi Choi, Seokjun Kim, Jeongbeom Heo, Eunseop Yeom, Seokho Kim, Habeom Lee and Songkil Kim*",
      title: "Simply Controlling the Surface Structure of Graphene Oxide Thin Films Using Multiple Drop-Casting",
      journal: "Diamond and Related Materials",
      details: "139, 110327 (2023)",
      isFirst: false
    },
    {
      number: 2,
      authors: "Min Gi Choi, Seonha Park, Habeom Lee and Songkil Kim*",
      title: "Correlating Surface Structures and Nanoscale Friction of CVD Multi-Layer Graphene",
      journal: "Applied Surface Science",
      details: "584, 152572 (2022)",
      isFirst: true
    },
    {
      number: 1,
      authors: "Min Gi Choi, Alex Belianinov, Alison Pawlicki, Seonha Park, Habeom Lee, Olga S. Ovchinnikova, and Songkil Kim*",
      title: "Nanoscale Friction of CVD Single-Layer MoS2 with Controlled Defect Formation",
      journal: "Surfaces and Interfaces",
      details: "26, 101437 (2021)",
      isFirst: true
    }
  ];

  return (
    <section id="publications" className="py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-slide-up">Publications</h2>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all animate-slide-up stagger-${Math.min(index + 1, 6)}`}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{pub.number}</span>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start gap-2 flex-wrap">
                    <h3 className="font-semibold text-lg leading-tight">{pub.title}</h3>
                    {pub.highlight && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Star className="w-3 h-3" />
                        {pub.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className={pub.isFirst ? "font-medium text-foreground" : ""}>
                      {pub.authors.split(', ').map((author, i, arr) => {
                        const isMingi = author.includes("Mingi Choi") || author.includes("Min Gi Choi");
                        return (
                          <span key={i}>
                            <span className={isMingi ? "font-semibold text-primary" : ""}>
                              {author}
                            </span>
                            {i < arr.length - 1 ? ", " : ""}
                          </span>
                        );
                      })}
                    </span>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium italic">{pub.journal}</span>
                    <span className="text-muted-foreground">, {pub.details}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
