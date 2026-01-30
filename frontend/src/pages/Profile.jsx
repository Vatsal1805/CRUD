import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [user,setuser]=useState(null);
    const[error,seterror]=useState("");
    const[isEditing,setIsEditing]=useState(false);
    const[formData,setFormData]=useState({name:"",email:""});
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchProfile=async()=>{
            try{
                const authToken=localStorage.getItem("authToken");
                const res=await axios.get(
                    "http://localhost:5000/api/v1/users/profile",
                    {
                        headers:{
                            Authorization:`Bearer ${authToken}`
                        }
                    }
                );
                setuser(res.data);
                setFormData({name:res.data.name, email:res.data.email});
                seterror(""); 
            }
            catch(err){
                seterror("Failed to fetch profile");
            }
        }
        fetchProfile();
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    }

    const handleUpdate = async() => {
        try{
            const authToken=localStorage.getItem("authToken");
            const res=await axios.put(
                "http://localhost:5000/api/v1/users/profile",
                formData,
                {
                    headers:{
                        Authorization:`Bearer ${authToken}`
                    }
                }
            );
            setuser({...user, name:res.data.name, email:formData.email});
            setIsEditing(false);
            alert("Profile updated successfully!");
        }
        catch(err){
            alert("Failed to update profile: " + err.response?.data?.message);
        }
    }

    const handleDelete = async() => {
        if(window.confirm("Are you sure you want to delete your account? This action cannot be undone!")){
            try{
                const authToken=localStorage.getItem("authToken");
                await axios.delete(
                    "http://localhost:5000/api/v1/users/profile",
                    {
                        headers:{
                            Authorization:`Bearer ${authToken}`
                        }
                    }
                );
                localStorage.removeItem("authToken");
                alert("Account deleted successfully!");
                navigate("/");
            }
            catch(err){
                alert("Failed to delete account: " + err.response?.data?.message);
            }
        }
    }

    if(error) return <p className="text-center text-red-600 text-xl mt-10">{error}</p>;
    if(!user) return <p className="text-center text-gray-600 text-xl mt-10">Loading...</p>;
    
    return(
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">User Profile</h1>
                
                {!isEditing ? (
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                        <div className="mb-4">
                            <p className="text-sm text-gray-600">Name</p>
                            <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                        </div>
                        
                        <div className="mb-4">
                            <p className="text-sm text-gray-600">Email</p>
                            <p className="text-lg font-semibold text-gray-800">{user.email}</p>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gray-50 rounded-lg p-6 mb-6 space-y-4">
                        <div>
                            <label className="text-sm text-gray-600 block mb-2">Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e)=>setFormData({...formData, name:e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        
                        <div>
                            <label className="text-sm text-gray-600 block mb-2">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e)=>setFormData({...formData, email:e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>
                )}

                <div className="space-y-3">
                    {!isEditing ? (
                        <button
                            onClick={()=>setIsEditing(true)}
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                        >
                            Update Profile
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={handleUpdate}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={()=>{setIsEditing(false); setFormData({name:user.name, email:user.email})}}
                                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                            >
                                Cancel
                            </button>
                        </>
                    )}
                    
                    {!isEditing && (
                        <>
                            <button
                                onClick={handleDelete}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                            >
                                Delete Account
                            </button>
                            
                            <button
                                onClick={handleLogout}
                                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;