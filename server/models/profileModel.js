import mongoose from "mongoose";


const profileSchema = mongoose.Schema({
    user: {
        type : mongoose.SchemaType.type.ObjectId,
        required: true,
        ref : 'Patient',
    },
    image: {
        type: String,
        required: true,
    },
    balance: {
        type: String,
        required: true,
        unique: true,
    },
    skillCategory: {
        type: Boolean,
        default: false,
        required: true,
    },
    Department : {
        type: String,
        required: true,
    },
})

const Profile = mongoose.model('Profile',profileSchema)
export default Profile