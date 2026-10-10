import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {renderFrame, FPS, DURATION, WIDTH, HEIGHT} from './motion/motion.mjs';

const args = process.argv.slice(2);
const base = path.dirname(fileURLToPath(import.meta.url));
const outIndex = args.indexOf('--out-dir');
if (outIndex !== -1 && (!args[outIndex + 1] || args[outIndex + 1].startsWith('--'))) {
  throw new Error('--out-dir requires a directory');
}
const out = outIndex === -1 ? base : path.resolve(args[outIndex + 1]);
const media = path.join(out, 'media');
await fs.mkdir(media, {recursive: true});

function artwork(lang) {
  const alt = lang === 'zh'
    ? 'Eric 正在做的事情：从真实问题出发，把营销、销售、品牌、客服、运营、数据、产品、Agent 和方法连接起来。'
    : 'Eric’s wider practice: connecting real problems across marketing, sales, brand, support, operations, data, product, agents, and methods.';
  const label = lang === 'zh' ? '静态封面' : 'Still image';
  return `<picture>\n  <source media="(prefers-reduced-motion: reduce)" srcset="media/work-still-${lang}.png">\n  <img src="media/work-motion-${lang}.gif" width="1100" alt="${alt}">\n</picture>\n\n<p align="right"><sub><a href="media/work-still-${lang}.png">${label}</a></sub></p>`;
}

const projects = {
  market: {
    repo: 'https://github.com/NewenergyEric/game-market-intelligence',
    en: {
      still: 'https://raw.githubusercontent.com/NewenergyEric/game-market-intelligence/main/assets/readme/hero-en.png?v=profile-20261011',
      motion: 'https://raw.githubusercontent.com/NewenergyEric/game-market-intelligence/main/assets/readme/hero-en.webp?v=profile-20261011',
      alt: 'Game Market Intelligence Director compares audience, genre, IP, region, payment, competition, and team capacity with evidence.'
    },
    zh: {
      still: 'https://raw.githubusercontent.com/NewenergyEric/game-market-intelligence/main/assets/readme/hero-zh.png?v=profile-20261011',
      motion: 'https://raw.githubusercontent.com/NewenergyEric/game-market-intelligence/main/assets/readme/hero-zh.webp?v=profile-20261011',
      alt: '游戏市场研究总监用证据比较人群、品类、IP、地区、付费、竞争与团队能力。'
    }
  },
  reverse: {
    repo: 'https://github.com/NewenergyEric/game-reverse-analyst',
    en: {
      still: 'https://raw.githubusercontent.com/NewenergyEric/game-reverse-analyst/main/assets/readme/hero-en.png?v=profile-20261011',
      motion: 'https://raw.githubusercontent.com/NewenergyEric/game-reverse-analyst/main/assets/readme/hero-en.webp?v=profile-20261011',
      alt: 'Game Reverse Analyst follows a gameplay rule into implementation, algorithms, numbers, and asset families.'
    },
    zh: {
      still: 'https://raw.githubusercontent.com/NewenergyEric/game-reverse-analyst/main/assets/readme/hero-zh.png?v=profile-20261011',
      motion: 'https://raw.githubusercontent.com/NewenergyEric/game-reverse-analyst/main/assets/readme/hero-zh.webp?v=profile-20261011',
      alt: '游戏拆解与逆向分析师沿着玩法问题找到实现、算法、数值与美术资产依据。'
    }
  },
  production: {
    repo: 'https://github.com/NewenergyEric/game-production-manager',
    en: {
      still: 'https://raw.githubusercontent.com/NewenergyEric/game-production-manager/main/assets/readme/hero-en.png?v=profile-20261011',
      motion: 'https://raw.githubusercontent.com/NewenergyEric/game-production-manager/main/assets/readme/hero-en.webp?v=profile-20261011',
      alt: 'Game Production Manager turns intent, decisions, and feedback into traceable work packages.'
    },
    zh: {
      still: 'https://raw.githubusercontent.com/NewenergyEric/game-production-manager/main/assets/readme/hero-zh.png?v=profile-20261011',
      motion: 'https://raw.githubusercontent.com/NewenergyEric/game-production-manager/main/assets/readme/hero-zh.webp?v=profile-20261011',
      alt: '游戏制作项目经理把制作意图、决定和反馈整理成可追踪的工作包。'
    }
  },
  art: {
    repo: 'https://github.com/NewenergyEric/art-director-skill',
    en: {
      still: 'https://raw.githubusercontent.com/NewenergyEric/art-director-skill/main/assets/readme/depth-preview-en.jpg?v=profile-20261011',
      motion: 'https://raw.githubusercontent.com/NewenergyEric/art-director-skill/main/assets/readme/depth-preview-en.gif?v=profile-20261011',
      alt: 'Art Director turns references, rules, samples, review, and delivery into one shared visual memory.'
    },
    zh: {
      still: 'https://raw.githubusercontent.com/NewenergyEric/art-director-skill/main/assets/readme/depth-preview-zh.jpg?v=profile-20261011',
      motion: 'https://raw.githubusercontent.com/NewenergyEric/art-director-skill/main/assets/readme/depth-preview-zh.gif?v=profile-20261011',
      alt: 'Art Director 把参考、规范、样板、评审和交付整理成团队共同的视觉记忆。'
    }
  }
};

