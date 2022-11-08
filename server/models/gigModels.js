import mongoose from "mongoose";

const gigSchema = mongoose.Schema({
    id: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',    
    },
    // nid: {
    //     type: 'string',
    //     required: true,
    //     unique: true,
    // },
    maintittle: {
        type: String,
        required: true,
    },
    categoryone: {
        type: String,
        required: true,
    },
    categorytwo: {
        type: String,
        required: true,
    },
    sericetype: {
        type: String,
        required: true, 
    },
    matadata: {
        type: String,
        required: true,
    },

    searchtag: [{
        type: String,
        required: true,
    }],
    pkgname: [{
        name : {type: String, required: true},
    }],
    pkgdescription: [{
        discription : {type: String, required: true},
    }],
    scheduletime: [{
        time : {type: String, required: true},
    }],
    numofpages: [{
        pagesum : {type: String, required: true},
    }],
    numofproduct: [{
        productsum : {type: String, required: true},
    }],
    customaization: [{
        name : {type: Boolean, required: true},
    }],
    responsivedesign: [{
        name : {type: String, required: true},
    }],
    numofproduct: [{
        productsum : {type: String, required: true},
    }],
    revisions : [{
        name : {type: String, required: true},
    }],
    price : [{
        name : {type: String, required: true},
    }],
    image : {
        type: String,
        required: true,
    },

})

const Gig = mongoose.model('Gig',gigSchema);

export default Gig