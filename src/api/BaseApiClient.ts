import ApiClient from '../types/ApiClient'
import Gif from '../types/Gif';
import FetchMediaParams  from '../types/ApiClient/FetchMediaParams';

class BaseApiClient implements ApiClient {
  async fetchMedia({limit = 10}: FetchMediaParams): Promise<Gif[]> {
    // change params and add limit
    return this.fetchMedia({});
  }

  protected addDefaults(params: FetchMediaParams): FetchMediaParams {
    return {limit: 10, ...params}
  }
}

export default BaseApiClient;