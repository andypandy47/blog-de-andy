import * as React from "react";
import Link from "next/link";

import { IPostMetaData } from "../utilities/post-meta-data";

interface PostIndexProps {
    posts: IPostMetaData[]
}

const PostIndex: React.FC<PostIndexProps> = ({posts}) => {
    return (
        <main className="px-4 md:p-0 flex flex-col flex-grow md:justify-start md:items-center">
            {posts?.map((value: IPostMetaData, index: number) => (
                <Link key={value.slug} href="/blog/[slug]" as={`/blog/${value.slug}`}>
                    <a className="md:min-w-lg md:max-w-lg">
                        <article className={`py-4 ${index == 0 ? "" : "border-t border-raised-primary"}`}>
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
  