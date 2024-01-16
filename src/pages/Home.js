import React from "react";
import background_img from "../images/green-poly-background.jpg";
import home_banner from "../images/home_banner.jpg";
import Easy_to_Apply_img from "../images/Easy-to-Apply.png";
import Instant_Approval_img from "../images/Instant-Approval.png";
import Quick_Disbursal_img from "../images/Quick-Disbursal.png";
import arrow_icon_img from "../images/arrow_icon.png";
import application_1_img from "../images/application-1.png";
import manager2_img from "../images/manager-2.png";
import receive3_img from "../images/Receive-3.png";


export default function Home(props) {
    return (
        <>
            <title>SalaryKart - {props.title}</title>
            <div className="top-banner" style={{ padding: "0px" }}>
                <img src={home_banner} style={{ width: "100%" }} alt="banner" />
            </div>

            <div className="where-are">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="thumbnail">
                                <img src={Easy_to_Apply_img} width="90" height="90" />
                                <h3>Easy to Apply</h3>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="thumbnail">
                                <img src={Instant_Approval_img} width="90" height="90" />
                                <h3>Instant Approval</h3>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail">
                                <img src={Quick_Disbursal_img} width="90" height="90" />
                                <h3>Quick Disbursal</h3>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            <div className="Get-money">
                <div className="container">
                    <div className="row" style={{ marginBottom: "50px" }}>
                        <div className="col-md-12">
                            <h3>Get money right now!</h3>
                        </div>
                        <div className="col-md-12">
                            <h4>FOLLOW THIS EASY STEPS TO GET MONEY WITHIN 15 MINUTES</h4>
                        </div>

                    </div>

                    <div className="col-md-1">&nbsp;</div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-4"><img src={application_1_img} className="img-responsive" /></div>
                            <div className="col-md-8">
                                <h5>Fill in an application form
                                    on our website</h5>

                                <p><a href="apply-now.php" className="buttona">GO TO THE FORM</a></p>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-1">&nbsp;</div>



                </div>


            </div>


            <div className="Get-manager">
                <div className="container">


                    <div className="col-md-1">&nbsp;</div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-8">
                                <h5>Our team will contact you to <br />
                                    complete the loan process</h5>

                                <p><a href="#documents" className="buttonb">Documentation</a></p>

                            </div>

                            <div className="col-md-4"><img src={manager2_img} className="img-responsive" /></div>

                        </div>

                    </div>
                    <div className="col-md-1">&nbsp;</div>



                </div>


            </div>

            <div className="Get-money" style={{ background: `url(${background_img})`, backgroundPosition: 'center' }}>
                <div className="container">


                    <div className="col-md-1">&nbsp;</div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-4"><img src={receive3_img} className="img-responsive" /></div>
                            <div className="col-md-8">
                                <h5>Receive the funds in your <br />
                                    bank account right away !!</h5>
                                <p><a href="apply-now.php" className="buttonb">Apply Now</a></p>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-1">&nbsp;</div>



                </div>


            </div>




            <div className="PayDay" id="documents">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <h3>Instant process with minimum documents</h3>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-3">
                            <div className="row">

                                <div className="col-md-12">
                                    <div className="thumbnail">
                                        <img src={arrow_icon_img} />
                                        <h2>PAN Card</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="thumbnail">
                                        <img src={arrow_icon_img} />
                                        <h2>Residence proof</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="thumbnail">
                                        <img src={arrow_icon_img} />
                                        <h2>3 months Bank statements</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="thumbnail">
                                        <img src={arrow_icon_img} />
                                        <h2>YOU HAVE A VALID ADDRESS</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="decision">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <h3>The right decision,</h3>
                        </div>
                        <div className="col-md-12">
                            <h4>at the right time.</h4>
                        </div>


                    </div>

                </div>


            </div>
        </>
    );
}