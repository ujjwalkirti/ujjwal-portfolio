import { GITHUB_API_URL } from "@/constants/urls";
import { getAuthenticatedHeaders } from "../blogs";
import axios, { AxiosError } from "axios";
import yaml from "js-yaml";

export async function getAllBlogSlugs(): Promise<string[]> {
    try {
        // Fetch the YAML file containing blog metadata with authenticated headers
        const response = await axios.get(GITHUB_API_URL, {
            headers: getAuthenticatedHeaders(),
        });

        const parsedData = yaml.load(response.data);
        if (!Array.isArray(parsedData)) {
            console.error("Parsed YAML data is not an array");
            return [];
        }

        // Extract slugs from the blog entries
        const slugs = parsedData.map((blog: any) => blog.slug);

        return slugs;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log(error.response?.data);
        } else {
            console.log(error);
        }
        return [];
    }
}
