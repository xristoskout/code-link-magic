import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Nissan Fotiadis</h1>
          <p className="text-xl mb-8">Η καλύτερη επιλογή για μεταχειρισμένα Nissan</p>
          <Link to="/cars">
            <Button className="bg-red-600 hover:bg-red-700">
              Δείτε τα αυτοκίνητά μας <ChevronRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Γιατί να μας επιλέξετε</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Εγγύηση Ποιότητας</h3>
                <p className="text-muted-foreground">
                  Όλα τα οχήματά μας περνούν από αυστηρό έλεγχο ποιότητας
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Άριστο Service</h3>
                <p className="text-muted-foreground">
                  Εξειδικευμένο προσωπικό με πολυετή εμπειρία στα Nissan
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Ευέλικτη Χρηματοδότηση</h3>
                <p className="text-muted-foreground">
                  Προσαρμοσμένα χρηματοδοτικά προγράμματα στις ανάγκες σας
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Επικοινωνήστε μαζί μας</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              <span>210-1234567</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              <span>info@nissanfotiadis.gr</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="mr-2 h-5 w-5" />
              <span>Λεωφ. Αθηνών 123, Αθήνα</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
