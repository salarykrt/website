import React from "react";
import contact_banner from "../images/contact-us-banner.jpg";
import email_icon_img from "../images/email_icon.png";
import address_icon_img from "../images/address_icon.png";
import phone_icon_img from "../images/pone_icon.png";





export default function Contact(props) {
    const handleInputChange = (event) => {
        // Convert the input value to uppercase
        event.target.value = event.target.value.toUpperCase();
    };

    return (
        <>
            <title>SalaryKart - {props.title}</title>
            <div className="innrer-banner" style={{ padding: "0px" }}>
                <img src={contact_banner} style={{ width: "100%" }} alt="contact-us" />
            </div>

            <div className="contact-line">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="block-title">
                                <p style={{ marginBottom: "0px" }}>Get in touch with us</p>
                                <h2>
                                    Enquire Now</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "40px" }}>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-2"><img src={phone_icon_img} width="58" height="59" /></div>
                                <div className="col-md-10">
                                    <p className="con-tag"><strong>Call</strong></p>
                                    <p>---</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2"><img src={email_icon_img} width="58" height="59" /></div>
                                <div className="col-md-10">
                                    <p className="con-tag"><strong>Email</strong></p>
                                    <p><a href="mailto:info@salarykart.com" style={{ marginBottom: "0px", color: "#0063a7 !important" }}><strong>
                                        info@salarykart.com</strong></a></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2"><img src={address_icon_img} width="58" height="59" alt="Address Icon" /></div>
                                <div className="col-md-10">
                                    <p className="con-tag"><strong>Office visit</strong></p>
                                    <p>---</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form id="ContactUSEnquiry" action="#" method="post" role="form" autocomplete="off">
                                <input type="hidden" name="gpsLocation" id="gpsLocation" value="28.7080448, 77.2276224" />
                                <div className="row">
                                    <div className="form-group col-md-6 col-sm-6">
                                        <input type="text" name="name" className="form-control  input-kart" id="name" placeholder="ENTER YOUR NAME *" data-rule="name" data-msg="" autocomplete="off" onChange="NameValidate(this)" oninput="this.value = this.value.toUpperCase()" required="" />
                                        <div id="errorname" className="error-me" style={{ marginTop: "-4px !important" }}></div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="number" name="phone" className="form-control input-kart" id="phone" placeholder="ENTER YOUR MOBILE" data-rule="MOBILE" data-msg="" style={{ borderTop: "0px", borderLeft: "0px", borderRight: "0px" }} />
                                        <div id="errormobile" className="error-me" style={{ marginTop: "-4px !important" }}></div>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="email" name="email" className="form-control  input-kart" id="subject" placeholder="ENTER YOUR EMAIL*" data-rule="email" data-msg="" required="" />
                                    </div>
                                    <div className="form-group col-md-12" style={{ float: "left", width: "100%" }}>
                                        <textarea className="form-control input-kart" name="message" rows="3" placeholder="Message*" style={{ height: "100px !important" }} onInput={handleInputChange}></textarea>
                                    </div>
                                    <div className="col-md-12" style={{ float: "left", marginBottom: "20px" }}>
                                        <input type="submit" id="applybutton" className="btn btn-default submit-buttons" value="Submit" style={{ background: "#0d7ec1" }} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.657322341237!2d77.19779971504843!3d28.51995599591804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1fc9faa289b%3A0xf66e3e2b7bb2f5f8!2sWestend%20Marg%20%26%20Lane%20Number%202%2C%20Butterfly%20Park%2C%20Saiyad%20Ul%20Ajaib%20Extension%2C%20Sainik%20Farm%2C%20New%20Delhi%2C%20Delhi%20110030!5e0!3m2!1sen!2sin!4v1646418759215!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
        </>
    );
}