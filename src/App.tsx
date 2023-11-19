import { useEffect, useState } from 'react';
import { DataType, FakerData } from './components/common_types/types';
import { createFakeData } from './utils/fakeData';
import GridLayout from './components/grid/GridLayout';

function App() {
  const [photos, setPhotos] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fakerData = Array.from({ length: 12 }, createFakeData);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/photos'
        );
        const json = await response.json();
        setPhotos(json.slice(0, 12));
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des photos', error);
        setIsLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Grille avec mise en évidence conditionnelle.</h1>
          <GridLayout<FakerData>
            data={fakerData}
            isLarge={(index) => index === 2 || index === 5}
            renderItem={(item) => (
              <img
                key={item.id}
                src={item.image.url}
                alt={item.image.alt}
                loading="lazy"
              />
            )}
          />
          <h2>Grille avec mise en évidence automatique des éléments 3 et 6.</h2>
          <GridLayout<DataType>
            data={photos}
            renderItem={(item) => (
              <img
                key={item.id}
                src={item.url}
                alt={item.title}
                loading="lazy"
              />
            )}
          />
        </>
      )}
    </div>
  );
}

export default App;
