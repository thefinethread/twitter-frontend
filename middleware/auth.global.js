import useAuthStore from '~/stores/auth';

const publicRoutes = ['/login', '/signup', '/', '/login-error'];

export default defineNuxtRouteMiddleware(async (to, from) => {
	const { user } = useAuthStore();

	// Check if the route is a public route
	const isPublicRoute = publicRoutes.includes(to.path);

	// Redirect to /login if the user is not authenticated and the route is not public
	if (!user && !isPublicRoute) {
		return navigateTo('/login');
	}

	// If user is not authenticated and trying to access a public route from a private route
	if (!user && isPublicRoute && from.fullPath !== to.fullPath) {
		return;
	}

	// If user is authenticated and trying to access a public route, redirect to /home
	if (user && isPublicRoute) {
		return navigateTo('/home');
	}
});
