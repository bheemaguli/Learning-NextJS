import { cn } from "@/lib/utils";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "../ui/button";
import { FaBell, FaQuestionCircle } from "react-icons/fa";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav className={cn("flex items-center space-x-4", className)} {...props}>
			<Button variant={"secondary"} size={"sm"}>
				<IoLogoWhatsapp />
				&nbsp;&nbsp;Join the group
			</Button>
			<Dialog>
				<DialogTrigger>
					<Button variant={"ghost"} size={"sm"} className="text-2xl px-0">
						<FaQuestionCircle />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>How can I help you?</DialogTitle>
						<DialogDescription>
							Update this card with relavent help articles.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={"ghost"} size={"sm"} className="text-2xl px-0">
						<FaBell />
						<div className="bg-red-600 rounded-full w-3 h-3 fixed translate-x-[7px] -translate-y-2"></div>
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
