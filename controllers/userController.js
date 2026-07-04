import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import envconfig from "../config/envConfig.js"

const userController = {

    userRegistration: async (req, res) => {
        try {

            const { name, email, password} = req.body;
            const data = await User.findOne({ email });

            if (data) return res.json({ message: "User Exist ." });

            req.body.password = await bcrypt.hash(req.body.password, 10)
            const newUser = User.create(req.body);
            return res.status(200).json({ success: true, message: " User Register Successfully ."})

        } catch (error) {
            console.log(error.message);
            return res.status(400).json({ message: error.message });
        }
    },
    userLogin: async (req, res) => {
        try {

            const { email, password } = req.body;
            const data = await User.findOne({ email }).select("+password");
            if (!data) return res.json({ message: "User Not Exist ." });

            const matchPassword = await bcrypt.compare(password, data.password);
            if (!matchPassword) return res.json({ message: "Password Does Not Match ." });

            return res.status(200).json({ success: true, message: "User Login Successfully." });

        } catch (error) {
            console.log(error.message);
            return res.status(400).json({ message: "something is wrong" });
        }
    },
    getAllUser: async (req, res) => {
        try {
            const data = await User.find({});
            return res.status(200).json({ message: "User Data Get Successfully .", data });

        } catch (error) {
            console.log(error.message);
            return res.status(400).json({ message: "something is wrong" });
        }
    },
    getOneUser: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await User.findById(id);
            return res.status(200).json({ success: true, message: "User Data Get Successfully by Id .", data });

        } catch (error) {
            console.log(error.message);
            return res.status(400).json({ message: "something is wrong" });
        }
    },
    userUpdate: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await User.findByIdAndUpdate(id, req.body);
            return res.status(200).json({ success: true, message: "User Updated Successfully .", data });

        } catch (error) {
            console.log(error.message);
            return res.status(400).json({ message: "something is wrong" });
        }
    },
    userDelete: async (req, res) => {
        try {

            const { id } = req.params;
            const data = await User.findByIdAndDelete(id);
            return res.status(200).json({ success: true, message: "User Deleted Successfully .", data });

        } catch (error) {
            console.log(error.message);
            return res.status(400).json({ message: "something is wrong" });
        }
    }

}

export default userController;