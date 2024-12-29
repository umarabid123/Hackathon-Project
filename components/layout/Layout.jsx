import Link from 'next/link'
import Header from '../header/Header'

export default function Layout({ children }) {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-blue-800 text-white">
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
          <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
          <li><a href="/faq" className="hover:text-blue-300">FAQ</a></li>
          <li><a href="/privacy" className="hover:text-blue-300">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-blue-300">Terms of Service</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <ul className="space-y-2">
          <li><span className="font-semibold">Email:</span> support@eventpro.com</li>
          <li><span className="font-semibold">Phone:</span> +1 (555) 123-4567</li>
          <li><span className="font-semibold">Address:</span> 123 Event Street, City, Country</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-blue-300">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.05 4.25 4.25 0 0 0-7.3 3.87 12 12 0 0 1-8.72-4.42 4.25 4.25 0 0 0 1.32 5.66 4.23 4.23 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.41 4.17 4.3 4.3 0 0 1-1.92.07 4.26 4.26 0 0 0 3.97 2.95 8.53 8.53 0 0 1-5.29 1.82 8.4 8.4 0 0 1-1-.06 12 12 0 0 0 6.5 1.9c7.8 0 12.06-6.46 12.06-12.06 0-.18 0-.36-.01-.54a8.6 8.6 0 0 0 2.13-2.18z" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 3h-4a2 2 0 0 0-2 2v4H9a2 2 0 0 0-2 2v4h4v8h4v-8h4l1-4h-5V5a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.54 6.42a8.63 8.63 0 0 1-2.49.68A4.3 4.3 0 0 0 21.9 5a8.67 8.67 0 0 1-2.75 1.05 4.27 4.27 0 0 0-7.29 3.9A12.15 12.15 0 0 1 2.22 5.72a4.27 4.27 0 0 0 1.31 5.69A4.21 4.21 0 0 1 2 10.2v.06a4.27 4.27 0 0 0 3.43 4.18 4.23 4.23 0 0 1-1.92.07 4.27 4.27 0 0 0 4 2.96A8.56 8.56 0 0 1 2 20.16a12 12 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.68l-.01-.53a8.27 8.27 0 0 0 2.03-2.07z" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-gray-300 mb-4">
          Get the latest updates and event news delivered to your inbox.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 rounded-l-md text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="mt-12 text-center text-gray-300 border-t border-blue-700 pt-6">
      <p>© 2024 EventPro. All rights reserved. | <a href="/privacy" className="hover:text-blue-300">Privacy Policy</a> | <a href="/terms" className="hover:text-blue-300">Terms of Service</a></p>
    </div>
  </div>
</footer>
    </div>
  )
}

