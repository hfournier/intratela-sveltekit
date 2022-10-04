import sgMail from '@sendgrid/mail';
import {
	SENDGRID_API_KEY,
	MAIL_FROM_ADDRESS,
	MAIL_FROM_NAME,
	MAIL_TO_ADDRESS,
	MAIL_TO_NAME
} from '$env/static/private';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	try {
		const data = await request.json();
		if (data) {
			sgMail.setApiKey(SENDGRID_API_KEY);
			const msg: any = {
				to: {
					name: MAIL_TO_NAME,
					email: MAIL_TO_ADDRESS
				},
				from: {
					name: MAIL_FROM_NAME,
					email: MAIL_FROM_ADDRESS
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
			return new Response('No data provided');
		}
	} catch (error: any) {
		console.error(error);

		if (error.response) {
			console.error(error.response.body);
		}

		return new Response(JSON.stringify(error), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	return new Response(
		JSON.stringify({
			message: 'Your message was sent successfully! Thank you.'
		}),
		{
			headers: {
				'access-control-allow-origin': '*',
				'Content-Type': 'application/json'
			}
		}
	);
}
