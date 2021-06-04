import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import logo from './Logo.png'
import hero from './img11.png'
import img1 from './img10.png'
import img2 from './img9.png'
import img3 from './img8.png'
import img4 from './img7.png'
import img5 from './img6.png'
import img6 from './img5.png'
// import img7 from './img4.png'
// import img8 from './img3.png'
// import img9 from './img2.png'
// import img10 from './img1.png'
import Main from '../components/organisms/Main'
const Blog = () => {
  return (
    <Main>
      <div className="all">
        <div className="container">
          <div className='header'>
            <Link to='/contact' className="contact">contact</Link>
            <Link to='/shopping'><img className="logo" src={logo} alt="" /></Link>
            <p className="about">About</p>
          </div>
          <div className="hero">
            <p className="hero_title">Editorial</p>
            <img src={hero} className="hero_img" alt="" />
          </div>
          <div className="info_wr">
            <div className="info_wr_child">
              <div className="title_info1">ART DIRECTOR</div>
              <div className="content_info">Geoff Levy</div>
            </div>
            <div className="info_wr_child">
              <div  className="title_info2">Creative Director</div>
              <div  className="content_info">Natailie Schneider</div>
            </div>
            <div className="info_wr_child">
              <div  className="title_info2">DESIGNER</div>
              <div  className="content_info">Em Design</div>
            </div>
          </div>
          <div className="img_1">
            <img src={img1} alt="" />
          </div>
          <div className="img_2">
            <p className="img_2_title">Editorial</p>
            <img src={img2} alt="" />
          </div>
          <div className="img_3">
            <img src={img3} alt="" />
          </div>
        <div className="img-4">
          <img src={img4} className="img_4" alt="" />
          <img src={img5} className="img_5" alt="" />
          <img src={img6} className="img_6" alt="" />
        </div>
        </div>
      </div>
  </Main>
  );
}
export default Blog;

