
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/0a884bea-c445-450f-bb93-9c2c5973f805.png" 
                alt="Vital Flow AI Logo" 
                className="h-10 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-vitalflow-dark hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="text-vitalflow-dark hover:text-blue-600 transition-colors">Services</a>
            <a href="#process" className="text-vitalflow-dark hover:text-blue-600 transition-colors">Process</a>
            <a href="#about" className="text-vitalflow-dark hover:text-blue-600 transition-colors">About</a>
            <a href="#faq" className="text-vitalflow-dark hover:text-blue-600 transition-colors">FAQ</a>
            <a href="#contact" className="text-vitalflow-dark hover:text-blue-600 transition-colors">Contact</a>
          </div>
          
          {/* Contact Button - Desktop */}
          <div className="hidden md:flex">
            <Button className="bg-vitalflow-blue text-white hover:bg-blue-500">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2 px-4 shadow-md">
            <div className="flex flex-col space-y-3 py-3">
              <a 
                href="#home" 
                className="text-vitalflow-dark hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-vitalflow-dark hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#process" 
                className="text-vitalflow-dark hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </a>
              <a 
                href="#about" 
                className="text-vitalflow-dark hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#faq" 
                className="text-vitalflow-dark hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="text-vitalflow-dark hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-vitalflow-blue text-white hover:bg-blue-500 w-full mt-2">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
