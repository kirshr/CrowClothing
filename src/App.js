import Home from "./Routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "../src/Routes/navigation/navigation.component";
import Authentication from "./components/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
