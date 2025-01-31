import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cars = () => {
  // Προσωρινά δεδομένα για παράδειγμα
  const cars = [
    {
      id: 1,
      model: "Nissan Qashqai",
      year: 2020,
      kilometers: 45000,
      price: 18500,
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302"
    },
    {
      id: 2,
      model: "Nissan Juke",
      year: 2021,
      kilometers: 32000,
      price: 16900,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
    },
    {
      id: 3,
      model: "Nissan Micra",
      year: 2019,
      kilometers: 58000,
      price: 12500,
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Διαθέσιμα Αυτοκίνητα</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <Card key={car.id} className="overflow-hidden">
            <img
              src={car.image}
              alt={car.model}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{car.model}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Έτος: {car.year}</p>
                <p>Χιλιόμετρα: {car.kilometers.toLocaleString()}</p>
                <p className="text-lg font-bold text-red-600">
                  {car.price.toLocaleString()}€
                </p>
              </div>
              <Link to={`/cars/${car.id}`}>
                <Button className="w-full mt-4">
                  Περισσότερες Πληροφορίες
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cars;