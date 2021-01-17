import { getAllPostSlugs, getPost } from "../../utilities/posts";
import { IPostMetaData } from "../../utilities/post-interfaces";
import Meta from "../../components/Meta";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";

import PostHeader from "../../components/posts/Post-Header";
import MobileNav from "../../components/Mobile-Nav";
interface PostProps {
    source: any;
    frontMatter: IPostMetaData
}

const Post: NextPage<PostProps> = ({source, frontMatter}) => {
    const content = hydrate(source, { components });
    return (
        <div className="h-full w-full max-h-screen flex flex-col bg-primary">
            <Meta title="blog-de-andy"/>
            <div className="overflow-scroll flex-grow bg-primary">
                <PostHeader title={frontMatter.title} date={frontMatter.date} />
                <div className="p-4 post-content">{content}</div>
            </div>
            <MobileNav />
        </div>
    )
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostSlugs();
    return {
        paths,
        fallback: false
    }
}

const components = {};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const slug = context.params?.slug as string;
    const post = await getPost(slug);

    const mdxSource =  await renderToString(post.content, {
        components
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: post.data
        }
    }
}