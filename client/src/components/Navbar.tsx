import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ScrollLink from "./ScrollLink";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 bg-green-500 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <ScrollLink href="#home" className="text-xl font-bold text-white">
              John<span className="text-gray-200">Doe</span>
            </ScrollLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <ScrollLink 
                href="#home" 
                className="nav-link text-white hover:text-gray-200 px-2 py-1 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
              >
                Home
              </ScrollLink>
              <ScrollLink 
                href="#about" 
                className="nav-link text-white hover:text-gray-200 px-2 py-1 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
              >
                About
              </ScrollLink>
              <ScrollLink 
                href="#skills" 
                className="nav-link text-white hover:text-gray-200 px-2 py-1 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
              >
                Skills
              </ScrollLink>
              <ScrollLink 
                href="#projects" 
                className="nav-link text-white hover:text-gray-200 px-2 py-1 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
              >
                Projects
              </ScrollLink>
              <ScrollLink 
                href="#contact" 
                className="nav-link text-white hover:text-gray-200 px-2 py-1 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
              >
                Contact
              </ScrollLink>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <ScrollLink 
                href="#home" 
                className="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </ScrollLink>
              <ScrollLink 
                href="#about" 
                className="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                About
              </ScrollLink>
              <ScrollLink 
                href="#skills" 
                className="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                Skills
              </ScrollLink>
              <ScrollLink 
                href="#projects" 
                className="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                Projects
              </ScrollLink>
              <ScrollLink 
                href="#contact" 
                className="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
