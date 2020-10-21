  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = mongoose.Schema({

    car_id: {type: Schema.Types.ObjectId, ref: 'Car'},
    from: Number,
    until: Number,
    fromDate: Date,
    untilDate: Date

});

module.exports = mongoose.model('Reservation', reservationSchema);