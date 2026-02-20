import React, { useState } from "react"

import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

function RegisterPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePicture: "",
    });

    const [errors, setErrors] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setErrors(true);


        if (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.password &&
            formData.confirmPassword &&
            formData.profilePicture &&
            formData.password === formData.confirmPassword
        ) {

            localStorage.setItem("registeredUser", JSON.stringify(formData));



            navigate("/login");
        }
    };

    const handleFileChange = (value) => {
        const file = value[0];
        const image = URL.createObjectURL(file);

        setFormData({
            ...formData,
            profilePicture: image,
        });
    };

    const [showHidePassword, setShowHidePassword] = useState(false);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-147.5  p-16 bg-white rounded-[15px]  shadow-[0px_10px_30px_0px_#0000000D] border border-[#E3E3E3]">
                    <div className=" flex flex-col items-center gap-[8px] pb-[24px]">
                        <h1 className="text-center font-bold text-[32px] text-[#112D49] leading-[120%] tracking-[0%]">Sign up</h1>
                        <p className="text-center text-[#64748B] font-normal text-[16px] leading-[150%] tracking-[0%] max-w-[374px]  ">Create your account to unlock access and stay updated with everything we offer.</p>
                    </div>
                    <form
                        onSubmit={(e) => submit(e)}
                        className="w-full "
                    >
                        <div className="w-full flex flex-col max-w-[462px]  gap-[12px]">
                            <div className="w-full">
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={(e) =>
                                        setFormData({ ...formData, firstName: e.target.value })
                                    }
                                />
                                {errors && formData.firstName === "" && (
                                    <p className="text-red-500 text-sm">First Name is required</p>
                                )}
                            </div>

                            <div className="w-full">
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, lastName: e.target.value })
                                    }
                                />
                                {errors && formData.lastName === "" && (
                                    <p className="text-red-500 text-sm">Last Name is required</p>
                                )}
                            </div>

                            <div className="w-full">
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                                {errors && formData.email === "" && (
                                    <p className="text-red-500 text-sm">Email is required</p>
                                )}
                            </div>

                            <div className="w-full">
                                <div className="relative">
                                    <Input
                                        type={showHidePassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={(e) =>
                                            setFormData({ ...formData, password: e.target.value })
                                        }
                                    />
                                    <button type="button" onClick={() => setShowHidePassword(!showHidePassword)} className="mx-2 absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600 hover:text-gray-800">
                                        {showHidePassword ? "Show" : "Hide"}
                                    </button>
                                </div>
                                {errors && formData.password === "" && (
                                    <p className="text-red-500 text-sm">Password is required</p>
                                )}
                            </div>

                            <div className="w-full">
                                <Input
                                    type="text"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            confirmPassword: e.target.value,
                                        })
                                    }
                                />
                                {errors && formData.confirmPassword === "" && (
                                    <p className="text-red-500 text-sm">Confirm Password is required</p>
                                )}

                                {errors &&
                                    formData.password !== formData.confirmPassword &&
                                    formData.confirmPassword !== "" && (
                                        <p className="text-red-500 text-sm">Passwords do not match</p>
                                    )}
                            </div>
                            <div>
                                <input
                                    type="file"
                                    onChange={(e) => handleFileChange(e.target.files)}
                                    className="block w-full text-sm text-gray-600  file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-mediu file:bg-blue-500 file:text-white hover:file:bg-blue-600 cursor-pointer border border-gray-300 rounded-md p-1"
                                />
                                {formData.profilePicture && (
                                    <img
                                        src={formData.profilePicture}
                                        alt="Profile"
                                        className="w-40 h-40 object-cover mt-2"
                                    />
                                )}
                            </div>

                        </div>
                        <button
                            type="submit"
                            className="w-full mt-6 max-w-[462px] bg-[#112D49] text-white py-[16px] hover:bg-[#112D49]/85 transition-all cursor-pointer rounded-[93px]">
                            Sign up
                        </button>
                        <p className="text-center text-[#41576D] font-normal text-[16px] leading-[150%] tracking-[0%] mt-5">Already a member? <span onClick={() => navigate("/login")} className="text-[16px] font-semibold text-[#112D49] underline decoration-solid decoration-0 cursor-pointer">Log in</span> </p>
                    </form>
                </div>
            </div>

        </>
    );
}

export default RegisterPage;
