import { getAllContacts } from "../services/contactServices.js";

const getContacts = async (req, res, next) => {
    try {
        const {user}=user
        const contacts = await getAllContacts(user._id);
        
        res.json(contacts);
    }
    catch (error) {
        next();
    }
};


export default {
    getContacts, 
}