// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string().optional(),
      seo: z.string().default('Design Fiction'),
      author: z.string().optional().default('Julian Bleecker'),
      authorUsername: z.string().default('@nearfuturelab'),
      image: z.object({
        url: z.string().default('https://backoffice.nearfuturelaboratory.com/favicon.svg'),
        altText: z.string().default('Imagination Unlocks Greatness'),
        caption: z.string().default('Imagination Unlocks Greatness')
      }).optional(),
      og_type: z.string().default('article'),
      tags: z.array(z.string()).optional(),
      isDraft: z.boolean().default(true),
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

const DesignFictionArchetypes = z.enum(['NEWSPAPER', 'MAGAZINE', 'CPG', 'ADVERTISEMENT', 'MENU','PRODUCT CATALOG', 'QUICK START GUIDE', 'INSTRUCTIONS', 'UNBOXING VIDEO', 'ANNUAL REPORT', 'OTHER']);
const imageSchema = z.object({
  url: z.string(),  //
  caption: z.string(), // Caption
  altText: z.string()     // Simple string for alt text
});

const nflProjectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    projectName: z.string(),
    title: z.string(), /* this is largely for open graph */
    subtitle: z.string(), /* Can be for example, 'The Newspaper from a Future of Sports' */
    projectType: z.string(),
    client: z.string(),
    clientURL: z.string().url().optional(),
    isDesignFiction: z.boolean().default(true),
    archetype: DesignFictionArchetypes.optional(),
    tags: z.array(z.string()).optional(),
    pubDate: z.date(),
    lastUpdate: z.date().optional(),
    projectYear: z.number(),
    projectDurationWeeks: z.number(),
    team: z.array(z.string()).default(["Near Future Laboratory", "Tuna Fish"]), 
    description: z.string(),
    summary: z.string().optional(),
    projectImages: z.array(imageSchema), // the first of this array will be used as the 'main' cover image
    author: z.string(),
    authorUsername: z.string().default('@nearfuturelab'),
    seoImage: z.object({
      url: z.string().default('https://backoffice.nearfuturelaboratory.com/favicon.svg'),
      altText: z.string().default('Near Future Laboratory Design Fiction Imagine Harder')
    }).optional(),
    og_type: z.string().default('article'),
    isDraft: z.boolean().default(true),
    containsImage: z.boolean().optional(),
    meta: z.record(z.string()).optional(),  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: postsCollection,
  digest: digestCollection,
  nfl_projects: nflProjectsCollection,
  projects: projectsCollection,
};