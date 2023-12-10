// import utilities from 'astro:content'
import { z, defineCollection } from "astro:content";
// define a 'type and 'scema' for each collection
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.object({ alt: z.string().optional(), src: z.string().optional() }),
    timestamp: z.date(),
    description: z.string(),
    codeLink: z.string().optional(),
    demoLink: z.string().optional(),
  }),
});
// export a single 'collections' object to register your collection(s)
export const collections = {
  projects: projectsCollection,
}
