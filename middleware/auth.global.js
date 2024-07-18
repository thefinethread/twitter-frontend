import useAuthStore from '~/stores/auth';

const publicRoutes = ['/login', '/signup', '/'];

export default defineNuxtRouteMiddleware(async (to, from) => {
	const authStore = useAuthStore();
	const { user } = storeToRefs(authStore);

	const isPublicRoute = publicRoutes.includes(to.path);

	// Redirect to /login if the user is not authenticated and the route is not public
	if (!user.value && !isPublicRoute) {
		return navigateTo('/login');
	}

	// If user is not authenticated and trying to access a public route from a private route
	if (!user.value && isPublicRoute && from.fullPath !== to.fullPath) {
		return;
	}

	// If user is authenticated and trying to access a public route, redirect to /home
	if (user.value && isPublicRoute) {
		return navigateTo('/home');
	}
});
