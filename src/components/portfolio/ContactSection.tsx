import { Mail, Building } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-slide-up">Get in Touch</h2>
        
        <div className="grid sm:grid-cols-2 gap-6 animate-slide-up stagger-1">
          <a 
            href="mailto:Mingi.choi888@gmail.com"
            className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
          >
            <Mail className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">Mingi.choi888@gmail.com</p>
          </a>
          
          <div className="p-8 rounded-2xl bg-card border border-border">
            <Building className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Affiliation</h3>
            <p className="text-muted-foreground text-sm">
              School of Mechanical Engineering<br />
              Pusan National University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
