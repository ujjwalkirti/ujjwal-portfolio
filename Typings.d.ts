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

export interface ProjectDescription {
  short: string;
  long: string;
}

export interface BaseProject {
  title: string;
  tags: string[];
  github_link?: string;
  deployed_link?: string;
}

// Featured project includes: image + long description object
export interface FeaturedProject extends BaseProject {
  desc: ProjectDescription;
  image_url: string;
}

// Noteworthy project includes: single-line description (string)
export interface NoteworthyProject extends BaseProject {
  desc: string;
}

interface ExperienceDescriptionLinks {
  description: string;
  links?: string[];
}

export interface Experience {
  title: string;
  company: string;
  website: string;
  date: string;
  description: ExperienceDescriptionLinks[];
  technologies: string[];
}

export interface NavbarLink {
  title: string;
  id: string;
  link?: string;
}
