import React,{useState} from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ChatIcon from '@mui/icons-material/Chat';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import '../style/Signup.css';

const Signup = () => {

    const history = useHistory();
    const [user,setUser]=useState({phone:"",password:"",recommendation:""});
    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const sendData = async(e) => {
        e.preventDefault();
        const {phone,password,recommendation} =user;

        const res = await fetch('/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({phone:phone,password:password,recommendation:recommendation})
        });

        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert('Invalid field values');
            console.log("Invalid registration");
        }
        else{
            window.alert('Registration Successfull!');
            console.log("Registration Successfull");

            history.push('/Login');
        }
    }    


    return (
        <>
            <section className="navigation">
                <NavLink className="login-link" to="/Login"><KeyboardBackspaceIcon /></NavLink>
                <h2>Register</h2>
            </section>
            <section className="signup-area">
                <form method="POST" className="registerForm" id="registerForm">

                    <div className="formGroup">
                        <label className="formLabel" htmlFor="phone">
                            <PhoneAndroidIcon />
                        </label>
                        <input type="number" name="phone" id="phone" autoComplete="off"
                            value={user.phone}
                            onChange={handleInputs}
                            placeholder="Mobile Number" />
                    </div>
                    <div className="formGroup">
                        <label className="formLabel" htmlFor="verification">
                            <ChatIcon />
                        </label>
                        <input type="number" name="verification" id="verification" autoComplete="off"
                            placeholder="Verification Code" />
                    </div>
                    <div className="formGroup">
                        <label className="formLabel" htmlFor="password">
                            <VpnKeyIcon />
                        </label>
                        <input type="text" name="password" id="password" autoComplete="off"
                            value={user.password}
                            onChange={handleInputs}
                            placeholder="Password" />
                    </div>
                    <div className="formGroup">
                        <label className="formLabel" htmlFor="password">
                            <CardGiftcardIcon />
                        </label>
                        <input type="text" name="recommendation" id="recommendation" autoComplete="off"
                            value={user.recommendation}
                            onChange={handleInputs}
                            placeholder="Recommendation Code" />
                    </div>

                    <div className="submit">
                        <input type="submit" name="signup" id="signup" className="submitButton" value="Register" onClick={sendData}/>
                    </div>
                </form>
            </section>

        </>
    );
};

export default Signup;