import React, { useContext } from 'react'
import FlipkartImg from "../../images/flipkart.png";
import EcommerceImg from "../../images/ecommerce.png";
import TextUtilsImg from "../../images/textutils.png";
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { motion } from "framer-motion";




const Portfolio = () => {
  const { setActiveLink } = useContext(DataContext);
  setActiveLink('Portfolio');

  return (
    <motion.div style={{ height: "100%", marginLeft: 180, width: "88%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ height: "100vh", background: "#333", paddingTop: 5 }}>
        <h1 style={{ borderBottom: "3px solid #666" }}>Portfolio</h1>
        <p style={{ marginLeft: "90%", marginTop: -15 }}>My Work</p>

        <div style={{ marginLeft: 30, display: "flex", gap: 38 }}>
          <div>
            <Link to="https://flipkartmyclone.netlify.app" target='_blank'>
              <img src={FlipkartImg} alt="" style={{ height: 300, width: 400 }} />
            </Link>
          </div>

          <div>
            <Link to="https://ecommerce1223.netlify.app/" target='_blank'>
              <img src={EcommerceImg} alt="" style={{ height: 300, width: 400 }} />
            </Link>
          </div>

          <div>
            <Link to="https://textutils434.netlify.app/" target='_blank'>
              <img src={TextUtilsImg} alt="" style={{ height: 300, width: 400 }} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio
