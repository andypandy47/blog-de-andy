import { IPostLink } from "../../utilities/post-interfaces";

interface LinkListProps {
    postLinks: IPostLink[];
}

const LinkList: React.FC<LinkListProps> = ({postLinks}) => {
    return (
        <>
            {postLinks?.map((value: IPostLink, index: number) => (
                <div>{value.displayedLink}</div>
            ))}
        </>
    )
}