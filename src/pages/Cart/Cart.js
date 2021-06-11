import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../../components/organisms/Main";
import "./Cart.scss";
const Cart = () => {
  const product = useSelector((state) => state.Cart);
  const [totalMoney, setTotalMoney] = useState(0);
  const [quatityUpdate, setQuantityUpdate] = useState(0);
  const count = useSelector((state) => state.numberCart);
  const dispatch = useDispatch();
  const configImg = (value) => {
    return "http://127.0.0.1:8000/" + value;
  };
  useEffect(() => {
    const getTotal = () => {
      let total = 0;
      product.forEach((item) => {
        total += item.price * item.quantity;
      });
      setTotalMoney(total);
    };
    localStorage.setItem("count", count);
    localStorage.setItem("cart", JSON.stringify(product));
    getTotal();
  }, [product, count]);
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE",
      id: id
    })
  }
  const formatMoney = (value) => {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };
  const updateQuantity = async (e,id) => {
    const quantity = e.target.value
    dispatch({
      type: "UPDATEQUANTITY",
      id: id,
      updateQuantity: quantity
    })
    
  }
  return (
    <Main>
      <div className="container">
        <h3>Item in your cart: {count}</h3>
      </div>
      <div className="container">
        {product.map((item) => {
          return (
            <div className="row cart" key={item.id}>
              <div className="col-4 image_product_cart">
                <img src={configImg(item.image)} alt="" />
              </div>
              <div className="col-4 product_name_cart">
                <p>{item.name}</p>
              </div>
              <div className="col-4 product_money_cart">
                <div>
                  <input
                    type="number"
                    defaultValue={item.quantity}
                    onChange={(e) => {updateQuantity(e,item.id)}}
                  />
                </div>
                <div>Price: {formatMoney(item.price)}$</div>
                <div>Total: {formatMoney(item.price * item.quantity)}$</div>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={()=>removeItem(item.id)}
                >Remove</Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="total_money"><p>All Money: {formatMoney(totalMoney)}$</p></div>
      </div>
    </Main>
  );
};
export default Cart;
