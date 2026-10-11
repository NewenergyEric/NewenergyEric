[中文](GAME-DEV-SKILLS.md) · [Back to Eric’s profile](README.en.md)

# Game Dev Skills

### Carry each decision to the next person.

What is worth making? How do competitors’ games work? What resources does the project need? What will define its original art? These questions can belong to a team of specialists or to one person wearing every hat.

Four Skills connect research, analysis, production planning and art direction. Start with the question blocking you. Each repository includes natural-language starting prompts, inspectable cases and concrete deliverables.

## Start with your question

| Your question | Start here | Carry forward |
|---|---|---|
| What is worth making? | [Market research](https://github.com/NewenergyEric/game-market-intelligence/blob/main/README.en.md) | Options, sources and validation gaps |
| How does it work? | [Reverse analysis](https://github.com/NewenergyEric/game-reverse-analyst/blob/main/README.en.md) | Rules, implementation evidence and asset BOM |
| Can we scope and deliver it? | [Production planning](https://github.com/NewenergyEric/game-production-manager/blob/main/README.en.md) | SOW, work packages, dependencies and acceptance |
| What defines the art? | [Art direction](https://github.com/NewenergyEric/art-director-skill/blob/main/README.en.md) | Shared rules, representative samples and project pack |

**Solo creator:** start with the question blocking you and switch roles as needed. **Team:** hand off actual reports, BOMs, work packages and art rules, keeping sources, versions and open decisions visible.

This is a collaboration method; it does not include an orchestrator that automatically runs four agents in sequence.

## Inspect the work before installing

| Case | What you can inspect | Evidence scope |
|---|---|---|
| [Compare three games](https://github.com/NewenergyEric/game-market-intelligence/blob/main/case-studies/cross-market-entry/README.en.md) | Gossip Harbor, MONOPOLY GO! and Stardew Valley: 3 products × 6 lenses, 18 evidence cells and a dashboard | Real public-source research; no ad experiments or unavailable paid data |
| [Trace a 2048 merge](https://github.com/NewenergyEric/game-reverse-analyst/blob/main/case-studies/2048-open-source/deep-dive.en.md) | Pinned commit 478b6ec, code paths, probability calculations, asset BOM and 18 input hashes | Static analysis and formula recalculation; target game not executed |
| [Hand off a community order](https://github.com/NewenergyEric/game-production-manager/blob/main/case-studies/community-order/README.en.md) | 12 tasks, 12 deliverables, 12 acceptance cases; actual validation, export and impact checks | An original plan; the feature has not been produced |
| [Share an art-direction pack](https://github.com/NewenergyEric/art-director-skill/tree/main/examples/harbor-studio-draft) | Five guides, a project Skill, samples and rule references | Runnable fictional draft with Chinese project content; candidate art is not approved art |

## Install one. Take the next step.

Choose a repository in an Agent Skills-compatible tool. For example:

```sh
npx skills add https://github.com/NewenergyEric/art-director-skill
```

Then ask: “Here are our existing designs, references and notes. Help me establish the rules, prepare representative samples and package the result for the team.” Each other role has its own installation command and starting prompts near the top of its README.

The general Skill provides a method; give your agent your project materials separately. All four repositories use the MIT license. Core helpers require Python 3.10+. Generation, editing and data access depend on the host’s available tools and permissions.

## Why art direction became four roles

It began with a specific frustration: the art director kept explaining decisions that the next contributor still could not find. Research conclusions, competitor analysis and production tasks suffer the same loss of context. Materials multiply; evidence scatters; a new role starts the explanation again.

I want each step to leave something the next person can use. The tools help organize and check; people remain responsible for direction, creation and acceptance.

After trying a task, use the feedback entry in its repository to share your goal, actual output and the step that still needs help. Real attempts will guide the next improvements.

## How the roles connect

[Handoffs and feedback in detail](https://github.com/NewenergyEric/art-director-skill/blob/main/docs/WORKFLOW.en.md) · [Open the full diagram](https://raw.githubusercontent.com/NewenergyEric/art-director-skill/main/docs/assets/workflow/workflow-en.png)

![Evidence and feedback connect market research, game analysis, production assessment and original art direction.](https://raw.githubusercontent.com/NewenergyEric/art-director-skill/main/docs/assets/workflow/workflow-en.png)
