import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Fast-Delivery:Hare=500.@cluster0.de7r7sn.mongodb.net/Fast-Delivery').then(()=>console.log("DB Connected"));

}