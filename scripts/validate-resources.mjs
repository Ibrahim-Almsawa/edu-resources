import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { z } from 'zod';

const resourceSchema = z.object({
  title: z.string().min(1),
  url: z.string().url(),
  type: z.enum(['tutorial', 'video', 'ebook', 'tool', 'documentation']),
  topics: z.array(z.string()).min(1),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  cost: z.enum(['free', 'paid', 'freemium']),
  lastVerified: z.string(),
  description: z.string().optional(),
  featured: z.boolean().optional(),
});

async function validateResources() {
  const resourcesDir = join(process.cwd(), 'src/content/resources');
  const files = await readdir(resourcesDir);
  let hasErrors = false;

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    try {
      const content = await readFile(join(resourcesDir, file), 'utf-8');
      const { data } = matter(content);
      
      await resourceSchema.parseAsync(data);
    } catch (error) {
      console.error(`Error in ${file}:`, error);
      hasErrors = true;
    }
  }

  if (hasErrors) {
    process.exit(1);
  }
}

validateResources().catch(error => {
  console.error('Validation failed:', error);
  process.exit(1);
});
