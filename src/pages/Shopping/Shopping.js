import "./Shopping.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { ImLocation2, ImEnlarge2 } from "react-icons/im";
import {
  AiFillStar,
  AiFillEyeInvisible,
  AiOutlineHeart,
} from "react-icons/ai";
import { GiInjustice } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import car1 from "./car1.jpg";
import car2 from "./car2.jpg";
import car3 from "./car3.jpg";
import { useEffect, useState } from "react";
import Main from "../../components/organisms/Main";
import axios from "axios";
import { useCookies } from "react-cookie";
const content = [
  {
    image: car1,
  },
  {
    image: car2,
  },
  {
    image: car3,
  },
];
const Shopping = () => {
  const [cookies] = useCookies([""]);
  const formatMoney = (value) => {
   return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  const imageConfig =(value)=>{
    return 'http://127.0.0.1:8000/'+value;
  }
  const [listCar, setListCar] = useState([]);
    useEffect(()=>{
      const getProduct = async() => {
        await axios.get('http://127.0.0.1:8000/api/product')
           .then((res)=>{setListCar(res.data)})
           .catch((err)=> {console.log(err)})
      }
      getProduct()
          
    },[])
  return (
    <Main>
      <Slider autoplay={3000}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{ background: `url('${item.image}') no-repeat center` }}
          ></div>
        ))}
      </Slider>
      <div className="item container">
        <h1>
          <FaCar id="car_icon"></FaCar>Products
        </h1>
        <section className="product_list_aa">
         {listCar.map((item)=>{
           return(
            <article className="item_card" key={item.id}>
            <div className="image_item">
              <img src={imageConfig(item.image)} alt="" />
              <p className="status_item">For sale</p>
              <div className="list_action_item">
                <button className="btn_action_item">
                  <AiFillEyeInvisible></AiFillEyeInvisible>
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
                <ImLocation2></ImLocation2>{item.address}
              </p>
            </div>
            <div className="about_item d-flex justify-content-between">
              <div className="star_item">
                {[...Array(5)].map((index, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <div className="price_item">${formatMoney(item.price)}</div>
            </div>
          </article>
           )
         })}
        </section>
      </div>
      <h1>{cookies.user_name}</h1>
    </Main>
  );
};
export default Shopping;
