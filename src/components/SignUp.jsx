import * as React from 'react'
import '../assets/css/SignUp.css'

const SignUp=()=>{
    const[formData,setFormData]=React.useState({
        firstname:"",
        lastname:"",
        email:"",
        phoneno:"",
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
        <div className='signUpPage'>
            <div className='signUpContainer'>
                <h1>SignUp</h1>
                <form onSubmit={submitForm} className='signUpForm'>
                    <div className='firstname'>
                        <input type='text' name='firstname' id='firstname' placeholder='firstname' onChange={handleChange}></input>
                    </div>
                    <div className='lastname'>
                        <input type='text' name='lastname' id='lastname' placeholder='lastname' onChange={handleChange}></input>
                    </div>
                    <div className='email'>
                        <input type='email' name='email' id='email' placeholder='email' onChange={handleChange}></input>
                    </div>
                    <div className='phoneno'>
                        <input type="tel" name='phoneno' id='phoneno' placeholder='phoneno' onChange={handleChange}></input>
                    </div>
                    <div className='username'>
                        
                        <input type="text" name="username" id="username" placeholder='username' onChange={handleChange}/>
                    </div>
                    <div className='password'>
                        <input type="password" name="password" id="password" placeholder="password" onChange={handleChange}/>
                    </div>
                    <div className='signUpButton'>
                        <button type="submit">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;