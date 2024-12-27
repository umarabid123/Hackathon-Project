"use client";

import Heading from "@/components/heading/Heading";
import InputText from "@/components/inputText/InputText";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [data, setData] = useState([]);
    const router = useRouter()
	const signUpData = [
		{
			labelText: "Name",
			type: "text",
			placeholder: "John Doe",
			onChange: (e) => setName(e.target.value),
		},
		{
			labelText: "Address",
			type: "text",
			placeholder: "Enter your address",
			onChange: (e) => setAddress(e.target.value),
		},
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
	const handleSignUp = async(e) => {
		e.preventDefault();
	await axios
    .post("http://localhost:8000/auth/signup", {
        name:name,
        email:email,
        password:password,
        address:address,
  
    })
    router.push("/signin",)
    console.log("succcessfully login");
	};
	return (
		<div className="cs-container h-screen flex justify-center">
			<div className="my-auto">
				<Heading heading={"Sign Up"} level={1} />
				<div className="mt-5">
					{signUpData?.map((item, i) => {
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
                    <button onClick={handleSignUp}>Sign up</button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
