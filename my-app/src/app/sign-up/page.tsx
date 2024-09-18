//@ts-nocheck
'use client';

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Poppins } from "next/font/google";
// import { useRegisterMutation } from "@/state/api";
import Link from "next/link";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
});

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [registerUser, { isLoading, isError, isSuccess }] = useRegisterMutation();

    const onSubmit = async (data:any) => {
        try {
            console.log("register data", data)
            // await registerUser(data).unwrap(); // Send registration data to the API
            console.log('User registered successfully');
        } catch (error) {
            console.error('Failed to register user:', error);
        }
    };

    return (
        <div className={`h-screen ps-3 flex w-full bg-white ${poppins.className}`}>
            <div className="image items-center justify-center flex-grow relative w-[50%]">
                <Image
                    src="/rob.png"
                    layout="fill"
                    objectFit="contain"
                    alt="login"
                    className="mt-[-4rem] relative z-20"
                />
            </div>
            <div className="detail flex flex-col h-full w-[50%] p-8 justify-center pe-10">
                <div className="absolute w-[500px] h-[500px] rotate-45 z-0 bg-[#131848] opacity-10 top-[-10rem]">
                </div>
                <div className="absolute w-[500px] h-[500px] rotate-45 bg-[#131848] z-0 opacity-10 bottom-9 left-[10rem] ">
                </div>
                <h1 className="text-2xl font-bold mb-4">Register</h1>
                <p className="text-black mb-3">Manage all your inventory efficiently</p>
                <p className="text-gray-600 mb-8 text-sm">
                    Let's get you all set up so you can verify your personal account and begin setting up your work profile
                </p>

                <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="space-y-4">
                    <div className="flex gap-2 w-full">
                        <div className="flex flex-col w-full">
                            <label htmlFor="firstname">First Name*</label>
                            <input
                                {...register("firstname", { required: "First Name is required" })}
                                type="text"
                                placeholder="Enter first name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname.message}</span>}
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="lastname">Last Name*</label>
                            <input
                                {...register("lastname", { required: "Last Name is required" })}
                                type="text"
                                placeholder="Enter last name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname.message}</span>}
                        </div>
                    </div>

                    <div className="flex gap-2 w-full">
                        <div className="flex flex-col w-full">
                            <label htmlFor="email">Email*</label>
                            <input
                                {...register("email", { required: "Email is required" })}
                                type="email"
                                placeholder="Enter email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="password">Password*</label>
                            <input
                                {...register("password", { required: "Password is required" })}
                                type="password"
                                placeholder="Enter password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            {...register("rememberMe")}
                            type="checkbox"
                            className="mr-2"
                        />
                        <label className="text-gray-700">Remember me</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#131848] text-white rounded-xl transition"
                       // disabled={isLoading}
                    >
                        {/* {isLoading ? 'Registering...' : 'Sign Up'} */}
                    </button>
                </form>

                {/* {isSuccess && <p className="text-green-500 mt-3">User registered successfully!</p>}
                {isError && <p className="text-red-500 mt-3">Failed to register user.</p>} */}

                <p className="text-[#131848] mt-3">
                    Already have an account? <Link className="text-blue-400" href="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;