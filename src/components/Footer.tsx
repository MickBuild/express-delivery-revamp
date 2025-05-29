
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DedraVo Express</h3>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour vos livraisons entre Paris et Cotonou.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF446' }}>
                <span className="text-sm font-bold text-black">f</span>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF446' }}>
                <span className="text-sm font-bold text-black">t</span>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF446' }}>
                <span className="text-sm font-bold text-black">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Express Paris-Cotonou</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Standard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Colis volumineux</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suivi colis</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp: +33 7 55 79 87 94</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bénin: +229 01 50 02 57 27</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DedraVo Express. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
