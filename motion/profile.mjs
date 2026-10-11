import {PROFILE} from './content.mjs';

const github = 'https://github.com/NewenergyEric';
const raw = 'https://raw.githubusercontent.com/NewenergyEric';

function artwork(lang) {
  const alt = lang === 'zh'
    ? '我和 AI 一起做的九类工作：营销、销售、品牌、客服、运营、数据、产品、Agent 和方法整理。'
    : 'Work I do with AI: marketing, sales, brand, support, operations, data, products, agents, and shared methods.';
  return `<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="media/work-still-${lang}.png">
  <img src="media/work-motion-${lang}.gif" width="1100" alt="${alt}">
</picture>

<p align="right"><sub><a href="media/work-still-${lang}.png">${lang === 'zh' ? '查看静态图' : 'View the still image'}</a></sub></p>`;
}

function projectShelf(lang) {
  const zh = lang === 'zh';
  return `<table>
<tr>
<td width="50%" valign="top">
<a href="https://fde.aielsen.com/${lang}/"><img src="${raw}/enterprise-ai-playbook/main/docs/media/fde-motion-${lang}.png" width="100%" alt="${zh ? '企业 AI 工作指南：从业务问题、工作流程到成果与方法积累。' : 'Enterprise AI Playbook: from business questions and workflows to useful results and reusable methods.'}"></a>
<p><strong>${zh ? '把 AI 用进每天的工作' : 'Bring AI into everyday work'}</strong></p>
<p>${zh ? '从营销、客服到运营，把工作怎么做、哪里需要判断，整理成指南、案例和练习。可以从眼前的一件事开始看。' : 'Guides, cases, and exercises for marketing, support, and operations. Start with a task you recognize and follow the decisions behind it.'}</p>
<a href="https://fde.aielsen.com/${lang}/playbook/">${zh ? '找一个工作场景 →' : 'Find a work scenario →'}</a> · <a href="${github}/enterprise-ai-playbook">${zh ? '查看项目' : 'Project'}</a>
</td>
<td width="50%" valign="top">
<a href="${github}/art-director-skill"><img src="${raw}/art-director-skill/main/assets/readme/depth-preview-${lang}.jpg" width="100%" alt="${zh ? 'Art Director：把参考、样板和修改意见整理成团队共同的设计依据。' : 'Art Director: shared references, samples, and review notes for a design team.'}"></a>
<p><strong>${zh ? '让设计少一点反复解释' : 'Spend less time re-explaining the design'}</strong></p>
<p>${zh ? '把参考图、样板和修改意见交给团队与 AI 接着用。做海报、商品、UI 或游戏美术，都能沿着同一套规范继续。' : 'Give teammates and their agents a shared set of references, samples, and decisions to work from across posters, products, UI, and game art.'}</p>
<a href="${github}/art-director-skill/tree/main/examples/campaign-studio-draft">${zh ? '看活动设计案例 →' : 'Explore the campaign example →'}</a> · <a href="https://newenergyeric.github.io/art-director-skill/docs/landing.html#film">${zh ? '看短片' : 'Watch the film'}</a>
</td>
</tr>
</table>`;
}

function gameExample(lang) {
  return lang === 'zh' ? `<details>
<summary><strong>最近的一个实验：用四套 Skill 接起游戏开发（展开看项目）</strong></summary>

游戏是其中一个实践场景。我在尝试把研究、分析、制作安排和美术协作接起来，让个人创作者和团队都知道下一步怎么做。

| 要解决的事 | 项目入口 |
|---|---|
| 先看看市场，再决定试哪个方向 | [市场研究](https://github.com/NewenergyEric/game-market-intelligence) |
| 看懂一个玩法，找到背后的规则与实现 | [拆解分析](https://github.com/NewenergyEric/game-reverse-analyst) |
| 把“想做什么”拆成能开工、能检查的任务 | [制作管理](https://github.com/NewenergyEric/game-production-manager) |
| 多人做出的素材，沿用同一套美术规范 | [美术指导](https://github.com/NewenergyEric/art-director-skill) |

每个项目里都有更完整的说明、案例和图文演示。

</details>` : `<details>
<summary><strong>A recent experiment: four Skills for making a game</strong></summary>

Games are one place I’m trying this approach. The aim is to connect research, analysis, production planning, and art direction so a solo creator or a team can work out what to do next.

| The question | Explore |
|---|---|
| Which direction is worth trying? | [Market research](https://github.com/NewenergyEric/game-market-intelligence) |
| How does this game work, and what supports that reading? | [Reverse analysis](https://github.com/NewenergyEric/game-reverse-analyst) |
| What work can we start, and how will we check it? | [Production planning](https://github.com/NewenergyEric/game-production-manager) |
| How can different contributors follow the same art direction? | [Art direction](https://github.com/NewenergyEric/art-director-skill) |

Each project has fuller explanations, examples, and visual demos.

</details>`;
}

