export async function POST({ request }) {
	try {
		const body = await request.json();
		const { user_id, content } = body;

		if (typeof user_id !== 'number' || !Number.isInteger(user_id)) {
			throw new Error('Invalid user_id.');
		}

		if (typeof content !== 'string' || content.length >= 40) {
			throw new Error('Invalid content.');
		}

		return new Response(JSON.stringify({ success: true, received: { user_id, content } }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error: any) {
		return new Response(JSON.stringify({ error: 'Invalid data.' }), {
			status: 400,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
