import { SITE } from '../data/site';

type Net = 'in' | 'out';
const store = {
  get: (): Net | null => { try { const v = sessionStorage.getItem('net'); return v === 'in' || v === 'out' ? v : null; } catch { return null; } },
  set: (v: Net) => { try { sessionStorage.setItem('net', v); } catch { /* 隐私模式等情况下忽略 */ } },
};

/** 内网检测：能访问 SITE.intranetProbe 就认为在内网。结果写到 body.net-out 上，CSS 据此切换按钮和提示。 */
export function initNetwork() {
  const note = document.getElementById('netnote');
  const btnIn = document.getElementById('net-in');
  const btnOut = document.getElementById('net-out');
  const nIn = document.querySelectorAll('#systems .card[data-net="intranet"]').length;

  const set = (net: Net, how: 'auto' | 'manual' | 'unknown') => {
    document.body.classList.toggle('net-out', net === 'out');
    btnIn?.setAttribute('aria-pressed', String(net === 'in'));
    btnOut?.setAttribute('aria-pressed', String(net === 'out'));
    if (!note) return;
    const tail = how === 'auto' ? '（自动检测）' : how === 'manual' ? '（手动设置）' : '（无法自动检测，默认按内网显示）';
    note.innerHTML = net === 'in'
      ? `<span class="dot ok"></span><span>你在单位内网，全部系统都可以直接打开${tail}</span>`
      : `<span class="dot warn"></span><span>未连上单位内网，${nIn || '内网'}个内网系统需要先连 VPN${tail}</span>`;
  };
  btnIn?.addEventListener('click', () => { store.set('in'); set('in', 'manual'); });
  btnOut?.addEventListener('click', () => { store.set('out'); set('out', 'manual'); });

  const manual = store.get();
  if (manual) return set(manual, 'manual');
  if (/^10\.|^192\.168\.|^172\.(1[6-9]|2\d|3[01])\./.test(location.hostname)) return set('in', 'auto');
  if (location.protocol === 'https:' && SITE.intranetProbe.startsWith('http:')) return set('in', 'unknown');

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 3000);
  fetch(SITE.intranetProbe, { mode: 'no-cors', cache: 'no-store', signal: ctrl.signal })
    .then(() => store.get() || set('in', 'auto'))
    .catch(() => store.get() || set('out', 'auto'))
    .finally(() => clearTimeout(timer));
}

/** 动效：数字滚动、地图光点、卡片滚动入场、鼠标光斑与倾斜。系统开启「减少动态效果」时全部跳过。 */
export function initMotion() {
  const MOTION = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  const map = document.getElementById('map');
  if (map) setTimeout(() => map.classList.add('drawn'), 2200);

  // 卡片光斑跟随鼠标（不算动效，始终开启）
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  document.addEventListener('pointermove', (e) => {
    const c = (e.target as Element).closest?.<HTMLElement>('.card'); if (!c) return;
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    c.style.setProperty('--mx', `${x * 100}%`); c.style.setProperty('--my', `${y * 100}%`);
    if (MOTION && fine) c.style.transform = `translateY(-4px) perspective(1000px) rotateX(${(0.5 - y) * 4}deg) rotateY(${(x - 0.5) * 4}deg)`;
  });
  document.addEventListener('pointerout', (e) => {
    const c = (e.target as Element).closest?.<HTMLElement>('.card');
    if (c && !c.contains(e.relatedTarget as Node)) c.style.transform = '';
  });
  if (!MOTION) return;

  // 数字从 0 滚动到实际值
  document.querySelectorAll<HTMLElement>('[data-to]').forEach((b) => {
    const to = Number(b.textContent), t0 = performance.now() + 400;
    const step = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - t0) / 1100));
      b.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    b.textContent = '0'; requestAnimationFrame(step);
  });

  // 地图连线上的数据光点
  if (map) {
    const NS = 'http://www.w3.org/2000/svg';
    const firstNode = map.querySelector('.node');
    map.querySelectorAll('line.link').forEach((l, i) => {
      const [x1, y1, x2, y2] = ['x1', 'y1', 'x2', 'y2'].map((k) => l.getAttribute(k));
      const t = `${(1.4 + i * 0.3).toFixed(2)}s`;
      const dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('r', '2.6'); dot.setAttribute('fill', l.getAttribute('data-c') || '#fff'); dot.setAttribute('opacity', '0');
      dot.innerHTML = `<set attributeName="opacity" to="1" begin="${t}"/><animateMotion dur="${2.2 + (i % 3) * 0.5}s" begin="${t}" repeatCount="indefinite" path="M${x1} ${y1}L${x2} ${y2}"/>`;
      map.insertBefore(dot, firstNode);
    });
  }

  // 卡片滚动入场：首屏内的依次浮入，首屏外的滚动到时再浮入
  const cards = [...document.querySelectorAll<HTMLElement>('.card')];
  const reveal = (el: HTMLElement, animate: boolean) => {
    el.classList.remove('pre');
    if (animate) { el.classList.add('show'); el.addEventListener('animationend', () => el.classList.remove('show'), { once: true }); }
  };
  let k = 0;
  cards.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight) { el.style.setProperty('--d', `${(k++ * 0.07).toFixed(2)}s`); reveal(el, true); }
    else { el.style.setProperty('--d', `${((k++ % 2) * 0.1).toFixed(2)}s`); el.classList.add('pre'); }
  });
  let raf = 0;
  const sweep = () => {
    raf = 0;
    document.querySelectorAll<HTMLElement>('.card.pre').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0) reveal(el, false);
      else if (r.top < innerHeight * 0.92) reveal(el, true);
    });
  };
  addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(sweep); }, { passive: true });
  addEventListener('resize', sweep);
}