export function renderReadme(lang) {
  if (!['zh', 'en'].includes(lang)) throw new Error('Expected zh or en');
  const c = PROFILE[lang];
  if (lang === 'en') return `<p align="right"><a href="${github}">中文</a> · <strong>English</strong></p>

# Hi, I’m Eric 👋

**I started without knowing how to code. Now I’m learning by building with AI.**

${c.intro.join('\n\n')}

${artwork(lang)}

## What I’m working on

These projects often start with a familiar frustration. Here are the questions I’m working through:

| Area | The work I’m trying to make easier |
|---|---|
| **Marketing & content** | Carry audience research into a campaign, copy, visuals, and video storyboards. Keep what we learned useful through each revision. |
| **Sales & partnerships** | Understand a prospect or partner, prepare a relevant proposal, and keep the next conversation clear. |
| **Brand & positioning** | Explain who a product helps and why someone would choose it. Bring that idea into its words and visuals. |
| **Support & knowledge** | Find the right information, draft a useful reply, and keep corrections so the next answer improves. |
| **Operations & teamwork** | Make it clear what’s ready, what’s stuck, and who takes the next step. |
| **Data & decisions** | Check how the numbers were calculated, investigate changes, and work out what to try next. |
| **Products & interaction** | Turn a need into a usable tool, from browser helpers and local apps to voice and learning experiences. |
| **Agent collaboration** | Help AI find the right material and use tools to finish a task, with people making the decisions that need judgment. |
| **Methods & learning** | Turn useful experience and mistakes into guides, exercises, and Skills that others can build on. |

## A few things you can explore

${projectShelf(lang)}

${gameExample(lang)}

## How I approach the work

${c.process}

**${c.note}**

I’m still learning. If a task keeps getting stuck, you have an idea you’d like to try, or your team has experience worth turning into a tool, I’d be glad to compare notes. We can start with the work itself.

[Browse the projects →](${github}?tab=repositories) · [Explore the work guides →](https://fde.aielsen.com/en/)

<sub>Made by Eric and Agents. Still learning, still building.</sub>
`;

  return `<p align="right"><strong>中文</strong> · <a href="${github}/NewenergyEric/blob/main/README.en.md">English</a></p>

# 你好，我是 Eric 👋

**从不会写代码开始，和 AI 一起，边学边把想法做出来。**

${c.intro.join('\n\n')}

${artwork(lang)}

## 最近在忙什么

很多项目，都是从一句“这件事能不能做得更好一点”开始的。我现在主要在这些地方尝试：

| 方向 | 我想把这些事做得更顺 |
|---|---|
| **营销与内容** | 从了解人群、研究竞品，到活动方案、文案、图片和视频分镜，让前面做过的研究在后面派上用场。 |
| **销售与合作** | 先了解客户和伙伴，再准备提案、沟通重点与跟进安排，让每一次联系都有具体的理由。 |
| **品牌与定位** | 把“给谁用、解决什么、为什么选你”说清楚，再一起做文案和视觉。 |
| **客服与知识** | 把散落的资料找齐，帮同事准备有依据的答复；改对过的问题，下次能记住。 |
| **运营与协作** | 这件事到哪了，还缺什么，该交给谁？让这些答案在流程里找得到。 |
| **数据与决策** | 先把数字的来龙去脉弄清楚，再看变化、找原因，决定下一步试什么。 |
| **产品与交互** | 把需求做成能用的工具，也在尝试浏览器助手、本地应用、语音和学习体验。 |
| **Agent 协作** | 让 AI 找得到资料、用得上工具、接得住任务，需要判断的地方有人把关。 |
| **方法与学习** | 把做成的方法和踩过的坑整理成指南、练习与 Skill，让下一次、下一个人能接着用。 |

## 几个可以直接看看的成果

${projectShelf(lang)}

${gameExample(lang)}

## 我习惯怎么开始

${c.process}

**${c.note}**

我还在继续学。如果你也有一件总卡住的工作、一个想试的点子，或者一套值得传下去的经验，欢迎交流。从你眼前的那件事聊起就好。

[看看我在做的项目 →](${github}?tab=repositories) · [找一个工作场景 →](https://fde.aielsen.com/zh/playbook/)

<details>
<summary>English · a short introduction</summary>

I started without knowing how to code. Now I build products, create content, and improve workflows with AI agents. I look for real problems, try practical ways to solve them, and turn what works into tools and methods that people and agents can keep improving.

My work spans marketing, sales, brand, support, operations, data, products, agent collaboration, and learning.

[Read the full English profile →](README.en.md)

</details>

<sub>由 Eric 和 Agents 一起做出来，也一起继续学。</sub>
`;
}
