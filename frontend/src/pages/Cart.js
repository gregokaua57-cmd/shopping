import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

function Cart() {
  const [cartItems, setCartItems] = React.useState([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Seu Carrinho</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500 text-lg mb-4">Seu carrinho está vazio</p>
          <Link
            to="/"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Continuar Comprando
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items */}
          <div className="lg:col-span-2">
            {/* Items aqui */}
          </div>

          {/* Resumo */}
          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>R$ 0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Frete:</span>
                <span>R$ 0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Imposto:</span>
                <span>R$ 0.00</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-xl font-bold mb-4">
              <span>Total:</span>
              <span className="text-orange-600">R$ 0.00</span>
            </div>
            <Link
              to="/checkout"
              className="w-full bg-orange-500 text-white py-3 rounded font-bold hover:bg-orange-600 transition block text-center"
            >
              Ir para Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;