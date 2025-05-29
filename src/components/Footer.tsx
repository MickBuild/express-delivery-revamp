
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DedraVo Express</h3>
            <p className="text-white mb-4">
              Votre partenaire de confiance pour vos livraisons entre Paris et Cotonou.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/dedravoexpress?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF446' }}>
                <Facebook className="text-black" size={16} />
              </a>
              <a href="https://www.instagram.com/dedravoexpress229/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF446' }}>
                <Instagram className="text-black" size={16} />
              </a>
              <a href="https://wa.me/message/BYYDIPQDAFK6L1" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF446' }}>
                <MessageCircle className="text-black" size={16} />
              </a>
              <a href="https://www.tiktok.com/@dedravoexpress229?_t=8oGG5Bbfmkv&_r=1" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF446' }}>
                <span className="text-sm font-bold text-black">TT</span>
              </a>
              <a href="https://snapchat.com/t/VCQbJGyq" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF446' }}>
                <span className="text-sm font-bold text-black">SC</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-white transition-colors" style={{ color: '#FFF446' }}>Express Paris-Cotonou</a></li>
              <li><a href="#" className="hover:text-white transition-colors" style={{ color: '#FFF446' }}>Standard</a></li>
              <li><a href="#" className="hover:text-white transition-colors" style={{ color: '#FFF446' }}>Colis volumineux</a></li>
              <li><a href="#" className="hover:text-white transition-colors" style={{ color: '#FFF446' }}>Suivi colis</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-white transition-colors" style={{ color: '#FFF446' }}>Centre d'aide</a></li>
              <li><a href="#" className="hover:text-white transition-colors" style={{ color: '#FFF446' }}>Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors" style={{ color: '#FFF446' }}>WhatsApp: +33 7 55 79 87 94</a></li>
              <li><a href="#" className="hover:text-white transition-colors" style={{ color: '#FFF446' }}>Bénin: +229 01 50 02 57 27</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-white transition-colors" style={{ color: '#FFF446' }}>Mentions légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors" style={{ color: '#FFF446' }}>CGV</a></li>
              <li><a href="#" className="hover:text-white transition-colors" style={{ color: '#FFF446' }}>Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors" style={{ color: '#FFF446' }}>Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-white">
          <p>&copy; 2024 DedraVo Express. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
