import axios from 'axios';
import Gif from '../types/Gif';

// should i pull these in together through an index?
import BaseApiClient from './BaseApiClient';
import FetchMediaParams  from '../types/ApiClient/FetchMediaParams';

const API_KEY = 'NMNvleoDRusR2hrLckAVkcEHwzjJ0vxD';

class GiphyApiClient extends BaseApiClient {
  async fetchMedia(params: FetchMediaParams): Promise<Array<Gif>> {
    const updatedParams = super.addDefaults(params);

    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/trending', {
        params: {
          rating: 'g',
          key: API_KEY,
          limit: updatedParams.limit, // Set the desired limit for the number of trending media items
        },
      });

      // Extract the relevant data from the API response
      const mediaData: Array<Gif> = response.data.data.map((result: any) => ({
        id: result.id,
        name: result.title,
        tinyUrl: result.images.fixed_height_small.url,
        url: result.images.original.title,
      }));

      return mediaData;
    } catch (error) {
      console.error('Error fetching media data:', error);
      throw error;
    }
  }
}

export default GiphyApiClient;
