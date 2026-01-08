const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian, Fast Food",
    rating: 4.5,
    deliveryTime: 30,
    image: "/images/restaurants/pizza.jpg",
    menu: [
      {
        id: 1,
        name: "Margherita Pizza",
        price: 250,
        image: "/images/menu/pizza-1.jpg",
      },
      {
        id: 2,
        name: "Pepperoni Pizza",
        price: 320,
        image: "/images/menu/pizza-1.jpg",
      },
    ],
  },

  {
    id: 2,
    name: "Burger Hub",
    cuisine: "Burgers, Snacks",
    rating: 4.2,
    deliveryTime: 25,
    image: "/images/restaurants/burger.jpg",
    menu: [
      {
        id: 1,
        name: "Classic Burger",
        price: 180,
        image: "/images/menu/burger-1.jpg",
      },
    ],
  },
];

export default restaurants;
