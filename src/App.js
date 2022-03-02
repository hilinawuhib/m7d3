import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Search from "./components/Search";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <MyNavbar/>
      <Routes>
        <Route path="/" element={<Search/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
