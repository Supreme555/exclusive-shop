import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';
import { Banner } from '@/widgets/Banner/Banner';
import { ProductList } from '@/widgets/ProductList/ProductList';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Banner />
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Products
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-gray-600">
                Check out our latest collection of exclusive products
              </p>
            </div>
            <ProductList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
