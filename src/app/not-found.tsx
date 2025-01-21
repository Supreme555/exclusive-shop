import Link from 'next/link';
import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-900">404</h1>
          <h2 className="mt-4 text-3xl font-semibold text-gray-600">Page Not Found</h2>
          <p className="mt-4 text-gray-500">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-md bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
} 