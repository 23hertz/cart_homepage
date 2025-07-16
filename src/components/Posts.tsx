import type { IPost } from "../types/IPost";

const Post: React.FC<IPost> = ({title, body}) => {
    return (
        <div className="border-b border-gray-200 py-5">
            <h2 className="text-gray-700 text-xl font-bold">{title}</h2>
            <p className="text-gray-600">{body}</p>
        </div>
    );
};
export default Post;
