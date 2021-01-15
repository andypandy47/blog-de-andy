import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IPost, IPostMetaData } from "./post-meta-data";

//Finding directory named "posts" from the current working directory of Node.
const postDirectory = path.join(process.cwd(), "posts");

export const getSortedPostsMetaData = () => {
  //Reads all the files in the post directory
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData: IPostMetaData[] = fileNames.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const fullPath = path.join(postDirectory, filename);
    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Date(data.date).toLocaleDateString(
      "en-IN",
      options
    );

    const frontmatter = {
      ...data,
      date: formattedDate,
    };
    
    return {
      slug,
      ...frontmatter,
    } as IPostMetaData;
  });

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postDirectory);

  return fileNames.map((fileName: string) => {
    return {
      params: {
        slug: fileName.replace(".mdx", "")
      }
    }
  });
}

export const getPost = (slug: string) => {
  const fullPath = path.join(postDirectory, `${slug}.mdx`);
  const post = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(post);

  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = new Date(data.date).toLocaleDateString(
    "en-IN",
    options
  );

  const frontmatter = {
    ...data,
    date: formattedDate,
  } as IPostMetaData;

  return {
    content: content,
    data: frontmatter
  } as IPost;
}