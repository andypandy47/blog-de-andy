import * as React from "react";

interface PostHeaderProps {
    title: string;
    date: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({title, date}) => {
    return (
        <div className="text-left py-3 tracking-widest">
            <h1 className="text-2xl font-bold px-4">{title}</h1>
            <h2 className="text-xs font-light text-text-secondary tracking-normal pl-4">{date}</h2>
        </div>
    );
}

export default PostHeader;