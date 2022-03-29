module.exports = {
    plugins: {
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
          features: {
            'custom-properties': false,
          },
        },
        '@fullhuman/postcss-purgecss': {
            content: [
                './src/pages/**/*.{js,jsx,ts,tsx,svelte,astro}',
                './src/components/**/*.{js,jsx,ts,tsx,svelte,astro}',
                './src/modules/**/*.{js,jsx,ts,tsx,svelte,astro}'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: ["html", "body", /svelte-/]
        },
      },
  }
