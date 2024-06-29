
const mongoose  = require('mongoose');

const BookingSchema = new mongoose.Schema({
    ride_id :{
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    passenger_id :{
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    booking_status :{
        type:String,
        require:true,
        enum:["pending" , "confirmed" , "rejected" ,"cancelled" ]
    },
    created_at:{
        type:Date,
        default:Date.now()
    }

})

const Booking = mongoose.model("Booking" , BookingSchema);
module.exports = Booking;