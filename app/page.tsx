import PosterPage from './_componets/poster';
import EndFieldPage from './_componets/endField';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <EndFieldPage />
      <PosterPage />
    </main>
  );
}
