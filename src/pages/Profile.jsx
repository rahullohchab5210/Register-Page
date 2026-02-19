import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogOut from "../components/LogOut";
import Input from "../components/Input";

function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const logged = JSON.parse(localStorage.getItem("loggedUser"));

        if (!logged) {
            navigate("/login");
        } else {
            setUser(logged);
        }
    }, []);


    if (!user) return null;

    return (
       
        <div>
            <LogOut user={user} />
            <div className=" w-full mx-auto mt-10 p-16 max-w-147.5  p-16 bg-white rounded-[15px]  shadow-[0px_10px_30px_0px_#0000000D] border border-[#E3E3E3]">
                <div className="flex flex-col gap-[18px]"> 
                    <img
                                src={user.profilePicture}
                                className="w-32 h-32  rounded-full mx-auto object-cover"
                            />
                    <div className="flex flex-row gap-[64px]">
                        
                    <div>
                        <label className="font-semibold text-[20px] mb-[8px]">First Name</label>
                            <Input type="text" name="firstName" placeholder="First Name" value={user.firstName}  className=" border-2 border-[#858585] rounded-[5px] text-[16px]" />
                    </div>
                    <div>
                        <label className="font-semibold text-[20px] mb-[8px]">Last Name</label>
                        <Input type="text" name="lastName" placeholder="Last Name" value={user.lastName}  className="w-full p-2 border rounded-[5px]"/>
                    </div>
                </div>
                <div>
                    <label className="font-semibold text-[20px] mb-[8px]">Email</label>
                    <Input type="text" name="email" placeholder="Email" value={user.email} className="w-full p-2 border rounded-[5px] text-[16px]"/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
