import mongoose from 'mongoose';

let VoteSchme = new mongoose.Schema({
	showId: {type: Number, required: true, unique: true},
	count: {type: Number, default: 0},
});

export default mongoose.model('Vote', VoteSchme);
