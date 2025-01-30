import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://blog:ShobunKolliedAnwar123@cluster0.jd92w.mongodb.net/blog');
    console.log('DB Connected');
}