import { defineCollection, z } from 'astro:content';

const resourceSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  type: z.enum(['tutorial', 'video', 'ebook', 'tool', 'documentation']),
  topics: z.array(z.string()),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  cost: z.enum(['free', 'paid', 'freemium']),
  lastVerified: z.string(),
  description: z.string().optional(),
  featured: z.boolean().default(false),
  image: z.string().optional(),
  author: z.string().optional(),
});

const topicSchema = z.object({
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  parentTopic: z.string().optional(),
  order: z.number().default(0),
});

export const collections = {
  resources: defineCollection({ schema: resourceSchema }),
  topics: defineCollection({ schema: topicSchema }),
};
