import type { RequestHandler } from '@sveltejs/kit';
import type sqlite3 from 'sqlite3';

export const GET: RequestHandler = async ({ locals }) => {
	// Ensure the database instance exists
	const db: sqlite3.Database = locals.db;

	try {
		// Wrap the db.all callback in a promise so we can await it
		const messages: { username: string; content: string }[] = await new Promise(
			(resolve, reject) => {
				db.all(
					`SELECT u.username, m.content 
				 FROM messages m 
				 JOIN users u ON m.user_id = u.id`,
					(err, rows) => {
						if (err) {
							return reject(err);
						}
						resolve(rows as { username: string; content: string }[]);
					}
				);
			}
		);

		return new Response(JSON.stringify({ messages }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Error fetching messages:', error);
		return new Response(JSON.stringify({ error: 'Error fetching messages' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
