import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Landing from './pages/Landing';
import City from './pages/City';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<City />} />
          <Route path='/home' element={<Home />} />
          <Route path='/city/:name' element={<City />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
