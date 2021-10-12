import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "./Ninja.scss";
const Ninja = () => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>DKM Tung NUi</h1>

      <div class="parallax">
        <div class="bg_foo">foo</div>
        <div
          class="bg_bar"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="5000"
        >
          bar
        </div>
        <div class="bg_baz">baz</div>
        <div class="bg_bazz">bazz</div>
      </div>
      <div className="test">
        <span>P</span>
        <span>E</span>
        <span>R</span>
        <span>F</span>
        <span>E</span>
        <span>C</span>
        <span>T</span>
      </div>
      <div className="btn_animation" data-aos="fade-up">
        <div className="animation_content">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button>Button</button>
        </div>
      </div>
      <div
        className="text_animation"
        data-aos="zoom-in"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="word">Sometime</div>
        <div className="word">it's not that you</div>
        <div className="word">miss someone</div>
        <div className="word">it's just</div>
        <div className="word">that you miss</div>
        <div className="word">a feeling</div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {[...Array(5)].map((i, index) => {
          const rate = index + 1;
          return (
            <label
              key={index}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="5000"
            >
              <input
                type="radio"
                value={rate}
                name="a"
                className="hehe"
                onClick={() => {
                  setRating(rate);
                }}
              />
              <AiFillStar
                size={200}
                onMouseEnter={() => {
                  setHover(rate);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
                color={rate <= (hover || rating) ? "red" : "black"}
              />
            </label>
          );
        })}
      </div>
    </>
  );
};
export default Ninja;
