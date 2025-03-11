import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 px-6 border-t border-gray-100">
      {/* Mobile layout (default) */}
      <div className="flex flex-col items-center space-y-4 md:hidden">
        <div className="text-gray-400 text-sm flex items-center">
          Made <span className="text-red-500 mx-1">❤</span> with Webflow
        </div>

        <div className="flex items-center space-x-6">
          <Link
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            dribbble
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            linkedin
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            twitter
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            instagram
          </Link>
        </div>
      </div>

      {/* Desktop layout (hidden on mobile) */}
      <div className="hidden md:flex md:justify-between md:items-center">
        <div className="text-gray-400 text-sm flex items-center">
          Made <span className="text-red-500 mx-1">❤</span> with Webflow
        </div>

        <div className="flex items-center space-x-8">
          <Link
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            dribbble
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            linkedin
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            twitter
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
