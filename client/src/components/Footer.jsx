import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-gray-900 mb-0 bg-white bg-opacity-90 border-t-0 mt-10 left-0 w-full z-0">
      <div className="py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center sm:items-start">
          {/* Brand and Description */}
          <div className="flex flex-col items-start">
            <h2 className="text-base font-bold mb-4 text-sky-500">
              Wiz<span className="text-rose-600">Dumb</span>
            </h2>
            <p className="text-xs">A learning platform for everyone.</p>
          </div>

          {/* GitHub Link */}
          <div className="flex items-center mt-6 md:mt-0">
            <a
              href="https://github.com/Cdrcar/Wizdumb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 text-sm hover:text-blue-300 ml-6"
            >
              <FaGithub className="inline-block mr-1 text-lg" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-gray-800 py-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center text-sm">
          <Link to="/" className="text-gray-900 mx-4 my-1 hover:text-blue-300">
            Homepage
          </Link>
          {/* Add more navigation links as needed */}
        </div>

        {/* Footer Text */}
        <p className="text-xs text-center mt-4">
          &copy; {year} WizDumb. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
