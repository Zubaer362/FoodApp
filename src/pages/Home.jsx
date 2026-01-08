import { useState } from "react";

export default function Home() {
  // Offer cards data
  const offerCards = [
    {
      title: "FOOD DELIVERY",
      subtitle: "FROM RESTAURANTS",
      discount: "UPTO 60% OFF",
      image: "/images/restaurants/sushi.jpg",
    },
    {
      title: "INSTAMART",
      subtitle: "INSTANT GROCERY",
      discount: "UPTO 60% OFF",
      image: "/images/restaurants/pizza.jpg",
    },
    {
      title: "DINEOUT",
      subtitle: "EAT OUT & SAVE MORE",
      discount: "UPTO 50% OFF",
      image: "/images/restaurants/burger.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Order food from your favorite restaurants
          </h1>
          <p className="text-gray-500 mb-6 text-lg">
            Fast delivery • Best restaurants • Easy ordering • Amazing offers
          </p>

          {/* Search Bar */}
          <div className="flex justify-center lg:justify-start mb-6">
            <input
              type="text"
              placeholder="Search restaurants..."
              className="px-4 py-3 w-full max-w-md border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 transition">
              Search
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-600 text-sm">
            <div className="flex items-center gap-1 bg-white px-4 py-2 rounded shadow-sm">
              🚀 Fast Delivery
            </div>
            <div className="flex items-center gap-1 bg-white px-4 py-2 rounded shadow-sm">
              🍽️ Best Restaurants
            </div>
            <div className="flex items-center gap-1 bg-white px-4 py-2 rounded shadow-sm">
              🎁 Exciting Offers
            </div>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Amazing Offers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {offerCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                  {card.discount}
                </div>
              </div>

              {/* Text */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                  <p className="text-gray-500 text-sm">{card.subtitle}</p>
                </div>

                {/* Arrow */}
                <div className="mt-4 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
