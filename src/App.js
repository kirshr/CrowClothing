import Home from "./Routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "../src/Routes/navigation/navigation.component";
import SignIn from "./components/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
