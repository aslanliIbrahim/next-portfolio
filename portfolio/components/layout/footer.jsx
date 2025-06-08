import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 px-6 border-t border-gray-100 dark:border-gray-800">
      {/* Mobile layout */}
      <div className="flex flex-col items-center space-y-4 md:hidden">
        <div className="text-textGray400 dark:text-textSecondary text-sm flex items-center">
          Made <span className="text-red-500 mx-1">❤</span> with Webflow
        </div>

        <div className="flex items-center space-x-6">
          {["dribbble", "linkedin", "twitter", "instagram"].map((platform) => (
            <Link
              key={platform}
              href="#"
              className="text-textGray400 dark:text-textSecondary hover:text-hoverTextGray600 dark:hover:text-hoverTextGray600 transition-colors"
            >
              {platform}
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex md:justify-between md:items-center">
        <div className="text-textGray400 dark:text-textSecondary text-sm flex items-center">
          Made <span className="text-red-500 mx-1">❤</span> with Webflow
        </div>

        <div className="flex items-center space-x-8">
          {["dribbble", "linkedin", "twitter", "instagram"].map((platform) => (
            <Link
              key={platform}
              href="#"
              className="text-textGray400 dark:text-textSecondary hover:text-hoverTextGray600 dark:hover:text-hoverTextGray600 transition-colors"
            >
              {platform}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
