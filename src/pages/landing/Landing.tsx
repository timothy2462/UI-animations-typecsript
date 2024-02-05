import React from "react";
import "./Landing.scss";
import product from "../../assets/Product.png";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as HalfStar } from "../../assets/halfstar.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { motion } from "framer-motion";
import mic1 from '../../assets/mic1.png'
import mic2 from '../../assets/mic2.png'
function Landing() {
  return (
    <div className="container">
      <img src={product} className="product" />
      <div className="light-side">
        <div className="content">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            MAXTER 7.1 SURROUND
          </motion.h1>
          <motion.div
            className="box"
            initial={{ width: "20px" }}
            animate={{ width: "406px" }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          ></motion.div>
          <div className="stars">
            {Array.from({ length: 5 }, (v, i) => i).map((item, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.2, delay: index }}
                onClick={() => console.log(item)}
                style={{alignSelf:"center"}}
              >
                {index !== 4 ? (
                  <Star style={{ alignSelf: "center" }} />
                ) : (
                  <HalfStar style={{ alignSelf: "center" }} />
                )}{" "}
              </motion.div>
            ))}

            <p>(11.893 Bewertungen)</p>
          </div>
          <p>
            Bester 7.1-Surround-Sound und tiefe Bässe ganz ohne große Anlage -
            das MAXTER 7.1 Surround USB Gaming Headset für den PC macht es
            möglich.
          </p>
          <p className="price">79,99€</p>
          <p className="slash">129,99€</p>
          <div className="cart-section">
            <div className="cart-box">
              <Cart />
              <div>jetzt kaufen</div>
            </div>
            <div className="add">
              <button>1</button>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-side">
        <div className="mics">
{
  [1,2,3].map((elem , index)=>(
  <motion.div     initial={{ x:500 }}
  animate={{ x:0}}
  transition={{ ease: "easeOut", duration: 0.2, delay: index}}>
      <img src={mic1}/>
  </motion.div>
  ))
}
        </div>
      </div>
    </div>
  );
}

export default Landing;
