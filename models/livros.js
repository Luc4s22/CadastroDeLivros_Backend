const mongoose = require('mongoose');

const livrosSchema = new mongoose.Schema(
  {
    Nome: { type: String, required: true, trim: true },
    Data: { type: String, required: true, trim: true },
    Editora: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('livros', livrosSchema);