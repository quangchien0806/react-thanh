import { Routes, Route } from "react-router-dom";

import "./App.css";
import Crud from "./components/Crud";
import Effect from "./components/Effect";
import Reducers from "./components/Reducers";
// import State from "./components/State";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Crud />} />
      {/* <Route path="/" element={<State />} /> */}
      <Route path="/effect" element={<Effect />} />
      <Route path="/reducers" element={<Reducers />} />
    </Routes>
  );
}

export default App;
