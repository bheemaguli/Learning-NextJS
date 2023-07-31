import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<Link href="/a">
			<Button>Home</Button>
		</Link>
	);
}
