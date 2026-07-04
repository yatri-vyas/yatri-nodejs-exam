import { body } from "express-validator";

const validation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage("Name is Required .")
        .isLength({min:2})
        .withMessage("Name Contain minimum 2 Characters ."),
    body('email')
        .trim()
        .notEmpty()
        .withMessage("Email is Required .")
        .isEmail()
        .withMessage("Enter Valid Email ."),
    body('password')
        .trim()
        .notEmpty()
        .withMessage("Password is Required .")
        .isLength({min:8})
        .withMessage("Password must be at least 8 characters long .")
        .isStrongPassword()
        .withMessage("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character .")       
];

export default validation;