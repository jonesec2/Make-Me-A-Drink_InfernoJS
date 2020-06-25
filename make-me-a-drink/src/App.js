import { Component, render } from 'inferno';
import { BrowserRouter as Router, Route, Switch, Link } from 'inferno-router';
// import Logo from './logo';
import Navbar from "./Components/Navbar";
import Drink from "./Pages/Drink";
import './App.css';

export default function App() {

   return (
      <Router>
         <div className="parent">
            <Navbar />
            <Switch>
               <Route exact path={["/", "/drink"]}>
                  <Drink />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}
