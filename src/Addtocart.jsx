import { useSelector } from "react-redux";
import "./index.css";
import { Link } from "react-router";
function Addtocart() {
  const cartcounter = useSelector((state) => state.cart.items);
  console.log(cartcounter.length);
  return (
    <header>
      <Link to="/products" className="cart">
        <div>
          🛒 Cart: <b>{cartcounter.length ? cartcounter.length : 0}</b>
        </div>
      </Link>
    </header>
  );
}

export default Addtocart;
