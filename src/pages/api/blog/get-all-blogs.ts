import type { NextApiRequest, NextApiResponse } from 'next'
import { getBlogsFromGitHub } from '@/utils/functions/blogs';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const blogs = await getBlogsFromGitHub();
        res.status(200).json(blogs);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ error: "Failed to fetch blogs" });
    }

}
