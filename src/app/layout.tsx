import { Page } from "@/components/page";
import "./globals.css";

import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
	variable: "--font-intrument-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Link Share",
	description: "App for sharing social media links.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${instrumentSans.variable} antialiased`}>
				<Page>{children}</Page>
			</body>
		</html>
	);
}
