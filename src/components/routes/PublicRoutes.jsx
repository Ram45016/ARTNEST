// PublicRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginAndSignUp from "../LoginAndSignUp";
import Aboutus from "../Aboutus";
import FaqPopup from "../FaqPopup";
import TermsAndConditions from "../TermsAndConditions";
import PrivacyPolicy from "../PrivacyPolicy";


const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login-signup" element={<LoginAndSignUp />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/faq" element={<FaqPopup />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default PublicRoutes;
