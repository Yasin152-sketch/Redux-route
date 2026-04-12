import { useSelector } from "react-redux";
import { removeitem, updateQuantity } from "./redux/slice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearItem } from "./redux/slice";
import { useNavigate } from "react-router";
function Cartlist() {
  const selector = useSelector((state) => state.cart.items);
  const [cartitem, setcartitem] = useState(selector);
  console.log(selector);
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setcartitem(cartitem);
  }, [selector]);
  // const manageqaulity = (id, q) => {
  //   let quality = parseInt(q) > 1 ? parseInt(q) : 1;
  //   const cartTempItems = selector.map((item) => {
  //     console.log("called",id,q)
  //     return item.id == id ? { ...item, quality } : item;
  //   });
  //   setcartitem(cartTempItems);
  // };

  // const handleQuantity = (id, value) => {
  //   const quantity = Math.max(1, Number(value) || 1);

  //   dispatch(updateQuantity({ id, quantity }));
  // };

  const handleQuantity = (id, value) => {
    const quantity = Math.max(1, Number(value) || 1);
    dispatch(updateQuantity({ id, quantity }));
  };
  const cleardata = () => {
    localStorage.removeItem("cart");
    alert("order is palced!");
    dispatch(clearItem());
    nevigate("/products");
  };
  return (
    <>
      <h2>Cartlisting on Header1</h2>
      <div className="cart-container">
        <div className="cart-header">
          <h2>your cart items</h2>
          <span>{selector.length} : items</span>
        </div>
        {selector.length > 0
          ? selector.map((item, index) => {
              return (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-2">
                    <div className="item-info">
                      <img src={item.thumbnail} />
                      <div className="item-details">
                        <h4>{item.title}</h4>
                        <h4>{item.brand}</h4>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        {/* <input type="number" value={item.quantity || 1} onChange={(e) =>handleQuantity(item.id,e.target.value)}
                        /> */}
                        <input
                          type="number"
                          placeholder="Enter your value!"
                          value={item.quantity || 1}
                          onChange={(e) =>
                            handleQuantity(item.id, e.target.value)
                          }
                        />
                      </div>
                      <span className="price">
                        ${item.price * (item.quantity || 1)}
                      </span>
                      <button
                        className="btn"
                        onClick={() => dispatch(removeitem(item))}
                      >
                        Remove item!
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
        <div className="footer">
          <h2>
            Total :
            {selector.reduce(
              (sum, item) => sum + item.price * (item.quantity || 1),
              0,
            )}
          </h2>
          <button className="btn" onClick={() => cleardata()}>
            Place order!
          </button>
        </div>
      </div>
    </>
  );
}

export default Cartlist;