function projectVisual(project, lang) {
  const item = projects[project];
  const visual = item[lang];
  return `<a href="${item.repo}"><picture>\n  <source media="(prefers-reduced-motion: reduce)" srcset="${visual.still}">\n  <img src="${visual.motion}" width="100%" alt="${visual.alt}">\n</picture></a>`;
}

function englishBody() {
  return `# Hi, I’m Eric

### I turn real work into reusable AI skills.

I started without knowing how to code. I still begin in the same place: with a problem I actually want to solve.

I work with agents to understand the problem, build a useful first version, try it end to end, and keep revising. When something works, I do not leave it in a chat. I turn the decisions, failures, and know-how into a Skill, tool, workflow, or playbook that the next person—and the next agent—can continue from.

**Find the real problem → test what works → keep the know-how → grow the capability.**

${artwork('en')}

## Current focus: one game production loop

Games are where I am testing this approach most visibly right now. Four open-source Skills cover four connected decisions:

| Research | Understand | Plan | Direct |
|---|---|---|---|
| Is this direction worth testing? | What is really happening in the game? | What work can a person or agent actually start? | How can many contributors keep one visual direction? |
| Market evidence, comparisons, gaps | Rules, code, numbers, assets | Inputs, owners, dependencies, acceptance | References, samples, review, versions |

Each Skill can run on its own. Together they move a team from **where is the opportunity?** to **what is really here?** to **what do we make next?** to **how do many people keep one direction?**

### 01 · [Game Market Intelligence Director](https://github.com/NewenergyEric/game-market-intelligence)

**Read the market. Choose the next move.**

It connects audience and genre with IP, regions, channels, culture, payment, competition, and team capacity. Findings keep their source lineage; unavailable data stays unknown; important gaps become concrete research tasks before a team commits.

${projectVisual('market', 'en')}

[Explore the Skill](https://github.com/NewenergyEric/game-market-intelligence) · [Read the cross-market case](https://github.com/NewenergyEric/game-market-intelligence/tree/main/case-studies/cross-market-entry)

### 02 · [Game Reverse Analyst](https://github.com/NewenergyEric/game-reverse-analyst)

**Understand the play. Trace the implementation.**

It follows gameplay questions into observable states, authorized code and data, algorithm boundaries, numeric parameters, and asset families. What can be supported is tied to evidence. What still needs runtime testing or missing material stays open.

${projectVisual('reverse', 'en')}

[Explore the Skill](https://github.com/NewenergyEric/game-reverse-analyst) · [Read the open-source 2048 case](https://github.com/NewenergyEric/game-reverse-analyst/tree/main/case-studies/2048-open-source)

### 03 · [Game Production Manager](https://github.com/NewenergyEric/game-production-manager)

**Turn the intent into work people can start.**

It turns a loose production goal into a traceable scope, work packages, versioned inputs, owners, dependencies, assets, acceptance cases, and change impact. Missing decisions remain visible, and a plan is never presented as finished production.

${projectVisual('production', 'en')}

[Explore the Skill](https://github.com/NewenergyEric/game-production-manager) · [Open the production case](https://github.com/NewenergyEric/game-production-manager/tree/main/case-studies/community-order)

### 04 · [Art Director](https://github.com/NewenergyEric/art-director-skill)

**One team, one visual memory.**

It turns scattered references, rules, samples, and review notes into a project-specific Skill. Directors decide what must stay and what may vary; teammates and their agents create, review, and hand off on the same version across game art, UI systems, campaigns, posters, and other multi-person visual work.

${projectVisual('art', 'en')}

[Explore the Skill](https://github.com/NewenergyEric/art-director-skill) · [Watch the complete workflow](https://newenergyeric.github.io/art-director-skill/docs/landing.html#film)

## The wider practice

The subject changes, but the method stays recognizable: understand the work, make the judgment explicit, build something usable, and leave the next round better prepared.

| Function | What I am working on |
|---|---|
| **Brand & positioning** | Find the real audience, problem, and difference; keep words and visuals around one clear idea. |
| **Marketing & content** | Carry research into campaign plans, copy, storyboards, and channel-ready assets. |
| **Sales & partnerships** | Research the other side, prepare a specific reason to talk, and make the next step clear. |
| **Customer support & knowledge** | Connect scattered knowledge, grounded drafts, source checks, human review, and recurring-question evaluation. |
| **Operations & collaboration** | Make inputs, owners, approvals, handoffs, and exceptions visible. |
| **Data & decisions** | Clean the data, agree on definitions, investigate changes, and turn results into testable next actions. |
| **Product & interaction** | Build practical prototypes, use them myself, and revise the parts that feel awkward or unclear. |
| **Agent systems** | Combine knowledge, tools, Skills, evaluation, permissions, and execution records. |
| **Methods & training** | Turn decisions, mistakes, and revisions into guides, exercises, playbooks, and reusable Skills. |

## How I work with agents

1. **Start with the friction.** What is happening in the real work, and why does it matter?
2. **Make the judgment testable.** What evidence is available? What does a useful result need to do?
3. **Build a version someone can use.** Then I try the whole flow myself, including handoffs and failure cases.
4. **Keep what we learned.** Accepted decisions, failed approaches, and review criteria go back into the system.

I do not hand over the judgment. I keep asking where an answer came from, what remains unknown, and whether the result helps someone finish the work.

## What I believe

**Start with the work, not the AI feature.** A real problem gives us something honest to test.

**A usable result is stronger than a convincing demo.** It should survive the full path from input to handoff, including the awkward parts.

**Human judgment sets the direction. Agents help carry it through more steps and more people.**

**Know-how should compound.** If a decision mattered once, it should help the next project begin further ahead.

Four public Skills. Bilingual guides. Runnable cases. Tests, CI, and motion demos.

Made by Eric and Agents.

<details>
<summary><strong>中文简介</strong></summary>

我从不会写代码开始，现在仍然从同一个地方出发：先找到一个真实、值得解决的问题。

我和 Agent 一起把问题弄清楚，做出能用的第一版，自己从头用一遍，再继续修改。有效的做法不会只留在聊天里，而会变成 Skill、工具、流程或 Playbook，让下一个人和下一个 Agent 能接着成长。

**找到真实问题 → 验证有效方法 → 留下 know-how → 让能力持续成长。**

[查看完整中文版 →](README.zh.md)

</details>`;
}

