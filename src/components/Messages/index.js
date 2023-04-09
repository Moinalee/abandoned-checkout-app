import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Loader from '../Loader';
import appConfig from '../../appConfig';

import './styles/index.css';

const Messages = () => {
	const [messages, setMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`${appConfig.backendServer}/message/get-messages`)
			.then((response) => {
				if (response.data) {
					setMessages(response.data);
				}
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(`Error occured while getting messages. Error - ${error}`);
			});
	}, []);

	return isLoading === true ? (
		<Loader />
	) : (
		<table className="Messages__table">
			<thead>
				<tr>
					<th>Message ID</th>
					<th>Message sent to the user</th>
					<th>Email</th>
					<th>Contact</th>
					<th>Sent On</th>
					<th>Message Status</th>
					<th>Checkout ID</th>
					<th>IsCompleted</th>
				</tr>
			</thead>
			<tbody>
				{messages.map((message) => (
					<tr key={message._id}>
						<td>{message._id}</td>
						<td>{message.messageTemplate}</td>
						<td>{message.emailId}</td>
						<td>{message.contactNo}</td>
						<td>{message.scheduledOn ? new Date(message.scheduledOn).toLocaleString() : ''}</td>
						<td>{message.messageStatus}</td>
						<td>{message.checkoutId}</td>
						<td>{message.convertedToPayment ? 'Yes' : 'No'}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Messages;
