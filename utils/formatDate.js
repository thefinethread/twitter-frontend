import moment from 'moment';

const formatDate = (date) => {
	const momentDate = moment(date);
	const now = moment();
	const duration = moment.duration(now.diff(momentDate));

	if (duration.asSeconds() < 60) {
		return Math.floor(duration.asSeconds()) + 's';
	} else if (duration.asMinutes() < 60) {
		return Math.floor(duration.asMinutes()) + 'm';
	} else if (duration.asHours() < 24) {
		return Math.floor(duration.asHours()) + 'h';
	} else {
		return momentDate.format('DD MMM');
	}
};

export { formatDate };
