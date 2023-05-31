import React, { useState, useEffect } from 'react';
import ApiClient from '../types/ApiClient';
import Gif from '../types/Gif';

type MediaViewerProps = {
  apiClient: ApiClient;
};

const MediaViewer: React.FC<MediaViewerProps> = ({ apiClient }) => {
  const [mediaData, setMediaData] = useState<Gif[]>([]);

  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        // Fetch media data from the API client
        const data = await apiClient.fetchMedia({});

        // Set the fetched media data to the state
        setMediaData(data);
      } catch (error) {
        console.error('Error fetching media data:', error);
      }
    };

    fetchMediaData();
  }, [apiClient]);

  return (
    <div>
      <h1>GIF Viewer</h1>
      <div className="grid grid-cols-5 gap-4">
        {mediaData.map((gif) => (
          <img key={gif.id} src={gif.tinyUrl} alt={gif.title} className="w-full" />
        ))}
      </div>
    </div>
  );
};

export default MediaViewer;