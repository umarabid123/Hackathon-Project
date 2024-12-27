"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Heading from "@/components/heading/Heading";
import InputText from "@/components/inputText/InputText";

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
				"http://localhost:8000/auth/login",
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
		<div className="cs-container h-screen flex justify-center">
			<div className="my-auto">
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
					<button onClick={handleSignIn}>Sign up</button>
				</div>
			</div>
		</div>
	);
};

export default Page;
