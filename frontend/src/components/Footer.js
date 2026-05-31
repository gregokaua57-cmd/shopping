import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Shopping</h4>
            <p className="text-gray-400">
              Sua plataforma de compras online confiável e segura.
            </p>
          </div>

          {/* Coluna 2 */}
          <div>
            <h5 className="font-bold mb-4">Navegação</h5>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">Início</a></li>
              <li><a href="#" className="hover:text-white transition">Produtos</a></li>
              <li><a href="#" className="hover:text-white transition">Categorias</a></li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h5 className="font-bold mb-4">Suporte</h5>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">Contato</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Coluna 4 */}
          <div>
            <h5 className="font-bold mb-4">Redes Sociais</h5>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-gray-400">
          <p>&copy; 2024 Shopping. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;