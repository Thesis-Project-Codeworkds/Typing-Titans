const server = import.meta.env.VITE_SERVER_DOMAIN || 'http://localhost:3000';

export async function fetchProgress(id: number, day: Date) {
  const url = `${server}/daily`;
  const dateString = day.toISOString().slice(0, 10);  // Format date as YYYY-MM-DD

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: id,
        date: dateString
      })
    });
    console.log('fetchProgress ~ response:', response);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();  // Assuming the server sends back JSON
  } catch (error) {
    console.error('Error fetching progress:', error);
    return null;  // Handle errors as you see fit
  }
}
