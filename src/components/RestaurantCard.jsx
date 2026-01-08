import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurants/${restaurant.id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
        
        {/* Image */}
        <img
  src={restaurant.image}
  onError={(e) => (e.target.src = "/images/restaurants/pizza.jpg")}
  alt={restaurant.name}
  className="h-44 w-full object-cover"
/>


        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold">
            {restaurant.name}
          </h2>

          <p className="text-sm text-gray-500">
            {restaurant.cuisine}
          </p>

          <div className="flex items-center justify-between mt-2">
            <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
              ⭐ {restaurant.rating}
            </span>

            <span className="text-sm text-gray-500">
              {restaurant.deliveryTime} mins
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
