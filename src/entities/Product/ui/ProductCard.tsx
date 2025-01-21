"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ProductType } from '@/shared/api/types';
import { StarIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

interface ProductCardProps {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(product.liked || false);
  const hasDiscount = product.discountPrice !== null;
  const displayPrice = hasDiscount && product.discountPrice ? product.discountPrice : product.actualPrice;
  const discountPercentage = hasDiscount ? Math.round((1 - (product.discountPrice! / product.actualPrice)) * 100) : 0;

  return (
    <div className="group animate-fade-in">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <div className="relative h-full w-full transform transition-transform duration-500 group-hover:scale-105">
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover object-center"
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium shadow-lg hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2">
              <ShoppingCartIcon className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        {hasDiscount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium shadow-lg">
            -{discountPercentage}%
          </div>
        )}

        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
        >
          {isLiked ? (
            <HeartSolidIcon className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>

      <div className="mt-4 space-y-2 px-1">
        <Link href={`/product/${product.slug}`} className="block group-hover:text-primary-600 transition-colors duration-200">
          <h3 className="font-medium text-gray-900 line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={`h-4 w-4 ${
                  index < product.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-200'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">({product.reviewsCount})</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <p className="text-lg font-semibold text-gray-900">
            ${displayPrice.toFixed(2)}
          </p>
          {hasDiscount && (
            <p className="text-sm text-gray-500 line-through">
              ${product.actualPrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}; 