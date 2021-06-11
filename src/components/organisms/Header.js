import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../pages/Shopping/Shopping.css";
const Header = () => {
  const [cate, setCate] = useState([]);
  const imageConfig = (value) => {
    return "http://127.0.0.1:8000/" + value;
  };
  useEffect(() => {
    const getCate = async () => {
      await axios
        .get("http://127.0.0.1:8000/api/category")
        .then((res) => {
          setCate(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCate();
  }, []);

  return (
    <div className="first">
      <div className="container headerr">
        <div className="row header_shopping">
          <div className="col-4 shopName d-flex justify-content-around align-items-center">
          <Link to="/">VipStore</Link>
          </div>
          <div className="col-8 d-flex justify-content-center align-items-center">
            <ul className="menu d-flex justify-content-around align-items-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                Shop
                <ul className="menuChild ">
                  {cate.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link to={"/product/" + item.id} className="listCate"><img src={imageConfig(item.logo)} alt=""></img><p>{item.name}</p></Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
