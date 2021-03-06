import Main from "../../components/organisms/Main";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImLocation2, ImEnlarge2 } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { GiInjustice } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Shopping/Shopping.css";
import { useParams } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Rate from "../../components/atoms/Rate/Rate";
const Product = () => {
   const dispatch = useDispatch();
   const [listCar, setListCar] = useState([]);

   const {id} = useParams();
  const formatMoney = (value) => {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };
  const imageConfig = (value) => {
    return "http://127.0.0.1:8000/" + value;
  };
  const addToCard = (item) => {
    dispatch({
      type: "ADDTOCART",
      newItem: item
    });
  };
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/category/${id}`).then((res) => {
      setListCar(res.data);
    });
  }, [id]);
  return (
    <Main>
      {listCar.map((item)=> {
        return(
          <div key={item.id}>
              <video loop autoPlay muted src={imageConfig(item.video)} style={{width: '100%', height: 'calc(100vh - 19vh)', objectFit:'cover'}}></video>
          <div className="item container">
          <h1 style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <img src={imageConfig(item.logo)} alt='' id="cate_logo" style={{height: '50px'}}></img>{item.name}
          </h1>
          <section className="product_list_aa">
            {item.product.map((item) => {
              return (
                <article className="item_card" key={item.id}>
                  <div className="image_item">
                    <img src={imageConfig(item.image)} alt="" />
                    <p className="status_item">For sale</p>
                    <div className="list_action_item">
                      <button className="btn_action_item" onClick={()=>addToCard(item)}>
                        <FaShoppingCart></FaShoppingCart>
                      </button>
                      <button className="btn_action_item">
                        <AiOutlineHeart></AiOutlineHeart>
                      </button>
                      <button className="btn_action_item">
                        <GiInjustice></GiInjustice>
                      </button>
                      <button className="btn_action_item">
                        <ImEnlarge2></ImEnlarge2>
                      </button>
                    </div>
                  </div>
                  <div className="info_item">
                    <p>{item.name}</p>
                    <p>
                      <ImLocation2></ImLocation2>
                      {item.address}
                    </p>
                  </div>
                  <div className="about_item d-flex justify-content-between">
                    <Rate id={item.id}></Rate>
                    <div className="price_item">${formatMoney(item.price)}</div>
                  </div>
                </article>
              );
            })}
          </section>
        </div>
          </div>
        )
      })}
    </Main>
  );
};
export default Product;
