import mongoose from "mongoose";


const userSchema = mongoose.Schema({
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

const UserModel = mongoose.model('Patient',userSchema);

export default Patient