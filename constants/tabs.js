import useAuthStore from '~/stores/auth';

const { user } = useAuthStore();

const profileTabs = [
	{
		id: 1,
		title: 'Posts',
		navigationSuffix: ``,
	},
	{
		id: 2,
		title: 'Following',
		navigationSuffix: `following`,
	},
	{
		id: 3,
		title: 'Followers',
		navigationSuffix: `followers`,
	},
	{
		id: 4,
		title: 'Likes',
		navigationSuffix: `likes`,
	},
	{
		id: 5,
		title: 'Replies',
		navigationSuffix: `replies`,
	},
];

export { profileTabs };
