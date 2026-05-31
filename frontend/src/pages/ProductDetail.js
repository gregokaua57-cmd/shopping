import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagem */}
        <div className="flex items-center justify-center bg-gray-200 rounded-lg p-4">
          <img
            src={`https://via.placeholder.com/400x400?text=Produto+${id}`}
            alt="Produto"
            className="w-full h-auto"
          />
        </div>

        {/* Informações */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Nome do Produto</h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-600">(120 avaliações)</span>
          </div>

          {/* Preço */}
          <div className="mb-6">
            <div className="text-4xl font-bold text-orange-600 mb-2">R$ 150.00</div>
            <div className="text-gray-500 line-through">R$ 200.00</div>
          </div>

          {/* Descrição */}
          <p className="text-gray-700 mb-6">
            Descrição detalhada do produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Stock */}
          <div className="mb-6 p-4 bg-green-100 rounded">
            <p className="text-green-800 font-semibold">✓ Em estoque (15 unidades)</p>
          </div>

          {/* Botões */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-orange-500 text-white py-3 rounded font-bold hover:bg-orange-600 transition flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Adicionar ao Carrinho
            </button>
            <button className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded font-bold hover:bg-orange-50 transition">
              <Heart size={20} />
            </button>
          </div>

          {/* Especificações */}
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold mb-3">Especificações:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Especificação 1</li>
              <li>• Especificação 2</li>
              <li>• Especificação 3</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Avaliações</h2>
        <div className="space-y-4">
          {/* Review items */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;