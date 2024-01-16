import React from 'react';
import { NavLink } from 'react-router-dom';
import { faMapMarker, faEnvelope, faPhone, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../images/footer-logo.png"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="footer-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12 footer-marg"><a href="#"><img src={logo} style={{ width: "200px" }} alt="logo" /></a></div>
                                <div className="col-md-12">
                                    <p>SalaryKart is a Fintech lending platform to fulfil the financial need of Salaried individuals. We
                                        partner with RBI registered NBFCs to provide instant personal loans through innovative technology and
                                        artificial intelligence to streamline the loan application.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-12"><NavLink onClick={scrollToTop} to="/" className="footer-link"><FontAwesomeIcon icon={faChevronRight} />&nbsp;Home</NavLink></div>
                                        <div className="col-md-12"><NavLink onClick={scrollToTop} to="/about-us" className="footer-link"><FontAwesomeIcon icon={faChevronRight} />&nbsp;About Us </NavLink></div>
                                        <div className="col-md-12"><NavLink onClick={scrollToTop} to="/contact-us" className="footer-link"><FontAwesomeIcon icon={faChevronRight} />&nbsp;Contact Us</NavLink></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-12"><NavLink onClick={scrollToTop} to="/repay-loan" className="footer-link"><FontAwesomeIcon icon={faChevronRight} />&nbsp;Repay Loan</NavLink></div>
                                        <div className="col-md-12"><NavLink onClick={scrollToTop} to="/privacy-policy" className="footer-link"><FontAwesomeIcon icon={faChevronRight} />&nbsp;Privacy Policy</NavLink></div>
                                        <div className="col-md-12"><NavLink onClick={scrollToTop} to="/terms-and-conditions" className="footer-link"><FontAwesomeIcon icon={faChevronRight} />&nbsp;Terms and Conditions</NavLink></div>
                                    </div>
                                </div>
                                <div className="col-md-4 contacts">
                                    <div className="row">
                                        <div className="col-md-12" style={{ marginBottom: "15px;" }}> <strong>Contact Us</strong></div>
                                        <div className="col-md-12"><FontAwesomeIcon icon={faMapMarker} />&nbsp;New Delhi</div>
                                        <div className="col-md-12"><a href="#" className="footer-link"><FontAwesomeIcon icon={faPhone} />&nbsp;+91-00000-000</a></div>
                                        <div className="col-md-12"><a href="mailto:info@salarykart.com" className="footer-link"><FontAwesomeIcon icon={faEnvelope} />&nbsp;info@salarykart.com</a></div>
                                        <div className="col-md-12">
                                            <a href="#" className="fa-links"><FontAwesomeIcon icon={faFacebook} /></a>
                                            <a href="#" className="fa-links"><FontAwesomeIcon icon={faTwitter} /></a>
                                            <a href="#" className="fa-links"><FontAwesomeIcon icon={faLinkedin} /></a>
                                            <a href="#" className="fa-links"><FontAwesomeIcon icon={faInstagram} /></a>
                                            <a href="#" className="fa-links"><FontAwesomeIcon icon={faYoutube} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <hr style={{ border: "solid 1px #434343 !important;" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="#" className="footer-links" style={{ paddingLeft: "0px;" }} >Short Term Personal Loan In Delhi NCR</a>|<a href="#" className="footer-links">Personal Loan </a>|<a href="#" className="footer-links">Online personal</a>
                            loan|<a href="#" className="footer-links">Quick personal loan</a> |<a href="#" className="footer-links">Short
                                Term Personal Loan In Ahmedabad</a>|<a href="#" className="footer-links">Short Term Personal Loan In
                                    Bangalore</a>|<a href="#" className="footer-links">Short Term Personal Loan In Chennai</a>|<a href="#" className="footer-links" cl>Short Term Personal Loan In Hyderabad</a>|<a href="#" className="footer-links">Short
                                        Term Personal Loan In Mumbai</a>|<a href="#" className="footer-links">Short Term Personal Loan In Pune</a> |
                            <a href="#" className="footer-links">Immediate Short Term Personal Loan</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrihgt-footer">© 2023 SalaryKart.</div>
        </>
    );
}