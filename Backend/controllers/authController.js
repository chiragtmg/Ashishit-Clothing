import { response } from "express";
import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for the user login
const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await userModel.findOne({ email });

		if (!user) {
			return res.json({ success: false, message: "User doesnot exist" });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (isMatch) {
			const token = createToken(user._id);
			res.json({ success: true, token });
		} else {
			res.json({ success: false, message: "Invalid credentials" });
		}
		// Generate JWT token
		const age = 1000 * 60 * 60 * 24 * 7; // 1 week

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username,
				avatar: user.avatar,
				isAdmin: false,
			},
			process.env.JWT_SECRET_KEY,
			{ expiresIn: age },
		);

		// Create user info object
		const userInfo = {
			_id: user._id,
			username: user.username,
			email: user.email,
			avatar: user.avatar, // This will be null if no avatar
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		};

		res
			.cookie("token", token, {
				httpOnly: true,
				// secure: true, // uncomment in production with HTTPS
				maxAge: age,
			})
			.status(200)
			.json(userInfo);
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

//route for the user registration
const registerUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		//for checking email exist or not
		const exists = await userModel.findOne({ email });

		if (exists) {
			return res.json({ success: false, message: "User already exist" });
		}

		//validating email and strong password
		if (!validator.isEmail(email)) {
			return res.json({ success: false, message: "Use valid email" });
		}
		if (password.length < 8) {
			return res.json({
				success: false,
				message: "Please enter a strong password",
			});
		}

		//hasing for password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		//creating new user
		const newUser = new userModel({
			name,
			email,
			password: hashedPassword,
		});

		//saving in database
		const user = await newUser.save();

		//creating token to use app
		const token = createToken(user._id);

		res.json({ success: true, token });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

export const logoutUser = (req, res) => {
	res.clearCookie("token").status(200).json({ msg: "Logged out successfully" });
};

//route for admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
