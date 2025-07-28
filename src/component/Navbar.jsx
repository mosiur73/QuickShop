import { Search, ShoppingCart, User } from "lucide-react"

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
          {/* <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full border-2 border-blue-600 flex items-center justify-center bg-white">
              <div className="text-center">
                <div className="text-xs text-gray-600 leading-none">ARTIFICIAL</div>
                <div className="text-2xl font-bold text-blue-600">JF</div>
                <div className="text-xs text-gray-600 leading-none">GRASS WALL</div>
              </div>
            </div>
          </div> */}

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
  )
}
