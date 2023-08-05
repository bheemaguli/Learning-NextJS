import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaPowerOff, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Ne() {
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>Are you sure you want to Logout?</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-column">
						<Link href="/accounts/login">
							<Button>
								<FaPowerOff></FaPowerOff>&nbsp;Log Out
							</Button>
						</Link>
						<Link href="/a">
							<Button variant={"secondary"}>
								<FaArrowLeft></FaArrowLeft>&nbsp;Take me back
							</Button>
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
