import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';
import APPSC from './components/pages/APPSC';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TSPSC from './components/pages/TSPSC';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
//import Marketing from './components/pages/Marketing';
//import Consulting from './components/pages/Consulting';
import SignIn from './components/pages/SignIn';
//import Home from './components/Home';
function App() {
  return (
    <Router>
      
      <Navbar />
      <Switch>
        <Route path='/APPSC' component={APPSC} />
        <Route path='/TSPSC' component={TSPSC} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/' component={Home} />
        </Switch>
    </Router>
    
  );
}

export default App;