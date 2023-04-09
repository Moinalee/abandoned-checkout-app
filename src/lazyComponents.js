import React from 'react';
import loadable from '@loadable/component';

import Loader from './components/Loader';

const lazyComponents = {
	// Components with lazy load

	Home: loadable(() => import('./components/Home'), {
		fallback: <Loader />,
	}),

	Messages: loadable(() => import('./components/Messages'), {
		fallback: <Loader />,
	}),

	TestWebhooks: loadable(() => import('./components/TestWebhook'), {
		fallback: <Loader />,
	}),

	ErrorPage: loadable(() => import('./components/ErrorPage'), {
		fallback: <Loader />,
	}),
	// End Components with lazy load
};

export default lazyComponents;
