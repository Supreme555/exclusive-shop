import { notFound } from 'next/navigation';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';
import { productsApi } from '@/shared/api/api';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const response = await productsApi.getBySlug(params.slug);
  
  if (!response.data) {
    notFound();
  }

  const product = response.data;
  const hasDiscount = product.discountPrice !== null;
  const displayPrice = hasDiscount && product.discountPrice ? product.discountPrice : product.actualPrice;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                className="object-cover object-center"
                fill
              />
              {hasDiscount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  Sale
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-3">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        className={`h-5 w-5 ${
                          index < product.rating
                            ? 'text-yellow-400'
                            : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-500">
                    {product.reviewsCount} reviews
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center">
                  <p className="text-3xl tracking-tight text-gray-900">
                    ${displayPrice.toFixed(2)}
                  </p>
                  {hasDiscount && (
                    <p className="ml-3 text-2xl text-gray-500 line-through">
                      ${product.actualPrice.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Description</h3>
                <div className="mt-4 prose prose-sm text-gray-500">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 