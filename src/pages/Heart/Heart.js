import logo from "./images/logo.png";
import img1 from "./images/hero_phone.png";
import phone1 from "./images/phone1.png";
import phone2 from "./images/phone2.png";
import phone3 from "./images/phone3.png";
import { GrTwitter } from "react-icons/gr";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import "./heart.scss";
import Menu from "./menu/Menu";
const Heart = () => {
  return (
    <>
    <Menu></Menu>
      <div className="container heart_hero">
        <div className="heart_hero_text">
          <p>Food app</p>
          <p>
            Why stay hungry when <br></br>you can order form Bella Onojie
          </p>
          <p>Download the bella onoje's food app now on</p>
          <div className="heart_hero_button">
            <button>Playstore</button>
            <button>App store</button>
          </div>
        </div>
      </div>
      <div className="container heart_hero_2">
        <img src={img1} alt="" />
      </div>
      <hr className="hr" />
      <div className="container heart_hero_3">
        <p className="heart_hero_3_tittle">How the app works</p>
        <div className="row heart_hero_3_center">
          <div className="col-md-6">
            <img src={phone1} alt="" />
          </div>
          <div className="col-md-6 heart_hero_3_content">
            <p>Create an account</p>
            <p>
              Create/login to an existing <br /> account to get started
            </p>
            <p>
              An account is created with your email <br /> and a desired
              password
            </p>
          </div>
        </div>
      </div>

      <div className="container heart_hero_3">
        <div className="row heart_hero_3_center_2">
          <div className="col-md-6 heart_hero_3_content_2">
            <div className="content_2">
              <p>Explore varieties</p>
              <p>
                Shop for your favorites <br /> account to get started
              </p>
              <p>
                Shop for your favorite meals or drinks <br />
                and enjoy while doing it.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={phone2} alt="" />
          </div>
        </div>
      </div>
      <div className="container heart_hero_3">
        <div className="row heart_hero_3_center">
          <div className="col-md-6">
            <img src={phone3} alt="" />
          </div>
          <div className="col-md-6 heart_hero_3_content">
            <p>Checkout</p>
            <p>
              When you done check out <br /> and get it delivered.
            </p>
            <p>
              When you done check out and get it
              <br />
              delivered with ease.
            </p>
          </div>
        </div>
      </div>
      <div className="container heart_near_footer">
        <p>Download the app now.</p>
        <p>
          Available on your favorite store. Start your premium experience now
        </p>
        <div className="heart_neart_footer_button">
          <button>Playstore</button>
          <button>App store</button>
        </div>
      </div>
      <div className="container heart_footer">
        <div className="row heart_footer_content">
          <div className="col-md-4">
            <img src={logo} alt="" />
          </div>
          <div className="col-md-4 heart_footer_icon">
            <span>
              <GrTwitter></GrTwitter>
            </span>
            <span>
              <AiFillFacebook></AiFillFacebook>
            </span>
            <span>
              <AiFillInstagram></AiFillInstagram>
            </span>
          </div>
          <div className="col-md-4">Copywright 2020 Bella Onojie.com</div>
        </div>
      </div>
    </>
  );
};
export default Heart;
