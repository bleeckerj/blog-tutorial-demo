// src/utils/getPostsByYear.js (or directly in your page script)
// collections are defined in src/config.ts - jcb

import { getCollection } from 'astro:content';

export async function getPostsByYear() {
    const posts = await getCollection('blog');
    // Group posts by year
const postsByYear = {};
posts.forEach(post => {
    const year = new Date(post.data.pubDate).getFullYear();
    if (!postsByYear[year]) {
        postsByYear[year] = [];
    }
    postsByYear[year].push(post);
});

// Get years and sort them in descending order
const sortedYears = Object.keys(postsByYear).sort((a, b) => b - a);

// Iterate over each year in sorted order
sortedYears.forEach(year => {
    const postsForYear = postsByYear[year];
    // Now you can iterate over 'postsForYear'
    // Example: console.log(year, postsForYear);
});


    return postsByYear;
}
