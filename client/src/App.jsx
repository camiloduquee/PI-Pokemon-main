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
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:ID" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
