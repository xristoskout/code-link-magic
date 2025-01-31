import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Gauge, Info } from "lucide-react";

const CarDetails = () => {
  const { id } = useParams();

  // Προσωρινά δεδομένα για παράδειγμα
  const car = {
    id: Number(id),
    model: "Nissan Qashqai",
    year: 2020,
    kilometers: 45000,
    price: 18500,
    engine: "1.5 dCi",
    power: "115hp",
    transmission: "Manual",
    fuel: "Diesel",
    color: "Μαύρο",
    description: "Άριστη κατάσταση, πλήρες service history, ένας προηγούμενος κάτοχος.",
    images: [
      "https://images.unsplash.com/photo-1487252665478-49b61b47f302",
      "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      "https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="relative h-96">
            <img
              src={car.images[0]}
              alt={car.model}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {car.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${car.model} ${index + 2}`}
                className="w-full h-24 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{car.model}</h1>
          <p className="text-2xl font-bold text-red-600 mb-6">
            {car.price.toLocaleString()}€
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="flex items-center p-4">
                <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Έτος</p>
                  <p className="font-semibold">{car.year}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <Gauge className="w-5 h-5 mr-2 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Χιλιόμετρα</p>
                  <p className="font-semibold">{car.kilometers.toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-4">Τεχνικά Χαρακτηριστικά</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Κινητήρας</p>
                  <p>{car.engine}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ισχύς</p>
                  <p>{car.power}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Κιβώτιο</p>
                  <p>{car.transmission}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Καύσιμο</p>
                  <p>{car.fuel}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Περιγραφή</h3>
              <p className="text-gray-600">{car.description}</p>
            </CardContent>
          </Card>

          <Button size="lg" className="w-full">
            Επικοινωνήστε μαζί μας
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;