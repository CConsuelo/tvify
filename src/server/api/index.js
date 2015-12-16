import express from 'express';

const router = express.Router();

var votes = {};

// GET /votes
router.get('/votes', (request, response) => {
  response.json(votes)
});

// POST /vote/<id>
router.post('/vote/:id', (request, response) => {
  let id = request.params.id;
  if (votes[id] === undefined) {
    votes[id] = 1;
  } else {
    votes[id] += 1;
  }

  response.json(votes[id]);
});

export default router