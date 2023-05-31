import ApiClient from '../../types/ApiClient'

const LimitedApiClient = (apiClient: ApiClient, limit: number) => {
  const limitedFetchMedia = async () => {
    // Call the fetchMedia method of the provided API client
    const data = await apiClient.fetchMedia({limit: limit});

    return data;
  };

  const limitedApiClient: ApiClient = {
    ...apiClient,
    fetchMedia: limitedFetchMedia, // Replace fetchMedia with the trackedFetchMedia implementation
  };

  return limitedApiClient;
}
  
export default LimitedApiClient;