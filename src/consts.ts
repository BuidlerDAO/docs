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

export const GITHUB_EDIT_URL = `https://github.com/BuidlerDAO/docs`;

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
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Page 2', link: 'en/page-2' },
			{ text: 'Page 3', link: 'en/page-3' },
		],
		"Frontend": []
	},
	'zh-cn': {
		'介绍': [
			{ text: 'Introduction', link: 'zh-cn/introduction' },
		],
	}
};
