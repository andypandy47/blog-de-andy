import Link from "next/link";

import { VscGithub, VscTwitter } from "react-icons/vsc";
import { FaYoutube } from "react-icons/fa";

const MainTitle: React.FC = () => {
  return (
    <header className="text-left py-3 px-3 bg-raised-primary tracking-widest flex flex-col justify-center items-center min-w-full">
      <div>
        <h1 className="text-4xl mb-1 uppercase colour-text-primary font-bold md:p-0 md:text-6xl">blog-de-andy</h1>
        <div className="flex justify-between">
          <h2 className="text-xs font-thin text-secondary flex flex-1 justify-start items-center md:p-0 md:text-sm">web + game dev</h2>
          <div className="w-2/4 flex justify-end items-center">
              <Link href="">
                <a className="text-base p-1 mr-2 md:text-lg">
                  <VscGithub />
                </a>
              </Link>
              <Link href="">
                <a className="text-base p-1 mr-2 md:text-lg">
                  <VscTwitter />
                </a>
              </Link>
              <Link href="">
                <a className="text-base p-1 mr-0 md:text-lg">
                  <FaYoutube />
                </a>
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainTitle;
