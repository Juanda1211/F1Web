
import {  Users, MapPin, Trophy, Contact } from "lucide-react";
import heroImage from "@/assets/f1-hero.jpg";

const Hero = () => {
  const navItems = [
    { icon: Users, label: "Drivers and teams", href: "/drivers" },
    { icon: MapPin, label: "Tracks", href: "/tracks" },
    { icon: Trophy, label: "History", href: "/history" },
    { icon:Contact, label: "Contact", href:"https://portfolio-jd-1211.web.app/en"}
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Formula 1 Racing"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/50 to-background/50" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-transparent" />
      </div>

      {/* Speed Line Animation (added keyframe of animate-speed-line in index.css)*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 animate-speed-line bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text  text-red-600">
              Race Into
            </span>
            <span className="block text-primary mt-2">The Action</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto leading-relaxed">
            Explore the ultimate Formula 1 experience. Dive into driver stats, team histories, and some 
            calendar circuits.
          </p>

          {/* Navigation Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 animate-slide-in-right ">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
