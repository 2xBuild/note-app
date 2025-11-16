import moongoose , {model, Schema} from "mongoose";
import "dotenv/config"
import { email } from "zod";

const MONGO_URI = process.env.MONGO_URI as string;

moongoose.connect(MONGO_URI).then(() => {
  // success
}).catch((err) => {
    console.log(err);
})



const UserSchema = new Schema({
    name: {type: String , required: true},
    email:{ type: String, required: true, unique: true},
    password: {type:String, required: true}
})

const NotesSchema = new Schema({
    note: {type:String, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User" , required: true}
})


export const NotesModel = model("Notes", NotesSchema);
export const UserModel = model("User", UserSchema);


