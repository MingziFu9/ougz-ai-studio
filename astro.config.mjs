// @ts-check
import { defineConfig } from 'astro/config';

// 网站根路径由环境变量 BASE_PATH 决定：
// - GitHub Pages（https://mingzifu9.github.io/ougz-ai-studio/）：BASE_PATH=/ougz-ai-studio/，在 .github/workflows/deploy.yml 里设置
// - 自己的服务器部署在根路径：不设置，默认 '/'
export default defineConfig({
  site: process.env.SITE_URL || 'https://mingzifu9.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
