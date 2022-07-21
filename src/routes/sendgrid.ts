import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config();
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	try {
		const data = await request.json();
		if (data) {
			sgMail.setApiKey(process.env.SENDGRID_API_KEY);
			const msg: any = {
				to: {
					name: process.env.MAIL_TO_NAME,
					email: process.env.MAIL_TO_ADDRESS
				},
				from: {
					name: process.env.MAIL_FROM_NAME,
					email: process.env.MAIL_FROM_ADDRESS
				}, // Use the email address or domain you verified above
				replyTo: {
					name: data.name,
					email: data.email
				},
				subject: data.subject,
				text: data.message,
				html: data.message
			};

			await sgMail.send(msg);
		} else {
			return {
				statusCode: 404,
				body: 'No data provided'
			};
		}
	} catch (error: any) {
		console.error(error);

		if (error.response) {
			console.error(error.response.body);
		}

		return {
			statusCode: 500,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(error)
		};
	}

	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			message: 'Your message was sent successfully! Thank you.'
		})
	};
}
