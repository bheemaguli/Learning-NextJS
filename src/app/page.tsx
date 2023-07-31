"use client";

import { MainNav } from "@/components/layout/navbar";
import { UserNav } from "@/components/layout/user";
import { Sidebar } from "@/components/layout/sidebar";
import { playlists } from "@/components/layout/favourite";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker";
import { Overview } from "@/components/dashboard/overview";
import { RecentSales } from "@/components/dashboard/recent-sales";

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
				{/* {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((x, i) => (
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
								₹ 450k
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
				))} */}
				<div className="flex-1 space-y-4 p-8 pt-6">
					<div className="flex items-center justify-between space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
						<div className="flex items-center space-x-2">
							<CalendarDateRangePicker />
							<Button>Download</Button>
						</div>
					</div>
					<Tabs defaultValue="overview" className="space-y-4">
						<TabsList>
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="analytics" disabled>
								Analytics
							</TabsTrigger>
							<TabsTrigger value="reports" disabled>
								Reports
							</TabsTrigger>
							<TabsTrigger value="notifications" disabled>
								Notifications
							</TabsTrigger>
						</TabsList>
						<TabsContent value="overview" className="space-y-4">
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Total Document Amount Generated
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">₹45,231.89</div>
										<p className="text-xs text-muted-foreground">
											+20.1% from last month
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Documents
										</CardTitle>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="h-4 w-4 text-muted-foreground"
										>
											<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
											<circle cx="9" cy="7" r="4" />
											<path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
										</svg>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">
											+{Math.floor(Math.random() * 5000) + 1000}
										</div>
										<p className="text-xs text-muted-foreground">
											+180.1% from last month
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Active Now
										</CardTitle>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="h-4 w-4 text-muted-foreground"
										>
											<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
										</svg>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">+573</div>
										<p className="text-xs text-muted-foreground">
											+201 since last hour
										</p>
									</CardContent>
								</Card>
							</div>
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
								<Card className="col-span-4">
									<CardHeader>
										<CardTitle>Overview (FY 23-24)</CardTitle>
									</CardHeader>
									<CardContent className="pl-2">
										<Overview />
									</CardContent>
								</Card>
								<Card className="col-span-3">
									<CardHeader>
										<CardTitle>Recent Generations</CardTitle>
										<CardDescription>
											You made 1265 generations this month.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<RecentSales />
									</CardContent>
								</Card>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
