import Contact from "../db/models/contactModel.js";

 export const getAllContacts = async (owner) => {
    const result = await Contact.find({owner});
    return result;
}