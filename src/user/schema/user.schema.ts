import { Schema, Document } from 'mongoose';

export const userSchema = new Schema({
    fullname: String,
    emailid: String,
    password: String,
    mobileno: String,
});

export interface user extends Document {
    fullname: String,
    emailid: String,
    password: String,
    mobileno: String,
}