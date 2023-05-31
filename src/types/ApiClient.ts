import Gif from './Gif';
import FetchMediaParams from '../types/ApiClient/FetchMediaParams'

// i could even go as far to not call this "ApiClient" and just call it client. i could load something from disk
// and all it would have to do is conform to the fetchMedia function.
interface ApiClient {
  fetchMedia: (params: FetchMediaParams) => Promise<Gif[]>;
}

export default ApiClient