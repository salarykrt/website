import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RepayLoan from './pages/RepayLoan';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ApplyNow from './pages/ApplyNow';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home title="Home" />}></Route>
        <Route path="/about-us" element={<About title="About" />} />
        <Route path="/contact-us" element={<Contact title="Contact Us" />} />
        <Route path="/repay-loan" element={<RepayLoan title="Repay Loan" />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy title="Privacy Policy" />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions title="Terms And Conditions" />} />
        <Route path="/apply-now" element={<ApplyNow title="Apply Now" />} />
        <Route path="*" element={<PageNotFound title="Page Not Found" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
