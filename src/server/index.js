import express from 'express';

const app = express();
const PORT = 3000;

const votes = {};

app.use(express.static('public'))

// GET /votes
app.get('/votes', (request, response) => {
  response.json(votes)
});

// POST /vote/<id>
app.post('/vote/:id', (request, response) => {
  let id = request.params.id;
  if (votes[id] === undefined) {
    votes[id] = 1;
  } else {
    votes[id] += votes[id];
  }
});

app.listen(PORT, () => {
  console.log('Servidor iniciado con express en el puerto ' + PORT);
})
