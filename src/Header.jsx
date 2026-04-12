import Addtocart from "./Addtocart";
import "./index.css";
import { Link } from "react-router";
function Header() {
  return (
    <header>
      <nav className="header">
        <h2>MyApp</h2>
        <ul>
          <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <Link to="/products" className="link">products</Link>
          </li>
          <li>
            <Link to="/cart" className="link">cart</Link>
          </li>
          <Addtocart />
        </ul>
      </nav>
      <h2>Header page on here!</h2>
    </header>
  );
}
export default Header;
