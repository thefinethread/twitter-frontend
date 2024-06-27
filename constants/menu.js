import {
	BellIcon,
	BookmarkIcon,
	EnvelopeIcon,
	MagnifyingGlassIcon,
	QueueListIcon,
	UserGroupIcon,
	UserIcon,
	HomeIcon,
} from '@heroicons/vue/24/outline';

import {
	HomeIcon as HomeIconSolid,
	BellIcon as BellIconSolid,
	BookmarkIcon as BookmarkIconSolid,
	EnvelopeIcon as EnvelopeIconSolid,
	QueueListIcon as QueueListIconSolid,
	UserGroupIcon as UserGroupIconSolid,
	UserIcon as UserIconSolid,
} from '@heroicons/vue/24/solid';
import useAuthStore from '~/stores/auth';

const { user } = useAuthStore();

export const menu = [
	{
		label: 'Home',
		to: '/home',
		icon: HomeIcon,
		activeIcon: HomeIconSolid,
	},
	{
		label: 'Explore',
		to: '/explore',
		icon: MagnifyingGlassIcon,
		activeIcon: MagnifyingGlassIcon,
	},
	{
		label: 'Notifications',
		to: '/#',
		icon: BellIcon,
		activeIcon: BellIconSolid,
	},
	{
		label: 'Messages',
		to: '/#',
		icon: EnvelopeIcon,
		activeIcon: EnvelopeIconSolid,
	},
	{
		label: 'Lists',
		to: '/#',
		icon: QueueListIcon,
		activeIcon: QueueListIconSolid,
	},
	{
		label: 'Bookmarks',
		to: '/#',
		icon: BookmarkIcon,
		activeIcon: BookmarkIconSolid,
	},
	{
		label: 'Communities',
		to: '/#',
		icon: UserGroupIcon,
		activeIcon: UserGroupIconSolid,
	},
	{
		label: 'Profile',
		to: `/${user.username}`,
		icon: UserIcon,
		activeIcon: UserIconSolid,
	},
];
