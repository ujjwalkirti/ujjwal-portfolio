type Blog = {
  _id: string;
  author: string;
  title: string;
  publishedAt: string;
  slug: {
    current: string;
    _type: string;
  };
  body: string;
  mainImage: {
    alt: string;
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  intro?: string;
};

type Blog_Comment = {
  id: number;
  author: string;
  content: string;
  created_at: string;
  table_id: string;
};
