import '../../pages/Shopping/Shopping.css'
import {
  AiFillHeart,
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
const Footer = () => {
    return(
        <div className="footer">
        <div className="container">
          <div className="row d-flex justify-content-between pt-3">
            <div className="col-4 footer_first">
              <p>Menu</p>
              <ul className='list_choice_footer'>
                <li>Join Me</li>
                <li>My Blogs</li>
                <li>My Journey</li>
                <li>About</li>
              </ul>
            </div>
            <div className="col-4 footer_second">
              <div className='d-flex justify-content-around icon_social_footer'>
                <span>
                  <AiOutlineInstagram></AiOutlineInstagram>
                </span>
                <span>
                  <AiFillLinkedin></AiFillLinkedin>
                </span>
                <span>
                  <AiFillFacebook></AiFillFacebook>
                </span>
                <span>
                  <AiFillTwitterCircle></AiFillTwitterCircle>
                </span>
                <span>
                  <AiFillGithub></AiFillGithub>
                </span>
              </div>
              <div>
              <p className="copyright">Copyright 2021 | <a href="https:searchcaidb"><AiFillHeart id='heart_footer'></AiFillHeart> Thái K</a></p>
              </div>
            </div>
            <div className="col-4 footer_thirt">
                <p>Other Pages</p>
                <ul className='list_choice_footer'>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>FAQ</li>
                    <li>Terms of use</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Footer;