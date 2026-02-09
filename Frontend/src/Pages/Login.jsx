import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { apiRequest } from "../Services/API";

const Login = () => {
	const [currentState, setCurrentState] = useState("Login");
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const { updateUser } = useContext(AuthContext);

	const onSubmitHandler = async (event) => {
		event.preventDefault();

		try {
			if (currentState === "Sign Up") {
				const response = await apiRequest.post("/auth/register", {
					name,
					email,
					password,
				});

				if (response.data.success) {
					console.log(response.data);
					setToken(response.data.token);
					toast.success("Resgistered Successfully");
					localStorage.setItem("token", response.data.token);
				} else {
					toast.error(response.data.message);
				}
			} else {
				const response = await apiRequest.post("/auth/login", {
					email,
					password,
				});
				if (response.data.success) {
					console.log(response.data);
					setToken(response.data.token);
					toast.success("Login successfully");
					localStorage.setItem("token", response.data.token);
					updateUser(response.data);
					navigate("/");
				} else {
					toast.error(response.data.message);
				}
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};
	return (
		<>
			{/* Main Content - Centered Form */}
			<div className="min-h-screen bg-white flex items-center justify-center px-6 -mt-20">
				<div className="w-full max-w-md bg-gradient-to-b from-gray-200 to-gray-400 rounded-3xl shadow-2xl p-10">
					<h2 className="text-4xl font-bold text-center mb-10 underline decoration-gray-600">
						<p> {currentState}</p>
					</h2>

					<form onSubmit={onSubmitHandler} className="space-y-8">
						<input
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							type="email"
							placeholder="email"
							className="w-full px-6 py-4 bg-white rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 "
							required
						/>
						{currentState === "Login" ? (
							""
						) : (
							<input
								onChange={(e) => setName(e.target.value)}
								value={name}
								type="text"
								placeholder="Username"
								className="w-full px-6 py-4 bg-white rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 "
								required
							/>
						)}
						<input
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							type="password"
							placeholder="Password"
							className="w-full px-6 py-4 bg-white rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
							required
						/>

						<div className="flex justify-between text-sm text-gray-700">
							<Link to="" className="hover:underline">
								Forgot your password?
							</Link>
							{currentState === "Login" ? (
								<p
									className="hover:underline"
									onClick={() => setCurrentState("Sign Up")}
								>
									Create account
								</p>
							) : (
								<p
									className="hover:underline"
									onClick={() => setCurrentState("Login")}
								>
									Login
								</p>
							)}
						</div>

						<button
							type="submit"
							className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl py-4 rounded-full shadow-lg transition"
						>
							{currentState === "Login" ? "Sign In" : "Sign Up"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
