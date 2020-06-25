// import {useState, useEffect} from "inferno";
import { Link } from "inferno-router";
import "./css/style.css";


export default function Navbar() {
   // const [path, setPath] = useState(window.location.pathname);

   // useEffect(() => {
   //    setPath(window.location.pathname);
   // }, [path])

   //write onClick event for the "Dark Mode" button

   return (
      <nav className="nav test">
         <Link id="id" className="title" to="/drink"><h4 className="lobster">Home</h4></Link>
         <div className="list-div">
            <ul className="nav-list">
               <li className="nav-item">
                  <Link id="id2" className="vollkorn" to="/saved"><a>Saved Drinks</a></Link>
               </li>
               <li className="nav-item">
                  <Link id="id3" className="vollkorn"><a>Dark Mode</a></Link>
               </li>
               <form class="form">
               <input className="vollkorn smooth" type="search" placeholder="Drink Search"
                  aria-label="Mix Drink Search"/>
                  <button className="vollkorn smooth" type="submit">Search</button>
            </form>
            </ul>
         </div>
      </nav>
   )

}