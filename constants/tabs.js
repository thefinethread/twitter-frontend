import useAuthStore from '~/stores/auth';

const { user } = useAuthStore();

const profileTabs = [
	{
		id: 1,
		title: 'Posts',
		to: `/${user.username}`,
	},
	{
		id: 2,
		title: 'Following',
		to: `/${user.username}/following`,
	},
	{
		id: 3,
		title: 'Followers',
		to: `/${user.username}/followers`,
	},
	{
		id: 4,
		title: 'Likes',
		to: `/${user.username}/likes`,
	},
	{
		id: 5,
		title: 'Replies',
		to: `/${user.username}/replies`,
	},
];

export { profileTabs };
