// import {useState, useEffect} from "inferno";
import {Link} from "inferno-router";
import "./css/style.css";


export default function Navbar() {
   // const [path, setPath] = useState(window.location.pathname);

   // useEffect(() => {
   //    setPath(window.location.pathname);
   // }, [path])

   return (
      <nav className="nav test">
         <Link id="id" className="title" to="/drink"><h4 className="lobster">Home</h4></Link>
         <div>
            <ul>
               <li>
                  <Link id="id2" className="nav-item" to="/saved"><a>Saved Drinks</a></Link>
               </li>
            </ul>
         </div>
      </nav>
   )

}