# Reciprocal Motion

A thought becomes useful through a return journey. Two continuous trajectories meet, exchange momentum, and retain their own character. The drawing gives equal weight to the person bringing questions and the agents helping make them tangible. Each return belongs to the same structure, while a moving highlight makes the passage of attention visible.

Midnight blue provides a quiet field. Chalk marks belong to human intention; a restrained mint accent belongs to collaboration. Fine, carefully spaced construction marks lend the surface the precision of a workshop drawing. The limited palette keeps the motion legible and lets subtle differences in line weight do the work.

The composition holds an expressive typographic statement beside a precisely drawn reciprocal path. Large lettering provides a point of rest, while small labels establish scale. Generous negative space protects the two forms. Spacing, curves and optical alignment are treated with the same care as the headline.

The rhythm is continuous and unhurried. Traveling signals pass through questioning, building, testing and refinement; a return carries what was learned back into the next attempt. Attention to the seam, the shape of each trail and the balance of still and moving elements gives the loop its finished character.

## Files

- `collaboration-motion.gif`: 12-second original motion graphic, 20 frames per second, seamless loop.
- `collaboration-still.png`: static equivalent for reduced-motion preferences and direct viewing.
- `render-motion.py`: reproducible source, using Pillow.

The README uses a `picture` source for `prefers-reduced-motion: reduce` and also offers a direct static-image link. All essential information appears as ordinary README text.

The drawing labels business functions only: marketing, sales, brand, and operations. It contains no client or project identities.

## Recreate

Install the version in `requirements.txt`, then run:

```sh
python render-motion.py --font-dir /path/to/fonts --cjk-font /path/to/chinese-font.ttf
```

The font directory should contain `InstrumentSerif-Italic.ttf`, `InstrumentSans-Regular.ttf`, `InstrumentSans-Bold.ttf`, and `IBMPlexMono-Regular.ttf`. These families are available under the SIL Open Font License; font binaries are not distributed here. Supply a suitable Chinese font separately. The renderer writes the two final assets and a local contact sheet for review. No client data, external images, credentials, or third-party rendering services are used.
