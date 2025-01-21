"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { UserIcon, ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';

export const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const menuItems = [
    { href: '/account', label: 'Manage My Account' },
    { href: '/orders', label: 'My Orders' },
    { href: '/cancellations', label: 'My Cancellations' },
    { href: '/reviews', label: 'My Reviews' },
  ];

  return (
    <>
      <div className="bg-black text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        </div>
      </div>
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Exclusive
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>

            <nav className={`
              ${isMobileMenuOpen ? 'block' : 'hidden'}
              absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-4
              md:static md:block md:border-none md:p-0 md:bg-transparent
            `}>
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Home
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Contact
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  About
                </Link>
                <Link 
                  href="/sign-up" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </div>
            </nav>

            <div className="flex items-center space-x-6">
              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                  aria-expanded={isProfileOpen}
                  aria-haspopup="true"
                  aria-label="User menu"
                >
                  <UserIcon className="h-6 w-6" />
                </button>

                {isProfileOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100 animate-fade-in"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    {menuItems.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                        role="menuitem"
                        tabIndex={0}
                        onClick={() => setIsProfileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 my-2"></div>
                    <button
                      className="block w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                      role="menuitem"
                      onClick={() => {
                        // Здесь будет логика выхода
                        setIsProfileOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>

              <button 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 relative p-2 rounded-full hover:bg-gray-100"
                aria-label="Shopping cart"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}; 