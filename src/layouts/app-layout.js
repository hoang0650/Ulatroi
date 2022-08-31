import { useRouter } from "next/dist/client/router";
import React from "react";
import Navbar from '@/components/Navbar';

export default function AppLayout({ children }) {
	const router = useRouter();
	if (router.pathname !== "/login") {
		return (
			<main>
				<Navbar />
				{children}
			</main>
		);
	} else {
		return children;
	}
}