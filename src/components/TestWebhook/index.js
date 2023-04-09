import axios from 'axios';
import React, { useState } from 'react';

import appConfig from '../../appConfig';

import './styles/index.css';

const TestWebhook = () => {
	const [webhook, setWebhook] = useState('');
	const jsonRef = React.createRef();

	const handleWebhookChange = (event) => {
		setWebhook(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const payload = jsonRef.current.value;
		axios
			.post(`${appConfig.backendServer}/${webhook}`, payload, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((res) => {
				console.log('Successfully completed webhook request.');
			})
			.catch((err) => {
				console.error('Error occured making webhook request - ', err);
			});
	};

	return (
		<form onSubmit={handleSubmit} className="TestWebhook__form">
			<div className="TestWebhook__options">
				<div className="TestWebhook__option">
					<input type="radio" id="webhook-1" name="webhook" value="checkout/abandoned" onChange={handleWebhookChange} />
					<label htmlFor="webhook-1">Abandoned Checkout</label>
				</div>
				<div className="TestWebhook__option">
					<input type="radio" id="webhook-2" name="webhook" value="checkout/success" onChange={handleWebhookChange} />
					<label htmlFor="webhook-2">Success Checkout</label>
				</div>
			</div>
			<div className="TestWebhook__json-input">
				<textarea ref={jsonRef} placeholder="Paste JSON here" />
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default TestWebhook;
