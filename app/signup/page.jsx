// "use client";

// import Heading from "@/components/heading/Heading";
// import InputText from "@/components/inputText/InputText";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// const SignUp = () => {
	// const [name, setName] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [address, setAddress] = useState("");
// 	const [file, setFile] = useState("");
// 	console.log('file: ', file);
// 	const [data, setData] = useState([]);
// 	const router = useRouter();
// 	const signUpData = [
// 		{
// 			labelText: "Name",
// 			type: "text",
// 			placeholder: "John Doe",
// 			onChange: (e) => setName(e.target.value),
// 		},
// 		{
// 			labelText: "Address",
// 			type: "text",
// 			placeholder: "Enter your address",
// 			onChange: (e) => setAddress(e.target.value),
// 		},
// 		{
// 			labelText: "Email",
// 			type: "text",
// 			placeholder: "Enter your email address",
// 			onChange: (e) => setEmail(e.target.value),
// 		},
// 		{
// 			labelText: "Password",
// 			type: "text",
// 			placeholder: "Enter your Password",
// 			onChange: (e) => setPassword(e.target.value),
// 		},
// 	];
	// const handleSignUp = async (e) => {
	// 	e.preventDefault();
	// 	await axios.post("http://localhost:8000/auth/signup", {
	// 		name: name,
	// 		email: email,
	// 		password: password,
	// 		address: address,
	// 	});
	// 	router.push("/signin");
	// 	console.log("succcessfully login");
	// };
// 	return (
// 		<div className="cs-container h-screen flex justify-center">
// 			<div className="my-auto">
// 				<Heading heading={"Sign Up"} level={1} />
// 				<div className="mt-5">
// 					<form
// 						// action="/profile"
// 						// method="POST"
// 						// encType="multipart/form-data"
// 					>
// 						{signUpData?.map((item, index) => (
// 							<InputText	
// 								labelText={item?.labelText}
// 								type={item?.type}
// 								placeholder={item?.placeholder}
// 								key={index}
// 								onChange={item?.onChange || (() => {})} // Ensure onChange is defined
// 							/>
// 						))}
// 						<button onClick={handleSignUp}>Sign up</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default SignUp;


'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Layout  from "@/components/layout/Layout"
import axios from 'axios'

export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const router = useRouter()

  const handleSignUp = async (e) => {
	e.preventDefault();
	await axios.post("http://localhost:8000/auth/signup", {
		name: name,
		email: email,
		password: password,
		address: address,
	});
	router.push("/signin");
	console.log("succcessfully login");
};

  return (
      <div className="flex items-center justify-center min-h-screen bg-blue-600">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl text-blue-600 font-bold mb-6 text-center">Sign Up for EventPro</h1>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
				placeholder='Enter Full Name'
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
			<div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                value={address}
				placeholder='Enter Address'
                onChange={(e) => setAddress(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? <Link href="/signin" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
  )
}

