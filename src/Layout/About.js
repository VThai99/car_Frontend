import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../components/organisms/Main";
import image1 from "./img1.png";
import image2 from "./img2.png";
import image3 from "./img3.png";
import image4 from "./img4.png";
import image5 from "./img5.png";
import image6 from "./img6.png";
import image7 from "./img7.png";
const listProducts = [
  {
    id: 1,
    name: "Tùng",
    image: image1,
  },
  {
    id: 2,
    name: "Vẫn là Tùng",
    image: image2,
  },
  {
    id: 3,
    name: "Đạt",
    image: image3,
  },
  {
    id: 4,
    name: "Tùng Cave",
    image: image4,
  },
  {
    id: 5,
    name: "Tùng Sơn",
    image: image5,
  },
  {
    id: 6,
    name: "Tùng Óc Chó",
    image: image6,
  },
  {
    id: 7,
    name: "Tùng Ẻngisk",
    image: image7,
  },
];
const imgStyle = {
  width: "200px",
  objectFit: "cover",
  height: "250px",
  borderRadius: "50%",
  boxShadow: "rgb(80 70 70) 10px 5px 8px 0px",
};
const listStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px 0px",
};
const nameStyle = {
  fontSize: "25px",
  fontWeight: "600",
  textShadow: "rgb(17 6 80 / 75%) 3px 3px 3px",
};
const btnStyle = {
  fontStyle: "italic",
  fontWeight: "700",
  fontFamily: "fantasy",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  outline: "none",
  border: "none",
  background: "rgb(152 136 136 / 34%)",
  borderRadius: "20px",
  padding: "10px 20px",
  boxShadow:
    "inset 6px 6px 6px rgb(255 255 255), 8px 4px 12px 0px rgb(16 1 1), -6px -6px 10px rgb(49 9 9) inset, 0px 0px 20px rgb(4 4 4 / 99%)",
};
const btnStyle2 = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  outline: "none",
  border: "none",
  background: "rgb(152 136 136 / 34%)",
  borderRadius: "20px",
  padding: "10px 20px",
  boxShadow:
    "inset 6px 6px 6px rgb(255 255 255), 8px 4px 12px 0px rgb(16 1 1), -6px -6px 10px rgb(49 9 9) inset, 0px 0px 20px rgb(4 4 4 / 99%)",
};
const circleStyle = {
  display: "flex",
  height: "20px",
  width: "20px",
  border: "0.5px solid red",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  background: "red",
  fontSize: "15px",
  fontWeight: "700",
  marginLeft: "3px",
};

const About = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const productList = useSelector((state) => state.array)
  const addItemToCart = (item) => {
    dispatch({
      type: "ADDTOCART",
      newItem: item,
    });
  };
 useEffect(() => {
    console.log(productList) 
 },[productList])
 const proList = productList.map((item,index)=>{
   return (
       <p key={index}>{item.name}</p>
   )
 })
  const listItem = listProducts.map((item, index) => (
    <div className="col-6" style={listStyle} key={index}>
      <img style={imgStyle} src={item.image} alt="" />
      <p style={nameStyle}>{item.name}</p>
      <button style={btnStyle} onClick={() => addItemToCart(item)}>
        Add To Cart
      </button>
    </div>
  ));
  return (
    <Main>
      <div className="container">
        <h1>Mời bạn chọn sản phẩm</h1>
        <div className="row">
          <button style={btnStyle2}>
            Cart<span style={circleStyle}>{count}</span>
          </button>
        </div>
        <div className="row">{listItem}</div>
      </div>
      {proList}
    </Main>
  );
};
export default About;
