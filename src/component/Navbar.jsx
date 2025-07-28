import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import logo from "../../public/image/Group 395.png";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
              Shop
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
              Blogs
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 font-medium">
              Contact
            </a>
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={logo} alt="Logo" width={70} height={40} className="mt-3" />
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-6">
            <button className="flex gap-2 items-center text-gray-700 hover:text-gray-900">
              <span className="hidden sm:inline">Login</span>
              <User className="w-5 h-5 mr-1" />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative text-gray-700 hover:text-gray-900">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
