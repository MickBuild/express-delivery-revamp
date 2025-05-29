
import { Users, Award, MapPin, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Clients satisfaits" },
    { icon: Award, value: "99.8%", label: "Taux de livraison" },
    { icon: MapPin, value: "200+", label: "Villes couvertes" },
    { icon: Clock, value: "24/7", label: "Service client" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir DedraVo Express ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Depuis plus de 10 ans, nous révolutionnons la livraison avec des solutions 
              innovantes et un service client exceptionnel. Notre engagement : vous offrir 
              la meilleure expérience de livraison.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Technologie de pointe</h3>
                  <p className="text-gray-600">Suivi en temps réel et optimisation des trajets</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Équipe professionnelle</h3>
                  <p className="text-gray-600">Livreurs formés et équipés des dernières technologies</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Engagement environnemental</h3>
                  <p className="text-gray-600">Flotte électrique et emballages éco-responsables</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
