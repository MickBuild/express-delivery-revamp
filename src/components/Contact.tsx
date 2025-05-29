
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Notre équipe est à votre disposition 24h/24 et 7j/7
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={32} />
              </div>
              <CardTitle className="text-lg">Téléphone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Appelez-nous directement</p>
              <Button variant="outline" className="w-full">
                01 23 45 67 89
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-green-600" size={32} />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Écrivez-nous</p>
              <Button variant="outline" className="w-full">
                contact@dedravoexpress.com
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-purple-600" size={32} />
              </div>
              <CardTitle className="text-lg">Chat en ligne</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Assistance immédiate</p>
              <Button variant="outline" className="w-full">
                Démarrer le chat
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-orange-600" size={32} />
              </div>
              <CardTitle className="text-lg">Adresse</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Visitez-nous</p>
              <Button variant="outline" className="w-full">
                123 Rue Example, Paris
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white py-8 px-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Besoin d'un devis personnalisé ?</h3>
            <p className="mb-4">Obtenez une estimation gratuite en moins de 2 minutes</p>
            <Button size="lg" variant="secondary">
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
