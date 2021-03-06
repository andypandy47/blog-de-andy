export interface IPostMetaData {
    slug: string;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    enabled: boolean;
}

export interface IPost {
    data: IPostMetaData;
    content: string;
}

export interface IPostLink {
    slug: string;
    displayedLink: string;
}