import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { apiRequest } from "../Services/API";

const Login = () => {
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { updateUser } = useContext(AuthContext);

	const onSubmitHandler = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		setError("");

		try {
			const response = await apiRequest.post("/auth/login", {
				email,
				password,
			});

			console.log(response.data);
			toast.success("Login successfully");
			updateUser(response.data);
			navigate("/");
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<>
			{/* Main Content - Centered Form */}
			<div className="min-h-screen bg-white flex items-center justify-center px-6 -mt-20">
				<div className="w-full max-w-md bg-gradient-to-b from-gray-200 to-gray-400 rounded-3xl shadow-2xl p-10">
					<h2 className="text-4xl font-bold text-center mb-10 underline decoration-gray-600">
						<p> Login</p>
					</h2>
					{error && (
						<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
							{error}
						</div>
					)}

					<form onSubmit={onSubmitHandler} className="space-y-8">
						<input
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							type="email"
							placeholder="email"
							className="w-full px-6 py-4 bg-white rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-blue-300 "
							required
						/>

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

							<p className="hover:underline">
								<Link to="/signup">Create account</Link>
							</p>
						</div>

						<button
							type="submit"
							disabled={isLoading}
							className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl py-4 rounded-full shadow-lg transition"
						>
							{isLoading ? "Logging In..." : "Sign in"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
