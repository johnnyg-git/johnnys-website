import type { PageServerLoad } from './$types';
import type { User } from '$lib/types';

export const load: PageServerLoad = async ({ locals }) => {
	// Use a properly typed promise to handle the SQLite callback pattern
	const loadUsers = async (): Promise<User[]> => {
		return new Promise((resolve, reject) => {
			const db = locals.db;
			const query = 'SELECT * FROM users';

			db.all(query, (err, rows: User[]) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(rows);
			});
		});
	};

	// Fetch the users
	const users = await loadUsers();

	// Return the data
	return {
		users
	};
};
