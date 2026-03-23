import { Poppins } from "next/font/google";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata = {
	title: "PulseEstate | Find The Perfect Rental",
	description: "Find your dream rental property",
	keywords: "rental, find rentals, find properties",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
