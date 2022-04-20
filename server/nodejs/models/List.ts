import mongoose, { ObjectId } from "mongoose";

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date(),
    },
    done: {
        type: Boolean,
        requred: true,
        default: false,
    },
    /*items: {
        type: [{ type: ObjectId, ref: "Item" }],
        required: false,
    },*/
});

export const List = mongoose.model("List", ListSchema);
