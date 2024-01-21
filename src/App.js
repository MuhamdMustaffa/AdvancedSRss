import './App.css';
import React, { useContext} from 'react';
import { ThemeContext } from './Components/darkModeToggle/ThemeContext';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Tools from './Pages/Tools/Tools';
import SRs from './Pages/SRs/SRs';
import Notes from './Pages/Notes/Notes';
import CPEs from './Pages/CPEs/CPEs';

function App() {
  const { darkMode } = useContext(ThemeContext);
  
  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
}, [darkMode]);


  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/SRs" element={<SRs />} />
          <Route exact path="/Notes" element={<Notes />} />
          <Route exact path="/Tools" element={<Tools />} />
          <Route exact path="/CPEs" element={<CPEs />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App ;