import { supabase } from "@/lib/supabaseClient";
import React from "react";
import { toast } from "react-toastify";
import { libre_caslon_text } from "../data";
type props = {
  comments: Blog_Comment[];
  blog_id: string;
};
function CommentsSection({ comments, blog_id }: props) {
  const commentRef = React.useRef(null);
  const usernameRef = React.useRef(null);
  async function addComment(e: any) {
    e.preventDefault();
    const commentData = {
      table_id: blog_id,
      author: usernameRef.current.value,
      content: commentRef.current.value,
    };
    const { data, error } = await supabase.from("comments").insert(commentData);

    if (error) {
      toast.error("Something went wrong, please try again!");
      return null;
    }
    toast.success("Comment added successfully!");
    usernameRef.current.value = "";
    commentRef.current.value = "";
    return data;
  }
  return (
    <div className="w-full">
      <hr />
      <p
        className={
          "my-2 text-2xl font-semibold aqua " + libre_caslon_text.className
        }
      >
        Comments
      </p>
      <div className="flex flex-col gap-3">
        {comments &&
          comments.map((comment: Blog_Comment, index) => (
            <div key={index} className="bg-[#112240] rounded-md px-1 py-2">
              <p className="italic">
                <span className="font-semibold">{comment.author}</span> says
              </p>
              <p className="px-2">~ {comment.content}</p>
            </div>
          ))}
      </div>
      <form
        onSubmit={async (event) => {
          await addComment(event);
        }}
        className=" bg-[#112240] flex flex-col gap-3 my-3 px-2 py-2 text-black"
      >
        <textarea
          ref={commentRef}
          className="h-56 px-2 py-2 outline-none bg-[#0a192f] text-white"
          placeholder="Please Enter your comment here!"
        ></textarea>
        <input
          type="text"
          ref={usernameRef}
          className="px-2 py-2 outline-none bg-[#0a192f] text-white"
          required
          placeholder="Enter your name"
        />
        <button
          type="submit"
          className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white text-xl font-semibold w-1/2 text-center py-2 rounded-md mx-auto"
        >
          Add Comment!
        </button>
      </form>
      <hr className="mt-2" />
    </div>
  );
}

export default CommentsSection;
