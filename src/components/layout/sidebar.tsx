import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BiSolidHome } from "react-icons/bi";
import { Playlist } from "../layout/favourite";
import SidebarButton from "../custom/SidebarButton";
import { BsTable, BsFillDatabaseFill, BsTools } from "react-icons/bs";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
	playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
	return (
		<div className={cn("pb-12", className)}>
			<div className="space-y-4 pb-4">
				<div className="px-3 py-2">
					<div className="space-y-1">
						<SidebarButton text="Home" icon={<BiSolidHome />}></SidebarButton>
						<SidebarButton text="Tables" icon={<BsTable />}></SidebarButton>
					</div>
				</div>
				<hr className="w-[60%] mx-auto" />
				<div className="px-3 py-2">
					<SidebarButton
						className="bg-green-200 text-green-800"
						text="Master Data"
						icon={<BsFillDatabaseFill />}
					></SidebarButton>
					<SidebarButton
						className="bg-green-200 text-green-800"
						text="Useful Tools"
						icon={<BsTools />}
					></SidebarButton>
				</div>
				<hr className="w-[60%] mx-auto" />
				<div className="py-2">
					<ScrollArea className="h-[300px] px-1">
						<div className="space-y-1 p-2">
							{playlists?.map((playlist, i) => (
								<SidebarButton
									text={playlist}
									className="bg-red-200 text-red-800"
									icon={
										<Avatar>
											<AvatarFallback>
												{playlist.slice(-2).toUpperCase()}
											</AvatarFallback>
										</Avatar>
									}
								></SidebarButton>
							))}
						</div>
					</ScrollArea>
				</div>
			</div>
		</div>
	);
}
