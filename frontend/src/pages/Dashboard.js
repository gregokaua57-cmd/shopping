import React from 'react';
import { Package, Heart, Settings, LogOut } from 'lucide-react';

function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Minha Conta</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Card Pedidos */}
        <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
          <Package size={40} className="mx-auto mb-3 text-blue-500" />
          <h3 className="font-bold mb-1">Meus Pedidos</h3>
          <p className="text-3xl font-bold text-blue-500">5</p>
        </div>

        {/* Card Favoritos */}
        <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
          <Heart size={40} className="mx-auto mb-3 text-red-500" />
          <h3 className="font-bold mb-1">Favoritos</h3>
          <p className="text-3xl font-bold text-red-500">12</p>
        </div>

        {/* Card Endereços */}
        <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition">
          <Settings size={40} className="mx-auto mb-3 text-green-500" />
          <h3 className="font-bold mb-1">Endereços</h3>
          <p className="text-3xl font-bold text-green-500">2</p>
        </div>

        {/* Card Sair */}
        <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition cursor-pointer">
          <LogOut size={40} className="mx-auto mb-3 text-gray-500" />
          <h3 className="font-bold mb-1">Sair</h3>
          <p className="text-sm text-gray-600">Logout</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Meus Pedidos */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Pedidos Recentes</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 hover:shadow transition">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">Pedido #12345</p>
                  <p className="text-sm text-gray-600">05/06/2024</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-orange-600">R$ 299.90</p>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Entregue</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informações da Conta */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Informações da Conta</h2>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-600">Nome</p>
              <p className="font-semibold">João Silva</p>
            </div>
            <div>
              <p className="text-gray-600">Email</p>
              <p className="font-semibold">joao@email.com</p>
            </div>
            <div>
              <p className="text-gray-600">Telefone</p>
              <p className="font-semibold">(11) 9999-9999</p>
            </div>
            <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;