import { Hero } from './components/hero';
import { WriteButton } from './components/writeButton';

export const Home = () => {
  return (
    <main className="p-4 space-y-8">
      <Hero />
      <WriteButton />
    </main>
  );
};
