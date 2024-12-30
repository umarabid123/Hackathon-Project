"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Header from "@/components/header/Header";
import axios from "axios";

export default function CreateEventPage() {
	const [id, setId] = useState();
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [date, setDate] = useState("");
	const [data, setData] = useState("");
	const [visibility, setVisibility] = useState("");
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const router = useRouter();
	const categoryData = ["games", "movies", "sports", "Music"];
	const VisibilityData = ["public", "private"];
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"https://hackathon-backend-bay.vercel.app/todos/create",
				{
					id: id,
					name: name,
					title: description,
					description: location,
					date: date,
					category: category,
					visibility: visibility,
				}
			);
			console.log("response", response);
			setData(response);
			// Handle successful creation (e.g., clear form, show success message)
		} catch (error) {
			console.error("Error creating todo:", error);
			// Handle error (e.g., show error message to user)
		}
	};

	return (
		<Layout>
			<Header />
			<div className="flex items-center justify-center min-h-screen bg-gray-100 py-12">
				<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
					<h1 className="text-2xl font-bold mb-6 text-center">
						Create a New Event
					</h1>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label
								htmlFor="eventName"
								className="block text-sm font-medium text-gray-700"
							>
								Event No
							</label>
							<input
								type="text"
								id="id"
								value={id}
								onChange={(e) => setId(e.target.value)}
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
						<div>
							<label
								htmlFor="eventName"
								className="block text-sm font-medium text-gray-700"
							>
								Event Name
							</label>
							<input
								type="text"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
						<div>
							<label
								htmlFor="description"
								className="block text-sm font-medium text-gray-700"
							>
								Event Description
							</label>
							<textarea
								id="description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								required
								rows={4}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
							></textarea>
						</div>
						<div>
							<label
								htmlFor="eventDate"
								className="block text-sm font-medium text-gray-700"
							>
								Event Date
							</label>
							<input
								type="text"
								id="date"
								value={date}
								onChange={(e) => setDate(e.target.value)}
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
						<div>
							<label
								htmlFor="eventLocation"
								className="block text-sm font-medium text-gray-700"
							>
								Event Location
							</label>
							<input
								type="text"
								id="location"
								value={location}
								onChange={(e) => setLocation(e.target.value)}
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
						<div>
							<select
								name="category"
								id="category"
								onChange={(e) => setCategory(e.target.value)}
								value={category}
							>
								<option value="Select">Select</option>
								{categoryData?.map((item, i) => {
									return (
										<option value={item} key={i}>
											{item}
										</option>
									);
								})}
							</select>
							<select
								name="category"
								id="category"
								onChange={(e) => setVisibility(e.target.value)}
								value={visibility}
							>
								<option value="Select">Select</option>
								{VisibilityData?.map((item, i) => {
									return (
										<option value={item} key={i}>
											{item}
										</option>
									);
								})}
							</select>
						</div>
						<button
							type="submit"
							className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Create Event
						</button>
					</form>
				</div>
			</div>
		</Layout>
	);
}
