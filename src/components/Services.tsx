
import { Package, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Express 2h",
      description: "Livraison ultra-rapide en 2 heures maximum",
      features: ["Suivi en temps réel", "SMS de confirmation", "Priorité absolue"],
      price: "À partir de 15€",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Package,
      title: "Standard 24h",
      description: "Livraison économique en 24 heures",
      features: ["Livraison garantie", "Assurance incluse", "Point relais disponible"],
      price: "À partir de 8€",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Globe,
      title: "International",
      description: "Expédition vers plus de 200 pays",
      features: ["Dédouanement inclus", "Suivi international", "Documentation"],
      price: "À partir de 25€",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services de Livraison
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions adaptées à tous vos besoins de livraison
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className={service.color} size={32} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-900 mb-4">{service.price}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full" variant="outline">
                  Choisir ce service
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
