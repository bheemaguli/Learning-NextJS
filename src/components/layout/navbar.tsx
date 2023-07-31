import { cn } from "@/lib/utils";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "../ui/button";
import { FaBell } from "react-icons/fa";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn("flex items-center space-x-4 lg:space-x-6", className)}
			{...props}
		>
			<Button variant={"secondary"} size={"sm"}>
				<IoLogoWhatsapp />
				&nbsp;&nbsp;Join the group
			</Button>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size={"sm"}>
						<FaBell />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56" align="end" forceMount>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
						<DropdownMenuGroup key={i}>
							<DropdownMenuItem>Notification {i}</DropdownMenuItem>
						</DropdownMenuGroup>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</nav>
	);
}
