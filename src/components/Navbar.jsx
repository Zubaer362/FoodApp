import { useState } from "react";
import { Link } from "react-router-dom"; // import Link

export default function Navbar() {
  const [selectedCity, setSelectedCity] = useState("Dhaka");
  const [open, setOpen] = useState(false);

  const cities = ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition">
          Food<span className="text-gray-800">Home</span>
        </Link>

        {/* Search */}
        <input
          type="text"
          placeholder="Search restaurants..."
          className="hidden md:block w-96 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Right Section: Location + Explore Button */}
        <div className="flex items-center gap-4">
          {/* Location Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 flex items-center gap-1 px-4 py-2 border rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              📍 {selectedCity}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown List */}
            {open && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                {cities.map((city, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSelectedCity(city);
                      setOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Explore Restaurants Button */}
          <Link
            to="/restaurants"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 shadow-lg transition"
          >
            Explore Restaurants
          </Link>
        </div>
      </div>
    </header>
  );
}
