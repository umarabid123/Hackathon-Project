"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Heading from "@/components/heading/Heading";
import InputText from "@/components/inputText/InputText";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

const Page = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signInData = [
		{
			labelText: "Email",
			type: "text",
			placeholder: "Enter your email address",
			onChange: (e) => setEmail(e.target.value),
		},
		{
			labelText: "Password",
			type: "text",
			placeholder: "Enter your Password",
			onChange: (e) => setPassword(e.target.value),
		},
	];
	const handleSignIn = async () => {
		try {
			const response = await axios.post(
				"https://hackathon-backend-bay.vercel.app/auth/login",
				{
					email,
					password,
				}
			);
            console.log("response", response);
            
			const token = response.data.token;
            console.log('token: ', token);
			if (token) {
				localStorage.setItem("token", token);
				router.push("/");
			} else {
				alert(response.data.message);
			}
		} catch (error) {
			console.error(error);
			alert("Sign-in failed");
		}
	};

	return (
			<div className="flex items-center justify-center min-h-screen bg-blue-800">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all">
          <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-800">Welcome to Event App</h1>
				<Heading heading={"Sign Up"} level={1} />
				<div className="mt-5">
					{signInData?.map((item, i) => {
						return (
							<InputText
								labelText={item?.labelText}
								type={item?.type}
								placeholder={item?.placeholder}
								key={i}
								onChange={item?.onChange}
							/>
						);
					})}
					<div className="flex justify-between items-center py-1"><p>Already have an account or no?<Link href={"/signup"} className ="text-blue-600">Sign Up</Link></p></div>
					<button onClick={handleSignIn} className=" mt-5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">Sign in</button>
				</div>
			</div>
		</div>
	);
};

export default Page;
