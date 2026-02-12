const ProductCard = ({ product }) => {
	const usdPrice = (product.price / 145).toFixed(2);

	return (
		<div
			key={product._id}
			className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
		>
			<div className="relative h-80 overflow-hidden">
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
			</div>
			<div className="p-5">
				<h3 className="text-lg font-semibold text-gray-800 mb-2">
					{product.name}
				</h3>
				<p className="text-xl font-bold text-teal-600 mb-3">
					NPR {product.price.toLocaleString()}
				</p>

				<div className="mt-4 pt-4 border-t border-gray-200">
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Approx in USD (1 USD ≈ NPR 145)
					</label>
					<div className="bg-gray-100 rounded-lg px-4 py-3 text-gray-800 font-medium">
						~ ${usdPrice} USD
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
