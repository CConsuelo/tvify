import express from 'express';

const router = express.Router();

import Vote from '../models'

// GET /votes
router.get('/votes', (request, response) => {
  Vote.find({}, (err, docs) => {
  	if (err) {
  		return (response.sendStatus(500).json(err));
  	}
  	response.json(docs);
  });
});

// POST /vote/<id>
router.post('/vote/:id', (request, response) => {
	let id = request.params.id;

	Vote.findOne({showId: id}, (err, doc) => {
		if (doc) {
			//Actualizar el doc
			doc.count += 1;
			doc.save(err => {
				if (err) {
					return (response.sendStatus(500).json(err));
				}
				response.json(doc);
			});
		} else {
			//Crear un doc nuevo y poner de count 1
			let vote = new Vote();
			vote.showId = id;
			vote.count = 1;
			vote.save(err => {
				if (err) {
					return (response.sendStatus(500).json(err));
				}
				response.json(vote);
			});
		}
	});


});

export default router