export const SITE = {
	title: 'BuidlerDao Docs',
	description: 'BuidlerDao docs.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://cdn-fe.s3.amazonaws.com/static/website/logotext.svg',
		alt:
			'BuidlerDAO logo,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'BuidlerDAO',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	简体中文: 'zh-cn',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/BuidlerDAO/docs/tree/main`;

export const COMMUNITY_INVITE_URL = `https://discord.com/invite/Qx8GXtHUv2`;

export const OFFICIAL_WEBSITE_URL = `https://buidlerdao.xyz`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'docs',
	appId: 'PRUF2GL786',
	apiKey: 'f2729445e25aac77252912804f04fabe',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;

export const SIDEBAR: Sidebar = {
	en: {
		'Intro': [
			{ text: 'Introduction', link: 'en/intro/introduction' }
		],
		"INCUBATION": [
			{ text: 'Introduction', link: 'en/incubation/intro' }
		],
		"EDUCATION": [
			{ text: 'Introduction', link: 'en/education/intro' }
		],
		"RESEARCH": [
			{ text: 'Introduction', link: 'en/research/intro' },
			{ text: 'Cognitive Locust Project', link: 'en/research/cognitive-locust-project' },
			{ text: 'In-depath Research', link: 'en/research/in-depath-research' },
			{ text: 'Hackathon Innovation Tracker', link: 'en/research/hackathon-innovation-tracker' }
		],
		"TECHNOLOGY": [
			{ text: 'Introduction', link: 'en/technology/intro' },
			{ text: 'Buidler Closed Meeting', link: 'en/technology/buidler-closed-meeting'}
		],
		"OPERATION": [
			{ text: 'Introduction', link: 'en/operation/intro' },
			{ text: 'Buidler Space', link: 'en/operation/buidler-space' },
			{ text: 'Buidler Talk', link: 'en/operation/buidler-talk' }
		],
		"Vitae3": [
			{ text: 'Introduction', link: 'en/vitae3/intro' }
		]
	},
	'zh-cn': {
		'简介': [
			{ text: '引言', link: 'zh-cn/intro/introduction' },
		],
		"孵化公会": [
			{ text: '引言', link: 'zh-cn/incubation/intro' }
		],
		"教育公会": [
			{ text: '引言', link: 'zh-cn/education/intro' }
		],
		"投研公会": [
			{ text: '引言', link: 'zh-cn/research/intro' },
			{ text: '认知蝗虫计划', link: 'zh-cn/research/cognitive-locust-project' },
			{ text: '研报', link: 'zh-cn/research/in-depath-research' },
			{ text: '黑客松创新追踪', link: 'zh-cn/research/hackathon-innovation-tracker' }
		],
		"技术公会": [
			{ text: '引言', link: 'zh-cn/technology/intro' },
			{ text: 'Buidler闭门会', link: 'zh-cn/technology/buidler-closed-meeting'}
		],
		"运营公会": [
			{ text: '引言', link: 'zh-cn/operation/intro' },
			{ text: 'Buidler Space', link: 'zh-cn/operation/buidler-space' },
			{ text: 'Buidler Talk', link: 'zh-cn/operation/buidler-talk' }
		],
		"Vitae3": [
			{ text: '引言', link: 'zh-cn/vitae3/intro' }
		]
	}
};
