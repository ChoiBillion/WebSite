const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-down">
            Mingi Choi
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium animate-slide-up stagger-1">
            Ph.D. Candidate in Mechanical Engineering
          </p>
        </div>
        
        <div className="space-y-4 animate-slide-up stagger-2">
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            2D Materials–Based Tribology | Multiscale Solid Lubrication
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
            Engineering interfacial structure to make macroscale superlubricity a controllable property, not a rare phenomenon.
          </p>
        </div>

        <div className="flex justify-center gap-4 pt-6 animate-slide-up stagger-3">
          <a 
            href="#about" 
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105"
          >
            Learn More
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full border-2 border-border hover:border-primary font-medium transition-all hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
