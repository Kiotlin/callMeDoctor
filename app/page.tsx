import Poster from './_componets/poster';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-32">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono lg:flex">
        <Poster />
      </div>
    </main>
  );
}
