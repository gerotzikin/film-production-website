import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/225c816550a30f705c3746495c51e1b7511fe5be.png';

interface NavbarProps {
  currentPage: string;
}

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export function Navbar({ currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slideDown ${
          scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-background/50 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a 
              href="#home"
              className="flex-shrink-0 hover:opacity-90 transition-opacity"
            >
              <img src={logo} alt="TZ'IKIN Productions" className="h-8 md:h-10" />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const isActive = currentPage === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    className={`relative text-foreground/70 hover:text-foreground transition-colors group animate-fadeInUp ${
                      isActive ? 'text-foreground' : ''
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow transition-transform origin-left duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground transition-transform hover:scale-110"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border md:hidden animate-slideDown"
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item, index) => {
              const isActive = currentPage === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-lg animate-fadeInLeft ${
                    isActive 
                      ? 'text-transparent bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text' 
                      : 'text-foreground/70 hover:text-foreground transition-colors'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
