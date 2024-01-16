import React from "react";
import pagenotfound_banner from "../images/pagenotfound_banner.png";


export default function PageNotFound(props) {
    return (
        <>
            <title>SalaryKart - {props.title}</title>
            <img src={pagenotfound_banner} style={{ width: "60%" }} align="center" alt="privacy" />
        </>
    );
}