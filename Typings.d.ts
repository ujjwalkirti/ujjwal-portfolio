export interface Author {
  name: string;
  profile: string;
  avatar: string | null;
}

export interface Blog {
  title: string;
  slug: string;
  description: string;
  authors: Author[];
  image: string;
  tags: string[];
  created: string;
  updated: string;
}

export interface IndividualBlog {
  title: string;
  description?: string;
  authors: Author[];
  markdown: string;
  thumbnail: string | null;
  branch?: string;
  created: string;
  updated: string;
  tags: string[];
}
