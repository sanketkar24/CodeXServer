import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './AddDetails.css'

const SignUp= ()=> {
    const [user,setUser] = useState({
        mname: "", maddress: "", sid: ""
    });

    let name,value;

    const handleInputs = (event) => {
        console.log(event);
        name = event.target.name;
        value = event.target.value;

        setUser({... user,[name]:value})
    }



    const PostData=async(event)=>{
        event.preventDefault();

        const {mname, maddress, sid} = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {"Content-Type" : "application/json"
        },
        body:JSON.stringify({
            mname, maddress, sid
            })
        });

        //const res = await res.json();

    }

    return (
        <form className="DetailsForm">
            <div className="FormTitle">Add Details</div>
            <div className="ManName">
                <label for="manufactureName" className="form-label">Enter Manufacture Name</label>
                <input type="text" className="mname" id="mname" 
                    value ={user.mname}
                    onChange={handleInputs}/>
            </div>

            <div className="ManAddress">
                <label for="manufactureAddress" className="form-label">Enter Manufacture Address</label>
                <input type="text" className="maddress" id="maddress" 
                    value ={user.maddress}
                    onChange={handleInputs}/>
            </div>

            <div className="skuid">
                <label for="sid" className="form-label">Enter SKUID</label>
                <input type="text" className="sid" id="sid" 
                    value ={user.sid}
                    onChange={handleInputs}/>
            </div>


            <div className="ImgUpload">
            <label className="form-label" for="customFile">Default file input example</label>
            <input type="file" class="img" id="customFile" />
            </div>

            <div className="Button">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>

        </form>
    )

}
export default SignUp;