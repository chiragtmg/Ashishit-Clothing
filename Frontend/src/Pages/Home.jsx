import React from 'react';

const products = [
  {
    id: 1,
    name: 'Men Long T-shirt',
    price: 1200,
    image: 'https://via.placeholder.com/300x400/ef4444/ffffff?text=Men+Long+T',
  },
  {
    id: 2,
    name: 'Men Trouser',
    price: 2000,
    image: 'https://via.placeholder.com/300x400/3b82f6/ffffff?text=Men+Trouser',
  },
  {
    id: 3,
    name: 'Kid Jacket',
    price: 2500,
    image: 'https://via.placeholder.com/300x400/f97316/ffffff?text=Kid+Jacket',
  },
  {
    id: 4,
    name: 'Women T-shirt',
    price: 1500,
    image: 'https://via.placeholder.com/300x400/ec4899/ffffff?text=Women+T',
  },
  // Add more products as needed
];

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner - two-part layout */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] md:h-[600px]">
          {/* Left part - Image + overlay text */}
          <div className="relative bg-blue-500 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Man with hat and headphones"
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end pb-12 px-8 md:px-16">
              <div className="text-white">
                <h2 className="text-3xl md:text-5xl font-bold">Best Seller</h2>
                <p className="text-xl md:text-3xl mt-2">Latest Arrivals</p>
              </div>
            </div>
          </div>

          {/* Right part - Clothes on hanger */}
          <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1604176354204-926873e2e2e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Clothes on rack"
              className="w-full h-full object-cover brightness-95"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="text-center px-6">
                <h3 className="text-4xl md:text-6xl font-bold text-gray-800 drop-shadow-lg">
                  New Season
                </h3>
                <p className="text-xl md:text-2xl text-gray-700 mt-4 drop-shadow">
                  Discover Latest Collections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Collections Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            LATEST COLLECTIONS
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-12 rounded"></div>
          
          <p className="text-center text-gray-600 mb-12 text-lg">
            Best clothing site for Nepal – Quality | Style | Affordable Prices
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
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
                  
                  {/* Simple Currency Converter Field */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Approx in USD (1 USD ≈ NPR 145)
                    </label>
                    <div className="bg-gray-100 rounded-lg px-4 py-3 text-gray-800 font-medium">
                      ~ ${(product.price / 145).toFixed(2)} USD
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;