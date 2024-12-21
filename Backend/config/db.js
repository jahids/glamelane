import mongoose from "mongoose";

export const connectDB = async () => {
     await mongoose.connect('mongodb+srv://galibachowdhury56:CYH0fwVQw4QdbZ8h@ecommerce.mh2vj.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    // await mongoose.connect('mongodb+srv://galibachowdhury56:CYH0fwVQw4QdbZ8h@ecommerce.mh2vj.mongodb.net/glamelane').then(()=>console.log("DB Connected"));
}