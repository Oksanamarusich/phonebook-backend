import jwt from "jsonwebtoken";
import "dotenv/config"; 
import User from "../db/models/userModel.js"

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
        res.status(401).json({ message: "User not authorized" })
        return;
    }

    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if (!user || !user.token || token !== user.token) {
            res.status(410).json({ message: "Not authorized" })
            return;
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ message: "User not authorized" })
    }
};

export default authenticate;