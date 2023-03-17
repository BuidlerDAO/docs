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
			{ text: 'Introduction', link: 'en/research/intro' }
		],
		"TECHNOLOGY": [
			{ text: 'Introduction', link: 'en/technology/intro' }
		],
		"OPERATION": [
			{ text: 'Introduction', link: 'en/operation/intro' }
		],
		"Vitae3": [
			{ text: 'Introduction', link: 'en/vitae3/intro' }
		]
	},
	'zh-cn': {
		'介绍': [
			{ text: '引言', link: 'zh-cn/intro/introduction' },
		],
		"孵化公会": [
			{ text: '引言', link: 'zh-cn/incubation/intro' }
		],
		"教育公会": [
			{ text: '引言', link: 'zh-cn/education/intro' }
		],
		"投研公会": [
			{ text: '引言', link: 'zh-cn/research/intro' }
		],
		"技术公会": [
			{ text: '引言', link: 'zh-cn/technology/intro' }
		],
		"运营公会": [
			{ text: '引言', link: 'zh-cn/operation/intro' }
		],
		"Vitae3": [
			{ text: '引言', link: 'zh-cn/vitae3/intro' }
		]
	}
};
