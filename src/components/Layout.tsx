import { Link, Outlet } from "react-router-dom";

const Layout = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-yellow-600">Mr Booking</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Mr Booking. Με επιφύλαξη κάθε δικαιώματος.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;