/** 首屏演示窗口：轮流播放几个系统的使用过程（输入 → 点击 → 生成 → 完成提示）。 */
export function initDemo() {
  const demo = document.getElementById('demo'); if (!demo) return;
  const MOTION = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scenes = [...demo.querySelectorAll<HTMLElement>('.scene')];
  const tabs = [...demo.querySelectorAll<HTMLElement>('.tab')];
  const urls = [...demo.querySelectorAll<HTMLElement>('.url')];
  const screen = demo.querySelector<HTMLElement>('.screen')!;
  const cursor = demo.querySelector<SVGElement>('.cursor')!;
  const toast = demo.querySelector<HTMLElement>('#toast')!;
  let timers: number[] = [], cur = 0;
  const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
  const status = (sc: HTMLElement, t: string, cls: string) => { const s = sc.querySelector('.status')!; s.className = `status ${cls}`; s.querySelector('em')!.textContent = t; };
  const type = (el: HTMLElement, ms: number) => {
    const text = el.dataset.text || ''; el.textContent = '';
    if (!MOTION) { el.textContent = text; return; }
    const per = ms / text.length;
    [...text].forEach((_, i) => at(per * i, () => (el.textContent = text.slice(0, i + 1))));
  };
  const count = (el: HTMLElement, ms: number) => {
    const to = Number(el.dataset.count), t0 = performance.now();
    if (!MOTION) { el.textContent = String(to); return; }
    const step = (t: number) => { const p = Math.min(1, (t - t0) / ms); el.textContent = String(Math.round(to * p)); if (p < 1 && el.isConnected) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const moveTo = (el: Element | null, ms: number) => {
    if (!el) return;
    const s = screen.getBoundingClientRect(), r = el.getBoundingClientRect();
    cursor.style.transition = `transform ${ms}ms cubic-bezier(.45,.05,.25,1), opacity .3s`;
    cursor.style.opacity = '1';
    cursor.style.transform = `translate(${r.left - s.left + r.width * 0.55}px,${r.top - s.top + r.height * 0.5}px)`;
  };

  function show(k: number) {
    timers.forEach(clearTimeout); timers = []; cur = k;
    scenes.forEach((s, i) => { s.hidden = i !== k; s.classList.remove('run', 'done'); });
    tabs.forEach((t, i) => t.setAttribute('aria-selected', String(i === k)));
    urls.forEach((u, i) => (u.hidden = i !== k));
    toast.classList.remove('on');
    const sc = scenes[k];
    status(sc, '就绪', '');
    sc.querySelectorAll<HTMLElement>('[data-count]').forEach((e) => (e.textContent = '0'));
    sc.querySelectorAll<HTMLElement>('.type').forEach((e) => (e.textContent = ''));
    if (!MOTION) {
      sc.classList.add('run', 'done'); status(sc, '已完成', 'ok');
      sc.querySelectorAll<HTMLElement>('.type').forEach((e) => type(e, 0));
      sc.querySelectorAll<HTMLElement>('[data-count]').forEach((e) => count(e, 0));
      return;
    }
    cursor.style.transition = 'none'; cursor.style.opacity = '0';
    cursor.style.transform = `translate(${screen.clientWidth * 0.82}px,${screen.clientHeight * 0.9}px)`;
    const pre = [...sc.querySelectorAll<HTMLElement>('.input .type, .drop .type')];
    pre.forEach((e) => at(300, () => type(e, 1100)));
    const btn = sc.querySelector('.go, .play');
    const t0 = btn ? (pre.length ? 1700 : 500) : 400;
    if (btn) { at(t0 - 650, () => moveTo(btn, 600)); at(t0, () => btn.classList.add('press')); at(t0 + 250, () => btn.classList.remove('press')); }
    at(t0 + 100, () => {
      sc.classList.add('run'); status(sc, '生成中', 'busy');
      sc.querySelectorAll<HTMLElement>('.type').forEach((e) => { if (!pre.includes(e)) type(e, 2600); });
      sc.querySelectorAll<HTMLElement>('[data-count]').forEach((e) => count(e, 3000));
    });
    at(t0 + 400, () => { cursor.style.opacity = '0'; });
    at(t0 + 3300, () => {
      sc.classList.add('done'); status(sc, '已完成', 'ok');
      toast.querySelector('span')!.textContent = sc.dataset.toast || ''; toast.classList.add('on');
    });
    at(t0 + 5600, () => show((cur + 1) % scenes.length));
  }
  tabs.forEach((t, i) => t.addEventListener('click', () => show(i)));
  show(0);
}
