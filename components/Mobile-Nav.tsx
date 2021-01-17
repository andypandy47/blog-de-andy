import * as React from "react";
import Link from "next/link";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { FaYoutube } from "react-icons/fa";
import { Pages } from "../utilities/constants";

interface MobileNavProps {
    currentPage?: string;
}

const MobileNav: React.FC<MobileNavProps> = ({currentPage}) => {
    return (
        <footer className="md:hidden">
            <nav className="bg-raised-primary">
                
                <div className="flex justify-around items-center flex-1">
                    <Link href="/">
                        <a className={`text-sm text-center p-3 flex-1 ${currentPage === Pages.Home && "text-secondary bg-primary"}`}>
                            POSTS
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className={`text-sm text-center p-3 flex-1 ${currentPage === Pages.Projects && "text-secondary bg-primary"}`}>
                            PROJECTS
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className={`text-sm text-center p-3 flex-1 ${currentPage === Pages.About && "text-secondary bg-primary"}`}>
                            ABOUT
                        </a>
                    </Link>
                </div>
                
            </nav>
        </footer>
    );
}

export default MobileNav;