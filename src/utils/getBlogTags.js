import { getCollection } from 'astro:content';

export async function getBlogTags() {
    const posts = await getCollection('blog');
    const tags = new Set();

    posts.forEach(post => {
        post.data.tags?.forEach(tag => tags.add(tag));
    });

    return Array.from(tags);
}
