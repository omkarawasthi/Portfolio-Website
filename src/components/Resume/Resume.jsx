import React, { useContext } from 'react';
import './Resume.css';
import ResumeFile from "../../files/Omkar_Resume.pdf";
import { DataContext } from '../../context/DataProvider';
import { motion } from "framer-motion";


const Resume = () => {
  const { setActiveLink } = useContext(DataContext);
  setActiveLink('Resume');

  return (
    <motion.div style={{ background: "black", width: "100%", height: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="resume">
        <div>
          <h1 style={{ borderBottom: "3px solid #666" }}>Resume</h1>
        </div>
        <div className="section education">
          <h2 style={{ borderBottom: "3px solid #666" }}>Education</h2>
          <div style={{ display: "flex", gap: 880 }}>
            <p>
              Pranveer Singh Institute Of Technology
            </p>
            <p>
              2020 - 2024
            </p>
          </div>
          <p style={{ marginTop: -4 }}>
            Computer Science and Engineering |  CGPA: 7.9/10
          </p>
          <div style={{ marginTop: 15, display: "flex", gap: 920 }}>
            <p>
              Kendriya Vidyalaya O.E.F Kanpur
            </p>
            <p>
              2019 - 2020
            </p>
          </div>
          <p style={{ marginTop: -6 }}>
            CBSE (Class - XII) | Percentage: 77%
          </p>
          <div style={{ marginTop: 15, display: "flex", gap: 920 }}>
            <p>
              Kendriya Vidyalaya O.E.F Kanpur
            </p>
            <p>
              2017 - 2018
            </p>
          </div>
          <p style={{ marginTop: -6 }}>
            CBSE (Class - X) | Percentage: 76.2%
          </p>

        </div>
        <div className="section skills">
          <h2 style={{ borderBottom: "3px solid #666" }}>Skills</h2>
          <p>
            <strong style={{ color: "#f5f5f5" }}>Frontend&nbsp;&nbsp;</strong>: HTML, CSS, Bootstrap CSS, JavaScript, React <br />
            <strong style={{ color: "#f5f5f5" }}>Backend&nbsp;&nbsp;</strong>: Node.js, Express.js <br />
            <strong style={{ color: "#f5f5f5" }}>Programming Language&nbsp;&nbsp;</strong>: C, C++, JavaScript <br />
            <strong style={{ color: "#f5f5f5" }}>Databases&nbsp;&nbsp;</strong>: MySQL, MongoDB <br />
            <strong style={{ color: "#f5f5f5" }}>Core Subjects&nbsp;&nbsp;</strong>: DSA, DBMS, OOPS, Operating System
          </p>
        </div>
        <div className="section coding-profile">
          <h2 style={{ borderBottom: "3px solid #666" }}>Coding Profile</h2>
          <div style={{ display: "flex", marginLeft: 15, gap: 50 }}>
            <p>
              <strong style={{ color: "#f5f5f5" }}>LeetCode&nbsp;:</strong> <a href="https://leetcode.com/omkarawasthi/" style={{ color: "#f5f5f5", textDecoration: "none" }}>omkarawasthi&nbsp;(link)</a> <br />
            </p>
            <p>
              <strong style={{ color: "#f5f5f5" }}>CodeChef&nbsp;:</strong> <a href="https://www.codechef.com/users/omkarawasthi67" style={{ color: "#f5f5f5", textDecoration: "none" }}>omkarawasthi&nbsp;(link)</a> <br />
            </p>
            <p>
              <strong style={{ color: "#f5f5f5" }}>Geek for Geek&nbsp;: </strong> <a href="https://auth.geeksforgeeks.org/user/omkarawasthi67" style={{ color: "#f5f5f5", textDecoration: "none" }}> omkarawasthi67&nbsp;(link)</a>
            </p>
          </div>
        </div>
        <div className="section projects">
          <h2 style={{ borderBottom: "3px solid #666" }}>Projects</h2>
          <p>
            <strong style={{ marginLeft: 25, color: "#f5f5f5" }}>Visualization Dashboard - The objective is to create a data visualization dashboard having different charts</strong> <br />
            <a href="https://datavisualisaation.netlify.app/" style={{ marginLeft: 920, color: "#f5f5f5", textDecoration: "none" }}><strong style={{ color: "#f5f5f5" }}>Link</strong>&nbsp;:&nbsp;https://datavisualisaation.netlify.app/</a>
          </p>
          <ul style={{ marginTop: -5 }}>
            <li>Engineered a Data Visualization Dashboard with the MERN stack, processing and rendering data from a JSON dataset.</li>
            <li>Leveraged MongoDB to store and manage a vast dataset, achieving a 30% reduction in query response time.</li>
            <li>Developed a React based user interface, enhancing user engagement and leading to a 20% increase in user interface.</li>
            <li>Significantly improved data analysis speed by 40% through efficient Node.js backend development.</li>
            <li>Played a key role in optimizing system performance, leading to a 25% reduction in page load times for the dashboard.</li>
          </ul>
          <p style={{ marginTop: 45 }}>
            <strong style={{ marginLeft: 25, color: "#f5f5f5" }}>E-Commerce Website - Front End and Back End Development</strong> <br />
            <a href="https://flipkartmyclone.netlify.app/" style={{ marginLeft: 920, color: "#f5f5f5", textDecoration: "none" }}><strong style={{ color: "#f5f5f5" }}>Link</strong>&nbsp;:&nbsp;https://flipkartmyclone.netlify.app/</a>
          </p>
          <ul>
            <li>Build MERN e-commerce platform for seamless shopping, powered by MongoDB, Express, React, and Node.js.</li>
            <li>MERN scales for 100,000+ users concurrently, MongoDB offers flexible storage for dynamic growth.</li>
            <li>React optimizes UI, WebSockets enable live chat, aiming for more than 2s load time.</li>
            <li>HTTPS, Stripe, and JWT ensure secure transactions; 99.9% uptime, robust backup strategies.</li>
          </ul>
        </div>
        <div className="section achievements">
          <h2 style={{ borderBottom: "3px solid #666" }}>Certificate and Extracurricular Achievements</h2>
          <ul style={{ marginTop: 15, display: "flex", flexDirection: "column", gap: 15 }}>
            <li>Rank: 25/200 in Elite Batch Training (Coder’s Club)</li>
            <li>Rank: 40/900 in Hackathon (2nd Year)</li>
            <li>Solved 800+ Questions on various coding platforms.</li>
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <a href={ResumeFile} download="Resume" target="_blank" rel="noreferrer">
            <button style={{ fontSize: 14, textAlign: "center", cursor: "pointer", height: 50, width: 150, fontWeight: "600", borderRadius: 5, background: "rgb(72, 164, 220)" }}>Download Resume</button>
          </a>
        </div>
      </div>


    </motion.div>
  )
}

export default Resume;
