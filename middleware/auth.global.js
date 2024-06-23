import useAuthStore from '~/stores/auth';

const publicRoutes = ['/login', '/signup', '/'];

export default defineNuxtRouteMiddleware((to, from) => {
	const { user } = useAuthStore();

	if (!user && !publicRoutes.includes(to.fullPath)) {
		return navigateTo('/login');
	}

	if (user && publicRoutes.includes(to.fullPath)) {
		return navigateTo('/home');
	}
});
