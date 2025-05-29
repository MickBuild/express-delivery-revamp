
import { Users, Award, MapPin, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "5,000+", label: "Clients satisfaits" },
    { icon: Award, value: "99.8%", label: "Taux de livraison" },
    { icon: MapPin, value: "2", label: "Pays connectés" },
    { icon: Clock, value: "24/7", label: "Service client" }
  ];

  return (
    <section id="about" style={{ backgroundColor: '#FFF446' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Pourquoi choisir DedraVo Express ?
            </h2>
            <p className="text-lg text-black mb-8">
              Spécialistes de la livraison entre Paris et Cotonou, nous offrons 
              un service fiable et rapide pour connecter la France et le Bénin. 
              Notre expertise locale garantit une livraison en toute sécurité.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Expertise binationale</h3>
                  <p className="text-black">Connaissance parfaite des réglementations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Réseau de confiance</h3>
                  <p className="text-black">Partenaires locaux à Paris et Cotonou</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Prix compétitifs</h3>
                  <p className="text-black">Tarifs transparents sans surprise</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FFF446' }}>
                  <stat.icon className="text-black" size={24} />
                </div>
                <div className="text-2xl font-bold text-black mb-1">{stat.value}</div>
                <div className="text-sm text-black">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
