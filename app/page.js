"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";

export default function Home() {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState("all");
	const [categoryFilter, setCategoryFilter] = useState("all");
	const fetchData = async () => {
		const res = await fetch("http://localhost:8000/todos");
		const data = await res.json();
		setData(data);
		console.log("data", data);
	};
	const categoryData = ["games", "movies", "sports", "music"];
	const filteredData = data?.data?.filter((event) => {
		const matchesVisibility =
			filter === "all" || event.visibility === filter;
		const matchesCategory =
			categoryFilter === "all" || event.category === categoryFilter;
		return matchesVisibility && matchesCategory;
	});

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<Layout>
			<Header />
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
	<div className="container mx-auto px-4">
		<div className="max-w-3xl mx-auto text-center">
			<h1 className="text-4xl md:text-6xl font-bold mb-6">
				Turn Moments Into Memories
			</h1>
			<p className="text-xl mb-8">
				From intimate gatherings to grand celebrations, our platform empowers you 
				to plan and execute events effortlessly. Create experiences that leave a lasting impression.
			</p>
			<p className="text-lg mb-8">
				Explore intuitive tools, manage guests, and bring your vision to life 
				with unmatched ease. Start your journey to unforgettable events today!
			</p>
			<Link
				href="/create-event"
				className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 shadow-lg"
			>
				Get Started Now
			</Link>
		</div>
	</div>
</section>

			<section className="py-16 bg-gray-50">
				<div className="flex flex-wrap justify-center gap-4 mb-6">
					<select
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
						className="bg-white border border-blue-500 text-blue-600 rounded-md py-2 px-4 shadow-sm hover:bg-blue-100 transition"
					>
						<option value="all">All</option>
						<option value="public">Public</option>
						<option value="private">Private</option>
					</select>
					<select
						value={categoryFilter}
						onChange={(e) => setCategoryFilter(e.target.value)}
						className="bg-white border border-blue-500 text-blue-600 rounded-md py-2 px-4 shadow-sm hover:bg-blue-100 transition"
					>
						<option value="all">All Category</option>
						{categoryData.map((item, i) => (
							<option value={item} key={i}>
								{item}
							</option>
						))}
					</select>
				</div>

				<section className="py-16 bg-blue-100">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
							Featured Events
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{filteredData?.map((event) => (
								<div
									key={event._id}
									className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
								>
									<div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-black">
											{event?.name}
										</h3>
										<h3 className="text-lg font-semibold mb-2 text-blue-700">
											{event?.title}
										</h3>
										<p className="text-gray-500 mb-4">
											{event?.description}
										</p>
										<p className="text-gray-400 text-sm">
											Date: {event?.date}
										</p>
										<p className="text-gray-400 text-sm">
											Category: {event?.category}
										</p>
										<p className="text-gray-400 text-sm">
											Location: {event?.location}
										</p>
									</div>
									<div className="p-4 border-t bg-blue-50">
										<Link
											href={`/events/${event.id}`}
											className="block w-full text-center bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
										>
											View Details
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</section>

			<section className="bg-blue-300 text-white py-12">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Create Your Next Event?
					</h2>
					<p className="text-lg mb-6">
						Join thousands of event organizers who trust our
						platform.
					</p>
					<Link
						href="/create-event"
						className="inline-block bg-white text-blue-800 font-semibold py-3 px-8 rounded-md hover:bg-gray-200 transition duration-300"
					>
						Start Planning Now
					</Link>
				</div>
			</section>
		</Layout>
	);
}
