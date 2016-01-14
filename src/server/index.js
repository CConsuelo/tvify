import express from 'express';
import api from './api';

const app = express();
const PORT = 3000;

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/tviffy');

app.use(express.static('public'));

app.use('/api', api);

app.listen(PORT, () => {
  console.log('Servidor iniciado con express en el puerto ' + PORT);
});
