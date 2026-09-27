// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import mdx from '@astrojs/mdx';

// TODO: astro blog template has fonts here.

// https://astro.build/config
export default defineConfig({
  site: 'https://cool-bu1lder.github.io',
  // base: '/portfolio-prototype',
  integrations: [
    preact(),
    expressiveCode({
      themes: ['github-dark'],
      plugins: [pluginLineNumbers()],
      defaultProps: {
        showLineNumbers: false,
      },
      useDarkModeMediaQuery: false,
      styleOverrides: {
        borderWidth: '0',
        borderRadius: '0.625rem',
        borderColor: 'var(--border)',
        codeFontFamily: "'JetBrains Mono Variable', ui-monospace, SFMono-Regular, monospace",
        uiFontFamily: "'Inter Variable', ui-sans-serif, system-ui, sans-serif",
        codeFontSize: '0.8125rem',
        codeLineHeight: '1.7',
        codeBackground: 'var(--code-bg)',
        frames: {
          shadowColor: 'transparent',
          editorActiveTabIndicatorTopColor: 'var(--primary)',
          editorTabBarBackground: 'var(--muted)',
          editorActiveTabBackground: 'var(--code-bg)',
          terminalTitlebarBackground: 'var(--muted)',
          terminalBackground: 'var(--code-bg)',
        },
      },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
    publicDir: 'public',
  },
});
