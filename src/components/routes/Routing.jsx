import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginAndSignUp from '../LoginAndSignUp';
import Header from '../Header';
import BarChart from '../Dashboard/dashmain'; 
import { useUser } from '../context/UserContext';
import Project from '../pages/Project';
import ProjectCreate from '../pages/ProjectCreate';
import ProjectView from '../pages/ProjectView';
import ProjectEnvironment from '../pages/ProjectEnvironment';
import DrawingCanvas from '../Drawing';
import MusicComposing from '../MusicComposing';
import WritingPad from '../WrittingPad';
import Aboutus from '../Aboutus'; // Import the About Us component
import FaqPopup from '../FaqPopup';
import TermsAndConditions from '../TermsAndConditions';
import PrivacyPolicy from '../PrivacyPolicy';
import AssetsPage from '../AssetsPage';
import YourWorks from '../YourWorks';
import UploadPage from '../UploadPage'
import FollowersPage from '../FollowersPage';
import Home from '../Home';
import Footer from '../Footer';
import '../../assets/css/App.css'
import ArtistProfile from '../Profile';
import LandingPage from '../pages/LandingPage';
import ProjectList from '../pages/ProjectList';
import AdminDashboard from '../pages/AdminDashBoard';
import UserList from '../pages/UserList';
import FeedbackForm from '../pages/feedback';
import CategoryComponent from '../pages/Category';

const PrivateRoute=({children})=>{
    const {isUserLoggedin}=useUser();
    return isUserLoggedin ? children : <Navigate to="/" replace/>;
  }
  


 const AppRoutes = () => {
  return (
    <div className="app-container">
            <Routes>
                <Route exact path="/" element={<LandingPage/>} />
                <Route path="/login-signup" element={<LoginAndSignUp/>} />
                <Route path="/header" element={
                  <PrivateRoute>
                     <Header/>
                    </PrivateRoute>
                } />
               <Route path="/admin" element={<BarChart/>} />
               <Route path="/project" element={<Project/>} />
               <Route path="/projectC" element={<ProjectCreate/>} />
               <Route path="/projectV" element={<ProjectView/>} />
               <Route path="/admin/projects" element={<ProjectView/>} />
               <Route path="/environment/:projectId" element={<ProjectEnvironment/>} />
               <Route path="/Drawing" element={<DrawingCanvas/>} />
               <Route path="/Music" element={<MusicComposing/>} />
               <Route path="/write" element={<WritingPad/>} />
               <Route path="/about-us" element={<Aboutus />} /> {/* Route for the About Us page */}
               <Route path="/faq" element={<FaqPopup />} />
               <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
               <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/assets" element={<AssetsPage />} />
              <Route path="/your-works" element={<YourWorks />} />
              <Route path="/Homepage" element={<Home />} />
              <Route path="/LandingPage" element={<LandingPage />} />
              <Route path="/uploadpage" element={<UploadPage />} />
              <Route path="/followers" element={<FollowersPage />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/profile" element={<ArtistProfile />} />
              <Route path="/p" element={<ProjectList />} />
              <Route path="/admin/users" element={<UserList />} />
              <Route path='/admin' element={<AdminDashboard/>}/>
              <Route path='/user' element={<UserList/>}/>
              <Route path='/feedback' element={<FeedbackForm/>}/>
              <Route path='/category' element={<CategoryComponent/>}/>
            </Routes>
      </div>
  );
};

export default AppRoutes;