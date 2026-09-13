# Reciprocal Motion

A thought becomes useful through a return journey. Two continuous trajectories meet, exchange momentum, and retain their own character. The drawing gives equal weight to the person bringing questions and the agents helping make them tangible. Each return belongs to the same structure, while a moving highlight makes the passage of attention visible.

Midnight blue provides a quiet field. Chalk marks belong to human intention; a restrained mint accent belongs to collaboration. Fine, carefully spaced construction marks lend the surface the precision of a workshop drawing. The limited palette keeps the motion legible and lets subtle differences in line weight do the work.

The composition holds an expressive typographic statement beside a precisely drawn reciprocal path. Large lettering provides a point of rest, while small labels establish scale. Generous negative space protects the two forms. Spacing, curves and optical alignment are treated with the same care as the headline.

The rhythm is continuous and unhurried. Traveling signals pass through questioning, building, testing and refinement; a return carries what was learned back into the next attempt. Attention to the seam, the shape of each trail and the balance of still and moving elements gives the loop its finished character.

## Files

- `collaboration-motion-zh.gif`: Chinese edition, including the headline, labels, stages, and business functions.
- `collaboration-motion-en.gif`: English edition with the same composition and motion.
- `collaboration-still-zh.png` and `collaboration-still-en.png`: matching static alternatives.
- `render-motion.py`: reproducible source, using Pillow.

Both animations run for 12 seconds at 20 frames per second and loop seamlessly. The Chinese edition pairs a Chinese display face with readable labels; the English edition retains the original italic serif headline.

Each README uses a `picture` source for `prefers-reduced-motion: reduce` and offers a direct static-image link in its language. The collapsed English section also includes the English animation and static alternative. All essential information appears as ordinary README text.

The drawing labels business functions only: marketing, sales, brand, and operations. It contains no client or project identities.

## Recreate

Install the version in `requirements.txt`, then run:

```sh
python render-motion.py --font-dir /path/to/fonts --cjk-font /path/to/chinese-font.ttf --cjk-display-font /path/to/chinese-display-font.ttf --language both --out-dir /path/to/output
```

The font directory should contain `InstrumentSerif-Italic.ttf`, `InstrumentSans-Regular.ttf`, `InstrumentSans-Bold.ttf`, and `IBMPlexMono-Regular.ttf`. These families are available under the SIL Open Font License; font binaries are not distributed here. Supply suitable Chinese fonts separately. The Chinese display font is optional and defaults to the Chinese label font.

The renderer writes four final assets by default. Use `--language zh` or `--language en` for one edition, or `--poster-only` to inspect the static layouts first. Add `--contact-sheet` only when saving review sheets to a local directory outside the public repository. No client data, external images, credentials, or third-party rendering services are used.
