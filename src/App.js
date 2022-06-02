import './App.css';
import React from "react" ;
import Footer  from './components/Footer' ;
import Navbar  from './components/Navbar' ;
import Content from './components/Content' ;
import Details from './components/Details ' ;
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom' ;

function App() {
  return (
    <>
    <Router>
      <Navbar  />
      <Content  />
        <Routes>
          <Route path = "/"  component = { Content } />
          <Route path = "/details"  component = { Details } />
        </Routes>
      <Footer  />  
    </Router>
    </>
  );
};


export default App;
