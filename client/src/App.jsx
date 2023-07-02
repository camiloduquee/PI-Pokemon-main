import {Home, Form, Landing, Detail } from "./views/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Detail" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
