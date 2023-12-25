import { useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import { useContext } from "react";

export const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[450px] py-3 flex-col gap-y-7">
      {loading ? (
        <Spinner></Spinner>
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <p className="font-bold text-xs   ">{post.title}</p>
              <p className="text-[10px]">
                By <span>{post.author}</span> on <span>{post.category} </span>
              </p>
              <p>Posted on {post.date}</p>
              <p>{post.content}</p>
              <div>
                {post.tags.map((tag, idx) => {
                  return <span key={idx}>{`#${tag}`}</span>;
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
