import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogOut({ user }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate(); 

    const logout = () => {
        localStorage.removeItem("loggedUser");
        localStorage.removeItem("registeredUser");
        navigate("/register");
    };

    return (
        <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h2 className="text-xl font-bold">My Profile</h2>

            <div className="relative">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <img
                        src={user.profilePicture}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <p className="font-semibold">
                        {user.firstName.charAt(0).toUpperCase()} {user.lastName.charAt(0).toUpperCase()}
                    </p>
                </div>

                {open && (
                    <div className="absolute right-0 mt-2 bg-white shadow-lg text-black rounded-md p-2 w-32">
                        <button
                            className="w-full text-left px-2 py-1 hover:bg-gray-200 cursor-pointer"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LogOut;
