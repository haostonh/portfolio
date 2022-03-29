import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import About from './pages/About';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/portfolio' element={<HomePage/>}/>
        <Route exact path='/portfolio/about' element={<About/>}/>
        <Route exact path='/portfolio/projects' element={<Projects/>}/>
        <Route exact path='/portfolio/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
