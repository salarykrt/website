import React from "react";
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from "../images/salary_kart_logo.png"
import '../styles/animate.css';
import '../styles/bootsnav.css';
import '../styles/my-css.css';
import '../styles/style.css';



export default function Header() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (

        <>

            <div className="top-lines">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 text-left"><a href="#"><FontAwesomeIcon icon={faPhone} /> +91-0000-0000-00</a> | <a href="mailto:info@salarykart.com"><FontAwesomeIcon icon={faEnvelope} /> info@salarykart.com</a></div>
                        <div className="col-md-6 text-right disp">
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a> |
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a> |
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a> |
                            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-menu" id="myHeader">
                <nav className="navbar navbar-default bootsnav sticky">
                    <div className="container">


                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            </button>
                            <Link className="navbar-brand" to="/"><img src={logo} className="logo" alt="salary-cart" /></Link>
                        </div>

                        <div className="navbar" id="navbar-menu" >
                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp" style={{ display: "contents", flexDirection: "row", justifyContent: "flex-end" }}>
                                <li><NavLink onClick={scrollToTop} to="/">HOME</NavLink></li>
                                <li><NavLink onClick={scrollToTop} to="/about-us">ABOUT US</NavLink></li>
                                <li><NavLink onClick={scrollToTop} to="/contact-us">CONTACT US</NavLink></li>
                                <li><NavLink onClick={scrollToTop} to="/repay-loan">REPAY LOAN</NavLink></li>
                            </ul>
                        </div>
                        <div className="attr-nav">
                            <ul>
                                <li><Link onClick={scrollToTop} to="/apply-now" className="apply-now"> Apply Now</Link></li>
                            </ul>
                        </div>

                    </div>
                </nav >
            </div >
        </>
    );
}