function chineseBody() {
  return `# Hi，我是 Eric

### 我把真实工作，变成可以持续成长的 AI 能力。

我是从不会写代码开始的。直到现在，我还是从同一个地方出发：先找到一个自己真的想解决的问题。

我会和 Agent 一起把问题弄清楚，做出能用的第一版，自己从头用一遍，再继续修改。有效的做法不会只留在聊天里，我会把判断、失败和 know-how 整理成 Skill、工具、流程或 Playbook，让下一个人和下一个 Agent 能接着做。

**找到真实问题 → 验证有效方法 → 留下 know-how → 让能力持续成长。**

${artwork('zh')}

## 现在的重点：一条完整的游戏制作链路

游戏是我现在最集中验证这套方法的地方。四套开源 Skill 对应四个连续的判断：

| 研究 | 看懂 | 组织 | 把住方向 |
|---|---|---|---|
| 这个方向值得继续验证吗？ | 游戏里到底发生了什么？ | 哪些工作已经可以交给人或 Agent 开始？ | 多个人怎样沿着同一个视觉方向完成？ |
| 市场证据、比较、缺口 | 规则、代码、数值、资产 | 输入、负责人、依赖、验收 | 参考、样板、评审、版本 |

它们可以分别使用；连起来以后，团队可以从**机会在哪里**，走到**现在到底有什么**、**下一步做什么**，再走到**怎样让很多人做出来仍然像同一个项目**。

### 01 · [游戏市场研究总监](https://github.com/NewenergyEric/game-market-intelligence)

**看清市场，决定下一次验证。**

它把人群与品类、IP、地区渠道、文化、付费、竞争和团队能力放在一起比较。结论保留来源血缘，拿不到的数据继续保持未知，真正影响决定的缺口会变成明确的研究任务。

${projectVisual('market', 'zh')}

[查看 Skill](https://github.com/NewenergyEric/game-market-intelligence) · [阅读跨市场案例](https://github.com/NewenergyEric/game-market-intelligence/tree/main/case-studies/cross-market-entry)

### 02 · [游戏拆解与逆向分析师](https://github.com/NewenergyEric/game-reverse-analyst)

**看懂玩法，找到实现依据。**

它从具体的玩法问题出发，沿着可观察状态、合法可用的代码与数据、算法边界、数值参数和资产家族继续拆。能证明的内容留下依据；需要运行验证或缺少材料的部分，继续保持未知。

${projectVisual('reverse', 'zh')}

[查看 Skill](https://github.com/NewenergyEric/game-reverse-analyst) · [阅读 2048 开源案例](https://github.com/NewenergyEric/game-reverse-analyst/tree/main/case-studies/2048-open-source)

### 03 · [游戏制作项目经理](https://github.com/NewenergyEric/game-production-manager)

**把制作意图，交成能开工的任务。**

它把一句宽泛的制作目标，整理成可追踪的范围、工作包、版本输入、负责人、依赖、资产清单、验收用例和变更影响。缺少的决定保持可见，也不会把一份计划说成已经完成的制作。

${projectVisual('production', 'zh')}

[查看 Skill](https://github.com/NewenergyEric/game-production-manager) · [打开制作案例](https://github.com/NewenergyEric/game-production-manager/tree/main/case-studies/community-order)

### 04 · [Art Director](https://github.com/NewenergyEric/art-director-skill)

**一个团队/项目，一份视觉记忆。**

它把散落的参考、规则、样板和评审批注，整理成项目专属的 Skill。总监决定什么必须保留、什么可以变化；成员和各自的 Agent 沿同一版本制作、检查和交接。它可以用于游戏美术，也可以用于 UI 系统、电商活动、宣传海报和其他多人视觉生产。

${projectVisual('art', 'zh')}

[查看 Skill](https://github.com/NewenergyEric/art-director-skill) · [观看完整工作流](https://newenergyeric.github.io/art-director-skill/docs/landing.html#film)

## 这套方法还在进入更多工作

事情会变，但做法很接近：先看清工作，再把判断说清楚，做出能用的结果，并让下一轮比这一轮更容易开始。

| 职能 | 我正在做的事 |
|---|---|
| **品牌与定位** | 找到真正的人群、问题和差异，让文案与视觉围绕同一个主张。 |
| **营销与内容** | 让研究进入活动方案、文案、分镜和不同渠道的素材。 |
| **销售与合作** | 先了解对方，再准备值得沟通的具体原因和清楚的下一步。 |
| **客户服务与知识** | 连接分散资料、答复草稿、来源核对、人工审核和常见问题评测。 |
| **运营与协作** | 让输入、负责人、审批、交接和异常都能被看见。 |
| **数据与决策** | 清理数据、统一口径、调查变化，再把结果变成可以验证的下一步。 |
| **产品与交互** | 做出能试的原型，自己完整用一遍，再修改不顺或容易误解的地方。 |
| **Agent 系统** | 组合知识、工具、Skill、评测、权限和执行记录。 |
| **方法与培训** | 把判断、错误和修改整理成指南、练习、Playbook 和可复用 Skill。 |

## 我和 Agent 怎么一起做

1. **先找真实的摩擦。** 工作里到底发生了什么，为什么值得解决？
2. **把判断变得可检验。** 现在有哪些依据，一个有用的结果应该做到什么？
3. **做出别人能用的版本。** 我会自己走完整个流程，也会检查交接和出错的时候。
4. **把学到的东西留下来。** 已确认的判断、失败的做法和评审标准都会写回系统。

我不会把判断完全交给 Agent。我会继续问：答案从哪里来，还有什么不知道，这个结果能不能真的帮助一个人把工作完成。

## 我相信的几件事

**先从工作出发，再看 AI 能做什么。** 真实的问题，才有诚实的检验标准。

**能用的结果，比看起来厉害的演示更重要。** 它应该走得完整个流程，也经得住那些不顺的地方。

**人来决定方向，Agent 帮助这份判断进入更多步骤、更多人的工作。**

**know-how 应该持续积累。** 一次重要的判断，应该让下一次从更远的地方开始。

四套公开 Skill，中英文说明，可运行案例，测试、CI 与动态演示。

由 Eric 与 Agents 一起制作。`;
}

const english = `<p align="right"><strong>English</strong> · <a href="https://github.com/NewenergyEric/NewenergyEric/blob/main/README.zh.md">中文</a></p>\n\n${englishBody()}\n`;
const chinese = `<p align="right"><a href="https://github.com/NewenergyEric">English</a> · <strong>中文</strong></p>\n\n${chineseBody()}\n`;
await fs.writeFile(path.join(out, 'README.md'), english);
await fs.writeFile(path.join(out, 'README.en.md'), english);
await fs.writeFile(path.join(out, 'README.zh.md'), chinese);

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
