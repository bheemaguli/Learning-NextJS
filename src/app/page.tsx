"use client";

import { MainNav } from "@/components/layout/navbar";
import { UserNav } from "@/components/layout/user";
import { Sidebar } from "@/components/layout/sidebar";
import { playlists } from "@/components/layout/favourite";

export default function Home() {
	return (
		<div className="flex bg-slate-200 min-h-screen">
			<Sidebar
				className={"w-[5rem] shadow-md bg-slate-50 fixed min-h-full"}
				playlists={playlists}
			/>
			<div className="w-full ml-[5rem]">
				<nav className="flex flex-row w-full py-3 px-8 bg-slate-200 mb-[40px]">
					<span className="font-bold text-2xl">
						<span className="text-red-600">My</span>
						<span className="text-blue-600">Br</span>
						<span className="text-green-600">and</span>
					</span>
					<MainNav className="ms-auto mr-5" />
					<UserNav />
				</nav>
				{[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((x, i) => (
					<div
						className=" container grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3"
						key={i}
					>
						<div className="w-full px-4 py-5 bg-white rounded-lg shadow">
							<div className="text-sm font-medium text-gray-500 truncate">
								Total users
							</div>
							<div className="mt-1 text-3xl font-semibold text-gray-900">
								12,00
							</div>
						</div>
						<div className="w-full px-4 py-5 bg-white rounded-lg shadow">
							<div className="text-sm font-medium text-gray-500 truncate">
								Total Profit
							</div>
							<div className="mt-1 text-3xl font-semibold text-gray-900">
								$ 450k
							</div>
						</div>
						<div className="w-full px-4 py-5 bg-white rounded-lg shadow">
							<div className="text-sm font-medium text-gray-500 truncate">
								Total Orders
							</div>
							<div className="mt-1 text-3xl font-semibold text-gray-900">
								20k
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
