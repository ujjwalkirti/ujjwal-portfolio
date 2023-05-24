type Blog = {
  id: number;
  author: string;
  title: string;
  created_at: string;
  upvotes: number;
  downvotes: number;
  content: string;
  img_url: string;
};

type Blog_Comment = {
  id: number;
  author: string;
  content: string;
  created_at: string;
  table_id: string;
};
