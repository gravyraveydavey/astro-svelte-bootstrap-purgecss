import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [svelte()],
    // projectRoot: './',
    // public: './public/',
    // dist: './dist/',
    // src: './src/',
    // pages: './src/pages/',
    // vite: {},
});
