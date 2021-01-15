import { getSortedPostsMetaData } from "../utilities/posts";

import * as React from "react";
import { GetStaticProps, NextPage } from "next";

import Meta from "../components/Meta";
import MainTitle from "../components/Main-Title";
import { IPostMetaData } from "../utilities/post-meta-data";
import PostIndex from "../components/Post-Index";

interface HomeProps {
  posts: IPostMetaData[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  
  return (
    <div className="h-screen w-screen bg-primary">
      <Meta title="blog-de-andy" />
      <MainTitle />
      <PostIndex posts={posts}/>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsMetaData();
  
  return {
    props: {
      posts
    }
  }
}