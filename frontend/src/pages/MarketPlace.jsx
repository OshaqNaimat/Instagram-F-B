// MarketPlace.jsx - Complete e-commerce landing page in one file
import React, { useState } from "react";
import IconSidebar from "../components/IconSidebar";
import { FaLeftLong } from "react-icons/fa6";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const MarketPlace = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Lucide React Icons (simplified with emojis for single file)
  const Icons = {
    Cart: () => <span>🛒</span>,
    Star: () => <span>⭐</span>,
    StarFilled: () => <span>🌟</span>,
    Truck: () => <span>🚚</span>,
    Shield: () => <span>🛡️</span>,
    CreditCard: () => <span>💳</span>,
    Heart: () => <span>❤️</span>,
    Search: () => <span>🔍</span>,
    Menu: () => <span>☰</span>,
    Close: () => <span>✕</span>,
    Eye: () => <span>👁️</span>,
    Trash: () => <span>🗑️</span>,
    Check: () => <span>✓</span>,
    Refresh: () => <span>🔄</span>,
    Bag: () => <span>🛍️</span>,
    Minus: () => <span>➖</span>,
    Plus: () => <span>➕</span>,
  };

  // Products data
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviewCount: 234,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop",
      category: "electronics",
      description:
        "Premium noise-cancelling headphones with 30-hour battery life and crystal clear audio quality.",
      inStock: true,
      features: [
        "Bluetooth 5.0",
        "Noise Cancellation",
        "30hr Battery",
        "Foldable Design",
      ],
      tags: ["bestseller", "sale"],
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.2,
      reviewCount: 89,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop",
      category: "clothing",
      description:
        "Soft, breathable organic cotton t-shirt available in multiple colors.",
      inStock: true,
      features: ["100% Organic Cotton", "Machine Washable", "Multiple Colors"],
      tags: ["eco-friendly"],
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.7,
      reviewCount: 412,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop",
      category: "electronics",
      description:
        "Track your fitness goals with heart rate monitoring, GPS, and sleep tracking.",
      inStock: true,
      features: [
        "Heart Rate Monitor",
        "GPS",
        "Water Resistant",
        "7-day Battery",
      ],
      tags: ["bestseller", "new"],
    },
    {
      id: 4,
      name: "Ceramic Coffee Mug Set",
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.8,
      reviewCount: 156,
      image:
        "https://images.unsplash.com/photo-1514228742587-6b155fcf93a?w=400&auto=format&fit=crop",
      category: "home",
      description:
        "Set of 4 elegant ceramic mugs, perfect for your morning coffee or tea.",
      inStock: true,
      features: ["Set of 4", "Microwave Safe", "Dishwasher Safe"],
      tags: ["sale"],
    },
    {
      id: 5,
      name: "Leather Backpack",
      price: 149.99,
      rating: 4.4,
      reviewCount: 203,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop",
      category: "fashion",
      description:
        "Genuine leather backpack with laptop compartment and multiple pockets.",
      inStock: false,
      features: ["Genuine Leather", "Laptop Compartment", "Water Resistant"],
      tags: ["premium"],
    },
    {
      id: 6,
      name: "Yoga Mat Premium",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.6,
      reviewCount: 187,
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&auto=format&fit=crop",
      category: "sports",
      description:
        "Non-slip, eco-friendly yoga mat with carrying strap for easy transport.",
      inStock: true,
      features: ["Non-slip Surface", "Eco-friendly Material", "6mm Thickness"],
      tags: ["eco-friendly"],
    },
    {
      id: 7,
      name: "Wireless Mouse",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.3,
      reviewCount: 321,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&auto=format&fit=crop",
      category: "electronics",
      description:
        "Ergonomic wireless mouse with silent click and long battery life.",
      inStock: true,
      features: ["Wireless", "Ergonomic Design", "Silent Click", "2.4Ghz"],
      tags: ["sale"],
    },
    {
      id: 8,
      name: "Desk Lamp",
      price: 45.99,
      rating: 4.5,
      reviewCount: 98,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&auto=format&fit=crop",
      category: "home",
      description:
        "Modern LED desk lamp with adjustable brightness and color temperature.",
      inStock: true,
      features: [
        "Adjustable Brightness",
        "Color Temperature Control",
        "Touch Controls",
      ],
      tags: ["new"],
    },
  ];

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    {
      id: "electronics",
      name: "Electronics",
      count: products.filter((p) => p.category === "electronics").length,
    },
    {
      id: "clothing",
      name: "Clothing",
      count: products.filter((p) => p.category === "clothing").length,
    },
    {
      id: "home",
      name: "Home",
      count: products.filter((p) => p.category === "home").length,
    },
    {
      id: "fashion",
      name: "Fashion",
      count: products.filter((p) => p.category === "fashion").length,
    },
    {
      id: "sports",
      name: "Sports",
      count: products.filter((p) => p.category === "sports").length,
    },
  ];

  // Filter products based on category and search
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Cart functions
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Render Stars for rating

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-500">
            {i < Math.floor(rating) ? <Icons.StarFilled /> : <Icons.Star />}
          </span>
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  // Product Card Component
  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.originalPrice && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Save ${(product.originalPrice - product.price).toFixed(2)}
          </span>
        )}
        {product.tags?.includes("bestseller") && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
            Bestseller
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-gray-500 uppercase">
            {product.category}
          </span>
          {renderStars(product.rating)}
        </div>

        <h3 className="font-bold text-lg mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <span className="text-xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {product.reviewCount} reviews
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedProduct(product)}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition"
              title="View Details"
            >
              <Icons.Eye />
            </button>

            <button
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
              className={`p-2 rounded-full transition ${
                product.inStock
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              title="Add to Cart"
            >
              <Icons.Cart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Cart Sidebar Component
  const CartSidebar = () => (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <Icons.Bag />
              <h2 className="text-xl font-bold ml-2">Your Cart</h2>
              <span className="ml-2 bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full">
                {cartCount} items
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Icons.Close />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-grow">
                      <h4 className="font-medium line-clamp-1">{item.name}</h4>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                        >
                          <Icons.Minus />
                        </button>
                        <span className="font-medium min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                        >
                          <Icons.Plus />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2 text-red-500 hover:text-red-700"
                      >
                        <Icons.Trash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-4">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>{cartTotal > 50 ? "FREE" : "$5.99"}</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>
                    ${(cartTotal + (cartTotal > 50 ? 0 : 5.99)).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    alert(
                      `Order placed! Total: $${(
                        cartTotal + (cartTotal > 50 ? 0 : 5.99)
                      ).toFixed(2)}`
                    );
                    setCart([]);
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Checkout Now
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );

  // Product Detail Modal
  const ProductDetailModal = () => {
    if (!selectedProduct) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <Icons.Close />
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="p-8">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <div className="flex gap-2 mt-4">
                {selectedProduct.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="p-8 overflow-y-auto">
              <h2 className="text-3xl font-bold mb-4">
                {selectedProduct.name}
              </h2>

              <div className="flex items-center mb-6">
                {renderStars(selectedProduct.rating)}
                <span className="ml-2 text-gray-600">
                  ({selectedProduct.reviewCount} reviews)
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-4xl font-bold mr-4">
                    ${selectedProduct.price.toFixed(2)}
                  </span>
                  {selectedProduct.originalPrice && (
                    <>
                      <span className="text-2xl text-gray-500 line-through">
                        ${selectedProduct.originalPrice.toFixed(2)}
                      </span>
                      <span className="ml-2 text-red-600 font-semibold">
                        Save $
                        {(
                          selectedProduct.originalPrice - selectedProduct.price
                        ).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-8">
                {selectedProduct.description}
              </p>

              <div className="mb-8">
                <h4 className="font-semibold mb-3 text-lg">Features:</h4>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">
                        <Icons.Check />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Icons.Truck />
                  <span className="ml-2">
                    {cartTotal > 50 ? "Free Shipping" : "Shipping: $5.99"}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Icons.Shield />
                  <span className="ml-2">30-day return policy</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Icons.Refresh />
                  <span className="ml-2">Easy exchanges</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    alert(`${selectedProduct.name} added to cart!`);
                  }}
                  disabled={!selectedProduct.inStock}
                  className={`flex-grow py-3 px-6 rounded-lg font-semibold transition ${
                    selectedProduct.inStock
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {selectedProduct.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                    setIsCartOpen(true);
                  }}
                  disabled={!selectedProduct.inStock}
                  className={`px-6 py-3 rounded-lg font-semibold transition ${
                    selectedProduct.inStock
                      ? "border border-blue-600 text-blue-600 hover:bg-blue-50"
                      : "border border-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Menu */}
            <div className="flex items-center">
              <button
                className="md:hidden mr-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <Icons.Close /> : <Icons.Menu />}
              </button>
              <div className="flex items-center justify-between">
                <div className="flex justify-center items-center gap-2">
                  <BsArrowLeftCircleFill />
                  <span>Return to Instagram</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-2xl">🛍️</span>
                  <h1 className="text-2xl font-bold ml-2">
                    Shop<span className="text-blue-600">Easy</span>
                  </h1>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="hidden md:flex flex-grow max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="absolute left-3 top-2.5">
                  <Icons.Search />
                </span>
              </div>
            </div>

            {/* Cart & Wishlist */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-full"
              >
                <Icons.Cart />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Categories */}
          <div
            className={`md:flex ${
              isMenuOpen ? "block" : "hidden"
            } py-4 md:py-0`}
          >
            <div className="flex flex-col md:flex-row md:space-x-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg transition ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="ml-2 text-xs opacity-75">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Summer Sale is Live!
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Up to 50% off on premium products. Limited time offer!
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              Shop Now →
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Icons.Truck />,
                title: "Free Shipping",
                desc: "On orders over $50",
              },
              {
                icon: <Icons.Shield />,
                title: "Secure Payment",
                desc: "100% secure",
              },
              {
                icon: <Icons.CreditCard />,
                title: "Easy Returns",
                desc: "30-day policy",
              },
              {
                icon: "🔄",
                title: "24/7 Support",
                desc: "Always here to help",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Count & Sort */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </div>
          <select className="bg-white border border-gray-300 rounded-lg px-4 py-2">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Reviews</option>
          </select>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-xl font-bold mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Promo Banner */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl overflow-hidden">
          <div className="p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">Limited Time Offer!</h2>
                <p className="text-lg opacity-90">
                  Get 20% off on your first purchase. Use code: WELCOME20
                </p>
              </div>
              <button className="mt-4 md:mt-0 bg-white text-teal-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                Claim Offer
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl">🛍️</span>
                <h3 className="text-2xl font-bold ml-2">
                  Shop<span className="text-blue-400">Easy</span>
                </h3>
              </div>
              <p className="text-gray-400">
                Your trusted online shopping destination for quality products.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                {categories.slice(0, 4).map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className="hover:text-white transition"
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Help</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button className="hover:text-white transition">FAQ</button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Shipping
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Returns
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe for updates and exclusive offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-grow focus:outline-none"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 ShopEasy. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <button className="hover:text-white">Terms</button>
              <button className="hover:text-white">Privacy</button>
              <button className="hover:text-white">Cookies</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Components */}
      <CartSidebar />
      <ProductDetailModal />

      {/* Quick Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-2 z-20">
        {cartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            <span className="flex items-center">
              <Icons.Cart />
              <span className="ml-2 font-bold">${cartTotal.toFixed(2)}</span>
            </span>
          </button>
        )}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          ↑
        </button>
      </div>
    </div>
  );
};

export default MarketPlace;
