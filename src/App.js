import React from 'react';
import { UserProvider, useUser } from './components/context/UserContext';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import AppRoutes from './components/routes/Routing';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
      <div className="app-container">
        <Header/>
        <div className="content">
        <AppRoutes/>
        </div>
        <Footer/>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
