import React from 'react'
import TelephoneImg from "../images/telephone.png"
import { styled } from '@mui/material'
import MailImg from "../images/mailimg.png";
import MapImg from "../images/mapimg.png";
import { motion } from "framer-motion";

const DivComp = styled('div')({
  justifyContent: "center",
  borderRadius: 10,
  alignItems: "center",
  display: "flex",
  border: "1px solid #444",
  flexDirection: "column",
  background: "#333",
  height: 150,
  textAlign: "center",
  margin: 100,
  width: "20%",
  "&:hover": {
    cursor: "pointer",
    position: "relative",
    top: -4,
    transition: "4s"
  }
})

const Contact = () => {
  return (
    <motion.div
      style={{ height: "100%", marginLeft: 180, color: "white" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ height: "100vh", background: "#222222", paddingTop: 5 }}>
        <h1 style={{ color: "#f5f5f5", borderBottom: "3px solid #666" }}>Contact</h1>
        <div style={{ display: "flex" }}>
          <DivComp>
            <img src={TelephoneImg} alt="" style={{ height: 80, width: 80 }} />
            <p style={{ fontFamily: "Poppins, Helvetica, sans-serif", fontWeight: 600, fontSize: 16, color: "#f5f5f5" }}>+91 8081435509</p>
          </DivComp>

          <DivComp>
            <img src={MailImg} alt="" style={{ borderRadius: "50%", background: "transparent", height: 80, width: 80 }} />
            <p style={{ fontFamily: "Poppins, Helvetica, sans-serif", fontWeight: 600, fontSize: 16, color: "#f5f5f5" }}>omkarawasthi67@gmail.com</p>
          </DivComp>

          <DivComp>
            <img src={MapImg} alt="" style={{ borderRadius: "50%", background: "transparent", height: 80, width: 80 }} />
            <p style={{ fontFamily: "Poppins, Helvetica, sans-serif", fontWeight: 600, fontSize: 16, color: "#f5f5f5" }}>Kanpur, India</p>
          </DivComp>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact;
