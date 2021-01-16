import { getAllPostSlugs, getPost } from "../../utilities/posts";
import { IPostMetaData } from "../../utilities/post-meta-data";
import Meta from "../../components/Meta";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";

import PostHeader from "../../components/posts/Post-Header";
interface PostProps {
    source: any;
    frontMatter: IPostMetaData
}

const Post: NextPage<PostProps> = ({source, frontMatter}) => {
    const content = hydrate(source, { components });
    return (
        <div className="h-full w-full bg-primary">
            <Meta title={frontMatter.title}/>
            <PostHeader title={frontMatter.title} date={frontMatter.date} />
            <div className="p-4 post-content">{content}</div>
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