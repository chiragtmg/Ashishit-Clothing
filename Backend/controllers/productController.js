import Product from "../models/productModel.js";

// Create a new recipe
export const createProduct = async (req, res) => {
	const { name, description, price, image, category, subCategory, bestSeller } =
		req.body;

	try {
		const newProduct = await Product.create({
			name,
			description,
			price,
			image,
			category,
			subCategory,
			bestSeller,
		});

		const productResponse = {
			_id: newProduct._id,
			name: newProduct.name,
			description: newProduct.description,
			price: newProduct.price,
			image: newProduct.image,
			category: newProduct.category,
			subCategory: newProduct.subCategory,
			bestSeller: newProduct.bestSeller,
		};

		res.status(201).json({
			success: true,
			message: "New product created successfully",
			data: productResponse,
		});
	} catch (error) {
		console.log("Error creating recipe:", error);
		res.status(500).json({
			success: false,
			message: "Server error while creating product",
			error: error.message,
		});
	}
};

// Update recipe
export const updateProduct = async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
				runValidators: true,
			},
		);

		if (!updatedProduct) {
			return res.status(404).json({
				success: false,
				message: "Product not found",
			});
		}

		res.status(200).json({
			success: true,
			message: "Product updated successfully",
			data: updatedProduct,
		});
	} catch (error) {
		console.log("Error updating product:", error);
		res.status(500).json({
			success: false,
			message: "Server error while updating product",
			error: error.message,
		});
	}
};

// Get all product
export const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json({
			success: true,
			message: "All product retrieved successfully",
			data: products,
		});
	} catch (error) {
		console.log("Error fetching product:", error);
		res.status(500).json({
			success: false,
			message: "Server error while fetching product",
			error: error.message,
		});
	}
};

// Delete product
export const deleteProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);

		if (!product) {
			return res.status(404).json({
				success: false,
				message: "Product not found",
			});
		}

		res.status(200).json({
			success: true,
			message: "Product deleted successfully",
		});
	} catch (error) {
		console.log("Error deleting product:", error);
		res.status(500).json({
			success: false,
			message: "Server error while deleting product",
			error: error.message,
		});
	}
};

// Get product by ID
export const getProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);

		if (!product) {
			return res.status(404).json({
				success: false,
				message: "Product not found",
			});
		}

		res.status(200).json({
			success: true,
			message: "Product retrieved successfully",
			data: product,
		});
	} catch (error) {
		console.log("Error fetching product:", error);
		res.status(500).json({
			success: false,
			message: "Server error while fetching product",
			error: error.message,
		});
	}
};
