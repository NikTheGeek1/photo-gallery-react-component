import './App.css';
import PhotosGallery from './components/PhotosGallery/PhotosGallery';
import photos from './imports/import-timeline-photos';

function App() {
  return (
    <div className="container">
      <PhotosGallery photos={photos.animalPhotos} />
    </div>
  );
}

export default App;
