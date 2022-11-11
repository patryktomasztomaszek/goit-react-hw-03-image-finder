// Pixabay API key
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28170500-383bebb45fc8810a60b241432';

// Async fetch function for fetching images frim corresponding page
export async function fetchQueryFromApi(query, page = 1) {
  const fetchedData = await fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const response = await fetchedData.json();
  return response;
}

export async function fetchSingleImageFromApi(id) {}
