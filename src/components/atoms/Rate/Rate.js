import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import './Rate.scss'
const Rate = (id, ...props) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const pushRate = (value) => {
        console.log(value)
        console.log(id)
    }
  return(
    <div className="star_item">
    {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type='radio'
              className="rate"
              name='rating'
              value={ratingValue}
              onClick={()=> {setRating(ratingValue);pushRate(ratingValue)}}
            >
            </input>
            <AiFillStar
              className='star'
              color={ratingValue <= (hover||rating) ? "#ffc107" : "black"}
              size={20}
              onMouseEnter={()=>setHover(ratingValue)}
              onMouseLeave={()=>setHover(null)}></AiFillStar>
          </label>
        )
    }
    )}
  </div>
  )
}
export default Rate;