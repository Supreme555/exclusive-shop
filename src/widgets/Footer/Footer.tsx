import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Exclusive Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Exclusive</h2>
            <div className="space-y-2">
              <p>Subscribe</p>
              <p>Get 10% off your first order</p>
              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border border-white rounded-l px-4 py-2 w-full"
                />
                <button className="bg-white text-black px-4 py-2 rounded-r">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <address className="not-italic">
              111 Bijoy sarani, Dhaka,<br />
              DH 1515, Bangladesh.<br />
              exclusive@gmail.com<br />
              +88015-88888-9999
            </address>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link href="/account" className="hover:text-gray-300">My Account</Link></li>
              <li><Link href="/login" className="hover:text-gray-300">Login / Register</Link></li>
              <li><Link href="/cart" className="hover:text-gray-300">Cart</Link></li>
              <li><Link href="/wishlist" className="hover:text-gray-300">Wishlist</Link></li>
              <li><Link href="/shop" className="hover:text-gray-300">Shop</Link></li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-300">Terms Of Use</Link></li>
              <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© Copyright Rimel 2023. All right reserved</p>
        </div>
      </div>
    </footer>
  );
}; 