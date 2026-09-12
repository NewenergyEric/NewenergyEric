"""Draw Eric's original GitHub profile motion graphic and static alternative."""
from __future__ import annotations

import argparse
import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H, SCALE = 1120, 460, 2
FPS, SECONDS = 20, 12
BG = (11, 24, 37)
INK = (238, 244, 238)
MINT = (109, 225, 190)
MUTED = (155, 177, 184)
GRID = (24, 43, 56)
RULE = (46, 67, 79)


def mix(a, b, p):
    p = min(1.0, max(0.0, p))
    return tuple(round(x + (y - x) * p) for x, y in zip(a, b))


class Drawing:
    def __init__(self, im):
        self.im = im
        self.d = ImageDraw.Draw(im)

    def line(self, pts, fill, width=1):
        self.d.line([(round(x*SCALE), round(y*SCALE)) for x, y in pts],
                    fill=fill, width=max(1, round(width*SCALE)), joint="curve")

    def circle(self, x, y, r, fill=None, outline=None, width=1):
        self.d.ellipse(tuple(round(v*SCALE) for v in (x-r, y-r, x+r, y+r)),
                       fill=fill, outline=outline, width=max(1, round(width*SCALE)))

    def box(self, coords, radius=0, fill=None, outline=None, width=1):
        self.d.rounded_rectangle(tuple(round(v*SCALE) for v in coords),
                                 radius=round(radius*SCALE), fill=fill,
                                 outline=outline, width=max(1, round(width*SCALE)))

    def text(self, xy, content, font, fill, anchor=None):
        self.d.text((round(xy[0]*SCALE), round(xy[1]*SCALE)), content,
                    font=font, fill=fill, anchor=anchor)


def orbit(t):
    a = t * math.tau
    return 828 + 217 * math.sin(a), 208 + 96 * math.sin(2*a)


def make_fonts(directory, cjk):
    def f(name, size):
        return ImageFont.truetype(str(directory / name), size*SCALE)
    return {
        "hero": f("InstrumentSerif-Italic.ttf", 76),
        "label": f("IBMPlexMono-Regular.ttf", 13),
        "step": f("InstrumentSans-Bold.ttf", 18),
        "small": f("InstrumentSans-Regular.ttf", 15),
        "product": f("InstrumentSans-Bold.ttf", 17),
        "cn": ImageFont.truetype(str(cjk), 22*SCALE),
    }


def base_art(fonts):
    im = Image.new("RGB", (W*SCALE, H*SCALE), BG)
    c = Drawing(im)
    # Registration grid only inside the drawing field, with ample quiet space.
    for x in range(584, 1080, 24):
        for y in range(76, 343, 24):
            c.circle(x, y, .7, fill=GRID)
    c.line([(48, 55), (1072, 55)], RULE)
    c.circle(54, 31, 4, fill=MINT)
    c.text((69, 22), "ERIC / BUILDING WITH AGENTS", fonts["label"], MUTED)
    c.text((1072, 22), "A PRACTICE IN PROGRESS", fonts["label"], MUTED, "ra")

    c.text((45, 83), "Curiosity.", fonts["hero"], INK)
    c.text((45, 161), "Made useful.", fonts["hero"], MINT)
    c.text((49, 273), "与 Agent 一起，把想法做出来。", fonts["cn"], INK)
    c.text((49, 316), "IDEAS  /  PRODUCTS  /  METHODS", fonts["label"], MUTED)

    # One continuous figure-eight: each side meets the other twice per cycle.
    pts = [orbit(i/560) for i in range(561)]
    c.line(pts, RULE, 1.6)
    for t in [.0625, .1875, .3125, .4375, .5625, .6875, .8125, .9375]:
        x, y = orbit(t)
        c.circle(x, y, 2.2, fill=BG, outline=MUTED, width=1)

    c.box((650, 183, 772, 234), radius=25, fill=BG, outline=RULE)
    c.box((884, 183, 1008, 234), radius=25, fill=BG, outline=RULE)
    # Human glyph, drawn as a precise line symbol rather than an emoji.
    c.circle(673, 201, 4, outline=INK, width=1.4)
    c.line([(666, 217), (667, 212), (670, 209), (676, 209), (679, 212), (680, 217)], INK, 1.4)
    c.text((691, 199), "HUMAN", fonts["label"], INK)
    # Agent glyph: modular capability in a small open frame.
    c.box((899, 199, 915, 216), radius=3, outline=MINT, width=1.3)
    c.circle(904, 206, 1.2, fill=MINT)
    c.circle(911, 206, 1.2, fill=MINT)
    c.line([(904, 211), (911, 211)], MINT, 1.2)
    c.line([(907, 195), (907, 199)], MINT, 1.2)
    c.text((925, 199), "AGENTS", fonts["label"], MINT)

    c.text((828, 78), "LEARNING GOES BOTH WAYS", fonts["label"], MUTED, "ma")
    c.text((828, 317), "EVERY RETURN, A BETTER QUESTION", fonts["label"], MUTED, "ma")
    c.line([(48, 370), (1072, 370)], RULE)
    c.text((49, 387), "BUSINESS FUNCTIONS", fonts["label"], MUTED)
    for x, label in [(354,"Marketing"),(546,"Sales"),(706,"Brand"),(887,"Operations")]:
        c.circle(x, 401, 2.4, fill=MINT)
        c.text((x+13, 389), label, fonts["product"], INK)
    c.text((49, 426), "ASK. BUILD. TRY. REFINE.", fonts["label"], MUTED)
    c.text((1072, 426), "HUMAN INTENT + AGENT COLLABORATION", fonts["label"], MUTED, "ra")
    return im


