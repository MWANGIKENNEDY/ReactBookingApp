import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Item from "./pages/OneItem/Item";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
          <Route path="/hotels" element={<List/>}></Route>
          <Route path="/hotels/:id" element={<Item/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
