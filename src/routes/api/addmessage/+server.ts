import type sqlite3 from 'sqlite3';

export async function POST({ request, locals }) {
	try {
		const body = await request.json();
		const { username, content } = body;

		if (typeof username !== 'string') {
			throw new Error('Username must be a string.');
		}
		if (username.length > 20) {
			throw new Error('Username no more than 20 characters');
		}
		if (username.length <= 5) {
			throw new Error('Username must be more than 5 characters.');
		}
		if (!/^[a-zA-Z0-9_]+$/.test(username)) {
			throw new Error('Username can only contain alphanumeric characters and underscores.');
		}

		if (typeof content !== 'string') {
			throw new Error('Content must be a string.');
		}
		if (content.length > 40) {
			throw new Error('Content must be no more than 40 characters.');
		}
		if (content.length <= 2) {
			throw new Error('Content must be more than 2 characters.');
		}

		const db: sqlite3.Database = locals.db;

		await new Promise<void>((resolve, reject) => {
			db.serialize(() => {
				// Begin the transaction
				db.run('BEGIN TRANSACTION', (err) => {
					if (err) return reject(err);

					// Insert the user if they don't exist
					db.run('INSERT OR IGNORE INTO users (username) VALUES (?)', [username], function (err) {
						if (err) return reject(err);

						// Insert the message by selecting the user's id
						db.run(
							'INSERT INTO messages (user_id, content) SELECT id, ? FROM users WHERE username = ?',
							[content, username],
							function (err) {
								if (err) return reject(err);

								// Commit the transaction
								db.run('COMMIT', (err) => {
									if (err) return reject(err);
									resolve();
								});
							}
						);
					});
				});
			});
		});

		return new Response(JSON.stringify({ success: true, received: { username, content } }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error: any) {
		return new Response(JSON.stringify({ error: error.message || 'Error adding message :(' }), {
			status: 400,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