def frame(base, fonts, t, still=False):
    im = base.copy()
    c = Drawing(im)
    # Fixed-length soft trails in opposite halves represent reciprocal feedback.
    for shift, color in [(0, MINT), (.5, INK)]:
        for j in range(36):
            u = t + shift - .15 + j*.15/35
            p = j/35
            segment = [orbit(u+k*.15/35/4) for k in range(5)]
            c.line(segment, mix(RULE, color, p*.75), 1.8+1.2*p)
        x, y = orbit(t+shift)
        c.circle(x, y, 9, outline=mix(BG,color,.20), width=1)
        c.circle(x, y, 5, fill=color)
        c.circle(x, y, 1.8, fill=BG)

    # A quiet concentric exchange signal at the crossing, never a flash.
    pulse = (1 + math.cos(t*math.tau*2))/2
    c.circle(828, 208, 14+3*pulse, fill=BG, outline=mix(RULE,MINT,.3+.35*pulse), width=1.3)
    c.line([(821,208),(828,201),(835,208),(828,215),(821,208)], MINT, 1.4)
    c.circle(828,208,2,fill=INK)

    # A four-stage progression; active words crossfade without shifting layout.
    stages = ["QUESTION", "BUILD", "TRY", "REFINE"]
    stage = (t*4) % 4
    for j, label in enumerate(stages):
        x = 582+j*125
        distance = min((stage-j)%4, (j-stage)%4)
        strength = max(0, 1-distance*1.3)
        if still:
            strength = .8
        c.text((x, 353), label, fonts["label"], mix(MUTED,MINT,strength), "ls")
        c.line([(x, 365),(x+88,365)], mix(RULE,MINT,strength*.8), 2)
    return im.resize((W,H), Image.Resampling.LANCZOS)


def save_animation(frames, target):
    # One shared palette prevents color pumping and keeps flat areas compact.
    samples = Image.new("RGB", (W*4,H))
    for k in range(4):
        samples.paste(frames[k*len(frames)//4], (k*W,0))
    palette = samples.quantize(colors=128, method=Image.Quantize.MEDIANCUT,
                               dither=Image.Dither.NONE)
    converted = [f.quantize(palette=palette, dither=Image.Dither.NONE) for f in frames]
    converted[0].save(target, save_all=True, append_images=converted[1:], loop=0,
                      duration=1000//FPS, optimize=True, disposal=1)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--font-dir", type=Path, required=True)
    parser.add_argument("--cjk-font", type=Path, required=True)
    parser.add_argument("--out-dir", type=Path, default=Path(__file__).resolve().parent)
    parser.add_argument("--poster-only", action="store_true")
    args = parser.parse_args()
    args.out_dir.mkdir(parents=True, exist_ok=True)
    fonts = make_fonts(args.font_dir, args.cjk_font)
    base = base_art(fonts)
    frame(base, fonts, .18, still=True).save(args.out_dir/"collaboration-still.png", optimize=True)
    if args.poster_only:
        print("Static composition ready.")
        return
    frames = [frame(base, fonts, i/(FPS*SECONDS)) for i in range(FPS*SECONDS)]
    save_animation(frames, args.out_dir/"collaboration-motion.gif")
    sheet = Image.new("RGB", (W,H*3), BG)
    for row, i in enumerate([0,80,160]):
        sheet.paste(frames[i], (0,row*H))
    sheet.save(args.out_dir/"contact-sheet.png", optimize=True)
    gif = Image.open(args.out_dir/"collaboration-motion.gif")
    total_duration = 0
    for i in range(gif.n_frames):
        gif.seek(i)
        total_duration += gif.info.get("duration",0)
    print(f"Verified GIF: {gif.size}, {gif.n_frames} frames, {total_duration} ms")
    print(f"Size: {(args.out_dir/'collaboration-motion.gif').stat().st_size:,} bytes")


if __name__ == "__main__":
    main()
