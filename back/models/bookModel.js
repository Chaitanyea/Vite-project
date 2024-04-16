import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
        title :{
            type : String,
            required : true
        },
        author :{
            type : String,
            required : true
        },
        genre :{
            type : String,
            required : true
        },
        year :{
            type : Number,
            required : true
        },
    },
    {
        timestamps: true
    }
);

export const book = mongoose.model("book", schema);
