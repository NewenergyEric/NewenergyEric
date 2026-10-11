import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {renderFrame, FPS, DURATION, WIDTH, HEIGHT} from './motion/motion.mjs';
import {renderReadme} from './motion/profile.mjs';

const args = process.argv.slice(2);
const base = path.dirname(fileURLToPath(import.meta.url));
const outIndex = args.indexOf('--out-dir');
if (outIndex !== -1 && (!args[outIndex + 1] || args[outIndex + 1].startsWith('--'))) {
  throw new Error('--out-dir requires a directory');
}
const out = outIndex === -1 ? base : path.resolve(args[outIndex + 1]);
const media = path.join(out, 'media');
await fs.mkdir(media, {recursive: true});

const chinese = renderReadme('zh');
await fs.writeFile(path.join(out, 'README.md'), chinese);
await fs.writeFile(path.join(out, 'README.zh.md'), chinese);
await fs.writeFile(path.join(out, 'README.en.md'), renderReadme('en'));
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
