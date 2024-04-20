import axios from 'axios';

const apiKey = 'YOUR_API_KEY';

const fetchCarData = async () => {
  try {
    const url = 'apiURL';
    const response = await axios.get(url);

    console.log(response.data.listings[0].heading);

    return response.data.listings;
  } catch (error) {
    throw error;
  }
};

export { fetchCarData };
