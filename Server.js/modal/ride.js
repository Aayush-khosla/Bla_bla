
const mongoose  = require('mongoose');

const rideSchema = new mongoose.Schema({
    driver_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    source:{
        type:String,
        require:true
    },
    destination:{
        type:String,
        require:true
    },
    departure_datetime:{
        type:Date,
        require:true
    },
    available_seats:{
        type:Number,
        require:true
    }, 
    price:{
        type:Number,
        require:true
    }, 
    car_details:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }

})

const Rides = mongoose.model("Rides" , rideSchema);
module.exports = Rides;