import { Mic, MapPin } from "lucide-react";

const Conferences = () => {
  const conferences = [
    { name: "TechConnect World Innovation Conference", location: "Austin, USA", year: "2025" },
    { name: "International Conference on Metallurgical Coatings and Thin Films (ICMCTF)", location: "San Diego, USA", year: "2025" },
    { name: "Materials Research Society (MRS) Fall Symposium", location: "Boston, USA", year: "2023" },
    { name: "International Conference on Manufacturing, Machine Design and Tribology", location: "Jeju, South Korea", year: "2023" },
    { name: "K-Tribology", location: "Busan, South Korea", year: "2023" },
    { name: "Cross Straits Symposium (CSS)", location: "Online", year: "2022" },
  ];

  return (
    <section id="conferences" className="py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12 animate-slide-up">
          <Mic className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Conference Presentations</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {conferences.map((conf, index) => (
            <div 
              key={index}
              className={`p-5 rounded-xl bg-muted hover:bg-muted/80 transition-all animate-slide-up stagger-${Math.min(index + 1, 6)}`}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-medium mb-2">{conf.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{conf.location}</span>
                  </div>
                </div>
                <span className="text-primary font-semibold text-sm">{conf.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conferences;
