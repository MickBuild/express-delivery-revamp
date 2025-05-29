
import { ArrowRight, Truck, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Livraison Express
            <span className="text-blue-600 block">Simple et Fiable</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Service de livraison professionnel pour vos colis et documents. 
            Rapide, sécurisé et accessible 24h/24.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Commencer maintenant
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline">
              Calculer le prix
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Livraison Rapide</h3>
              <p className="text-gray-600">Express en 2h, Standard en 24h</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Suivi en Temps Réel</h3>
              <p className="text-gray-600">Suivez votre colis en direct</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Sécurisé</h3>
              <p className="text-gray-600">Assurance incluse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
