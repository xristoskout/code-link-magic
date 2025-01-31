import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Star, Clock, Shield, Phone } from "lucide-react";

const MrBooking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-yellow-300 to-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/dd83bd50-8757-4370-9c52-2a5e45a87b63.png"
            alt="Mr Booking με ταξί"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">
            Mr. Booking
          </h1>
          <p className="text-2xl mb-8 drop-shadow-md">
            Ο προσωπικός σας σύμβουλος για κάθε διαδρομή
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg">
            Κάντε Κράτηση Τώρα
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Γιατί να επιλέξετε τον Mr. Booking
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-xl font-semibold mb-2">24/7 Διαθεσιμότητα</h3>
                <p className="text-gray-600">
                  Πάντα διαθέσιμος για τις μετακινήσεις σας
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-xl font-semibold mb-2">Άριστη Εξυπηρέτηση</h3>
                <p className="text-gray-600">
                  Επαγγελματισμός και φιλική διάθεση
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-xl font-semibold mb-2">Ασφάλεια</h3>
                <p className="text-gray-600">
                  Εγγυημένη ασφάλεια σε κάθε διαδρομή
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Ο Στόλος μας
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img
              src="/lovable-uploads/4d9a8e74-c05d-428a-ac71-efb94703c7d6.png"
              alt="Ταξί 1"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src="/lovable-uploads/1238ac89-70f4-442c-a967-c9e6268e9a82.png"
              alt="Ταξί 2"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src="/lovable-uploads/95f847ce-565b-4d45-b17d-01e495bf0e30.png"
              alt="Ταξί 3"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Έτοιμοι για την επόμενη διαδρομή σας;
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Καλέστε Τώρα
            </Button>
            <Button size="lg" variant="outline" className="bg-white hover:bg-gray-50 text-black text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Κάντε Κράτηση Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MrBooking;