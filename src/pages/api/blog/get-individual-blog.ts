import { getIndividualBlogFromGitHub } from '@/utils/functions/blogs';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { slug } = req.body;

        if (!slug) return res.status(400).json({ error: "Slug is required" });

        const blogs = await getIndividualBlogFromGitHub(slug as string);
        res.status(200).json(blogs);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ error: "Failed to fetch blogs" });
    }

}
