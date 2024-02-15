
import User from '../models/UsetModal.js'
import message  from "../helpers/message.js"
import { hashPassword , comparePasswords } from '../middleware/common.js'
import {tokenValidation,createToken} from "../middleware/auth.js"

// Register
export const signup = async (req, res) => {
    console.log(req.body,"req.body");
    const { email, password } = req.body
    try {
        if (!email && !password) {
            return;
        }
        const findCustomer = await User.findOne({ email: email });
        if (findCustomer && findCustomer !== null) {
            res.status(200).json({
                success: true,
                message: message.ALREAY_CREATE
            })
        }
        else {
            let myPass = await hashPassword(password.toString());
            let registerCustomers = new User({
                email: email,
                password: myPass
            })
            let save = await registerCustomers.save()
            res.status(201).json({
                success: true,
                data: save
            })
        }
    } catch (error) {
        console.log("Error :",error);
        res.status(400).json({
            success: false,
            err: error
        })
    }
}

// login
export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const findCustomer = await User.findOne({ email });

        if (findCustomer) {
            const isPasswordMatch = comparePasswords(password, findCustomer.password);

            if (isPasswordMatch) {
                const token = createToken(findCustomer.email, findCustomer._id);
                console.log(findCustomer, "findCustomer", token);

                res.status(200).json({
                    success: true,
                    data: findCustomer,
                    token: token,
                });
            } else {
                throw message.PASSWORD_NOT_MATCH;
            }
        } else {
            throw message.CHECK_EMAIL_PASS;
        }
    } catch (error) {
        console.error(error, "error");
        res.status(400).json({
            success: false,
            error: error,
        });
    }
}

export const uploadFile = async (req, res) => {
    const { file } = req.files
    try {

       let uploadPath =__dirname + './../uploads/'+file.name;
        // Use the mv() method to place the file somewhere on your server
        console.log(uploadPath,"uploadPath--------");
        file.mv(uploadPath, function(err) {

          if (err)
           console.log("err",err);
        });
    } catch (error) {
        console.error(error, "error");
        res.status(400).json({
            success: false,
            error: error,
        });
    }
}