import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Buscar produtos da API
    const mockProducts = [
      {
        id: 1,
        name: 'Fone de Ouvido Bluetooth',
        price: 150.00,
        discount: 10,
        rating: 4.5,
        image: 'https://via.placeholder.com/250x250?text=Fone'
      },
      {
        id: 2,
        name: 'Smartwatch',
        price: 300.00,
        discount: 15,
        rating: 4.2,
        image: 'https://via.placeholder.com/250x250?text=Smartwatch'
      },
      {
        id: 3,
        name: 'Câmera Digital',
        price: 800.00,
        discount: 5,
        rating: 4.8,
        image: 'https://via.placeholder.com/250x250?text=Camera'
      },
      {
        id: 4,
        name: 'Tablet 10 polegadas',
        price: 500.00,
        discount: 20,
        rating: 4.3,
        image: 'https://via.placeholder.com/250x250?text=Tablet'
      }
    ];
    setProducts(mockProducts);
    setLoading(false);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold mb-2">Bem-vindo ao Shopping</h1>
        <p className="text-lg">Encontre os melhores produtos com os melhores preços</p>
      </div>

      {/* Filtros */}
      <div className="mb-8 flex gap-4">
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option>Todas as Categorias</option>
          <option>Eletrônicos</option>
          <option>Roupas</option>
          <option>Livros</option>
        </select>
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option>Ordenar por</option>
          <option>Preço: Menor para Maior</option>
          <option>Preço: Maior para Menor</option>
          <option>Mais Vendidos</option>
        </select>
      </div>

      {/* Grid de Produtos */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Carregando produtos...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.discount > 0 && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                    -{product.discount}%
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 truncate">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>

                {/* Preço */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-orange-600">
                    R$ {(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </div>
                  {product.discount > 0 && (
                    <div className="text-sm text-gray-500 line-through">
                      R$ {product.price.toFixed(2)}
                    </div>
                  )}
                </div>

                {/* Botões */}
                <div className="flex gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition text-center"
                  >
                    Detalhes
                  </Link>
                  <button className="flex-1 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;