
import { ArrowRight, Truck, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const images = [
    "/lovable-uploads/173f9f69-2697-482b-87a4-60e45108af7a.png",
    "/lovable-uploads/4474305c-31c4-4529-8150-9b14dec38d6b.png"
  ];

  return (
    <section style={{ backgroundColor: '#FFF446' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Livraison Express
              <span className="text-black block">Paris ↔ Cotonou</span>
            </h1>
            <p className="text-xl text-black mb-8">
              Service de livraison professionnel entre Bénin et Paris. 
              Rapide, sécurisé et accessible 24h/24.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                Commencer maintenant
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-black text-black hover:bg-white"
              >
                Calculer le prix
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-black" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Livraison Rapide</h3>
                <p className="text-black">Express en 2-8 jours</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-black" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Suivi en Temps Réel</h3>
                <p className="text-black">Suivez votre colis en direct</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-black" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">100% Sécurisé</h3>
                <p className="text-black">Assurance incluse</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img 
                        src={image} 
                        alt={`DedraVo Express ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-2xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
