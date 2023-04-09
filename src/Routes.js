import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import LazyComponents from './lazyComponents.js';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" element={<LazyComponents.Home />} />
			<Route path="/test-webhook" element={<LazyComponents.TestWebhooks />} />
			<Route path="/messages" element={<LazyComponents.Messages />} />
			<Route path="*" element={<LazyComponents.ErrorPage />} />
		</Switch>
	);
};

export default Routes;
