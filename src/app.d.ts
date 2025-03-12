import sqlite3 from 'sqlite3';
import 'unplugin-icons/types/svelte';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db: sqlite3.Database;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
