import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Επικοινωνία</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Στείλτε μας μήνυμα</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ονοματεπώνυμο
                  </label>
                  <Input id="name" placeholder="Το ονοματεπώνυμό σας" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Το email σας" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Τηλέφωνο
                  </label>
                  <Input id="phone" placeholder="Το τηλέφωνό σας" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Μήνυμα
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Αποστολή
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Στοιχεία Επικοινωνίας</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-red-600" />
                <div>
                  <p className="font-medium">Τηλέφωνο</p>
                  <p className="text-gray-600">210-1234567</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-red-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@nissanfotiadis.gr</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-red-600" />
                <div>
                  <p className="font-medium">Διεύθυνση</p>
                  <p className="text-gray-600">Λεωφ. Αθηνών 123, Αθήνα</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Ωράριο Λειτουργίας</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Δευτέρα - Παρασκευή</span>
                <span>09:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Σάββατο</span>
                <span>09:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Κυριακή</span>
                <span>Κλειστά</span>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Τοποθεσία</h2>
              <div className="aspect-video bg-gray-100 rounded-lg">
                {/* Εδώ θα μπορούσε να προστεθεί ένας χάρτης */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Χάρτης
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;