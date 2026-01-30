import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const[formdata,setformdata]=useState({
        email:"",
        password:""
    })

    const[error,seterror]=useState("")
    const[message,setmessage]=useState("")
    const navigate=useNavigate()

    const handlechnage=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }

    const handlesubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await axios.post(
                "http://localhost:5000/api/v1/users/login",
                formdata
            );

            localStorage.setItem("authToken",res.data.token);
            console.log("✅ JWT Token Generated:", res.data.token);
            console.log("✅ Token stored in localStorage");
            seterror("");
            setmessage(res.data.message);
            navigate("/profile");
        }
        catch(err){
            seterror(err.response?.data?.message);
            setmessage("");
        }
    }

    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>

                <form onSubmit={handlesubmit} className="space-y-4">
                    <div>
                        <input 
                            name="email"
                            placeholder="Email"
                            value={formdata.email}
                            onChange={handlechnage}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    <div>
                        <input 
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={formdata.password}
                            onChange={handlechnage}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </button>
                    
                    {error && <p className="text-center text-red-600 font-semibold">{error}</p>}
                    {message && <p className="text-center text-green-600 font-semibold">{message}</p>}
                </form>
            </div>
        </div>
    )
}


export default Login;