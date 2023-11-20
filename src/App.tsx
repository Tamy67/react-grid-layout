import { useCallback, useEffect, useState } from 'react';
import { DataType, FakerData } from './components/common_types/types';
import { createFakeData } from './utils/fakeData';
import GridLayout from './components/grid/GridLayout';

function App() {
  const [photos, setPhotos] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const [fakerData] = useState(() =>
    Array.from({ length: 12 }, createFakeData)
  );

  // Memoized callback for fetching photos
  const fetchPhotos = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos'
      );
      const json = await response.json();
      setPhotos(json.slice(0, 12));
    } catch (error) {
      setError('Error during photo loading');
      // eslint-disable-next-line no-console
      console.error('Error during photo loading', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1>GridLayout :&nbsp;Composant de Grille pour React</h1>
      <p>
        {`Un composant React générique écrit en TypeScript, conçu
        pour créer des grilles dynamiques et réactives avec n'importe quel type
        de données.`}
      </p>
      <p>
        <strong>Générique et Réutilisable :&nbsp;</strong>
        {`Utilisez avec des données
        statiques ou dynamiques.`}
        <br />
        <strong>Responsive :&nbsp;</strong>
        {`S'adapte à toutes les tailles d'écran.`}
        <br />
        <strong>Personnalisable :&nbsp;</strong> Mise en évidence conditionnelle
        et styles flexibles.
      </p>
      {!isLoading && (
        <>
          <GridLayout<FakerData>
            title="1. Grille avec mise en évidence conditionnelle et avec données Faker"
            description="Démonstration de la grille utilisant des données aléatoires pour une variété de mises en page."
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

          <GridLayout<DataType>
            title="2. Grille avec mise en évidence automatique des éléments 3 et 6 avec API"
            description="Exemple d'intégration avec des données chargées via une API, mettant en avant la flexibilité en temps réel du composant."
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

          <GridLayout<FakerData>
            title="3. Grille avec title et description provenant de données Faker"
            description="Cette grille démontre la flexibilité de GridLayout en utilisant des données simulées pour présenter diverses configurations de mise en page."
            data={fakerData}
            renderItem={(item) => (
              <>
                <img
                  key={item.id}
                  src={item.image.url}
                  alt={item.image.alt}
                  loading="lazy"
                />
                <div className="start">
                  <h3 className={`subtitle capitalizeFirstLetter`}>
                    {item.title}
                  </h3>
                  <p className={`desc capitalizeFirstLetter`}>
                    {item.description}
                  </p>
                </div>
              </>
            )}
          />
        </>
      )}
    </div>
  );
}

export default App;
