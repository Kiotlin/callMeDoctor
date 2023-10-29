import PosterPage from './_componets/poster';
import EndFieldPage from './_componets/endField';
import SloganPage from './_componets/slogan';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <EndFieldPage />
      <PosterPage />
      <SloganPage />
    </main>
  );
}
