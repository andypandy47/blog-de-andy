import * as React from "react";
import Link from "next/link";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { FaYoutube } from "react-icons/fa";
import { Pages } from "../utilities/constants";

interface MobileNavProps {
    currentPage: string;
}

const MobileNav: React.FC<MobileNavProps> = ({currentPage}) => {
    return (
        <nav className="bg-raised-primary flex justify-between items-center">
            <div className="flex justify-between items-center flex-1">
                <Link href="/">
                    <a className={`text-sm p-3 ${currentPage === Pages.Home && "text-secondary"}`}>
                        POSTS
                    </a>
                </Link>
                <Link href="/projects">
                    <a className={`text-sm p-3 ${currentPage === Pages.Projects && "text-secondary"}`}>
                        PROJECTS
                    </a>
                </Link>
                <Link href="/about">
                    <a className={`text-sm p-3 ${currentPage === Pages.About && "text-secondary"}`}>
                        ABOUT
                    </a>
                </Link>
            </div>
            <div className="flex justify-end items-center">
                <Link href="https://github.com/andypandy47">
                    <a className="py-3 px-3">
                        <VscGithub className="text-xl"/>
                    </a>
                </Link>
                <Link href="https://twitter.com/AudioPandy">
                    <a className="py-3 px-3">
                        <VscTwitter className="text-xl"/>
                    </a>
                </Link>
                <Link href="https://www.youtube.com/channel/UCEAI5uTSFNtCbXGlCKZgwuQ">
                    <a className="py-3 px-3">
                        <FaYoutube className="text-xl"/>
                    </a>
                </Link>
            </div>
        </nav>
    );
}

export default MobileNav;