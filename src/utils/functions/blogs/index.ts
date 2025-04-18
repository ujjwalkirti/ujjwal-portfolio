import { GITHUB_API_URL, GITHUB_ASSETS_BASE, GITHUB_MD_BASE } from "@/constants/urls";
import { config } from "@/lib/config";
import axios, { AxiosError } from "axios";
import yaml from "js-yaml";
import { Blog, IndividualBlog } from "Typings";

export const getAuthenticatedHeaders = () => {
    const headers: Record<string, string> = {
        Accept: "application/vnd.github.v3.raw",
    };

    // Add authentication if token is available
    if (config.github.token) {
        headers.Authorization = `token ${config.github.token}`;
    }

    return headers;
};

export async function getIndividualBlogFromGitHub(slug: string): Promise<IndividualBlog | null> {
    try {
        // Fetch the YAML file containing blog metadata with authenticated headers
        const response = await axios.get(GITHUB_API_URL, {
            headers: getAuthenticatedHeaders(),
        });

        const parsedData = yaml.load(response.data);
        if (!Array.isArray(parsedData)) {
            throw new Error("Parsed YAML data is not an array");
        }

        // Find the blog with the matching slug
        const blogEntry = parsedData.find((blog: any) => blog.slug === slug);
        if (!blogEntry) {
            console.error(`Blog with slug "${slug}" not found.`);
            return null;
        }

        // Fetch the markdown content with authenticated headers
        const markdownUrl = `${GITHUB_MD_BASE}/blogs/${slug}/content.md`;
        const markdownResponse = await axios.get(markdownUrl, {
            headers: getAuthenticatedHeaders(),
        });

        // Construct the Blog object
        const blog: IndividualBlog = {
            title: blogEntry.title,
            description: blogEntry.description,
            created: blogEntry.created,
            updated: blogEntry.updated,
            markdown: markdownResponse.data,
            thumbnail: `${GITHUB_ASSETS_BASE}/${blogEntry.thumbnail}`,
            authors: blogEntry.authors,
            tags: blogEntry.tags,
            branch: config.github.blogBranchName
        };

        return blog;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log(error.response?.data);
        } else {
            console.log(error);
        }
        return null;
    }
}


export async function getBlogsFromGitHub(): Promise<Blog[]> {
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
