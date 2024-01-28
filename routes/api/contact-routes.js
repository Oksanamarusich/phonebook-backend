import express from "express";
import contactController from "../../controllers/contactController.js";


const contactRouter = express.Router();

contactRouter.get("/", contactController.getContacts);
contactRouter.post("/");
contactRouter.delete("/:id")

export default contactRouter;