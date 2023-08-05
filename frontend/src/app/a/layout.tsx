import { MainNav } from "@/components/layout/navbar";
import { UserNav } from "@/components/layout/user";
import { Sidebar } from "@/components/layout/sidebar";
import { playlists } from "@/components/layout/favourite";
import Link from "next/link";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex bg-slate-200 min-h-screen">
			<Sidebar
				className={"w-[5rem] shadow-md bg-slate-50 fixed min-h-full"}
				playlists={playlists}
			/>
			<div className="w-full ml-[5rem]">
				<nav className="flex flex-row w-100 py-3 px-8 bg-slate-200 mb-[40px]">
					<Link href="/">
						<span className="font-bold text-2xl">
							<span className="text-red-600">My</span>
							<span className="text-blue-600">Br</span>
							<span className="text-green-600">and</span>
						</span>
					</Link>

					<MainNav className="ms-auto mr-5" />
					<UserNav />
				</nav>
				<div className="p-5">{children}</div>
			</div>
		</div>
	);
}
