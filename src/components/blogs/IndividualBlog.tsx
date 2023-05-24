import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { IoIosThumbsDown, IoIosThumbsUp } from "react-icons/io";
import { monsterrat } from "../data";

type props = {
  blog: Blog;
};

function trimContent(content: string) {
  if (content.length <= 150) {
    return content + "...";
  } else {
    return content.substr(0, 150) + "...";
  }
}

const IndividualBlog = ({ blog }: props) => {
  const parsedDate = moment(blog.created_at, "YYYY-MM-DDTHH:mm:ssZ");
  const router = useRouter();
  const handleNavigation = () => {
    // Navigate to a different page with the data
    router.push({
      pathname: "/blogs/" + blog.id,
      query: { blog: JSON.stringify(blog) },
    });
  };

  return (
    <div className={"bg-[#112240] " + monsterrat.className}>
      <div className="relative h-56 w-full">
        <Image
          src={blog.img_url}
          alt="the blog's image"
          fill
          className="rounded-t-md"
        />
      </div>
      <div className="px-2 py-4 flex flex-col gap-3 items-center">
        <p className="text-white text-3xl lg:text-xl font-bold text-center">
          {blog.title}
        </p>
        <div className="flex justify-between w-full">
          <div className="flex gap-3 text-xl lg:text-sm">
            {/* for upvotes */}
            <div className="flex items-center gap-2">
              <IoIosThumbsUp />
              <p>{blog.upvotes}</p>
            </div>
            {/* for downvotes */}
            <div className="flex items-center gap-2">
              <IoIosThumbsDown />
              <p>{blog.downvotes}</p>
            </div>
          </div>
          <div className="lg:text-lg lg:text-end">
            <p>by {blog.author}</p>
            <p className="lg:text-sm italic">
              {parsedDate.format("MMM DD, YYYY")}
            </p>
          </div>
        </div>

        <p className="text-justify lg:text-sm">{trimContent(blog.content)}</p>
        <button
          onClick={() => {
            handleNavigation();
          }}
          className="bg-white text-blue-700 text-xl lg:text-sm font-semibold w-1/2 text-center py-2 rounded-md"
        >
          Read More!
        </button>
      </div>
    </div>
  );
};

export default IndividualBlog;
