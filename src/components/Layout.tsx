import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Car, Phone, Info } from "lucide-react";

const Layout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-red-600">Nissan Fotiadis</span>
              </Link>
            </div>
            <div className="flex space-x-8">
              <Link
                to="/cars"
                className={cn(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive("/cars")
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                <Car className="w-4 h-4 mr-2" />
                Αυτοκίνητα
              </Link>
              <Link
                to="/contact"
                className={cn(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive("/contact")
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                <Phone className="w-4 h-4 mr-2" />
                Επικοινωνία
              </Link>
              <Link
                to="/about"
                className={cn(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive("/about")
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                <Info className="w-4 h-4 mr-2" />
                Σχετικά με εμάς
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Nissan Fotiadis</h3>
              <p className="text-gray-400">
                Η καλύτερη επιλογή για μεταχειρισμένα Nissan
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Επικοινωνία</h3>
              <p className="text-gray-400">Λεωφ. Αθηνών 123, Αθήνα</p>
              <p className="text-gray-400">210-1234567</p>
              <p className="text-gray-400">info@nissanfotiadis.gr</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Ωράριο Λειτουργίας</h3>
              <p className="text-gray-400">Δευτέρα - Παρασκευή: 09:00 - 20:00</p>
              <p className="text-gray-400">Σάββατο: 09:00 - 15:00</p>
              <p className="text-gray-400">Κυριακή: Κλειστά</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Nissan Fotiadis. Με επιφύλαξη κάθε δικαιώματος.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;