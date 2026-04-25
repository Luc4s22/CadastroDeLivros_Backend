const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: 'API dos livros está funcionando.' });
});


app.use('/api/entries', require('./routes/livrosRoutes'));


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' MongoDB conectado com sucesso');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(` Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(' Erro ao conectar no MongoDB:', err);
  });
