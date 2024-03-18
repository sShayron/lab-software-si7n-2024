import { User } from '../interfaces/user';

async function getData() {
	const res = await fetch('http://localhost:3001/users', {
		method: 'GET', // or 'PUT'
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json() as Promise<{ data: User[] }>;
}

export default async function Page() {
	const data = await getData();

	console.log(data);

	return (
		<div className="container mx-auto">
			<div>
				<h1>Usuarios cadastrados</h1>
			</div>
			{data.data.map((user) => (
				<div>
					<div>{user.name}</div>
					<div>{user.email}</div>
				</div>
			))}
		</div>
	);
}
