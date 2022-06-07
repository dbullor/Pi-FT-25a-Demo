import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/index.jsx';
import LandingPage from './Components/LandingPage/index.jsx';
import ActivitiesCards from './Components/ActivitiesCards/index.jsx';
import Details from './Components/Details/index.jsx';





function App() {
  return (

   
      <div className="App">
        <Routes>
          <Route path="/home/:id" element={<Details />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/activity" element={<ActivitiesCards />} />
        </Routes>
      </div>
    
  );
}

export default App;
