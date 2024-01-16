import React from "react";
import about_banner from "../images/about-banner.jpg";
import about_us_img from "../images/about-us.jpg";


export default function About(props) {
    return (
        <>
            <title>SalaryKart - {props.title}</title>
            <div className="innrer-banner">
                <img src={about_banner} style={{ width: "100%" }} alt="banner" />
            </div>

            <div className="about-are">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <h3>About Us</h3>
                            <p>SalaryKart is a Fintech lending platform to fulfil the financial need of Salaried individuals. We partner
                                with RBI registered NBFCs to provide instant personal loans through innovative technology and artificial
                                intelligence to streamline the loan application.</p>

                            <p>With SalaryKart, you can get loans from ₹5,000 to ₹1,00,000 within 30 minutes without any hassle.</p>

                        </div>
                        <div className="col-md-6">
                            <img src={about_us_img} className="img-responsive thumbnail" alt="about-us" />
                        </div>


                    </div>

                </div>

            </div>
        </>
    );
}