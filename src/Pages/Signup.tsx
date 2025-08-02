import { useRef } from "react"
import { Input } from "../Component/Input"
import { Button } from "../Component/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const userRef =  useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();
    const signup = async () =>{
        const username = userRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post("http://127.0.0.1:3000/api/v1/signup",{
        username,
        password
       })
       navigate('/Signin');
       alert("User Created");
    }
    return <div className="h-screen w-screen bg-gray-600 flex items-center justify-center">
        <div className="min-w-48 rounded-xl bg-white p-8">
            <Input placeholder="Username" reference={userRef} />
            <Input placeholder="Password" reference={passwordRef} />
            <div className="flex pt-2">
                <Button onClick={signup} type="primary" title="Submit" fullWidth={true} loading={false}  />
            </div>
        </div>
    </div>
}