import type { Handle } from '@sveltejs/kit';
import sqlite3 from 'sqlite3';

export const handle: Handle = async ({ event, resolve }) => {
	if (!event.locals.db) {
		// This will create the database within the 'db.sqlite' file and WAIT for it to complete before proceeding
		const db = await new Promise<sqlite3.Database>((resolve, reject) => {
			const database = new sqlite3.Database('db.sqlite', (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(database);
			});
		});

		// Set the db as our events.db variable
		event.locals.db = db;

		// Create the users table and WAIT for it to complete before proceeding
		await new Promise<void>((resolve, reject) => {
			const query =
				'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT)';
			db.run(query, (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve();
			});
		});

		// Create the messages table and WAIT for it to complete before proceeding
		await new Promise<void>((resolve, reject) => {
			const query =
				'CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER UNIQUE, content TEXT, FOREIGN KEY (user_id) REFERENCES users (id))';
			db.run(query, (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve();
			});
		});
	}

	return await resolve(event);
};
