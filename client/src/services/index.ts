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

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();  // Assuming the server sends back JSON
  } catch (error) {
    console.error('Error fetching progress:', error);
  }
}

export async function fetchDailySentence() {
  const url = 'https://zenquotes.io/api/quotes';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Assuming the API returns JSON
    console.log('fetchDailySentence ~ response.json():', data);
    return data;
  } catch (error) {
    console.error('Error fetching daily sentence:', error);
  }
}

