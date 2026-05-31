import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-orange-600">
            Shopping
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition">
              Início
            </Link>
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition">
              Categorias
            </Link>
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition">
              Sobre
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg">
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="bg-transparent outline-none ml-2 w-64"
            />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hidden md:block text-gray-700 hover:text-orange-600 transition">
              Login
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-orange-600 transition"
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-orange-600 py-2">
              Início
            </Link>
            <Link to="/" className="block text-gray-700 hover:text-orange-600 py-2">
              Categorias
            </Link>
            <Link to="/" className="block text-gray-700 hover:text-orange-600 py-2">
              Sobre
            </Link>
            <Link to="/login" className="block text-gray-700 hover:text-orange-600 py-2">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;