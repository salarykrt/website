import React from "react";
import term_banner from "../images/terms.jpg";


export default function TermsAndConditions(props) {
    return (
        <>
            <title>SalaryKart - {props.title}</title>
            <div class="innrer-banner">
                <img src={term_banner} style={{ width: "100%" }} alt="terms" />
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