import { Link } from "react-router-dom";
import "../css/Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/anagram"}>Anagram</Link>
        </li>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"/puppies"}>Puppies</Link>
        </li>
      </ul>
    </div>
  );
};
