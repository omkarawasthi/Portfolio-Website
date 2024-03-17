import React, { useContext } from 'react';
import Image from '../images/29116.jpg';
import Laptopicon from "../images/laptop.png";
import MongodbIcon from "../images/mongodbicon.png";
import ReactIcon from "../images/reacticon.png";
import SeoIcon from "../images/seoicon.png";
import ShoppingIcon from "../images/shoppingicon.png";
import UxIcon from "../images/uxicon.png"
import { DataContext } from "../context/DataProvider";
import {motion} from "framer-motion";




const Home = () => {
    const { setActiveLink } = useContext(DataContext);
    setActiveLink('About');

    return (
        <motion.div style={{ background: "black" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div style={{ display: "flex", background: "black", flexDirection: "column" }}>
                <div style={{ marginLeft: 180, display: "flex", background: "#333" }}>
                    <div>
                        <img src={Image} style={{ height: 690, width: 670 }} />
                    </div>
                    <div style={{ padding: "70px 100px 70px 105px", display: "flex", flexDirection: "column" }}>
                        <h1 style={{ marginTop: 20, color: "white", fontWeight: "bold", fontSize: 48 }}>Omkar Awasthi</h1>

                        <p style={{ color: "#d5d5d5", fontSize: "22px", paddingRight:50, margin: "0 0 15px" }}>I'm very familiar with using frameworks, my websites are primarily hand-coded using <strong>HTML5, CSS3, Bootstrap, JavaScript, React, and MongoDB.</strong></p>

                        <p style={{ color: "#d5d5d5", fontSize: "22px", paddingRight:50,margin: "0 0 15px" }}>With a strong emphasis on <strong>"Progressive Enhancement"</strong>, I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.</p>

                        <p style={{ color: "#d5d5d5", fontSize: "22px", paddingRight:50,margin: "0 0 15px" }}>In a quest for always keeping myself updated, I read books and attend <strong>conferences & meetups.</strong></p>
                    </div>
                </div>

                <div style={{ background: "black" }}>
                    <div style={{ background: "#222", marginLeft: 180 }}>
                        <h1 style={{ paddingBottom: "3px", margin: "40px 50px 50px 77px", fontSize: 24, fontWeight: 600, color: "#f5f5f5", display: "inline-block", borderBottom: "3px solid #0099cc" }}>What I Know</h1>

                        <div style={{ display: "flex", gap: 15 }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <img src={Laptopicon} alt="" style={{ marginTop: -26, marginLeft: 80, height: 50, width: 50 }} />
                                    </div>
                                    <div style={{ marginTop: -42, marginLeft: 14 }}>
                                        <h4 style={{ fontSize: 20, color: "#f5f5f5" }}>Web Design</h4>
                                        <p style={{ fontSize: "1.1rem", color: "#cfd5cf", marginTop: -10, paddingRight: "5%" }}>Web Design with your customer in mind. Modern web design is more involved than creating an attractive website. Consideration of user experience.</p>
                                    </div>
                                </div>

                                <div style={{ marginTop: 20, display: "flex" }}>
                                    <div>
                                        <img src={ShoppingIcon} alt="" style={{ marginTop: -26, marginLeft: 80, height: 50, width: 50 }} />
                                    </div>
                                    <div style={{ marginTop: -42, marginLeft: 14 }}>
                                        <h4 style={{ fontSize: 20, color: "#f5f5f5" }}>Ecommerce Development</h4>
                                        <p style={{ fontSize: "1.1rem", color: "#cfd5cf", marginTop: -10, paddingRight: "5%" }}>Add more value to your business and take it to the next level of success by delivering it with our top-notch e-commerce website development services.</p>
                                    </div>
                                </div>

                                <div style={{ marginTop: 37, display: "flex" }}>
                                    <div>
                                        <img src={SeoIcon} alt="" style={{ marginTop: -20, marginLeft: 80, height: 40, width: 55 }} />
                                    </div>
                                    <div style={{ marginTop: -42, marginLeft: 14 }}>
                                        <h4 style={{ fontSize: 20, color: "#f5f5f5" }}>Search Engine Optimization</h4>
                                        <p style={{ fontSize: "1.1rem", color: "#cfd5cf", paddingRight: "0.5%" }}>Search Engine Optimization is the practice of optimizing content to be discovered through a search engine’s organic search results.Have experience to rank site with various tools.</p>
                                    </div>
                                </div>
                            </div>





                            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <img src={UxIcon} alt="" style={{ marginTop: -26, marginLeft: 80, height: 50, width: 50 }} />
                                    </div>
                                    <div style={{ marginTop: -42, marginLeft: 14 }}>
                                        <h4 style={{ fontSize: 20, color: "#f5f5f5" }}>UI/UX Design</h4>
                                        <p style={{ fontSize: "1.1rem", color: "#cfd5cf", marginTop: -10, paddingRight: "25%" }}>Attraction need Attractive Design and Attractive Design are made of creative art.So I pledge to give your website a Design which holds your users attentions.</p>
                                    </div>
                                </div>

                                <div style={{ marginTop: 20, display: "flex" }}>
                                    <div>
                                        <img src={ReactIcon} alt="" style={{ borderRadius: 10, marginTop: -26, marginLeft: 80, height: 50, width: 50 }} />
                                    </div>
                                    <div style={{ marginTop: -42, marginLeft: 14 }}>
                                        <h4 style={{ fontSize: 20, color: "#f5f5f5" }}>React</h4>
                                        <p style={{ fontSize: "1.1rem", color: "#cfd5cf", marginTop: -10, paddingRight: "25%" }}>Proficient in React, I specialize in building dynamic and responsive user interfaces. Leveraging React's component-based architecture, I craft seamless experiences that enhance usability and engagement, ensuring efficient development and scalability.</p>
                                    </div>
                                </div>

                                <div style={{ marginTop: 20, display: "flex" }}>
                                    <div>
                                        <img src={MongodbIcon} alt="" style={{ borderRadius: 10, marginTop: -26, marginLeft: 80, height: 50, width: 50 }} />
                                    </div>
                                    <div style={{ marginTop: -42, marginLeft: 14 }}>
                                        <h4 style={{ fontSize: 20, color: "#f5f5f5" }}>MongoDB</h4>
                                        <p style={{ marginTop: -4, fontSize: "1.1rem", color: "#cfd5cf", paddingRight: "25%" }}>Flexible, NoSQL database stores data in JSON-like documents, scaling effortlessly for modern apps. Powerful querying and flexible schema let you handle diverse data with ease. Master it to unlock agility and innovation in your projects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Home;
