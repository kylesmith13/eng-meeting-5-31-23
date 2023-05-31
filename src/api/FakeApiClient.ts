import ApiClient from '../types/ApiClient'; 
import Gif from '../types/Gif';

const mediaData: Array<Gif> = [
  { id: '1', title: 'Media 1', url: "", tinyUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjlmODhjZWNjNjY3MGFmOGQyZGVhMmI5NjUwODk3MTQ1MWQ5YWFmOCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/12XMGIWtrHBl5e/giphy.gif" },
  { id: '2', title: 'Media 2', url: "", tinyUrl: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjUzNWJkNTgwNDRjNTQwNTQ1NTU5ODQwNGZjZGU0YzA2MjNjZGNlOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/4pMX5rJ4PYAEM/giphy.gif"},
  { id: '3', title: 'Media 3', url: "", tinyUrl: "https://media4.giphy.com/media/gtakVlnStZUbe/giphy.webp"},

];

class FakeApiClient implements ApiClient {
  fetchMedia() {
    return new Promise<Array<Gif>>((resolve) => {
      // Simulate an asynchronous API call
      setTimeout(() => {
        resolve(mediaData);
      }, 1000); // Simulate a 1-second delay
    });
  }
}

export default FakeApiClient;
