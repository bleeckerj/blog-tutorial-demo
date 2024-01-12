import { getCollection } from 'astro:content';

export async function getDigestTags() {
    const posts = await getCollection('digest');
    const tags = new Set();

    posts.forEach(post => {
        post.data.tags?.forEach(tag => tags.add(tag));
    });

    return Array.from(tags);
}
