// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string().optional(),
      seo: z.string().optional(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        altText: z.string()
      }).optional(),
      tags: z.array(z.string()).optional(),
      isDraft: z.boolean().optional(),
      containsImage: z.boolean().optional(),
    })
});

const digestCollection = defineCollection({
    type: 'content',
    schema: z.object({
      pubDate: z.date(),
      cleanContent: z.string().optional(),
      summary: z.string().optional(),
      gpt_summary: z.string().optional(),
      author: z.string(),
      channel: z.string(),
      image: z.object({
        url: z.string(),
        altText: z.string()
      }).optional(),
      tags: z.array(z.string()).optional()
    })
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    project: z.string(),
    collection: z.string(),
    category: z.string(),
    pubDate: z.date(),
    summary: z.string().optional(),
    image: z.object({
      url: z.string(),
      altText: z.string()
    }).optional(),
    meta: z.record(z.string()).optional(),  })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: postsCollection,
  digest: digestCollection,
  projects: projectsCollection
};