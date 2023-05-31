import React, { useState, useEffect } from 'react';
import ApiClient from '../types/ApiClient';
import GoogleApiClient from '../api/GoogleApiClient';
import Gif from '../types/Gif';

const BadMediaViewer = () => {
  const [mediaData, setMediaData] = useState<Gif[]>([]);

  useEffect(() => {
    // do i just add a bunch of if statements here to handle each individual case? perhaps send
    // a string down to decide?
    const googleApiClient: ApiClient = new GoogleApiClient();

    const fetchMediaData = async () => {
      try {
        // Fetch media data from the API client
        const data = await googleApiClient.fetchMedia({});

        // Set the fetched media data to the state
        setMediaData(data);
      } catch (error) {
        console.error('Error fetching media data:', error);
      }
    };

    fetchMediaData();
  }, []);

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

export default BadMediaViewer;