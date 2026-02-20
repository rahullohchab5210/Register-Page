import React, { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const loginUser = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("registeredUser"));


        if (!user) {
            setError("No user found. Please register first.");
            return;
        }

        if (user.email === loginData.email && user.password === loginData.password) {
            localStorage.setItem("loggedUser", JSON.stringify(user));

            navigate("/profile");
        } else {
            setError("Invalid Email or Password");
        }
    };

    const [showHidePassword, setShowHidePassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-147.5  p-16 bg-white rounded-[15px]  shadow-[0px_10px_30px_0px_#0000000D] border border-[#E3E3E3]">
                <div className="flex flex-col items-center gap-[8px] pb-[24px]">
                    <h1 className="font-bold text-[32px] text-[#112D49] leading-[120%] tracking-[0%] text-center">Welcome back!</h1>
                    <p className="font-normal text-[16px] leading-[150%] tracking-[0] text-center text-[#112D49]">Log in below to access your account and keep things running smoothly.</p>
                </div>

                <form onSubmit={loginUser} className="flex flex-col gap-3">
                    <Input
                        type="text"
                        placeholder="Email"
                        onChange={(e) =>
                            setLoginData({ ...loginData, email: e.target.value })
                        }
                    />
                    <div className="relative">
                        <Input
                            type={showHidePassword ? "text" : "password"}
                            placeholder="Password"
                            onChange={(e) =>
                                setLoginData({ ...loginData, password: e.target.value })
                            }
                        />
                        <button type="button" onClick={() => setShowHidePassword(!showHidePassword)} className="mx-2 absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800">
                            {showHidePassword ? "Show" : "Hide"}
                        </button>
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    <button
                        type="submit"
                        className="mt-6 cursor-pointer bg-[#112D49] text-white py-[16px] rounded-[93px] hover:bg-[#112D49]/85"
                    >
                        Login
                    </button>
                    <p className="font-normal text-[16px] leading-[150%] tracking-[0%] text-center mt-5">Don't have an account? <span onClick={() => navigate("/register")} className="text-[16px] font-semibold text-[#112D49] underline decoration-solid decoration-0 cursor-pointer">Create account</span></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
