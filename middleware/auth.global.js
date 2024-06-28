import useAuthStore from '~/stores/auth';

const publicRoutes = ['/login', '/signup', '/', '/login-error'];

export default defineNuxtRouteMiddleware((to, from) => {
	const authStore = useAuthStore();
	const { user } = storeToRefs(authStore);

	if (!user.value && !publicRoutes.includes(to.fullPath)) {
		return navigateTo('/login');
	}
	if (user.value && publicRoutes.includes(to.fullPath)) {
		return navigateTo(to.fullPath);
	}
});
