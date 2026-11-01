import { getCollection } from 'astro:content';

export async function loadAll() {
  const categories = (await getCollection('categories')).sort((a, b) => a.data.order - b.data.order);
  const systems = (await getCollection('systems')).sort((a, b) => a.data.order - b.data.order);
  const catIds = new Set(categories.map((c) => c.id));
  for (const s of systems) {
    if (!catIds.has(s.data.category)) throw new Error(`systems.yaml: 系统 ${s.id} 的 category「${s.data.category}」在 categories.yaml 里不存在`);
  }
  const catById = Object.fromEntries(categories.map((c) => [c.id, c]));
  return { categories, systems, catById };
}

export const hostOf = (url = '') =>
  url.replace(/^https?:\/\//, '').replace(/\/(installed|workflow)\/.*/, '/$1/…').replace(/\/$/, '');

export const DEFAULT_STEPS = (login: boolean) => [
  `点击「立即使用」打开系统${login ? '并登录' : ''}`,
  '按页面提示上传或输入内容',
  '预览、修改并下载结果',
];

