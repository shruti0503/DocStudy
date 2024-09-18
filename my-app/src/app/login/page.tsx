//@ts-nocheck
'use client';

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Poppins } from "next/font/google";
import Link from "next/link";
// import { useLoginMutation } from "@/state/api";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
});

const LogIN = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [logInUser, {isLoading, isError, isSuccess}]=useLoginMutation();

    const onSubmit = async(data:any) => {
        console.log(data);
        try{
            console.log("login data", data)
        //    const user= await logInUser(data).unwrap();
           console.log("log in", user)
            console.log("User Logged in")

        }
        catch(error){
            console.error("failed to log in");
        }
    };

    return (
        <div className={`h-screen ps-3 flex w-full bg-white ${poppins.className}`}>
            <div className="detail flex flex-col h-full w-[50%] p-8 justify-center">
                <div className="absolute w-[500px] h-[500px] rotate-45 z-0 bg-[#131848] opacity-10 top-[-10rem]">
                </div>
                <div className="absolute w-[500px] h-[500px] rotate-45 bg-[#131848] z-10 opacity-10 bottom-9 left-[80rem] ">
                </div>
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <p className="text-gray-600 mb-8">See your growth and get support</p>

                <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="space-y-4">
                    <div>
                       <label for="email">Email*</label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Enter email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div>
                       <label for="password">Password*</label>
                        <input
                            {...register("password", { required: "Password is required" })}
                            type="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
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
                        className="w-full py-3  bg-[#131848]  text-white rounded-xl  transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-[#131848] mt-3">Not registered yet? Create a new <Link className="text-blue-400" href="/sign-up">account</Link></p>
            </div>

            <div className="image items-center justify-center flex-grow relative w-[50%]">
                <Image
                    src="/rob.png"
                    layout="fill"
                    objectFit="contain"
                    alt="login"
                    className="mt-[-4rem] relative z-20"
                />
            </div>
        </div>
    );
};

export default LogIN;
