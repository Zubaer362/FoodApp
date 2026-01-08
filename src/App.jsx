import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails";


export default function App() {
return (
<BrowserRouter>

<Navbar />
<div className="rounded-2xl bg-white shadow-sm hover:shadow-md transition">

<Routes>
<Route path="/" element={<Home />} />
<Route path="/restaurants" element={<Restaurants />} />
<Route path="/restaurants/:id" element={<RestaurantDetails />} />
</Routes>
</div>

</BrowserRouter>
);
}