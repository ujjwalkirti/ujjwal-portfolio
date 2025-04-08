const axios = require('axios');
const yaml = require('js-yaml');
const { AxiosError } = require('axios');

async function getAllBlogSlugs() {
    try {
        const GITHUB_API_URL = `https://api.github.com/repos/ujjwalkirti/blog/contents/_blog.yml?ref=${process.env.BLOG_BRANCH_NAME}`;
        const response = await axios.get(GITHUB_API_URL);

        // Decode base64 content
        const decodedContent = Buffer.from(response.data.content, 'base64').toString('utf-8');

        // Load YAML
        const parsedData = yaml.load(decodedContent);

        if (!Array.isArray(parsedData)) {
            console.error("Parsed YAML data is not an array");
            return [];
        }

        // Extract slugs
        const slugs = parsedData.map((blog) => blog.slug);
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


/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://ujjwal-portfolio-flame.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/api/*'],
    additionalPaths: async (config) => {
        const slugs = await getAllBlogSlugs();
        console.log(slugs);
        return slugs.map((slug) => ({
            loc: `/blogs/${slug}`,
            changefreq: 'daily',
            priority: 0.6,
        }));

    },
};
