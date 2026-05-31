import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Senhas não conferem');
      return;
    }

    setLoading(true);

    try {
      // TODO: Integrar com API de registro
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      if (response.ok) {
        navigate('/login');
      } else {
        setError('Erro ao criar conta. Email já pode estar registrado.');
      }
    } catch (err) {
      setError('Erro ao registrar. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Registre-se</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Nome */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Nome</label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
              <User size={20} className="text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className="bg-transparent outline-none ml-2 w-full"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
              <Mail size={20} className="text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="bg-transparent outline-none ml-2 w-full"
                required
              />
            </div>
          </div>

          {/* Senha */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Senha</label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
              <Lock size={20} className="text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Sua senha"
                className="bg-transparent outline-none ml-2 w-full"
                required
              />
            </div>
          </div>

          {/* Confirmar Senha */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Confirmar Senha</label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
              <Lock size={20} className="text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirme sua senha"
                className="bg-transparent outline-none ml-2 w-full"
                required
              />
            </div>
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
          >
            {loading ? 'Criando conta...' : 'Registrar'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Já tem conta?</p>
          <Link to="/login" className="text-orange-500 font-semibold hover:text-orange-600">
            Faça login aqui
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;