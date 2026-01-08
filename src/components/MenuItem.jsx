export default function MenuItem({ item }) {
  return (
    <div className="flex justify-between items-center p-4 hover:bg-gray-50">
      
      <div className="flex gap-4">
        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-lg object-cover"
        />

        {/* Text */}
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-sm text-gray-500">₹{item.price}</p>
        </div>
      </div>

      <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded hover:bg-orange-500 hover:text-white transition">
        ADD
      </button>
    </div>
  );
}
