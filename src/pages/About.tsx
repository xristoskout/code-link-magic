import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Σχετικά με εμάς</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Η Ιστορία μας</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Η Nissan Fotiadis ιδρύθηκε το 1990 με όραμα να προσφέρει αξιόπιστα 
              μεταχειρισμένα αυτοκίνητα Nissan στην ελληνική αγορά. Με περισσότερα 
              από 30 χρόνια εμπειρίας, έχουμε εξυπηρετήσει χιλιάδες ικανοποιημένους 
              πελάτες.
            </p>
            <p className="mb-4">
              Η εξειδίκευσή μας στα Nissan μας επιτρέπει να προσφέρουμε βαθιά γνώση 
              και τεχνογνωσία για κάθε μοντέλο, διασφαλίζοντας την καλύτερη δυνατή 
              εξυπηρέτηση των πελατών μας.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Οι Αξίες μας</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 mr-2 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Ποιότητα</h3>
                <p className="text-gray-600">
                  Κάθε όχημα περνάει από ενδελεχή έλεγχο πριν διατεθεί προς πώληση
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 mr-2 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Εμπιστοσύνη</h3>
                <p className="text-gray-600">
                  Χτίζουμε μακροχρόνιες σχέσεις με τους πελάτες μας βασισμένες στην ειλικρίνεια
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 mr-2 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Εξυπηρέτηση</h3>
                <p className="text-gray-600">
                  Προσφέρουμε προσωποποιημένη εξυπηρέτηση και υποστήριξη πριν και μετά την πώληση
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Γιατί να μας επιλέξετε</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-red-600" />
                  <span>30+ χρόνια εμπειρίας στα Nissan</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-red-600" />
                  <span>Πλήρης έλεγχος και ιστορικό service</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-red-600" />
                  <span>Εγγύηση για κάθε όχημα</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-red-600" />
                  <span>Ευέλικτες επιλογές χρηματοδότησης</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-red-600" />
                  <span>After-sales υποστήριξη</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Τα Νούμερά μας</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">30+</p>
                  <p className="text-sm text-gray-600">Χρόνια Εμπειρίας</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">5000+</p>
                  <p className="text-sm text-gray-600">Ικανοποιημένοι Πελάτες</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">100+</p>
                  <p className="text-sm text-gray-600">Διαθέσιμα Οχήματα</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">4.8/5</p>
                  <p className="text-sm text-gray-600">Βαθμολογία Πελατών</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="aspect-video bg-gray-100 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1527576539890-dfa815648363"
              alt="Η έκθεσή μας"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;