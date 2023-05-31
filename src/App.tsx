import React, { useState } from 'react';
import MediaViewer from './components/MediaViewer';
import ApiClient from './types/ApiClient'
import GoogleApiClient from './api/GoogleApiClient';
import GiphyApiClient from './api/GiphyApiClient';
import FakeApiClient from './api/FakeApiClient';
import TrackedApiClient from './api/hoc/TrackedApiClient';
import LimitedApiClient from './api/hoc/LimitedApiClient';

function App() {
  type MediaButtonProps = {
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }
  
  const [activeClient, setActiveClient] = useState<ApiClient | null>(null);
  const googleApiClient: ApiClient = new GoogleApiClient();
  const giphyApiClient: ApiClient = new GiphyApiClient();
  const fakeApiClient: ApiClient = new FakeApiClient();

  // higher order components
  // we can use higher order components to add functionality to components
  // without directly implementing functionality on each client. this allows
  // our classes to be more flexible and loosely coupled.
  const trackedGoogleApiClient = TrackedApiClient(googleApiClient);
  const limitedGiphyApiClient = LimitedApiClient(giphyApiClient, 5);

  const handleClick = (client: ApiClient | null) => {
    setActiveClient(client);
  };

  const MediaButton = ({ label, onClick }: MediaButtonProps) => (
    <button
      className="p-8 bg-blue-500 text-white font-bold rounded-md mr-4"
      onClick={onClick}
    >
      {label}
    </button>
  );
  
  return (
    <div>
      <div className="flex justify-center">
        <MediaButton label="Giphy Media Viewer" onClick={() => handleClick(giphyApiClient)} />
        <MediaButton label="Limited Giphy Media Viewer" onClick={() => handleClick(limitedGiphyApiClient)} />
        <MediaButton label="Google Media Viewer" onClick={() => handleClick(googleApiClient)} />
        <MediaButton label="Tracked Google Media Viewer" onClick={() => handleClick(trackedGoogleApiClient)} />
        <MediaButton label="FakeMediaViewer" onClick={() => handleClick(fakeApiClient)} />
      </div>
      <div className="flex justify-center">
        {activeClient && <MediaViewer apiClient={activeClient}/>}
      </div>
    </div>
  );
}

export default App;
