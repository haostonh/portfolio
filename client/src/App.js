import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Pages
import About from './pages/About';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio" component={HomePage}/>
        <Route exact path="/portfolio/about" component={About}/>
        <Route exact path="/portfolio/projects" component={Projects}/>
        <Route exact path="/portfolio/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
