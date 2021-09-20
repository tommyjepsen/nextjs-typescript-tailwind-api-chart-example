import Head from "next/head";
import React, { ReactNode } from "react";
import Link from "next/link";
type Props = {
    children?: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Head>
                <title>Next.JS Template</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col items-center min-w-full min-h-screen bg-gray-100 p-0">
                <div className="flex flex-row items-center max-w-screen-2xl justify-between w-10/12 bg-white border-gray-100 border-b">
                    <p className="p-5 font-bold">Next.JS Template</p>

                    <div className="flex flex-row justify-between">
                        <Link href="/">
                            <a className="navbar-item" href="">
                                Redux Fetch
                            </a>
                        </Link>
                        <Link href="/serverside">
                            <a className="navbar-item" href="">
                                Serverside
                            </a>
                        </Link>
                        <Link href="/serversideredux">
                            <a className="navbar-item" href="">
                                Serverside to redux
                            </a>
                        </Link>
                        <Link href="/staticside">
                            <a className="navbar-item" href="">
                                Staticside
                            </a>
                        </Link>
                        <Link href="/regularfetch">
                            <a className="navbar-item" href="">
                                Regular fetch
                            </a>
                        </Link>
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
