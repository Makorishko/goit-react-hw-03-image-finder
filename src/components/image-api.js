import axios from 'axios';


const API_KEY = '39344884-58dfe21e72d55086ae867b0a2';


export const fetchImages = async(value, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });
  return response.data.hits;
  }