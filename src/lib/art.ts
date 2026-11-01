// 封面插画：每张画的是系统产出的东西。颜色全部来自 CSS 变量，深浅色主题自动适配。
export const S = "var(--surface)", L = "var(--line)", M = "var(--muted)", C = "var(--cat)", T = "var(--tile)";
export const ART: Record<string, string> = {
  ppt:`<g class="art"><g class="fan2"><rect x="150" y="38" width="170" height="104" rx="8" fill="${S}" stroke="${L}" transform="rotate(6 235 90)"/></g>
    <g class="fan1"><rect x="120" y="46" width="170" height="104" rx="8" fill="${S}" stroke="${L}" transform="rotate(-3 205 98)"/></g>
    <rect x="96" y="56" width="176" height="108" rx="8" fill="${S}" stroke="${L}"/>
    <rect x="96" y="56" width="176" height="22" rx="8" fill="${C}" opacity=".9"/><rect x="96" y="70" width="176" height="8" fill="${C}" opacity=".9"/>
    <rect x="110" y="92" width="70" height="56" rx="5" fill="${C}" opacity=".18"/><path d="M118 140l16-20 12 12 10-8 16 16z" fill="${C}" opacity=".55"/>
    <rect x="192" y="96" width="66" height="6" rx="3" fill="${L}"/><rect x="192" y="110" width="54" height="6" rx="3" fill="${L}"/><rect x="192" y="124" width="60" height="6" rx="3" fill="${L}"/>
    <g transform="translate(270 128)"><g class="pop"><rect width="104" height="46" rx="10" fill="${S}" stroke="${C}"/><path d="M14 46l-4 10 14-10z" fill="${S}" stroke="${C}"/>
    <rect x="12" y="12" width="70" height="5" rx="2.5" fill="${C}" opacity=".6"/><rect x="12" y="24" width="80" height="5" rx="2.5" fill="${L}"/><rect x="12" y="34" width="52" height="5" rx="2.5" fill="${L}"/></g></g></g>`,
  avatar:`<g class="art"><rect x="92" y="30" width="216" height="140" rx="12" fill="${S}" stroke="${L}"/>
    <rect x="100" y="38" width="200" height="104" rx="8" fill="${C}" opacity=".14"/>
    <circle cx="200" cy="80" r="20" fill="${C}" opacity=".75"/><path d="M162 142c4-26 22-36 38-36s34 10 38 36z" fill="${C}" opacity=".55"/>
    <rect x="148" y="122" width="104" height="12" rx="6" fill="${S}" opacity=".9"/><rect x="156" y="126" width="88" height="4" rx="2" fill="${M}" opacity=".6"/>
    <circle cx="116" cy="156" r="7" fill="${C}"/><path d="M114 152.5v7l5.5-3.5z" fill="${S}"/>
    <rect x="132" y="154" width="160" height="4" rx="2" fill="${L}"/><rect class="prog" x="132" y="154" width="70" height="4" rx="2" fill="${C}"/>
    <g transform="translate(312 52)"><circle cx="14" cy="14" r="14" fill="${S}" stroke="${L}"/><circle cx="14" cy="11" r="5" fill="${C}" opacity=".6"/><path d="M6 23c2-5 5-7 8-7s6 2 8 7" fill="${C}" opacity=".45"/>
    <circle cx="14" cy="50" r="14" fill="${S}" stroke="${L}"/><circle cx="14" cy="47" r="5" fill="${M}" opacity=".5"/><path d="M6 59c2-5 5-7 8-7s6 2 8 7" fill="${M}" opacity=".35"/></g></g>`,
  anim:`<g class="art"><rect x="70" y="34" width="260" height="108" rx="10" fill="${S}" stroke="${L}"/>
    <path d="M100 118q90 -92 180 0" fill="none" stroke="${C}" stroke-dasharray="3 6" opacity=".6"/>
    <circle cx="100" cy="118" r="7" fill="${C}" opacity=".25"/><circle cx="145" cy="86" r="7" fill="${C}" opacity=".4"/><circle cx="235" cy="86" r="7" fill="${C}" opacity=".4"/>
    <circle class="ball" cx="100" cy="118" r="10" fill="${C}"/>
    <rect x="70" y="154" width="260" height="22" rx="6" fill="${S}" stroke="${L}"/>
    <path d="M100 160l5 5-5 5-5-5z" fill="${C}"/><path d="M160 160l5 5-5 5-5-5z" fill="${C}"/><path d="M240 160l5 5-5 5-5-5z" fill="${M}" opacity=".5"/><path d="M300 160l5 5-5 5-5-5z" fill="${M}" opacity=".5"/>
    <rect x="198" y="152" width="2" height="26" fill="${C}"/></g>`,
  nano:`<g class="art"><g transform="translate(110 30)">
    <rect width="84" height="68" rx="8" fill="${C}" opacity=".2"/><circle cx="60" cy="20" r="9" fill="${C}" opacity=".6"/><path d="M0 68v-14l24-24 22 22 14-10 24 22v4z" fill="${C}" opacity=".55"/>
    <rect x="96" width="84" height="68" rx="8" fill="${S}" stroke="${L}"/><path d="M118 52c22 8 46-2 52-28-2 22-22 40-52 28z" fill="#f2c94c"/><path d="M118 52c-4-2-6-6-4-8" stroke="#8a6a12" stroke-width="2" fill="none"/>
    <rect y="80" width="84" height="68" rx="8" fill="${S}" stroke="${L}"/><rect x="12" y="92" width="60" height="44" rx="6" fill="${M}" opacity=".18"/><circle cx="42" cy="114" r="12" fill="${C}" opacity=".45"/>
    <rect x="96" y="80" width="84" height="68" rx="8" fill="${C}" opacity=".12" stroke="${C}" stroke-dasharray="4 4"/>
    <path class="pulse spin" d="M138 102l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="${C}"/></g></g>`,
  qbank:`<g class="art"><rect x="110" y="24" width="180" height="160" rx="10" fill="${S}" stroke="${L}"/>
    <rect x="126" y="40" width="90" height="8" rx="4" fill="${C}" opacity=".8"/><rect x="250" y="38" width="26" height="12" rx="6" fill="${C}" opacity=".18"/>
    <rect x="126" y="60" width="148" height="6" rx="3" fill="${L}"/><rect x="126" y="72" width="110" height="6" rx="3" fill="${L}"/>
    <g font-family="var(--f-mono)" font-size="10" fill="${M}">
    <circle cx="134" cy="96" r="7" fill="none" stroke="${L}"/><text x="131" y="99.5">A</text><rect x="148" y="93" width="80" height="6" rx="3" fill="${L}"/>
    <circle cx="134" cy="116" r="7" fill="${C}"/><path d="M130.5 116l2.5 2.5 4.5-5" stroke="${S}" stroke-width="1.8" fill="none"/><rect x="148" y="113" width="96" height="6" rx="3" fill="${C}" opacity=".35"/>
    <circle cx="134" cy="136" r="7" fill="none" stroke="${L}"/><text x="131" y="139.5">C</text><rect x="148" y="133" width="70" height="6" rx="3" fill="${L}"/>
    <circle cx="134" cy="156" r="7" fill="none" stroke="${L}"/><text x="131" y="159.5">D</text><rect x="148" y="153" width="88" height="6" rx="3" fill="${L}"/></g>
    <g transform="translate(276 120)"><g class="pop"><rect width="78" height="52" rx="8" fill="${S}" stroke="${C}"/><text x="12" y="22" font-size="11" fill="${C}" font-weight="700">解析</text><rect x="12" y="30" width="54" height="5" rx="2.5" fill="${L}"/><rect x="12" y="40" width="40" height="5" rx="2.5" fill="${L}"/></g></g></g>`,
  parse:`<g class="art"><g transform="rotate(-4 120 104)"><rect x="62" y="34" width="116" height="140" rx="6" fill="${T}" stroke="${L}"/>
    <rect x="62" y="34" width="116" height="140" rx="6" fill="${M}" opacity=".08"/>
    <g fill="${M}" opacity=".45"><rect x="76" y="52" width="64" height="7" rx="2"/><rect x="76" y="70" width="86" height="5" rx="1"/><rect x="76" y="81" width="78" height="5" rx="1"/><rect x="76" y="92" width="84" height="5" rx="1"/><rect x="76" y="103" width="60" height="5" rx="1"/><rect x="76" y="120" width="86" height="5" rx="1"/><rect x="76" y="131" width="72" height="5" rx="1"/><rect x="76" y="142" width="80" height="5" rx="1"/></g>
    <g fill="${M}" opacity=".25"><circle cx="150" cy="58" r="1.2"/><circle cx="98" cy="114" r="1"/><circle cx="160" cy="150" r="1.3"/><circle cx="84" cy="160" r="1"/></g>
    <rect class="scan" x="64" y="88" width="112" height="3" fill="${C}" opacity=".8"/></g>
    <text x="72" y="190" font-size="11" font-family="var(--f-mono)" fill="${M}">扫描版</text>
    <path class="flow" d="M186 104h34" stroke="${C}" stroke-width="2"/><path d="M216 98l8 6-8 6" fill="none" stroke="${C}" stroke-width="2"/>
    <rect x="186" y="78" width="38" height="16" rx="8" fill="${C}" opacity=".15"/><text x="194" y="90" font-size="10" font-family="var(--f-mono)" fill="${C}" font-weight="500">OCR</text>
    <g transform="translate(234 34)"><rect width="116" height="140" rx="6" fill="${S}" stroke="${C}"/>
    <rect x="14" y="18" width="64" height="7" rx="2" fill="${C}" opacity=".85"/>
    <rect x="14" y="36" width="86" height="5" rx="2.5" fill="${L}"/><rect x="14" y="47" width="78" height="5" rx="2.5" fill="${L}"/>
    <rect x="12" y="56" width="70" height="11" rx="2" fill="${C}" opacity=".18"/><rect x="14" y="59" width="66" height="5" rx="2.5" fill="${C}" opacity=".6"/><rect class="caret" x="84" y="56" width="1.6" height="11" fill="${C}"/>
    <rect x="14" y="74" width="60" height="5" rx="2.5" fill="${L}"/><rect x="14" y="90" width="86" height="5" rx="2.5" fill="${L}"/><rect x="14" y="101" width="72" height="5" rx="2.5" fill="${L}"/><rect x="14" y="112" width="80" height="5" rx="2.5" fill="${L}"/>
    <g class="pop"><rect x="76" y="-10" width="52" height="22" rx="11" fill="${C}"/><text x="88" y="5" font-size="11" fill="${S}" font-weight="700">文字版</text></g></g></g>`,
  graph:`<g class="art" stroke="${C}" stroke-opacity=".45"><path d="M200 100L130 60M200 100L120 140M200 100L280 56M200 100L290 140M200 100L208 170M130 60L80 92M120 140L80 92M280 56L330 96M290 140L330 96M290 140L208 170" fill="none"/>
    <circle cx="200" cy="100" r="22" fill="${C}" stroke="none"/><circle cx="130" cy="60" r="13" fill="${S}"/><circle cx="120" cy="140" r="13" fill="${S}"/><circle cx="280" cy="56" r="13" fill="${S}"/>
    <circle cx="290" cy="140" r="13" fill="${C}" fill-opacity=".35"/><circle cx="208" cy="170" r="10" fill="${S}"/><circle cx="80" cy="92" r="9" fill="${S}"/><circle cx="330" cy="96" r="9" fill="${C}" fill-opacity=".35"/>
    <circle cx="200" cy="100" r="32" fill="none" stroke-dasharray="3 5" class="pulse"/>
    <path d="M193 100l5 5 9-10" stroke="${S}" stroke-opacity="1" stroke-width="3" fill="none"/></g>`,
  python:`<g class="art"><rect x="74" y="26" width="252" height="150" rx="12" fill="#11172a"/><rect x="74" y="26" width="252" height="26" rx="12" fill="#1b2340"/><rect x="74" y="42" width="252" height="10" fill="#1b2340"/>
    <circle cx="92" cy="39" r="4" fill="#ff6b6b"/><circle cx="106" cy="39" r="4" fill="#f2c94c"/><circle cx="120" cy="39" r="4" fill="#5fd29d"/>
    <rect x="262" y="33" width="52" height="13" rx="6.5" fill="${C}"/><path d="M272 36.5v6l5-3z" fill="#fff"/><rect x="281" y="38" width="24" height="3" rx="1.5" fill="#fff" opacity=".8"/>
    <g font-family="var(--f-mono)" font-size="11"><text x="90" y="74" fill="#c49cf5">def</text><text x="116" y="74" fill="#8ea4ff">fib</text><text x="138" y="74" fill="#cfd6e6">(n):</text>
    <text x="104" y="92" fill="#c49cf5">if</text><text x="122" y="92" fill="#cfd6e6">n &lt; 2:</text><text x="168" y="92" fill="#c49cf5">return</text><text x="214" y="92" fill="#cfd6e6">n</text>
    <text x="104" y="110" fill="#c49cf5">return</text><text x="150" y="110" fill="#cfd6e6">fib(n-1) + fib(n-2)</text>
    <text x="90" y="140" fill="#5fd29d">&gt;&gt;&gt;</text><text x="118" y="140" fill="#cfd6e6">fib(10)</text><text x="90" y="158" fill="#f2c94c">55</text><rect class="caret" x="110" y="149" width="7" height="12" fill="#cfd6e6"/></g>
    <g transform="translate(298 150)"><circle r="18" fill="var(--good)"/><path d="M-7 0l5 5 9-10" stroke="#fff" stroke-width="3" fill="none"/></g></g>`,
  thesis:`<g class="art"><rect x="112" y="22" width="150" height="164" rx="8" fill="${S}" stroke="${L}"/>
    <rect x="140" y="38" width="94" height="8" rx="4" fill="${M}" opacity=".6"/><rect x="160" y="52" width="54" height="5" rx="2.5" fill="${L}"/>
    <rect x="126" y="72" width="122" height="5" rx="2.5" fill="${L}"/><rect x="126" y="84" width="100" height="5" rx="2.5" fill="${L}"/><path d="M126 94q8 4 16 0t16 0 16 0 16 0 16 0" stroke="#e5484d" fill="none" stroke-width="1.6"/>
    <rect x="126" y="104" width="116" height="5" rx="2.5" fill="${L}"/><rect x="126" y="116" width="90" height="5" rx="2.5" fill="${L}"/><rect x="126" y="128" width="110" height="5" rx="2.5" fill="${L}"/>
    <rect x="124" y="138" width="70" height="10" rx="2" fill="#f2c94c" opacity=".35"/><rect x="126" y="140.5" width="66" height="5" rx="2.5" fill="${L}"/><rect x="126" y="156" width="104" height="5" rx="2.5" fill="${L}"/>
    <g transform="translate(250 60)"><g class="slide1"><rect width="104" height="40" rx="8" fill="${S}" stroke="${C}"/><circle cx="16" cy="20" r="7" fill="${C}"/><path d="M12.5 20l2.5 2.5 4.5-5" stroke="${S}" stroke-width="1.6" fill="none"/><rect x="30" y="13" width="62" height="5" rx="2.5" fill="${C}" opacity=".5"/><rect x="30" y="23" width="44" height="5" rx="2.5" fill="${L}"/></g></g>
    <g transform="translate(250 112)"><g class="slide2"><rect width="104" height="40" rx="8" fill="${S}" stroke="#e5484d" stroke-opacity=".6"/><circle cx="16" cy="20" r="7" fill="#e5484d"/><rect x="15" y="15" width="2" height="6" fill="#fff"/><rect x="15" y="23" width="2" height="2" fill="#fff"/><rect x="30" y="13" width="56" height="5" rx="2.5" fill="#e5484d" opacity=".45"/><rect x="30" y="23" width="40" height="5" rx="2.5" fill="${L}"/></g></g></g>`,
  arxiv:`<g class="art"><rect x="84" y="24" width="232" height="156" rx="12" fill="${S}" stroke="${L}"/>
    <text x="100" y="48" font-family="var(--f-mono)" font-size="11" fill="${M}">arXiv · cs.AI</text><rect x="250" y="36" width="52" height="16" rx="8" fill="${C}"/><text x="258" y="48" font-family="var(--f-mono)" font-size="10" fill="${S}">今日+86</text>
    <g><rect x="100" y="62" width="200" height="32" rx="7" fill="${C}" opacity=".1"/><rect x="110" y="70" width="140" height="5" rx="2.5" fill="${C}" opacity=".7"/><rect x="110" y="81" width="110" height="4" rx="2" fill="${L}"/><rect x="262" y="70" width="28" height="11" rx="5.5" fill="${C}" opacity=".3"/></g>
    <g><rect x="100" y="100" width="200" height="32" rx="7" fill="${T}"/><rect x="110" y="108" width="120" height="5" rx="2.5" fill="${M}" opacity=".5"/><rect x="110" y="119" width="150" height="4" rx="2" fill="${L}"/><rect x="262" y="108" width="28" height="11" rx="5.5" fill="${M}" opacity=".2"/></g>
    <g><rect x="100" y="138" width="200" height="32" rx="7" fill="${T}"/><rect x="110" y="146" width="150" height="5" rx="2.5" fill="${M}" opacity=".5"/><rect x="110" y="157" width="90" height="4" rx="2" fill="${L}"/><rect x="262" y="146" width="28" height="11" rx="5.5" fill="${M}" opacity=".2"/></g>
    <g transform="translate(300 52)"><g class="pop"><rect width="66" height="26" rx="13" fill="${S}" stroke="${C}"/><text x="12" y="17" font-size="11" fill="${C}" font-weight="700">中文摘要</text></g></g></g>`,
  course:`<g class="art"><g transform="translate(70 40)">
    <g class="slide2"><rect x="0" y="0" width="70" height="38" rx="8" fill="${S}" stroke="${L}"/><circle cx="18" cy="19" r="9" fill="${C}" opacity=".2"/><path d="M15 14v10l8-5z" fill="${C}"/><rect x="32" y="13" width="28" height="5" rx="2.5" fill="${L}"/><rect x="32" y="22" width="20" height="5" rx="2.5" fill="${L}"/></g>
    <g class="slide1"><rect x="0" y="48" width="70" height="38" rx="8" fill="${S}" stroke="${L}"/><rect x="10" y="57" width="16" height="20" rx="2" fill="${C}" opacity=".35"/><rect x="32" y="61" width="28" height="5" rx="2.5" fill="${L}"/><rect x="32" y="70" width="20" height="5" rx="2.5" fill="${L}"/></g>
    <g class="slide2"><rect x="0" y="96" width="70" height="38" rx="8" fill="${S}" stroke="${L}"/><circle cx="18" cy="115" r="7" fill="none" stroke="${C}" stroke-width="2"/><path d="M15 115l2.5 2.5 4-4.5" stroke="${C}" stroke-width="1.8" fill="none"/><rect x="32" y="109" width="28" height="5" rx="2.5" fill="${L}"/><rect x="32" y="118" width="20" height="5" rx="2.5" fill="${L}"/></g>
    <path class="flow" d="M78 19q30 0 44 40M78 67h42M78 115q30 0 44 -40" fill="none" stroke="${C}" stroke-width="1.6"/>
    <g transform="translate(126 30)"><path d="M0 22l46-22 46 22v58l-46 22-46-22z" fill="${C}" opacity=".14" stroke="${C}"/><path d="M0 22l46 22 46-22M46 44v58" fill="none" stroke="${C}"/>
    <path d="M23 11l46 22" stroke="${C}" stroke-width="5" opacity=".35"/><text x="46" y="122" font-size="11" font-weight="700" fill="${C}" text-anchor="middle">课程包</text></g>
    <path d="M226 67h22" stroke="${M}" stroke-width="1.6" stroke-dasharray="3 4"/><path d="M244 62l7 5-7 5" fill="none" stroke="${M}" stroke-width="1.6"/>
    <g transform="translate(256 36)"><rect width="0" height="0"/></g></g>
    <g transform="translate(330 66)"><rect x="-6" y="0" width="64" height="82" rx="8" fill="${S}" stroke="${L}"/><rect x="-6" y="0" width="64" height="16" rx="8" fill="${T}"/><rect x="-6" y="8" width="64" height="8" fill="${T}"/>
    <rect x="4" y="24" width="44" height="6" rx="3" fill="${M}" opacity=".4"/><rect x="4" y="36" width="34" height="5" rx="2.5" fill="${L}"/><rect x="4" y="46" width="40" height="5" rx="2.5" fill="${L}"/><rect x="4" y="56" width="30" height="5" rx="2.5" fill="${L}"/>
    <text x="26" y="98" font-size="10.5" fill="${M}" text-anchor="middle">学习网</text></g></g>`,
};

