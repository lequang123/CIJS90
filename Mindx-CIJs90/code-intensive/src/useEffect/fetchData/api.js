export async function fetchBio(personId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${personId}/comments`);
      const data = await response.json();
      await new Promise(resolve => setTimeout(resolve, 1000));
      return data;
    } catch (error) {
      console.error('Error fetching', error.message);
      throw error;
    }
  }