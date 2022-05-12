// https://mongoosejs.com/docs/validation.html#built-in-validators

import { Schema, model } from "mongoose";

const onesideSchema = new Schema(
    {
        _id: Number,
        nev: {
            type: String,
            required: true,
            unique: true
        }
    },
    { versionKey: false, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

const onesideModel = model("oneside", onesideSchema, "kategoriak");

export default onesideModel;
