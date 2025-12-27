import { defineCollection, reference } from 'astro:content';

export const collections = {
  essays: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.date(),
      description: z.string().optional(),
      cover: z.string().optional(),
    }),
  }),
};
