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
								<CardTitle className="text-sm font-medium">Documents</CardTitle>
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
	);
}
