const mongoose = require('mongoose');

const livrosSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    data: { type: String, required: true },
    editora: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('livros', livrosSchema);
