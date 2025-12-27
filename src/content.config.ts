import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
      title: z.string(),

      hero: z.object({
        image: z.string(),
        title: z.string(),
        description: z.string(),
        location: z.string(),
        year: z.number(),
      }),

      slides: z.array(
        z.object({
          image: z.string(),
          text: z.string(),
        })
      ),
    }),
});

export const collections = {
  essays,
};


