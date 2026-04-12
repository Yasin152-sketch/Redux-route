import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeitem } from "./redux/slice";
import { productfetch } from "./redux/Products";
import { useEffect } from "react";
import Header from "./Header";
function Products() {
  const dispatch = useDispatch();
  const remove = useDispatch();
  const products = useDispatch();
  useEffect(() => {
    products(productfetch());
  }, []);
  const selector = useSelector((state) => state.products.item);
  console.log(selector);
  const cartcounter = useSelector((state) => state.cart.items);
  console.log(cartcounter.length);
  return (
    <>
      <Header />
      <div className="grid">
        {selector?.map((item, index) => {
          return (
            <div className="card">
              <img src={item.thumbnail} />
              <div className="content">
                <div className="title">Title : {item.title}</div>
                <div className="brand">Brand : {item.brand}</div>
                <div className="price">Price : {item.price}</div>
                <div className="rating">Rating : {item.rating}</div>
              </div>
              <div className="btn-container">
                {cartcounter.find((cartitem) => cartitem.id === item.id) ? (
                  <button
                    className="added"
                    onClick={() => remove(removeitem(item))}
                  >
                    Remove cart!
                  </button>
                ) : (
                  <button
                    className="btn"
                    onClick={() => dispatch(addTocart(item))}
                  >
                    Add to Cart!
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
