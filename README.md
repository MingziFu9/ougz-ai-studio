# ougz 人工智能工作室 · 系统门户

ougz 人工智能工作室自研系统的统一入口：展示系统、说明用法、一键打开。用 [Astro](https://astro.build) 生成纯静态网站，不需要数据库和后端，任何能放静态文件的服务器（Nginx 等）都能部署。

## 页面

| 地址 | 内容 |
| --- | --- |
| `/` | 首页：系统地图、按场景分组的系统卡片 |
| `/systems/<id>/` | 每个系统的详情页：场景、功能、上手步骤、访问信息、同类系统 |
| `/guide/` | 使用指南：内网/公网系统清单、常见问题 |
| `/showcase/` | 成果展示 |
| `/courses/` | 开源课程 |
| `/about/` | 关于团队 |

网站会自动检测访问者是否在单位内网：不在内网时，内网系统的「立即使用」会换成「需连内网」，并提示先连 VPN。检测方法是让浏览器访问 `src/data/site.ts` 里的 `intranetProbe` 地址。

## 改内容：只需要改 `src/data/` 下的文件

| 文件 | 改什么 |
| --- | --- |
| `systems.yaml` | 系统清单：名称、地址、内网/公网、简介、功能、上手步骤、负责人。**新增系统就复制一段改字段** |
| `categories.yaml` | 分类名称、颜色、简介 |
| `showcase.yaml` | 成果展示条目。图片/视频放到 `public/showcase/`，再在条目里填 `/showcase/文件名` |
| `team.yaml` | 团队成员 |
| `courses.yaml` | 开源课程：课程名称、分组、状态、网址和仓库 |
| `faq.yaml` | 使用指南里的常见问题 |
| `site.ts` | 站点名称、内网检测地址、反馈渠道 |

`systems.yaml` 里的简介和功能是根据系统名称写的初稿，负责人、联系方式、更新时间都还是「待补充」，请各系统负责人核对补全。改完重新构建即可。

## 本地预览与构建

需要 Node.js 18.20 以上（推荐 22）。

```bash
npm install
npm run dev       # 本地预览，改文件后页面自动刷新：http://localhost:4321
npm run build     # 生成静态文件到 dist/
npm run preview   # 预览构建结果
```

## 发布

### GitHub Pages（自动）

网址：<https://mingzifu9.github.io/ougz-ai-studio/>

推送到 `main` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）会自动构建并发布，一两分钟后生效。首次使用需要在仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。

### 自己的服务器（Nginx）

网站也部署在 <https://8.163.117.26:15499/>，作为国内访问的镜像。构建时不设置 `BASE_PATH`（默认根路径 `/`），把 `dist/` 里的文件上传到服务器的网站目录即可：

```bash
npm ci
npm run build          # 根路径版本，用于自己的服务器
```

如果要部署在子路径（例如 `/portal/`），构建前设置环境变量 `BASE_PATH=/portal/`。

## 字体

标题用思源宋体（Noto Serif SC），代码和地址用 JetBrains Mono，字体文件随网站一起打包，不依赖外网，内网也能正常显示。

## 后续计划

- 每个系统的上手教程截图或录屏、样例成品
- 在线状态检测（例如部署 Uptime Kuma，卡片上显示红绿灯）
- 访问统计（Umami 或 Nginx 日志）
