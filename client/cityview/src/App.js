import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Landing from './pages/Landing';
import City from './pages/City';
import Searched from './pages/Searched';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<City />} />
          <Route path='/home' element={<Home />} />
          <Route path='/searched' element={<Searched />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
