import React, { useContext } from 'react'
import Image from '../../images/29116.jpg'
import linkedinIcon from '../../images/linkedicon.png';
import GithubIcon from '../../images/githubicon.png';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '../../images/searchicon.png';
import { DataContext } from '../../context/DataProvider';

const SearchIconWrapper = styled('span')({
    color: "blue",
    padding: "5px",
    display: "flex",
    marginTop: -4,
    marginLeft: "-5px",
    cursor: "pointer"
})


const Input = styled('input')({
    paddingLeft: "10px",
    width: "75%",
    color: "white",
    background: "#222",
    fontSize: "1em",
    fontFamily: "Poppins, Helvetica, sans-serif",
    fontWeight: 400,
    marginLeft: 15,
    borderRadius: "3px",
    height: "30px",
    border: "1px solid #e5e5e5",
    "&::after": {
        borderColor: '#222'
    }
})

const List = styled('li')({
    color: "#ececec",
    listStyle: "none",
    fontSize: 14,
    width: "100%",
    height: "50px",
    borderBottom: "1px solid #333",
    display: "flex",
    justifyContent: "center",
    gap: 15,
    alignItems: "center",
    fontWeight: 400,
    fontFamily: "Poppins, Helvetica, sans-serif",
    "&: hover": {
        background: "#333333",
        width:"100%",
        borderRight: '3px solid #0099cc',
        cursor: "pointer",
    }

})


const NavBar = () => {
    const { activeLink,setActiveLink } = useContext(DataContext)


    const handleLinkClick = (link) => {
        if (link !== activeLink) {
            setActiveLink(link);
        }
    };

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", height: "100%", width: 160, background: "#222", position: "fixed" }}>

                <div style={{ textAlign: "center", marginTop: 35 }}>
                    <img src={Image} style={{ height: 80, width: 80, borderRadius: "50px" }} />
                    <div style={{ marginTop: -20 }}>
                        <p style={{ fontWeight: "bold", color: "#eeeeee", fontSize: 24 }}>Omkar</p>
                        <p style={{ fontWeight: "400", color: "#eeeeee", fontSize: 14, marginTop: 5 }}>Web Developer</p>
                    </div>
                </div>

                <div style={{ textAlign: "center",marginLeft:-17, background: "#222222 ", marginTop: 40 }}>
                    <ul style={{ flexDirection: "column", marginTop: -40, padding: "25px 0 40px", height: 190 }}>
                        <div style={{ borderBottom: "1px solid #333" }}></div>
                        
                        <Link to="/" style={{ textDecoration: "none" }}><List className={activeLink === 'About' ? 'active' : ''} style={{backgroundColor: activeLink === 'About'? '#333333' : 'inherit', borderRight: activeLink === 'About' ? '3px solid #0099cc':"none"}} onClick={() => handleLinkClick('About')}>About Us</List></Link>

                        
                        <Link to="/resume" style={{ textDecoration: "none" }}><List className={activeLink === 'Resume' ? 'active' : ''} style={{backgroundColor: activeLink === 'Resume'? '#333333' : 'inherit', borderRight: activeLink === 'Resume' ? '3px solid #0099cc':"none"}} onClick={() => handleLinkClick('Resume')}>Resume</List></Link>
                        
                        
                        <Link to="/portfolio" style={{ textDecoration: "none" }}><List className={activeLink === 'Portfolio' ? 'active' : ''} style={{backgroundColor: activeLink === 'Portfolio'? '#333333' : 'inherit', borderRight: activeLink === 'Portfolio' ? '3px solid #0099cc':"none"}} onClick={() => handleLinkClick('Portfolio')}>Portfolio</List></Link>                        
                        
                        <Link to="/contact" style={{ textDecoration: "none" }}><List className={activeLink === 'Contact' ? 'active' : ''} style={{backgroundColor: activeLink === 'Contact'? '#333333' : 'inherit', borderRight: activeLink === 'Contact' ? '3px solid #0099cc':"none"}} onClick={() => handleLinkClick('Contact')}>Contact</List></Link>
                    </ul>
                </div>
                <div style={{ marginTop: 30, display: "flex", alignItems: "center" }}>
                    <Input type="text" className="form-control" placeholder="Search" />
                    <SearchIconWrapper>
                        <img src={SearchIcon} alt="" style={{ marginTop: 4, marginLeft: -25, height: 20, width: 20, background: "#222" }} />
                    </SearchIconWrapper>
                </div>
                <div style={{ display: "flex", marginLeft: 35, marginTop: 25, gap: 10 }}>
                    <a href="https://www.linkedin.com/in/omkar-awasthi-0a7456205/" target='_blank'> <img src={linkedinIcon} alt="" style={{ height: 35, width: 35, background: "white", borderRadius: 5 }} /></a>
                    <a href="https://github.com/omkarawasthi" target='_blank'><img src={GithubIcon} alt="" style={{ marginTop: -2, height: 40, width: 45, background: "taransparent" }} /></a>
                </div>

                <div style={{ marginTop: 50, textAlign: "center", fontWeight:"400", fontSize: 14, color: "#d5d5d5", padding: "5px 26px 20px" }}>
                    Copyright © 2024
                    Omkar.
                    All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default NavBar;
