import mongoose from "mongoose";


const doctorSchema = mongoose.Schema({
    name: {
        type : 'string',
        required: true,
    },
    // nid: {
    //     type: 'string',
    //     required: true,
    //     unique: true,
    // },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    password: {
        type: 'String',
        required: true,
    },

})