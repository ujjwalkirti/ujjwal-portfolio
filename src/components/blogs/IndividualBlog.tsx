import moment from "moment";
import { useRouter } from "next/router";
import { monsterrat } from "../data";

type props = {
  blog: Blog;
};

function trimContent(content: string) {
  if (content.length <= 150) {
    return content + "...";
  } else {
    return content.substr(0, 250) + "...";
  }
}

const IndividualBlog = ({ blog }: props) => {
  const parsedDate = moment(blog.created_at, "YYYY-MM-DDTHH:mm:ssZ");
  const router = useRouter();
  const handleNavigation = () => {
    // Navigate to a different page with the data
    router.push({
      pathname: "/blogs/" + blog.id,
    });
  };

  return (
    <div
      className={
        "bg-inherit border border-gray-700 rounded-sm w-full md:w-2/3 mx-auto shadow-2xl p-3 pt-14 " +
        monsterrat.className
      }
    >
      <p className="lg:text-sm text-center">
        {parsedDate.format("MMM DD, YYYY")}
      </p>
      <div className="px-2 py-4 flex flex-col gap-3 items-center">
        <p className=" text-3xl lg:text-4xl font-semibold text-center">
          {blog.title}
        </p>

        <p className="text-justify lg:text-sm">{trimContent(blog.intro)}</p>
        <button
          onClick={() => {
            handleNavigation();
          }}
          className="border border-gray-700 rounded-full  text-center py-1 px-2"
        >
          Read More!
        </button>
      </div>
    </div>
  );
};

export default IndividualBlog;
