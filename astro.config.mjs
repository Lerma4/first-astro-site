// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), svelte(), mdx()],
  output: 'hybrid',
  adapter: vercel()
});