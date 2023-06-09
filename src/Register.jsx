import React,{useState} from 'react';
export const Register =(props)=>{
    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');
    const[name,set]=useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
 <div className="auth-form-container">
    <h3>REGISTRATION FORM</h3>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlfor="name" >Full Name</label>
            <input value={name} name="name" id="name" placeholder="full Name"/>
    <label htmlfor="email">email</label>
    <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
    <label htmlfor="password">password</label>
    <input  value={pass} onChange={(e)=>setPass(e.target.value)}type="password" placeholder="**********" id="password" name="password"/>
    <button type="Submit">Log In</button>
</form>
<button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account?Login here</button>
 </div>
    )
}