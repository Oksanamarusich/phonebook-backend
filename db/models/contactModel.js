import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
        number: {
            type: String,
            required:true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
   
  },
  { versionKey: false, timestamps: true }
);


const Contact = model("contact", contactSchema);
    
export default Contact;
