import { Home, Form, Landing, Detail } from "./views";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
