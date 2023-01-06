import Home from "./Routes/home/home.component";
import Shop from "./Routes/shop/shop.component";
import { Checkout } from "./Routes/checkout/checkout.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "../src/Routes/navigation/navigation.component";
import Authentication from "./components/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
