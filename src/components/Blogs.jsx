import { useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import { useContext } from "react";

export const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[670px] py-8 flex-col gap-y-7 mt-[66px] mb-[70px]">
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
              <p className="font-bold text-lg">{post.title}</p>
              <p className="text-sm mt-[4px]">
                By <span className="italic">{post.author}</span> on{" "}
                <span className="underline bold ">{post.category} </span>
              </p>
              <p className="text-sm mt-[4px]">Posted on {post.date}</p>
              <p className="text-md mt-[14px]">{post.content}</p>
              <div>
                {post.tags.map((tag, idx) => {
                  return (
                    <span
                      key={idx}
                      className="text-blue-700 underline font-bold text-[8px] mt-[4px]"
                    >{`#${tag}`}</span>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
