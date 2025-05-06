"use client";
import Link from "next/link";
import Image from "next/image";
import {
	ArrowRight,
	MessageSquare,
	Wallet,
	Zap,
	MousePointerClick,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/feature-card";
import CubeAnimation from "@/components/cube-animation";
import NavBar from "@/components/nav-bar";

export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white">
			<NavBar />

			{/* Hero Section */}
			<section className="relative overflow-hidden">
				<div className="container px-4 md:px-6 mx-auto py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
					<div className="flex-1 space-y-6 z-10">
						<div className="flex items-center gap-2 text-purple-500 font-medium">
							<Image
								src="https://static.cdnlogo.com/logos/d/23/discord-thumb.png"
								alt="Discord Logo"
								width={80}
								height={80}
								className="hover:animate-spin border border-white rounded-full "
							/>
							SOLSCOPE BOT
						</div>
						<h1 className="text-4xl md:text-6xl font-bold leading-tight">
							Bring Solana to <span className="text-[#5765F2]">Discord</span>{" "}
							with <span className="text-[#1DFA9C]">SolScope</span>
						</h1>
						<p className="text-lg text-gray-400 max-w-xl">
							Simplify Solana wallet interactions directly in your Discord
							server. Send, receive, and manage tokens without leaving the
							conversation.
						</p>
						<div className="flex flex-wrap gap-4">
							<Button
								className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6"
								onClick={() => {
									window.location.href =
										"https://discord.com/oauth2/authorize?client_id=1367450794709880953&permissions=18445006240928&integration_type=0&scope=bot";
								}}
							>
								Add to Discord
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
							{/* <Button
                variant="outline"
                className="border-purple-600 text-purple-500 hover:bg-purple-950/20 rounded-full px-8 py-6"
              >
                View Documentation
              </Button> */}
						</div>
					</div>
					<div className="flex-1 relative h-[400px] md:h-[500px]">
						<CubeAnimation />
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-black/80">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold mb-4">
							Powerful Wallet Features
						</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">
							SolScope brings the full power of Solana to your Discord community
							with simple commands and powerful features.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<FeatureCard
							icon={<Wallet className="h-8 w-8 text-teal-400" />}
							title="Wallet Management"
							description="Create and manage Solana wallets directly in Discord. Check balances, view transaction history, and more."
						/>
						<FeatureCard
							icon={<MessageSquare className="h-8 w-8 text-purple-400" />}
							title="Send Solana Locally"
							description="Send SOL other Discord users with simple commands. Perfect for tipping and community rewards."
						/>
						<FeatureCard
							icon={<Zap className="h-8 w-8 text-teal-400" />}
							title="Complete Wallet Management"
							description="No Hassle to manage private keys, all handled by the Bot"
						/>
						{/* <FeatureCard
							icon={<BarChart3 className="h-8 w-8 text-purple-400" />}
							title="Price Tracking"
							description="Get real-time price information for any Solana token. Set alerts for price movements."
						/>
						<FeatureCard
							icon={<Shield className="h-8 w-8 text-teal-400" />}
							title="Secure Transactions"
							description="All transactions require confirmation and use encrypted storage for maximum security."
						/>
						<FeatureCard
							icon={<ArrowRight className="h-8 w-8 text-purple-400" />}
							title="Advanced Commands"
							description="Power users can access advanced features like NFT viewing, staking, and DeFi integrations."
						/> */}
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold mb-4">
							With SolScope, invoke the services with...
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-black/60 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
							<div className="h-48 mb-6 bg-purple-900/30 rounded-lg flex items-center justify-center">
								{/* <MessageSquare className="h-16 w-16 text-purple-400" /> */}
								<Image
									src="start.png"
									alt="sol"
									width={100}
									height={100}
									className="rounded-lg h-full w-full"
								/>
							</div>
							<h3 className="text-xl font-bold mb-2">A simple command</h3>
							<p className="text-gray-400 mb-4">
								Use intuitive commands like /start for accessing your Wallet
							</p>
							{/* <Button
								variant="ghost"
								className="text-purple-400 hover:text-purple-300 p-0 flex items-center"
							>
								View Commands <ArrowRight className="ml-2 h-4 w-4" />
							</Button> */}
						</div>

						<div className="bg-black/60 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
							<div className="h-48 mb-6 bg-purple-900/30 rounded-lg flex items-center justify-center">
								<Image
									src="send.png"
									alt="sol"
									width={100}
									height={100}
									className="rounded-lg h-full w-full"
								/>
							</div>
							<h3 className="text-xl font-bold mb-2">Local Transfer</h3>
							<p className="text-gray-400 mb-4">
								Send SOL to discord users with SolScope Wallet using just there
								Discord username using /send
							</p>
							{/* <Button
								variant="ghost"
								className="text-purple-400 hover:text-purple-300 p-0 flex items-center"
							>
								Learn More <ArrowRight className="ml-2 h-4 w-4" />
							</Button> */}
						</div>

						<div className="bg-black/60 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
							<div className="h-48 mb-6 bg-purple-900/30 rounded-lg flex items-center justify-center">
								{/* <MousePointerClick className="h-16 w-16 text-teal-400" /> */}
								<Image
									src="wallet.png"
									alt="sol"
									width={100}
									height={100}
									className="rounded-lg h-full w-full"
								/>
							</div>
							<h3 className="text-xl font-bold mb-2">Details at Clicks</h3>
							<p className="text-gray-400 mb-4">
								Get all required details regarding the Wallet on clicks.
							</p>
							{/* <Button
								variant="ghost"
								className="text-purple-400 hover:text-purple-300 p-0 flex items-center"
							>
								Enable Notifications <ArrowRight className="ml-2 h-4 w-4" />
							</Button> */}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-black">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="bg-gradient-to-r from-purple-900/40 to-teal-900/40 p-8 md:p-12 rounded-2xl border border-purple-500/20">
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Ready to bring Solana to your Discord server?
							</h2>
							{/* <p className="text-gray-300 mb-8 text-lg">
								Join thousands of communities already using SolScope to manage
								Solana wallets directly in Discord.
							</p> */}
							<Button
								className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg"
								onClick={() => {
									window.location.href =
										"https://discord.com/oauth2/authorize?client_id=1367450794709880953&permissions=18445006240928&integration_type=0&scope=bot";
								}}
							>
								Add SolScope to Discord
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 border-t border-gray-800">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center mb-6 md:mb-0">
							<div className="font-bold text-2xl mr-2">SolScope</div>
							<div className="text-gray-400 text-sm">
								© 2025 All rights reserved
							</div>
						</div>
						<div className="flex gap-8">
							{/* <Link href="#" className="text-gray-400 hover:text-white">
								Documentation
							</Link> */}
							<Link
								href="https://github.com/Prasad-D-Ware"
								className="text-gray-400 hover:text-white"
								target="__blank"
							>
								GitHub
							</Link>
							<Link
								href="https://discord.com/oauth2/authorize?client_id=1367450794709880953&permissions=18445006240928&integration_type=0&scope=bot"
								className="text-gray-400 hover:text-white"
								target="__blank"
							>
								Discord
							</Link>
							<Link
								href="https://x.com/prasadtwts"
								className="text-gray-400 hover:text-white"
								target="__blank"
							>
								Twitter
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
