"use client";

import { useEffect, useState } from 'react';
import { ProductType } from '@/shared/api/types';
import { productsApi } from '@/shared/api/api';
import { ProductCard } from '@/entities/Product/ui/ProductCard';

export const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productsApi.getAll();
        if (response.error) {
          setError(response.error);
        } else {
          setProducts(response.data);
        }
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
        <div className="text-red-500 text-xl font-semibold mb-2">Oops! Something went wrong</div>
        <p className="text-gray-600">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}; 