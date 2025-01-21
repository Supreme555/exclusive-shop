"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const banners = [
  {
    id: 1,
    title: 'iPhone 14 Series',
    description: 'Up to 10% off Voucher',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1600&h=900&fit=crop',
    link: '/products/iphone-14',
    position: 'center',
  },
  {
    id: 2,
    title: "Women's Collections",
    description: 'Featured woman collections that give you another vibe.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop',
    link: '/collections/women',
    position: 'right',
  },
  {
    id: 3,
    title: 'Enhance Your Music Experience',
    description: 'Latest speaker collection for your perfect audio experience',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1600&h=900&fit=crop',
    link: '/products/speakers',
    position: 'left',
  },
];

export const Banner = () => {
  return (
    <div className="relative bg-black">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white !opacity-50',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !opacity-100',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[500px] md:h-[600px] lg:h-[700px] w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className="relative">
            <div className="relative h-full w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
              <div className="relative h-full w-full">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover object-center"
                  priority={banner.id === 1}
                  sizes="100vw"
                  quality={90}
                />
              </div>
              <div className={`absolute inset-0 z-20 flex items-center ${
                banner.position === 'left' ? 'justify-start pl-8 md:pl-16 lg:pl-24' : 
                banner.position === 'right' ? 'justify-end pr-8 md:pr-16 lg:pr-24' : 
                'justify-center px-8'
              }`}>
                <div className="max-w-xl">
                  <span className="inline-block px-4 py-1.5 bg-red-500 text-white text-sm font-medium rounded-full mb-4">
                    Special Offer
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
                    {banner.description}
                  </p>
                  <Link
                    href={banner.link}
                    className="inline-flex items-center px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                  >
                    Shop Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev !w-12 !h-12 !bg-white/10 !backdrop-blur-sm rounded-full !text-white hover:!bg-white/20 transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next !w-12 !h-12 !bg-white/10 !backdrop-blur-sm rounded-full !text-white hover:!bg-white/20 transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <style jsx global>{`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #ffffff;
            transform: scale(1.2);
          }
          .swiper-button-prev:after,
          .swiper-button-next:after {
            display: none;
          }
        `}</style>
      </Swiper>
    </div>
  );
}; 