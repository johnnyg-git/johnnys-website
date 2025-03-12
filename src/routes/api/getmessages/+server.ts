export async function GET() {
	return new Response(
		JSON.stringify({ messages: [{ username: 'John', content: 'This is an example message' }] }),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
}
