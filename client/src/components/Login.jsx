import React,{useState} from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import '../style/Login.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const Login = () => {
    const history = useHistory();
    const [user,setUser] = useState({
        phone:"",password:""
    });
    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }
    const loginUser = async(e)=>{
        e.preventDefault();
        const {phone,password} = user;
        const res = await fetch('/login',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({phone:phone , password:password})
        });

        const data = await res.json();

        if(data.status === 400 || !data){
            window.alert('Invalid credentials');
            console.log('Invalid credentials');
        }
        else{
            window.alert('Login Successfull');
            history.push('/');
        }
    }
    return (
        <>
            <section className="navigation">
                <NavLink className="signup-link" to="/Signup"><KeyboardBackspaceIcon /></NavLink>
                <h2>Login</h2>
            </section>
            <section className="loginArea">
                <form method="POST" className="loginForm" id="loginForm">

                    <div className="formGroup-login">
                        <label className="formLabel-input" htmlFor="phone">
                            <PhoneAndroidIcon />
                        </label>
                        <input type="number" name="phone" id="phone" autoComplete="off"
                            value={user.phone}
                            onChange={handleInputs}
                            placeholder="Mobile Number" />
                    </div>
                    <div className="formGroup-login">
                        <label className="formLabel-input" htmlFor="password">
                            <VpnKeyIcon />
                        </label>
                        <input type="text" name="password" id="password" autoComplete="off"
                            value={user.password}
                            onChange={handleInputs}
                            placeholder="Password" />
                    </div>
                    <div className="submit">
                        <input type="submit" name="signup" id="signup" className="submitButton" value="Login" onClick={loginUser} />
                    </div>
                    <div className="register-forgot">
                        <div className="reg-pass">
                            <NavLink className="reg-pass-btn" to="/Signup">Register</NavLink>
                        </div>
                        <div className="reg-pass-2">
                            <NavLink className="reg-pass-btn-2" to="/Forgot">Forgot Password ?</NavLink>
                        </div>
                    </div>
                </form>
            </section>

        </>
    );
};

export default Login;