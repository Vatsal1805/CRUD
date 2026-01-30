import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome!</h1>
                <p className="text-gray-600 mb-8">Get started by logging in or creating a new account</p>
                
                <div className="space-y-4">
                    <button
                        onClick={() => navigate('/login')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </button>
                    
                    <button
                        onClick={() => navigate('/register')}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
