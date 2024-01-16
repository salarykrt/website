import React from "react";
import privacy_banner from "../images/privacy-banner.jpg";


export default function PrivacyPolicy(props) {
    return (
        <>
            <title>SalaryKart - {props.title}</title>
            <div class="privacy-banner">
                <img src={privacy_banner} style={{ width: "100%" }} alt="privacy" />
            </div>

            <div class="contact-line">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <p> ...
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}