import mongoose from "mongoose";


const CONNECTION_URL ='mongodb+srv://omi:omi123456@clinicare.w0wcwlv.mongodb.net/test'
const PORT = process.env.PORT||5000;

// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true,useUnifiedTopology: true})
//     .then(() => app.listen(PORT,() => console.log("server listening on port")))
//     .catch((error) => console.error(error.message));

const  connectDB= async () => {
    try {
        const con = await mongoose.connect(CONNECTION_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        })
        console.log(PORT)
        console.log('Connented'+con.connection.host)
    } catch (error) {
        console.log('Error'+error)
        process.exit(1)
    }
}

export default connectDB;