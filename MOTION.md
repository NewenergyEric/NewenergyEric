# Current work, in motion

Nine scenes show the wider practice described in the profile: marketing, sales, brand, support, operations, data, product, agent workflows, and methods. Each scene runs for five seconds. The Chinese and English editions share the same drawings and timing, with localized text throughout.

The illustrations use a white background, navy outlines, and teal and blue accents. Documents move through a workflow, charts build, prototypes respond, and notes are saved for the next task. The footer carries the profile's core loop in plain language: find the problem, try a method, keep what works.

## Files

- `media/work-motion-zh.gif` and `media/work-motion-en.gif`: 1100 × 650, 20 frames per second, 900 frames, 45 seconds, looping continuously.
- `media/work-still-zh.png` and `media/work-still-en.png`: matching static alternatives.
- `motion/content.mjs`: bilingual scene labels and profile copy.
- `motion/profile.mjs`: bilingual README layout and project shelf.
- `motion/motion.mjs`: deterministic SVG drawings and animation timing.
- `render-motion.mjs`: builds the README editions and the four media files.

README.md is the Chinese default, README.zh.md mirrors it for existing links, and README.en.md is the complete English edition. The Chinese page also carries a short collapsed English introduction. The profile animation includes a reduced-motion source. The project shelf uses compact static images from Enterprise AI Playbook and Art Director, with links to the full examples and film. The game series stays in a collapsed text section. Essential information is also written as ordinary text.

## Rebuild

Use Node.js 20 or later and install the dependency in `package.json`:

```sh
npm install
npm run build
```

The renderer uses Microsoft YaHei for Chinese and Arial for Latin text, falling back to the installed sans-serif fonts. Install suitable fonts before rendering; they are not bundled here. Font substitutions can change the layout. The published images were rendered with Microsoft YaHei available.

To update the READMEs without rendering images, run `npm run docs`. To render only the two static images, run `npm run posters`. Use `--zh` or `--en` to render one language. Both READMEs are always updated together.

Use `node render-motion.mjs --out-dir ./preview` to write all output to a separate directory for review. Keep review output outside commits. Inspect both languages and every scene after changing labels or drawings, then publish the matching GIFs and still images together.