/* 新系统没有专属插画时使用的通用插画：一个应用窗口 */
export const GENERIC = `<g class="art"><rect x="100" y="34" width="200" height="140" rx="12" fill="${S}" stroke="${L}"/><rect x="100" y="34" width="200" height="24" rx="12" fill="${T}"/><rect x="100" y="48" width="200" height="10" fill="${T}"/>
  <circle cx="116" cy="46" r="4" fill="${C}" opacity=".7"/><circle cx="130" cy="46" r="4" fill="${L}"/><circle cx="144" cy="46" r="4" fill="${L}"/>
  <rect x="116" y="72" width="70" height="86" rx="8" fill="${C}" opacity=".16"/><path class="pulse spin" d="M151 100l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="${C}"/>
  <rect x="198" y="76" width="86" height="7" rx="3.5" fill="${C}" opacity=".6"/><rect x="198" y="92" width="74" height="6" rx="3" fill="${L}"/><rect x="198" y="106" width="80" height="6" rx="3" fill="${L}"/><rect x="198" y="120" width="60" height="6" rx="3" fill="${L}"/>
  <g class="pop"><rect x="198" y="136" width="56" height="18" rx="9" fill="${C}"/><rect x="208" y="143" width="36" height="4" rx="2" fill="${S}"/></g></g>`;

export const artFor = (key?: string) => (key && ART[key]) || GENERIC;
