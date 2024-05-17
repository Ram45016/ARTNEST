import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Login } from './Redux/UserSlice';
import { BsFillPersonFill } from 'react-icons/bs';
import { useUser } from './context/UserContext';
import { Authlogin, Authregister } from './services/Api';
import '../assets/css/loginAndSignUp.css';

const LoginAndSignUp = () => {
  const navigate = useNavigate();
  const { login: userLogin } = useUser();
  const [isFlipped, setIsFlipped] = useState(false);
  const dispatch = useDispatch();

  const [loginFormData, setLoginFormData] = useState({
    username:'',
    password:'',
  });

  const [signUpFormData, setSignUpFormData] = useState({
    name: '',
    email: '',
    pwd: '',
  });

  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleSignUpFormChange = (e) => {
    const { name, value } = e.target;
    setSignUpFormData({
      ...signUpFormData,
      [name]: value,
    });
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    if (!loginFormData.username || !loginFormData.password) {
      console.log('Please enter details');
    } else {
      try {
        const res = await Authlogin(loginFormData).then((response)=>{
            console.log(response);
            const token=response.data.token;
            localStorage.setItem('token',token);
            localStorage.setItem("id",response.data.userId);
            localStorage.setItem("UserName",response.data.userName);
          });
          console.log(localStorage.token);
        navigate('/Homepage');
        dispatch(
          Login({
            username:loginFormData.username,
            password:loginFormData.password,
          })
        );
      } catch (err) {
        console.error(err);
      }
    }
    if (loginFormData.username.toLowerCase() === 'admin') {
      navigate('/BarChart');
    }
    userLogin();
  };

  const submitSignUpForm = async (e) => {
    const res= await Authregister(signUpFormData);
    console.log(res);
    e.preventDefault();
    console.log(signUpFormData);
  };

  const flipForm = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="loginAndSignUpPage">
      <div className={`forms-container ${isFlipped ? 'flipped' : ''}`}>
        <div className="form-box login">
          <h1>Login</h1>
          <BsFillPersonFill className="user-icon" />
          <form onSubmit={submitLoginForm} className="loginForm">
            <div className="username">
              <input type="text" name="username" id="username" placeholder="Username" autoComplete="current-username" onChange={handleLoginFormChange}/>
            </div>
            <div className="password">
              <input type="password" name="password" id="password" placeholder="Password" autoComplete="current-password" onChange={handleLoginFormChange} />
            </div>
            <div className="loginButton">
              <button className="login-button" type="submit">
                Login
              </button>
            </div>
            <Link to="#" onClick={flipForm} className="linkText">
              If you don't have an account? Sign Up
            </Link>
          </form>
        </div>
        <div className="form-box signup">
          <h1>Sign Up</h1>
          <BsFillPersonFill className="user-icon" />
          <form onSubmit={submitSignUpForm} className="signUpForm">
            <div className="email">
              <input type="email"  name="email"  id="email"  placeholder="Email" onChange={handleSignUpFormChange}/>
            </div>
            <div className="newUsername">
              <input type="text" name="name" id="name" placeholder="Username" autoComplete="current-username" onChange={handleSignUpFormChange} />
            </div>
            <div className="newPassword">
              <input type="password" name="pwd"  id="Pwd"  placeholder="Password" autoComplete="current-password" onChange={handleSignUpFormChange}/>
            </div>
            <div className="signUpButton">
              <button className="login-button" type="submit">
                Sign Up
              </button>
            </div>
            <Link to="#" onClick={flipForm} className="linkText">
              If you have an account? Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignUp;
