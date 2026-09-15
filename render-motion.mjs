import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {renderFrame, FPS, DURATION, WIDTH, HEIGHT} from './motion/motion.mjs';
import {AREAS, PROFILE} from './motion/content.mjs';

const args = process.argv.slice(2);
const base = path.dirname(fileURLToPath(import.meta.url));
const outIndex = args.indexOf('--out-dir');
if (outIndex !== -1 && (!args[outIndex + 1] || args[outIndex + 1].startsWith('--'))) {
  throw new Error('--out-dir requires a directory');
}
const out = outIndex === -1 ? base : path.resolve(args[outIndex + 1]);
const media = path.join(out, 'media');
await fs.mkdir(media, {recursive: true});

function manuscript(lang) {
  const c = PROFILE[lang];
  const head = lang === 'zh' ? '我在和 Agent 一起做什么' : 'What I am building with agents';
  const process = lang === 'zh' ? '我和 Agent 怎么一起做' : 'How I work with agents';
  return `# ${head}\n\n${c.intro.join('\n\n')}\n\n${c.note}\n\n${AREAS.map(a => `## ${a[lang].name}\n\n${a[lang].body}`).join('\n\n')}\n\n## ${process}\n\n${c.process}\n`;
}

function artwork(lang) {
  const alt = lang === 'zh'
    ? 'Eric 的工作近况：营销、销售、品牌、客服、运营、数据、产品、Agent 和方法。九段工作示意循环播放，完整介绍在下方。'
    : 'Eric’s current work: marketing, sales, brand, support, operations, data, product, agents, and methods. Nine illustrated scenes loop; the full introduction follows below.';
  const label = lang === 'zh' ? '静态封面' : 'Still image';
  return `<picture>\n  <source media="(prefers-reduced-motion: reduce)" srcset="media/work-still-${lang}.png">\n  <img src="media/work-motion-${lang}.gif" width="1100" alt="${alt}">\n</picture>\n\n<p align="right"><sub><a href="media/work-still-${lang}.png">${label}</a></sub></p>`;
}

const english = `${artwork('en')}\n\n${manuscript('en')}`;
const chinese = `<p align="right"><strong>中文</strong> · <a href="https://github.com/NewenergyEric/NewenergyEric/blob/main/README.en.md">English</a></p>\n\n${artwork('zh')}\n\n${manuscript('zh')}\n<details>\n<summary>English · Read the full introduction here</summary>\n\n${english}\n</details>\n`;
await fs.writeFile(path.join(out, 'README.md'), chinese);
await fs.writeFile(path.join(out, 'README.en.md'), `<p align="right"><a href="https://github.com/NewenergyEric">中文</a> · <strong>English</strong></p>\n\n${english}`);

if (!args.includes('--docs-only')) {
  const require = createRequire(import.meta.url);
  const sharp = process.env.SHARP_MODULE ? require(process.env.SHARP_MODULE) : require('sharp');
  sharp.cache({memory: 96, files: 30, items: 50});
  sharp.concurrency(2);
  const langs = args.includes('--zh') ? ['zh'] : args.includes('--en') ? ['en'] : ['zh', 'en'];

  for (const lang of langs) {
    await sharp(Buffer.from(renderFrame(lang, 3.6))).png().toFile(path.join(media, `work-still-${lang}.png`));
    if (args.includes('--posters-only')) continue;
    const frames = [];
    for (let i = 0; i < FPS * DURATION; i++) {
      frames.push(await sharp(Buffer.from(renderFrame(lang, i / FPS))).png().toBuffer());
      if (i % 100 === 0) console.log(`${lang}: ${i}/${FPS * DURATION} frames`);
    }
    const gif = path.join(media, `work-motion-${lang}.gif`);
    await sharp(frames, {join: {animated: true}, limitInputPixels: false})
      .gif({loop: 0, delay: Array(frames.length).fill(1000 / FPS), colours: 128, dither: 0, effort: 4})
      .toFile(gif);
    const meta = await sharp(gif, {animated: true, limitInputPixels: false}).metadata();
    const duration = meta.delay.reduce((a, b) => a + b, 0);
    if (meta.width !== WIDTH || meta.pageHeight !== HEIGHT || meta.pages !== FPS * DURATION || duration !== DURATION * 1000 || meta.loop !== 0) {
      throw new Error(`Unexpected GIF metadata: ${lang}`);
    }
    console.log(JSON.stringify({language: lang, frames: meta.pages, durationMs: duration, bytes: (await fs.stat(gif)).size}));
  }
}
