import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
	return (
		<div className="space-y-8">
			<div className="flex items-center">
				<Avatar className="h-9 w-9">
					<AvatarImage src="" alt="Avatar" />
					<AvatarFallback>OM</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">INV-OLHH/007</p>
					<p className="text-sm text-muted-foreground">MEL122DS23YS</p>
				</div>
				<div className="ml-auto font-medium">+₹1,999.00</div>
			</div>
			<div className="flex items-center">
				<Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
					<AvatarImage src="" alt="Avatar" />
					<AvatarFallback>JL</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">INV-JAHH/006</p>
					<p className="text-sm text-muted-foreground">MEL122DS23YS</p>
				</div>
				<div className="ml-auto font-medium">+₹39.00</div>
			</div>
			<div className="flex items-center">
				<Avatar className="h-9 w-9">
					<AvatarImage src="" alt="Avatar" />
					<AvatarFallback>IN</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">INV-ISHH/005</p>
					<p className="text-sm text-muted-foreground">MEL122DS23YS</p>
				</div>
				<div className="ml-auto font-medium">+₹299.00</div>
			</div>
			<div className="flex items-center">
				<Avatar className="h-9 w-9">
					<AvatarImage src="" alt="Avatar" />
					<AvatarFallback>WK</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">INV-WIHH/004</p>
					<p className="text-sm text-muted-foreground">REC122DS23ED</p>
				</div>
				<div className="ml-auto font-medium">+₹99.00</div>
			</div>
			<div className="flex items-center">
				<Avatar className="h-9 w-9">
					<AvatarImage src="" alt="Avatar" />
					<AvatarFallback>SD</AvatarFallback>
				</Avatar>
				<div className="ml-4 space-y-1">
					<p className="text-sm font-medium leading-none">INV-SOHH/003</p>
					<p className="text-sm text-muted-foreground">REC122DS23ED</p>
				</div>
				<div className="ml-auto font-medium">+₹39.00</div>
			</div>
		</div>
	);
}
