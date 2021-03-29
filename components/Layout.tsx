import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
	children?: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div>
			<Head>
				<title>Databi</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col items-center min-w-full min-h-screen bg-gray-100 p-0">
				<div className="flex flex-row items-center max-w-screen-2xl justify-between w-10/12 bg-white border-gray-100 border-b">
					<p className="p-5 font-bold">Databi</p>

					<div className="flex flex-row justify-between">
						<a className="navbar-item" href="">
							Home
						</a>
						<a className="navbar-item" href="">
							Events
						</a>
						<a className="navbar-item" href="">
							Visitors
						</a>
						<a className="navbar-item" href="">
							Products
						</a>
						<a className="navbar-item" href="">
							Profile
						</a>
					</div>
				</div>

				<div className="flex flex-row justify-start max-w-screen-2xl w-10/12 min-h-screen p-10 bg-white">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Layout;
