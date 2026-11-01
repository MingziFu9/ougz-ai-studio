import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const categories = defineCollection({
  loader: file('src/data/categories.yaml'),
  schema: z.object({
    name: z.string(),
    en: z.string(),
    color: z.string(),
    colorDark: z.string(),
    blurb: z.string(),
    order: z.number(),
  }),
});

const systems = defineCollection({
  loader: file('src/data/systems.yaml'),
  schema: z.object({
    name: z.string(),
    short: z.string().max(5),
    category: z.string(),
    status: z.enum(['online', 'building']).default('online'),
    url: z.string().url().optional(),
    network: z.enum(['intranet', 'public']),
    login: z.boolean().default(false),
    slogan: z.string().optional(),
    description: z.string(),
    intro: z.string().default(''),
    audience: z.string().default(''),
    scene: z.string(),
    features: z.array(z.string()).default([]),
    steps: z.array(z.string()).default([]),
    owner: z.string().default(''),
    contact: z.string().default(''),
    updated: z.string().default(''),
    art: z.string().optional(),
    order: z.number().default(100),
  }).refine((d) => d.status === 'building' || !!d.url, { message: '已上线（status: online）的系统必须填写 url' }),
});

const team = defineCollection({
  loader: file('src/data/team.yaml'),
  schema: z.object({ name: z.string(), role: z.string().optional(), photo: z.string().optional(), intro: z.string().default(''), order: z.number().default(0) }),
});

const showcase = defineCollection({
  loader: file('src/data/showcase.yaml'),
  schema: z.object({
    title: z.string(),
    system: z.string(),
    note: z.string().default(''),
    image: z.string().optional(),
    video: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const faq = defineCollection({
  loader: file('src/data/faq.yaml'),
  schema: z.object({ q: z.string(), a: z.string() }),
});

const courses = defineCollection({
  loader: file('src/data/courses.yaml'),
  schema: z.object({
    no: z.number(),
    inPlan: z.boolean().default(true),
    name: z.string(),
    group: z.enum(['base', 'core', 'ext']),
    status: z.enum(['online', 'building']).default('building'),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    chapters: z.number().optional(),
    blurb: z.string().default(''),
    res: z.array(z.enum(['book', 'ppt', 'anim', 'quiz', 'lab'])).default([]),
  }),
});

export const collections = { categories, systems, team, showcase, faq, courses };
