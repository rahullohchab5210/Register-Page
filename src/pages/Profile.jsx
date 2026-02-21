import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState({firstName: "", lastName: "", email: "", profilePicture: ""});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const logged = JSON.parse(localStorage.getItem("loggedUser"));

        if (!logged) {
            navigate("/login");
        } else {
            setUser(logged);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("loggedUser");
        localStorage.removeItem("registeredUser");
        navigate("/register");
    };

 
    return (
        <div>

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
                            alt="profile"
                        />
                        <p className="font-semibold">
                            {user.firstName.charAt(0).toUpperCase()}{" "}
                            {user.lastName.charAt(0).toUpperCase()}
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
 
            <div className="w-full mx-auto mt-10 p-16 max-w-147.5 bg-white rounded-[15px] shadow-[0px_10px_30px_0px_#0000000D] border border-[#E3E3E3]">
                <div className="flex flex-col gap-[18px]">
                    <img
                        src={user.profilePicture}
                        alt="profile"
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                    />

                    <div className="flex flex-row gap-[64px]">
                        <div>
                            <label className="font-semibold text-[20px] mb-[8px]">
                                First Name
                            </label>
                            <Input
                                type="text"
                                name="firstName"
                                value={user.firstName}
                                className="border-2 border-[#858585] rounded-[5px] text-[16px]"
                            />
                        </div>

                        <div>
                            <label className="font-semibold text-[20px] mb-[8px]">
                                Last Name
                            </label>
                            <Input
                                type="text"
                                name="lastName"
                                value={user.lastName}
                                className="border-2 border-[#858585] rounded-[5px] text-[16px]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="font-semibold text-[20px] mb-[8px]">
                            Email
                        </label>
                        <Input
                            type="text"
                            name="email"
                            value={user.email}
                            className="border-2 border-[#858585] rounded-[5px] text-[16px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
