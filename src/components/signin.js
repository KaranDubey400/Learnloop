import { Heading } from './Heading'; // Updated path
import { SubHeading } from './SubHeading'; // Updated path
import { Input } from './Input'; // Updated path
import { Button } from './Button'; // Updated path
import { BottomWarning } from './BottomWarning'; // Updated path
import { Appbar } from './Appbar'; // Updated path
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChange = (e, setter) => {
        const value = e.target.value;
        setter(value);
    }

    async function handleSignin(e) {
        e.preventDefault();
        const response = await axios.post("https://learn-well-hr2x.vercel.app/api/v1/user/signin", {
            username: username,
            password: password,
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
            localStorage.setItem('token', res.data.token);
            navigate('/home');
        });
    }

    return (
        <div className="bg-black h-screen ">
            <div className="text-white">
                <Appbar />
            </div>
            <div className="flex justify-center mt-32">
                <div className="flex flex-col justify-center">
                    <div className=" rounded-3xl bg-white w-80 sm:w-96 text-center p-2 h-max sm:px-4">  
                        <Heading title="Sign-in" />
                        <SubHeading title="Welcome back!" />
                        <form onSubmit={handleSignin}>
                            <Input label="Username" placeholder="Enter your username" onChange={(e) => handleChange(e, setUsername)}/>
                            <Input label="Password" placeholder="Enter your password" onChange={(e) => handleChange(e, setPassword)}/>
                            <div className="mt-4">
                                <Button label="Sign In" typeb="submit"/>
                            </div>
                        </form> 
                        <BottomWarning message="Don't have an account?" buttonText="Sign Up" to="/signup" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
