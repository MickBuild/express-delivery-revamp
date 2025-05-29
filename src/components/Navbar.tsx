
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">DedraVo Express</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-black hover:text-gray-600 transition-colors">Services</a>
              <a href="#about" className="text-black hover:text-gray-600 transition-colors">À propos</a>
              <a href="#contact" className="text-black hover:text-gray-600 transition-colors">Contact</a>
              <Button className="bg-black hover:bg-gray-800 text-white">
                Demander un devis
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#services" className="block px-3 py-2 text-black hover:text-gray-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-black hover:text-gray-600">À propos</a>
              <a href="#contact" className="block px-3 py-2 text-black hover:text-gray-600">Contact</a>
              <div className="px-3 py-2">
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  Demander un devis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
