import { config } from '@/lib/config';
import axios, { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import yaml from "js-yaml";
import { Blog } from 'Typings';

const GITHUB_API_URL = `${config.github.apiBase}/repos/ujjwalkirti/blog/contents/_blog.yml?ref=${config.github.blogBranchName}`;
const GITHUB_ASSETS_BASE = `${config.github.rawContentBase}/ujjwalkirti/blog/${config.github.blogBranchName}`;
const GITHUB_RAW_BASE = `${config.github.rawContentBase}/ujjwalkirti/blog/${config.github.blogBranchName}`;
const GITHUB_MD_BASE = `${GITHUB_RAW_BASE}`;

const getAuthenticatedHeaders = () => {
    const headers: Record<string, string> = {
        Accept: "application/vnd.github.v3.raw",
    };

    // Add authentication if token is available
    if (config.github.token) {
        headers.Authorization = `token ${config.github.token}`;
    }

    return headers;
};

async function getBlogsFromGitHub(): Promise<Blog[]> {
    try {
        // Fetch the raw YAML file from GitHub with authenticated headers
        const response = await axios.get(GITHUB_API_URL, {
            headers: getAuthenticatedHeaders(),
        });

        // Parse YAML content into JSON
        const parsedData = yaml.load(response.data);

        if (!Array.isArray(parsedData)) {
            throw new Error("Parsed YAML data is not an array");
        }

        // Map YAML structure to Blog interface
        const blogs: Blog[] = parsedData.map((blog: any) => ({
            title: blog.title,
            slug: blog.slug,
            description: blog.description,
            created: blog.created,
            updated: blog.updated,
            authors: blog.authors || [],
            image: `${GITHUB_ASSETS_BASE}/${blog.thumbnail}`,
            tags: blog.tags || [],
        }));

        return blogs.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime()).slice(0, 10);
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log(error.response?.data);
        }

        return [];
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const blogs = await getBlogsFromGitHub();
        res.status(200).json(blogs);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ error: "Failed to fetch blogs" });
    }

}
