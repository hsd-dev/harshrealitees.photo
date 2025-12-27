import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  essays,
};
