import { cn } from "@/lib/utils";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export interface ButtonProps {
	icon: any;
	text: string;
	className?: string;
}

const SidebarButton = (props: ButtonProps) => (
	<TooltipProvider delayDuration={200}>
		<Tooltip>
			<TooltipTrigger>
				<div className={cn("sidebar-icon group", props.className)}>
					{props.icon}
				</div>
			</TooltipTrigger>
			<TooltipContent side="right">
				<p>{props.text}</p>
			</TooltipContent>
		</Tooltip>
	</TooltipProvider>
);

export default SidebarButton;
