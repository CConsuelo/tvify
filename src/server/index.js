import express from 'express';
import api from 'src/server/api';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use('/api');

app.listen(PORT, () => {
  console.log('Servidor iniciado con express en el puerto ' + PORT);
});
