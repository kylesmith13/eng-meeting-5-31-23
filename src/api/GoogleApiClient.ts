import axios from 'axios';
import BaseApiClient  from './BaseApiClient';
import Gif from '../types/Gif';
import FetchMediaParams from '../types/ApiClient/FetchMediaParams';

const API_KEY = 'AIzaSyDP57hpRo-HHGt2p0UpwE7OhV2qK4w1syI';

class GoogleApiClient extends BaseApiClient {
  // i don't want to have to implement limit for each individual implementation
  // i'd like this class to be "closed to modification, open to extension"
  // what happens when someone else wants to add a new parameter here? i have to change
  // every implementation of this. what happens if there are 1000 of these subclasses? 
  // i don't want to have to implement this new "default" or anything to 1000 different places

  // async fetchMedia(limit: number = 10): Promise<Array<Gif>> {
  async fetchMedia(params: FetchMediaParams): Promise<Array<Gif>> {
    const updatedParams = super.addDefaults(params)

    try {
      const response = await axios.get('https://tenor.googleapis.com/v2/featured', {
        params: {
          key: API_KEY,
          limit: updatedParams.limit, // Set the desired limit for the number of trending media items
        },
      });

      // Extract the relevant data from the API response
      const mediaData: Array<Gif> = response.data.results.map((result: any) => ({
        id: result.id,
        name: result.title,
        tinyUrl: result.media_formats.tinygif.url,
        url: result.media_formats.gif.url,
      }));

      return mediaData;
    } catch (error) {
      console.error('Error fetching media data:', error);
      throw error;
    }
  }
}

export default GoogleApiClient;
