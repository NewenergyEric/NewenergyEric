# Current work, in motion

Nine scenes show the work described in the profile: marketing, sales, brand, support, operations, data, product, agent workflows, and methods. Each scene runs for five seconds. The Chinese and English editions share the same drawings and timing, with localized text throughout.

The illustrations use a white background, navy outlines, and teal and blue accents. Documents move through a workflow, charts build, prototypes respond, and notes are saved for the next task. All examples are illustrative; they contain no client data or project identities.

## Files

- `media/work-motion-zh.gif` and `media/work-motion-en.gif`: 1100 × 650, 20 frames per second, 900 frames, 45 seconds, looping continuously.
- `media/work-still-zh.png` and `media/work-still-en.png`: matching static alternatives.
- `motion/content.mjs`: bilingual scene labels and profile copy.
- `motion/motion.mjs`: deterministic SVG drawings and animation timing.
- `render-motion.mjs`: builds both READMEs and the four media files.

Both READMEs include a reduced-motion image source and a direct static-image link. All essential information is also written as ordinary text. The English edition and the collapsed English section on the Chinese page are generated from the same content.

## Rebuild

Use Node.js 20 or later and install the dependency in `package.json`:

```sh
npm install
npm run build
```

The renderer uses Microsoft YaHei for Chinese and Arial for Latin text, falling back to the installed sans-serif fonts. Install suitable fonts before rendering; they are not bundled here. Font substitutions can change the layout. The published images were rendered with Microsoft YaHei available.

To update the READMEs without rendering images, run `npm run docs`. To render only the two static images, run `npm run posters`. Use `--zh` or `--en` to render one language. Both READMEs are always updated together.

Use `node render-motion.mjs --out-dir ./preview` to write all output to a separate directory for review. Keep review output outside commits. Inspect both languages and every scene after changing labels or drawings, then publish the matching GIFs and still images together.
