export const PROFILE = {
  zh: {
    intro: [
      '我从不会写代码开始，现在在和 AI Agent 一起做一些自己想用的工具。做的东西比较杂，营销、销售、品牌、客服，还有数据分析，很多都来自实际工作里碰到的问题。',
      '我比较在意的是，做出来以后到底好不好用。所以会自己试，不顺就继续改。过程中也在学怎么把问题讲清楚，怎么判断 Agent 做得对不对。能用的方法会整理成文档和 Skill，下次接着用。'
    ],
    note: '下面按职能写了我正在做的事情。有些还在做原型，有些已经进入试用。涉及客户的项目就不写名字了。',
    process: '通常是我先说明想做什么、为什么要做，让 Agent 帮忙研究和实现，再一起检查结果。有些想法试完会改，有些会暂时放下。每次做完，能留下一个好用的工具，或者搞清楚一个问题，我觉得就有价值。'
  },
  en: {
    intro: [
      'I started without knowing how to code. Now I work with AI agents on tools I want to use myself. The work covers marketing, sales, brand, customer support, and data analysis. Much of it starts with a problem I have run into at work.',
      'I care about whether the result is useful, so I try it myself and keep changing what feels awkward. Along the way, I am learning to explain problems and judge an agent’s work. I keep methods that work in documents and skills so I can use them again.'
    ],
    note: 'These are the areas I am working on. Some are still prototypes; others are being tried in practice. I leave out project names where clients are involved.',
    process: 'I usually start by explaining what I want to do and why. Agents help with the research and implementation, and we check the result together. Some ideas change after I try them; some get put aside. A useful tool or a better understanding of a problem is a worthwhile result for me.'
  }
};

