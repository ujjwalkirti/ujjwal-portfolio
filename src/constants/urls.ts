import { config } from "@/lib/config";

export const linkedin_url = process.env.NEXT_PUBLIC_LINKEDIN_URL || "";
export const resume_url = process.env.NEXT_PUBLIC_RESUME_URL || "";
export const twitter_url = process.env.NEXT_PUBLIC_TWITTER_URL || "";
export const github_url = process.env.NEXT_PUBLIC_GITHUB_URL || "";
export const instagram_url = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";
export const url = process.env.NEXT_PUBLIC_BASE_URL || "";


export const GITHUB_API_URL = `${config.github.apiBase}/repos/ujjwalkirti/blog/contents/_blog.yml?ref=${config.github.blogBranchName}`;
export const GITHUB_ASSETS_BASE = `${config.github.rawContentBase}/ujjwalkirti/blog/${config.github.blogBranchName}`;
export const GITHUB_RAW_BASE = `${config.github.rawContentBase}/ujjwalkirti/blog/${config.github.blogBranchName}`;
export const GITHUB_MD_BASE = `${GITHUB_RAW_BASE}`;
