import React from "react";
import repay_loan from "../images/repay-loan.jpg";


export default function RepayLoan(props) {
    return (
        <>
            <title>SalaryKart - {props.title}</title>
            <div className="innrer-banner" style={{ padding: "0px" }}>
                <img src={repay_loan} style={{ width: "100%" }} alt="repay-loan" />
            </div>

            <div className="contact-line">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 red-clor">

                            <p><input type="text" name="pancard" className="form-control input-kart" value="" id="pancard" placeholder="Enter Your PAN*" data-rule="NAME" data-msg="" required="" onChange="NameValidate(this)" autocomplete="off" /></p>
                            <p><button type="submit" name="submit" className="btn btn-default apply-now-button" value="search">Get OTP</button></p>
                        </div>
                        <div className="col-md-6">
                            <h2 className="welcome-left" style={{ fontSize: "16px", lineHeight: "25px", marginBottom: "10px !important" }}><strong>Please make the payment of you loan through the following bank details:</strong></h2>
                            <table className="table table-bordered table-hover table-striped" style={{ border: "solid 2px #f77f00 !important", marginBottom: "0px" }}>
                                <tbody>
                                    <tr>
                                        <th colspan="2" style={{ textAlign: "center", background: "#f77f00" }}></th>
                                    </tr>
                                    <tr>
                                        <th>Bank Name</th>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <th>Company Name</th>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <th>Account Number</th>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <th>IFSC Code</th>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <th>Branch Name</th>
                                        <td>New Delhi</td>
                                    </tr>
                                    <tr>
                                        <th>Account Type</th>
                                        <td>Current Account</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}