export const AREAS = [
  {
    id:'marketing', short:{zh:'营销',en:'Marketing'},
    zh:{name:'营销与内容',title:['从查资料，','一直做到内容。'],detail:['研究人群、竞品，整理活动方案。','接着写文案、做视频分镜。'],output:'研究简报 / 内容方案 / 文案 / 分镜',
      body:'我在试着把营销工作接起来，从查人群、看竞品，到做方案、写文案和视频分镜。前面做的研究，后面做内容时应该能用上。我也在整理不同渠道的内容做法，方便反复修改和使用。',
      labels:['人群与竞品','内容方案','营销文案','视频分镜','研究资料','制作中']},
    en:{name:'Marketing and content',title:['From research','to actual content.'],detail:['Research the audience and competitors.','Develop the plan, copy, and storyboards.'],output:'Research / Campaign plans / Copy / Storyboards',
      body:'I am connecting audience and competitor research with campaign planning, copy, and video storyboards. The research should help when it is time to make the content. I am also organizing approaches for different channels so they are easier to revise and use again.',
      labels:['Audience research','Content plan','Campaign copy','Storyboards','Source material','In production']}
  },
  {
    id:'sales',short:{zh:'销售',en:'Sales'},
    zh:{name:'销售与商务拓展',title:['先了解对方，','再准备怎么聊。'],detail:['研究潜在客户和合作伙伴。','整理提案、沟通重点和跟进记录。'],output:'客户研究 / 提案准备 / 跟进安排',
      body:'销售这边，我在用 Agent 研究潜在客户、创作者和合作伙伴，整理值得接触的人，以及为什么值得聊。再往下是提案准备和跟进安排，尽量让每次沟通都有具体的背景。',
      labels:['线索资料','研究中','准备沟通','跟进安排','合作提案','沟通重点']},
    en:{name:'Sales and partnerships',title:['Do the homework.','Then reach out.'],detail:['Look into prospects and potential partners.','Prepare proposals and follow-up notes.'],output:'Prospect research / Proposals / Follow-up',
      body:'I use agents to research prospects, creators, and potential partners, including why a conversation might be worth having. I am also working on proposal preparation and follow-up planning so each conversation has useful context behind it.',
      labels:['Prospects','Researching','Ready to contact','Follow-up plan','Proposal','Talking points']}
  },
  {
    id:'brand',short:{zh:'品牌',en:'Brand'},
    zh:{name:'品牌与定位',title:['产品给谁用，','为什么会选它。'],detail:['把人群、场景和产品事实放一起。','再确定怎么介绍、怎么呈现。'],output:'人群研究 / 产品定位 / 表达与视觉',
      body:'我会先看产品给谁用、解决什么问题，再看竞品怎么说。想清楚以后，再做定位、卖点、品牌故事和视觉规范。我希望最后的表达能说清楚这个产品。',
      labels:['使用人群','产品事实','使用场景','产品定位','表达与视觉','品牌说明']},
    en:{name:'Brand and positioning',title:['Who is it for?','Why this product?'],detail:['Look at the audience, use, and product facts.','Work out how to explain and present it.'],output:'Audience / Positioning / Copy and visual guidelines',
      body:'I start with who the product is for and what problem it solves, then look at how competitors describe their products. That informs the positioning, selling points, brand story, and visual guidelines. I want the result to explain the product clearly.',
      labels:['Audience','Product facts','Use cases','Positioning','Copy and visuals','Brand notes']}
  },
  {
    id:'support',short:{zh:'客服',en:'Support'},
    zh:{name:'客户服务与知识',title:['把资料找出来，','再把回答写清楚。'],detail:['把分散的资料整理成可查的知识。','答复先起草，查过依据再审核。'],output:'知识整理 / 答复草稿 / 来源 / 人工审核',
      body:'客服和知识库是我一直在做的方向。资料散在不同地方，回答很容易漏信息。我在把检索、答复草稿、来源核对和人工审核接起来，也会用常见问题检查系统是不是回答得更稳了。',
      labels:['客户问题','查找资料','资料来源','答复草稿','人工审核','已核对']},
    en:{name:'Customer support and knowledge',title:['Find the source.','Then draft a reply.'],detail:['Organize scattered material for retrieval.','Check the draft and review it before use.'],output:'Knowledge / Reply drafts / Sources / Human review',
      body:'Customer support and knowledge systems are areas I keep working on. When information is scattered, replies can miss things. I am connecting retrieval, reply drafts, source checks, and human review, then using recurring questions to check how well the system answers.',
      labels:['Question','Find material','Sources','Reply draft','Human review','Checked']}
  },
  {
    id:'operations',short:{zh:'运营',en:'Operations'},
    zh:{name:'运营与团队协作',title:['这件事到哪了，','接下来该谁做。'],detail:['整理资料、审批和任务交接。','把卡住的地方单独找出来。'],output:'资料准备 / 审批 / 交接 / 异常跟进',
      body:'有些工作本身不复杂，麻烦在资料没齐、审批没走完，或者不知道该交给谁。我在把这些环节整理成流程，让任务状态、责任人和异常情况能看得见。',
      labels:['资料准备','待审核','交接完成','缺一份资料','补充资料','继续处理']},
    en:{name:'Operations and collaboration',title:['Where is it stuck?','Who takes it next?'],detail:['Track information, approvals, and handoffs.','Bring blocked tasks into view.'],output:'Preparation / Approvals / Handoffs / Exceptions',
      body:'Some work is straightforward until information is missing, approval is pending, or nobody knows who takes it next. I am organizing these steps into workflows that make the status, owner, and exceptions visible.',
      labels:['Preparation','Review','Handed over','Missing material','Add material','Continue']}
  },
  {
    id:'data',short:{zh:'数据',en:'Data'},
    zh:{name:'数据分析与决策',title:['先把数弄明白，','再讨论怎么改。'],detail:['清洗数据，统一指标口径。','查异常，整理看板和分析建议。'],output:'数据清洗 / 指标核对 / 看板 / 分析',
      body:'我在做广告和经营数据的分析，先把数据清洗和指标口径弄清楚，再做看板、找异常、整理建议。看到一个结果时，我想知道它是怎么算出来的，也想知道接下来能试着改什么。',
      labels:['原始数据','口径核对','趋势与异常','分析记录','待核对','已统一']},
    en:{name:'Data and decisions',title:['Check the numbers.','Then decide.'],detail:['Clean the data and check metric definitions.','Explore the patterns and possible changes.'],output:'Data cleanup / Metric checks / Dashboards / Analysis',
      body:'I work on advertising and business data, starting with cleanup and consistent metric definitions. Then I build dashboards, investigate unusual results, and prepare suggestions. I want to understand how a result was calculated and what might be worth changing next.',
      labels:['Source data','Metric checks','Trends and outliers','Analysis notes','To check','Consistent']}
  },
  {
    id:'product',short:{zh:'产品',en:'Product'},
    zh:{name:'产品与交互体验',title:['先做一版，','我自己用用看。'],detail:['试浏览器工具、本地应用和语音。','把使用中不顺的地方继续改。'],output:'浏览器 / 本地工具 / 语音 / 学习体验',
      body:'浏览器助手、本地工具、语音交互和学习体验，我都有在尝试。通常先和 Agent 做一版，自己从头用一遍。功能能运行以后，还要继续看哪里不顺手、哪里容易让人误解。',
      labels:['浏览器原型','语音交互','使用记录','开始试用','这个步骤再改改','已记录']},
    en:{name:'Product and interaction',title:['Make a first version.','Try it myself.'],detail:['Try browser tools, local apps, and voice.','Revise the parts that are awkward to use.'],output:'Browser tools / Local apps / Voice / Learning',
      body:'I am trying browser assistants, local tools, voice interaction, and learning experiences. Usually I build a first version with agents and use it from beginning to end myself. Once it runs, there is still work to do on the parts that feel awkward or confusing.',
      labels:['Browser prototype','Voice interaction','Usage notes','Try it','Rework this step','Noted']}
  },
  {
    id:'agents',short:{zh:'Agent',en:'Agents'},
    zh:{name:'Agent 能力与流程工程',title:['哪些交给 Agent，','哪些由我来判断。'],detail:['接入知识、工具和 Skill。','检查执行过程，保留审核和记录。'],output:'知识 / 工具 / Skill / 评测与审核',
      body:'我也在做定制 Agent 和协作工作台，把知识、工具、Skill 组合起来。这里会花不少时间检查执行过程：拿到了什么资料，用了什么工具，哪里需要我来确认，以及出错以后怎么查。',
      labels:['任务','知识','工具','Skill','评测','人工确认']},
    en:{name:'Agent workflows',title:['Let agents handle it.','Keep my judgment.'],detail:['Connect knowledge, tools, and skills.','Check the work and keep review records.'],output:'Knowledge / Tools / Skills / Evaluation and review',
      body:'I am also building custom agents and shared workspaces by combining knowledge, tools, and skills. I spend time checking what material an agent used, which tools it called, when it needs my confirmation, and how to trace an error.',
      labels:['Task','Knowledge','Tools','Skills','Evaluation','Human check']}
  },
  {
    id:'methods',short:{zh:'方法',en:'Methods'},
    zh:{name:'方法沉淀与培训',title:['这次怎么做的，','下次还能接着用。'],detail:['记录做法，也记下踩过的坑。','整理成指南、练习和可复用 Skill。'],output:'实践记录 / 操作指南 / 课程练习 / Skill',
      body:'做过的事情，我会把判断过程、失败和修改记下来，再整理成操作指南、课程练习或者 Skill。这样下次碰到类似问题，可以接着做，也方便拿出来和别人讨论。',
      labels:['实践记录','操作指南','课程练习','Skill','下次任务','经验与修改']},
    en:{name:'Methods and training',title:['Keep what worked.','Use it next time.'],detail:['Write down the approach and what went wrong.','Turn it into guides, exercises, and skills.'],output:'Practice notes / Guides / Exercises / Skills',
      body:'I keep notes on the decisions, failures, and revisions, then turn them into guides, course exercises, or skills. That gives me a place to start when a similar problem comes up, and something concrete to discuss with other people.',
      labels:['Practice notes','Guides','Exercises','Skills','Next task','What changed']}
  }
];
