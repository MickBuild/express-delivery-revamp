
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Notre équipe est à votre disposition 24h/24 et 7j/7
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center bg-white border-2 border-black shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FFF446' }}>
                <Phone className="text-black" size={32} />
              </div>
              <CardTitle className="text-lg text-black">France</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black mb-4">WhatsApp</p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full border-black text-black hover:bg-gray-50">
                  +33 7 55 79 87 94
                </Button>
                <Button variant="outline" className="w-full border-black text-black hover:bg-gray-50">
                  +33 7 52 82 19 12
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white border-2 border-black shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FFF446' }}>
                <Phone className="text-black" size={32} />
              </div>
              <CardTitle className="text-lg text-black">Bénin</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black mb-4">Téléphone</p>
              <Button variant="outline" className="w-full border-black text-black hover:bg-gray-50">
                +229 01 5002 57 27
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white border-2 border-black shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FFF446' }}>
                <Mail className="text-black" size={32} />
              </div>
              <CardTitle className="text-lg text-black">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black mb-4">Écrivez-nous</p>
              <Button variant="outline" className="w-full border-black text-black hover:bg-gray-50">
                contact@dedravoexpress.com
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white border-2 border-black shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FFF446' }}>
                <MessageCircle className="text-black" size={32} />
              </div>
              <CardTitle className="text-lg text-black">Chat en ligne</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black mb-4">Assistance immédiate</p>
              <Button variant="outline" className="w-full border-black text-black hover:bg-gray-50">
                Démarrer le chat
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white border-2 border-black shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF446' }}>
                  <MapPin className="text-black" size={24} />
                </div>
                <CardTitle className="text-xl text-black">Notre Adresse</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-black mb-4">123 Rue Example, Paris</p>
              <div className="w-full h-64 rounded-lg overflow-hidden border-2 border-black">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2734736654986!2d2.349013976226865!3d48.85293377133241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0x40b82c3688c9460!2sNotre-Dame%20de%20Paris!5e0!3m2!1sen!2sfr!4v1733162543210!5m2!1sen!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DedraVo Express Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="text-white py-8 px-6 rounded-lg" style={{ backgroundColor: '#000000' }}>
              <h3 className="text-xl font-bold mb-2">Besoin d'un devis personnalisé ?</h3>
              <p className="mb-4">Obtenez une estimation gratuite en moins de 2 minutes</p>
              <Button size="lg" style={{ backgroundColor: '#FFF446' }} className="text-black hover:bg-yellow-400">
                Demander un devis gratuit
              </Button>
            </div>
            
            <div className="text-black py-8 px-6 rounded-lg border-2 border-black bg-white">
              <h3 className="text-xl font-bold mb-2">Horaires d'ouverture</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>8h00 - 20h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>10h00 - 16h00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
