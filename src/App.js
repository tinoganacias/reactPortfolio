import React from "react";
import AboutMe from './components/AboutMe';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { Navbar, Nav } from 'react-bootstrap'
import {BrowserRouter as Router,Switch,Route,Link} 

from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="body">
    <Navbar className="nav-bar">
    <Nav className="me-auto">
    <Link className="links" to="/">About Me</Link>
    <Link className="links" to="/Projects">Projects</Link>
    <Link className="links" to="/Contact">Contact</Link>
    <Link className="links" to="/Resume">Resume</Link>
</Nav>
</Navbar>
</div>
      
    <Switch>
    <Route exact path="/">
    <AboutMe />
    </Route>
    <Route exact path="/Projects">
    <Projects />
    </Route>
    <Route exact path="/Contact">
    <Contact />
    </Route>
    <Route exact path="/Resume">
    <Resume />
    </Route>
        
    </Switch>
      
    <div className="footer">
    <Footer />
    </div>
   </Router>
  );
}

export default App;
