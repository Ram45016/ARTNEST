import * as React from 'react'
import '../assets/css/login.css'
import './SignUp'

const Login=()=>{

    const[loginFormData,setLoginFormData]=React.useState({
        username:"",
        password:""
    })

    const handleChange=(e)=>{
        const [name,value]=[e.target.name,e.target.value];
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return(
        <div className='loginPage'>
            <div className='loginContainer'>
                <h1>Login</h1>
                <form onSubmit={submitForm} className='loginForm'>
                    <div className='username'>
                        
                        <input type="email" name="username" id="username" placeholder='username' onChange={handleChange}/>
                    </div>
                    <div className='password'>
                        <input type="password" name="password" id="password" placeholder="password" onChange={handleChange}/>
                    </div>
                    <div className='loginButton'>
                        <button type="submit">Login</button>
                    </div>                    
                </form>
            </div>
        </div>
    )
}
export default Login;