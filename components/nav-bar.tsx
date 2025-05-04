"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NavBar() {
	return (
		<header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center gap-6">
						<Link href="/" className="flex items-center gap-2">
							<Image src={"sol.png"} height={50} width={50} alt="logo" />
							<span className="font-bold text-xl">SolScope</span>
						</Link>
					</div>
					<div className="flex items-center gap-4">
						<Button
							className="bg-purple-600 hover:bg-purple-700 text-white rounded-full"
							onClick={() => {
								window.location.href =
									"https://discord.com/oauth2/authorize?client_id=1367450794709880953&permissions=18445006240928&integration_type=0&scope=bot";
							}}
						>
							Add to Discord
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
