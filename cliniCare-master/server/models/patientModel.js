import mongoose from "mongoose";


const patientSchema = mongoose.Schema({
    name: {
        type : String,
        required: true,
    },
    // nid: {
    //     type: 'string',
    //     required: true,
    //     unique: true,
    // },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

})

const Patient = mongoose.model('Patient',patientSchema);

export default Patient