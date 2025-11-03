import { useState } from 'react';
import { Users, MapPin, Trophy, Contact, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { icon: Users, label: 'Drivers and teams', href: '/drivers' },
    { icon: MapPin, label: 'Tracks', href: '/tracks' },
    { icon: Trophy, label: 'History', href: '/history' },
    { icon: Contact, label: 'Contact', href: 'https://juanllanos.netlify.app/en' },
  ];

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border/20 ">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo opcional - agrega si quieres */}
        <Link to="/" className="text-xl font-bold text-primary">
          F1 JD
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.href}  // Corregido: usa 'to' para React Router
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-foreground hover:text-primary"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-background border-t border-border/20">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.href}  // Corregido: usa 'to'
                  onClick={() => setIsMobileOpen(false)}  // Cierra menú al navegar
                  className="flex items-center space-x-3 px-4 py-3 rounded-md text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
