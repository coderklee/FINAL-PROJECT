const token = '0bc9dd88f337b80c2d32fa380775cc996b9e54af5eb1ed28'

export const server_calls = {
	get: async () => {
		const response = await fetch(`https://blackwoodelectric.onrender.com/api/estimates`,
		{
			method: 'GET',
			headers: {
				'Content-Typee': 'application/json',
				'x-access-token': `Bearer ${token}`,
				'Access-Control-Allow-Origin': '*',
			}
		});

		if (!response.ok){
			throw new Error('Failed to get content from server')
		}

		return await response.json()
	},

	create: async (data: any = {}) => {
		const response = await fetch(`https://blackwoodelectric.onrender.com/api/estimates`, 
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': `Bearer ${token}`,
			},
			body: JSON.stringify(data)
		})

		if(!response.ok) {
			throw new Error('Failed to create new data on server')
		}

		return await response.json()
	},

	update: async (id: string, data: any = {}) => {
		const response = await fetch (`https://blackwoodelectric.onrender.com/api/estimates/${id}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': `Bearer ${token}`,
			},
			body: JSON.stringify(data)
		})

		if(!response.ok) {
			throw new Error('Failed to update data on server')
		}

		return await response.json();
	},

	delete:async (id: string) => {
		const response = await fetch (`https://blackwoodelectric.onrender.com/api/estimates/${id}`,
		{
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': `Bearer ${token}`,
			}
		})

		if (!response.ok) {
			throw new Error('Failed to delete data from server')
		}

		return;
	}
}