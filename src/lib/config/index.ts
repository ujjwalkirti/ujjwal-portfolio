// This file centralizes environment configuration
export const config = {
    // Base URL
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL || '',


    // GitHub configuration
    github: {
        token: process.env.GITHUB_TOKEN || '',
        blogBranchName: process.env.BLOG_BRANCH_NAME || 'main',
        apiBase: 'https://api.github.com',
        rawContentBase: 'https://raw.githubusercontent.com',
    },
};
