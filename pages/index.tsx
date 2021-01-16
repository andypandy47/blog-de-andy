import * as React from "react";
import { GetStaticProps, NextPage } from "next";

import MainTitle from "../components/Main-Title";
import Meta from "../components/Meta";
import MobileNav from "../components/Mobile-Nav";
import PostIndex from "../components/Post-Index";

import { getSortedPostsMetaData } from "../utilities/posts";
import { IPostMetaData } from "../utilities/post-meta-data";
import { Pages } from "../utilities/constants";

interface HomeProps {
  posts: IPostMetaData[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  
  return (
    <div className="h-full w-full bg-primary flex flex-col min-h-screen">
      <Meta title="blog-de-andy" />
      <MainTitle />
      <PostIndex posts={posts}/>
      <footer className="md:hidden">
        <MobileNav currentPage={Pages.Home}/>
      </footer>
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