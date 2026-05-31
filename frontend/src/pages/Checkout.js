import React, { useState } from 'react';
import { MapPin, CreditCard } from 'lucide-react';

function Checkout() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // TODO: Enviar pedido para API
      alert('Pedido realizado com sucesso!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {/* Progresso */}
      <div className="flex mb-8">
        <div className={`flex-1 text-center pb-2 border-b-4 ${step >= 1 ? 'border-orange-500' : 'border-gray-300'}`}>
          <p className={`font-bold ${step >= 1 ? 'text-orange-500' : 'text-gray-500'}`}>1. Endereço</p>
        </div>
        <div className={`flex-1 text-center pb-2 border-b-4 ${step >= 2 ? 'border-orange-500' : 'border-gray-300'}`}>
          <p className={`font-bold ${step >= 2 ? 'text-orange-500' : 'text-gray-500'}`}>2. Pagamento</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MapPin size={24} />
              Endereço de Entrega
            </h2>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Rua</label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Cidade</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Estado</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">CEP</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CreditCard size={24} />
              Dados do Pagamento
            </h2>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nome do Titular</label>
              <input
                type="text"
                name="cardHolder"
                value={formData.cardHolder}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Número do Cartão</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Data de Validade</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/AA"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-4 mt-8">
          {step === 2 && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition"
            >
              Voltar
            </button>
          )}
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition"
          >
            {step === 1 ? 'Próximo' : 'Finalizar Pedido'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;