const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Por favor, forneça um nome para o produto'],
      trim: true,
      maxlength: [100, 'Nome não pode ter mais de 100 caracteres']
    },
    description: {
      type: String,
      required: [true, 'Por favor, forneça uma descrição'],
      maxlength: [2000, 'Descrição não pode ter mais de 2000 caracteres']
    },
    price: {
      type: Number,
      required: [true, 'Por favor, forneça um preço'],
      min: [0, 'Preço não pode ser negativo']
    },
    discount: {
      type: Number,
      default: 0,
      min: [0, 'Desconto não pode ser negativo'],
      max: [100, 'Desconto não pode ser maior que 100%']
    },
    category: {
      type: String,
      required: [true, 'Por favor, forneça uma categoria'],
      enum: ['Eletrônicos', 'Roupas', 'Livros', 'Alimentos', 'Outros']
    },
    stock: {
      type: Number,
      required: [true, 'Por favor, forneça a quantidade em estoque'],
      min: [0, 'Estoque não pode ser negativo']
    },
    images: [
      {
        type: String
      }
    ],
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    numOfReviews: {
      type: Number,
      default: 0
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        name: String,
        rating: Number,
        comment: String,
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ],
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);