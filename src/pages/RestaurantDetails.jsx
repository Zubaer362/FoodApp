import { useParams } from "react-router-dom";
import restaurants from "../data/restaurants";
import MenuItem from "../components/MenuItem";

export default function RestaurantDetails() {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id == id);

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{restaurant.name}</h1>
        <p className="text-gray-500">{restaurant.cuisine}</p>
      </div>

      {/* Menu */}
      <div className="bg-white rounded-xl shadow divide-y">
        {restaurant.menu.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
