import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './LogIn.css'
import SignUp from './SignUp'


const LogIn=()=> {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [user,setUser] = useState({
        email:"", password:""
    });

    let name,value;

    const handleInputs = (event) => {
        console.log(event);
        name = event.target.name;
        value = event.target.value;

        setUser({...user,[name]:value});
    }

    const PostData=async(event)=>{
        event.preventDefault();

        const {email, password} = user;

        const res = await fetch("/signin", {
            method: "POST",
            headers: {"Content-Type" : "application/json"
        },
        body:JSON.stringify({
            email, password 
            })
        });
        res = await res.json();

    }


    return (
       <form method="POST" className="LogInForm">
            <div className="FormTitle">Log In</div>
            <div className="Email">
                <label for="mail" className="form-label">Email</label>
                <input type="email" className="form_input" id="email" name="email"
                    value ={user.email}
                    onChange={(e) => setUser({...user,email:e.target.value})}
                    placeholder="Your Email"
                />
            </div>
            <div className="Password1">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form_input" id="password" name="password"
                        value ={user.password}
                        onChange={(e) => setUser({...user,password:e.target.value})}
                        placeholder="Your Password"
                    />
            </div>
            <div className="Button">
                <button type="submit" className="btn" onClick={PostData} 
                >Log In</button>
            </div>

            <div className="haveAccount">
                Don't have an account? <Link to='/SignUp'>Sign Up</Link>
            </div>
        </form>
    )
}

export default LogIn;