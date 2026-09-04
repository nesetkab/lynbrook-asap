export const officers = [
	{ name: 'Amber Lai', role: 'president' },
	{ name: 'Annie Wu', role: 'vice president' },
	{ name: 'Cleone Yung', role: 'secretary / treasurer' },
	{ name: 'Betty Huang', role: 'pr officer' },
	{ name: 'Deepthi Viswanathan', role: 'event coordinator' }
];

export const orgs = [
	{
		name: 'Best Friends',
		where: 'remote + in person',
		kind: 'all animals',
		notes: [
			'make a profile, watch the training videos, then browse the portal',
			'there is also an online project flagging prohibited craigslist pet sales'
		],
		links: [
			{ label: 'make a profile', href: 'https://volunteers.bestfriends.org/?nd=intake' },
			{ label: 'volunteer portal', href: 'https://volunteers.bestfriends.org/?nd=login' }
		]
	},
	{
		name: "Wiley's Wish Animal Rescue",
		where: 'san jose, ca',
		kind: 'dogs',
		notes: ['(603) 609-8594', 'wileyswish@gmail.com'],
		links: [
			{ label: 'website', href: 'https://www.wileyswish.com/volunteer' },
			{ label: 'application', href: 'https://airtable.com/apph1O45krJ6Rh1Ft/shrLVW7DXUkKaW2N8' },
			{
				label: 'waiver',
				href: 'https://docs.google.com/document/d/e/2PACX-1vSPeaisH-IPijovWqApeyi9EJ8zbOWaHpFqywQFZKblH07UHWUwXMi8kdIintIVO8ZyeEblKivh_Ezf/pub'
			}
		]
	},
	{
		name: 'Thulani Senior German Shepherd Rescue',
		where: 'cupertino, ca',
		kind: 'dogs',
		notes: ['1 (833) 736-4679', 'info@thulaniseniorgsr.org'],
		links: [
			{ label: 'website', href: 'http://thulanidogs.org/volunteering/' },
			{ label: 'application', href: 'https://petstablished.com/petlover/general_form/9508' }
		]
	},
	{
		name: 'Cat Resource Center',
		where: 'santa clara, ca',
		kind: 'cats',
		notes: ['contact us for more info'],
		links: []
	},
	{
		name: 'San Jose Animal Care and Services',
		where: 'san jose, ca',
		kind: 'all animals',
		notes: [
			'volunteeracs@sanjoseca.gov',
			'14 to 17 with a parent, or 18 and over',
			'santa clara county resident, six hours a month for three months'
		],
		links: [
			{
				label: 'foster',
				href: 'https://www.sanjoseca.gov/your-government/departments-offices/animal-care-services/ways-to-give/foster-program'
			},
			{
				label: 'volunteer',
				href: 'https://app.initlive.com/web-admin/app/#/join-party?k=xecu0f5ekb4jm0'
			}
		]
	}
];

export const newsletters = [
	{ title: 'february 2023', src: '/news/winter.jpg' },
	{ title: 'november 2022', src: '/news/fall.jpg' },
	{ title: 'october 2021', src: '/news/2021-2022.png' }
];

export const photos = Array.from({ length: 18 }, (_, i) => `/photos/p${String(i + 1).padStart(2, '0')}.jpg`);

export const hoursForm = 'https://tinyurl.com/asapvolunteering2526';
export const pointsSheet = 'https://tinyurl.com/asappoints2526';
export const email = 'lynbrookasap@gmail.com';
