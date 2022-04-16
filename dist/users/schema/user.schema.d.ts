import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    name: String;
    email?: String;
    age?: Number;
    gender: String;
    createdAt: Date;
    deletedAt?: Date;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any, any>, any, any>;
