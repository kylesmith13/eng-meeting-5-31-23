import ApiClient from '../../types/ApiClient'
import useTracking from '../../hooks/useTracking';

const TrackedApiClient = (apiClient: ApiClient) => {

  // i've now added a dependency to this file
  const { track } = useTracking();

  const trackedFetchMedia = async () => {
    track('Fetching media...');

    // Call the fetchMedia method of the provided API client
    const data = await apiClient.fetchMedia({});

    track(`Media fetched: ${data}`);

    return data;
  };

  const trackedApiClient: ApiClient = {
    ...apiClient,
    fetchMedia: trackedFetchMedia, // Replace fetchMedia with the trackedFetchMedia implementation
  };

  return trackedApiClient;
}
  
export default TrackedApiClient;