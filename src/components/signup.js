import { Heading } from './Heading'; // Updated path
import { SubHeading } from './SubHeading'; // Updated path
import { Input } from './Input'; // Updated path
import { Button } from './Button'; // Updated path
import { BottomWarning } from './BottomWarning'; // Updated path
import { Appbar } from './Appbar'; // Updated path
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        const response = await axios.post("https://learn-well-hr2x.vercel.app/api/v1/user/signup", {
            username: username,
            email: email,
            password: password,
            mobile: mobile
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            localStorage.setItem('token', res.data.token);
            navigate('/signin');
        });
    }

    const handleChange = (e, setter) => {
        const value = e.target.value;
        setter(value);
    }

    return (
        <div className="bg-black h-screen ">
            <div className="text-white">
                <Appbar />
            </div>
            <div className="flex justify-center mt-12 sm:mt-20">
                <div className="flex flex-col justify-center">
                    <div className=" rounded-3xl bg-white w-80 sm:w-96 text-center sm:p-2 h-max px-4">  
                        <Heading title="Sign-Up" />
                        <SubHeading title="Create your account" />
                        <form onSubmit={handleRegister}>
                            <Input label="Username" placeholder="Enter your Username" onChange={(e) => handleChange(e, setUsername)}/>
                            <Input label="Email" placeholder="Enter your Email" onChange={(e) => handleChange(e, setEmail)}/>
                            <Input label="Mobile" placeholder="Enter your Mobile" onChange={(e) => handleChange(e, setMobile)}/>
                            <Input label="Password" placeholder="Enter your Password" onChange={(e) => handleChange(e, setPassword)}/>
                            <div className="mt-4">
                                <Button label="Submit" typeb="submit"/> 
                            </div>
                        </form> 
                        <BottomWarning message="Already have an account?" buttonText="Sign In" to="/signin" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
