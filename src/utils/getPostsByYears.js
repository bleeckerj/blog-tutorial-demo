// src/utils/getPostsByYear.js (or directly in your page script)
// collections are defined in src/config.ts - jcb

import { getCollection } from 'astro:content';

export async function getPostsByYear() {
    const posts = await getCollection('blog');
    const postsByYear = {};

    posts.forEach(post => {
        const year = new Date(post.data.pubDate).getFullYear();
        if (!postsByYear[year]) {
            postsByYear[year] = [];
        }
        postsByYear[year].push(post);
    });

    return postsByYear;
}
