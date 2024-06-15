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

export const menu = [
	{
		label: 'Home',
		to: '/',
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
		to: '/notifications',
		icon: BellIcon,
		activeIcon: BellIconSolid,
	},
	{
		label: 'Messages',
		to: '/messages',
		icon: EnvelopeIcon,
		activeIcon: EnvelopeIconSolid,
	},
	{
		label: 'Lists',
		to: '/lists',
		icon: QueueListIcon,
		activeIcon: QueueListIconSolid,
	},
	{
		label: 'Bookmarks',
		to: '/bookmarks',
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
		to: '/profile',
		icon: UserIcon,
		activeIcon: UserIconSolid,
	},
];
