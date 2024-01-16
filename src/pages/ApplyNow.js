import { React, useState, useEffect } from "react";
import { validateEmail, validatePanNumber, nameValidate, MonthlyIncome, loanAmount, validateMobileNumber } from "../utils/validatiors";
import { submitApplication } from "../api/submitForm";
import applynow_banner from "../images/apply-now.jpg";



export default function ApplyNow(props) {
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPan, setIsValidPan] = useState(true);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidMonthlyIncome, setIsValidMonthlyIncome] = useState(true);
    const [isValidLoanAmount, setIsValidLoanAmount] = useState(true);
    const [isValidMobile, setIsValidMobile] = useState(true);

    const [formData, setFormData] = useState(
        {
            "first_name": "",
            "mobile": "",
            "loan_amount": "",
            "monthly_income": "",
            "obligations": "",
            "purpose": "WEDDING",
            "company_id": 1,
            "email_personal": "",
            "dob": "",
            "pan": "",
            "gender": "",
            "state_id": "10",
            "city": "157",
            "pin": "110092",
            "source": "Website SK",
            "lead_data_source_id": 1,
            "utm_source": "ORGANIC",
            "utm_campaign": "ORGANIC"
        }
    );

    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {

            case 'first_name':
                setIsValidName(nameValidate(value));
                break;
            case 'monthly_income':
                setIsValidMonthlyIncome(MonthlyIncome(value));
                break;
            case 'loan_amount':
                setIsValidLoanAmount(loanAmount(value));
                break;
            case 'email_personal':
                setIsValidEmail(validateEmail(value));
                break;
            case 'pan':
                setIsValidPan(validatePanNumber(value));
                break;
            case 'mobile':
                setIsValidMobile(validateMobileNumber(value));
                break;
            default:
                break;
        }
        setFormData({ ...formData, [name]: value });
    };
    console.log(formData);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await submitApplication('/SaveApplication', formData);
            console.log('User created successfully:', response);
        } catch (error) {
            console.error('Error  :', error);
        }
    };

    return (
        <>
            <title>SalaryKart - {props.title}</title>
            <div className="innrer-banner">
                <img src={applynow_banner} style={{ width: "100%" }} alt="apply-now" />
            </div>
            <div className="about-are">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="block-title">
                                <h2>Application Form</h2>
                            </div>
                        </div>
                        <div className="col-lg-12 india-kart">
                            <form id="formData" autocomplete="off" onSubmit={handleSubmit} method="post" enctype="multipart/form-data" accept-charset="utf-8">
                                <div className="row">
                                    <input type="hidden" name="gpsLocation" id="gpsLocation" />
                                    <div className="form-group col-lg-4">
                                        <label>Loan Amount<span style={{ color: "#F00 !important" }}>*</span></label>
                                        <input type="text" name="loan_amount" className="form-control my-form" onChange={handleChange} placeholder="Loan Amount" />
                                        {!isValidLoanAmount && <p style={{ color: 'red' }}>Loan Amount cannot be less than Rs. 5,000/-</p>}
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label>Monthly Income<span style={{ color: "#F00 !important" }}>*</span></label>
                                        <input type="tel" name="monthly_income" onChange={handleChange} className="form-control my-form" placeholder="Monthly Income" />
                                        {!isValidMonthlyIncome && <p style={{ color: 'red' }}>Minimum Salary cannot be less than Rs. 25,000/-</p>}
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label>Purpose Of Loan<span style={{ color: "#F00 !important" }}></span></label>
                                        <select className="form-control select-drop" onChange={handleChange} name="purpose">
                                            <option value="">Purpose Of Loan *</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="block-title">
                                            <h2>Personal Details</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Full Name<span style={{ color: "#F00 !important" }}>*</span></label>
                                        <input type="text" name="first_name" onChange={handleChange} className="form-control my-form" placeholder="Full Name" required="" />
                                        {!isValidName && <p style={{ color: 'red' }}>Name length is acceptable from 3 to 40 characters.</p>}
                                    </div>

                                    <div className="col-lg-4">
                                        <label>Email <span style={{ color: "#F00 !important" }}>*</span></label>
                                        <input type="text" name="email_personal" onChange={handleChange} className="form-control my-form" placeholder="Email" required="" />
                                        {!isValidEmail && <p style={{ color: 'red' }}>Invalid email address</p>}
                                    </div>

                                    <div className="col-lg-4">
                                        <label>Mobile Number <span style={{ color: "#F00 !important" }}>*</span></label>
                                        <input type="tel" name="mobile" onChange={handleChange} maxlength="10" minlength="10" pattern="[5-9]{1}[0-9]{9}" className="form-control my-form" placeholder="Mobile Number" required />
                                        {!isValidMobile && <p style={{ color: 'red' }}>Mobile number provided is invalid</p>}
                                    </div>

                                    <div className="col-lg-4">
                                        <label>Birth Date <span style={{ color: "#F00 !important" }}>*</span></label>
                                        <input type="date" name="dob" onChange={handleChange} min="1967-09-07" max="2002-09-07" className="form-control my-form" placeholder="Birth Date" />
                                    </div>

                                    <div className="col-lg-4">
                                        <label>PAN Card <span style={{ color: "#F00 !important" }}>*</span></label>
                                        <input type="text" name="pan" onChange={handleChange} className="form-control my-form" placeholder="PAN Card" />
                                        {!isValidPan && <p style={{ color: 'red' }}>The PAN number provided is invalid</p>}
                                    </div>


                                    <div className="col-lg-4">
                                        <label>Gender <span style={{ color: "#F00!important" }}>*</span></label>
                                        <select name="gender" id="gender" onChange={handleChange} className="form-control select-drop" required="">
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>State <span style={{ color: "#F00!important" }}>*</span></label>
                                        <select autocomplete="off" placeholder="STATE *" name="state_id" onChange={handleChange} className="form-control select-drop" data-msg="" data-rule="required" required="">
                                            <option value="">SELECT STATE *</option>
                                            <option value="1">Andaman and Nicobar Islands</option>
                                            <option value="2">Andhra Pradesh</option>
                                            <option value="3">Arunachal Pradesh</option>
                                            <option value="4">Assam</option>
                                            <option value="5">Bihar</option>
                                            <option value="6">Chandigarh</option>
                                            <option value="7">Chhattisgarh</option>
                                            <option value="8">Dadra and Nagar haveli</option>
                                            <option value="9">Daman and Diu</option>
                                            <option value="10">Delhi</option>
                                            <option value="11">Goa </option>
                                            <option value="12">Gujarat</option>
                                            <option value="13">Haryana</option>
                                            <option value="14">Himachal Pradesh</option>
                                            <option value="15">Jammu and Kashmir</option>
                                            <option value="16">Jharkhand</option>
                                            <option value="17">Karnataka</option>
                                            <option value="18">Kerala</option>
                                            <option value="19">Lakshadweep</option>
                                            <option value="20">Madhya Pradesh</option>
                                            <option value="21">Maharashtra</option>
                                            <option value="22">Manipur</option>
                                            <option value="23">Meghalaya</option>
                                            <option value="24">Mizoram</option>
                                            <option value="25">Nagaland</option>
                                            <option value="26">Orissa</option>
                                            <option value="27">Pondicherry</option>
                                            <option value="28">Punjab</option>
                                            <option value="29">Rajasthan</option>
                                            <option value="30">Sikkim</option>
                                            <option value="31">Tamil Nadu</option>
                                            <option value="32">Tripura</option>
                                            <option value="33">Uttarakhand</option>
                                            <option value="34">Uttar Pradesh</option>
                                            <option value="35">West Bengal</option>
                                            <option value="36">Telangana</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>City <span style={{ color: "#F00!important" }}>*</span></label>

                                        <select className="form-control select-drop" name="city" onChange={handleChange} placeholder="CITY*">
                                            <option value="">CITY *</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Pincode <span style={{ color: "#F00!important" }}>*</span></label>

                                        <select className="form-control select-drop" name="pin" onChange={handleChange}>
                                            <option value="">Pincode *</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-12">
                                        <p><input type="checkbox" className="checkbox_check" onClick={handleChange} name="checkbox" value="Y" style={{ height: "12px !important" }} required />
                                            I hereby consent to receive calls, SMS ,WhatsApp & emails from Salarykart and have read the <a href="terms-and-conditions" target="_blank">terms and conditions</a>.
                                        </p>
                                    </div>

                                    <div className="col-lg-12">
                                        <button type="submit" className="btn apply-now-button">Submit</button>
                                    </div>
                                    <div> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}