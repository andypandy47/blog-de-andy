import * as React from "react";
import Link from "next/link";

import { IPostMetaData } from "../utilities/post-interfaces";

interface PostIndexProps {
    posts: IPostMetaData[]
}

const PostIndex: React.FC<PostIndexProps> = ({posts}) => {
    return (
        <main className="px-4 p-0 flex flex-col flex-grow max-h-screen overflow-y-scroll overflow-x-hidden md:justify-start md:items-start md:w-9/12 lg:overflow-y-hidden lg:w-1/2 2xl:w-1/4">
            {posts?.map((value: IPostMetaData, index: number) => (
                <Link key={value.slug} href="/blog/[slug]" as={`/blog/${value.slug}`}>
                    <a className="w-full">
                        <article className={`py-4 ${index != 0 ? "border-t border-raised-primary" : posts.length == 1 && "border-b border-raised-primary"}`}>
                            <p className="text-base mb-1 font-bold">{value.title}</p>
                            <p className="text-xs mb-1 text-text-secondary font-light">{value.excerpt}</p>
                            <p className="text-xs text-text-secondary font-thin">{value.date}</p>
                        </article>
                    </a>
                </Link>
            ))}
        </main>
    )
}

export default PostIndex
  