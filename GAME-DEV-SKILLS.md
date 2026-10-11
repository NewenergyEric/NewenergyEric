[English](GAME-DEV-SKILLS.en.md) · [回到 Eric 的主页](README.md)

# Game Dev Skills

### 把做过的判断，交到下一位手里。

什么值得做？竞对做了什么？资源和体量有多大？自己的核心美术如何建立？做游戏时，这些问题会落到不同岗位，也可能都落在一个人身上。

四个 Skill 把研究、拆解、制作安排与美术规范接起来。先选眼前卡住的一步；每个项目都有自然语言开场白、可检查的案例和具体交付物。

## 从你的问题开始

| 眼前的问题 | 从这个岗位开始 | 带到下一步的资料 |
|---|---|---|
| 什么值得做？ | [市场研究](https://github.com/NewenergyEric/game-market-intelligence) | 机会比较、来源与验证缺口 |
| 竞对做了什么？ | [游戏拆解](https://github.com/NewenergyEric/game-reverse-analyst) | 规则、实现依据与资产 BOM |
| 做得起，也做得完吗？ | [制作管理](https://github.com/NewenergyEric/game-production-manager) | SOW、工作包、依赖与验收 |
| 核心美术如何建立？ | [美术总监](https://github.com/NewenergyEric/art-director-skill) | 共享规范、代表样板与项目包 |

**个人创作者：** 从当前卡住的问题开始，按需要切换岗位。**团队：** 用实际报告、BOM、工作包和美术规范交接；每一步保留来源、版本与未定项。

这是协作方法，当前没有自动串行执行四个 Agent 的编排器。

## 先看成果，再决定要不要用

| 案例 | 可以检查什么 | 证据范围 |
|---|---|---|
| [三款游戏怎么比较](https://github.com/NewenergyEric/game-market-intelligence/tree/main/case-studies/cross-market-entry) | Gossip Harbor、MONOPOLY GO!、Stardew Valley：3 款 × 6 维，18 个证据单元与看板 | 真实公开资料研究；不含投放实验或未取得的付费数据 |
| [2048 为什么这样合并](https://github.com/NewenergyEric/game-reverse-analyst/blob/main/case-studies/2048-open-source/deep-dive.md) | 固定 commit 478b6ec，代码路径、概率复算与资产 BOM；18 个输入哈希 | 静态分析与公式复算；未运行目标游戏 |
| [社区订单怎样交给团队](https://github.com/NewenergyEric/game-production-manager/tree/main/case-studies/community-order) | 12 个任务、12 个交付物、12 个验收用例；实际运行校验、导出与变更影响检查 | 原创计划，功能尚未制作 |
| [一份美术规范怎样交接](https://github.com/NewenergyEric/art-director-skill/tree/main/examples/harbor-studio-draft) | 五份手册、项目 Skill、样板与规则关联 | 可运行的虚构项目草案；候选素材不是已批准资产 |

## 装一个，完成眼前的一步

在支持 Agent Skills 的工具中，选择对应仓库安装；例如：

```sh
npx skills add https://github.com/NewenergyEric/art-director-skill
```

然后直接说：“这是现有作品、参考和批注，帮我逐步建立规范，准备代表样板，最后打包给团队。”其他三个岗位的安装命令与开场白，都在各自 README 首屏之后。

通用 Skill 提供方法；你的项目资料需要单独交给 Agent。四个仓库均采用 MIT 许可证。核心辅助脚本使用 Python 3.10+，生成、编辑及数据访问取决于宿主工具与可用权限。

## 为什么从美术扩展到四个岗位

起点是一个很具体的困扰：主美反复解释的判断，下一位接手的人仍然找不到。同样的事也发生在研究结论、竞品分析和制作任务上。资料一多，依据散了；角色一换，又从头解释。

我想留下每一步的依据，让下一位能接着做。工具帮助整理和检查，人继续负责方向、创作与验收。

用过一次后，欢迎通过各仓库的使用反馈入口，告诉我目标、实际输出和还卡住的一步。真实反馈会帮助决定下一次改哪里。

## 四个岗位怎样接起来

[具体交接与反馈](https://github.com/NewenergyEric/art-director-skill/blob/main/docs/WORKFLOW.md) · [查看完整关系图](https://raw.githubusercontent.com/NewenergyEric/art-director-skill/main/docs/assets/workflow/workflow-zh.png)

![市场研究、游戏拆解、制作评估与美术创作之间的资料交接和反馈。](https://raw.githubusercontent.com/NewenergyEric/art-director-skill/main/docs/assets/workflow/workflow-zh.png)
