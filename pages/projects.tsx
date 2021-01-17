import { NextPage } from "next";
import React from "react";
import Meta from "../components/Meta";

import MobileNav from "../components/Mobile-Nav";
import { Pages } from "../utilities/constants";

const ProjectsPage: NextPage = () => {
    return (
        <div className="h-full w-full bg-primary flex flex-col">
            <Meta title="blog-de-andy" />
            <h1>In development</h1>
            <main className="flex flex-col flex-grow"></main>
            <footer className="md:hidden">
                <MobileNav currentPage={Pages.Projects}/>
            </footer>
        </div>
    );
}

export default ProjectsPage