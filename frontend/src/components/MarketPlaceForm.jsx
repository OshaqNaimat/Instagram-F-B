import { useState } from "react";

export default function SellProductForm() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In real app: upload image + data to backend or Firebase
    console.log("Product posted:", form);

    alert("✅ Product posted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-1">Sell a Product</h1>
        <p className="text-gray-600 mb-6">
          Post your product like an OLX / Instagram-style listing
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Product Image
            </label>
            <div className="border-2 border-dashed rounded-xl p-4 text-center cursor-pointer hover:border-blue-500">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="imageUpload"
              />
              <label htmlFor="imageUpload" className="cursor-pointer">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-48 w-full object-cover rounded-lg"
                  />
                ) : (
                  <p className="text-gray-500">
                    📷 Click to upload product image
                  </p>
                )}
              </label>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Title
            </label>
            <input
              type="text"
              name="title"
              required
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. iPhone 13, Wooden Table"
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              required
              value={form.price}
              onChange={handleChange}
              placeholder="₹ / $"
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Fashion</option>
              <option>Vehicles</option>
              <option>Others</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              required
              value={form.description}
              onChange={handleChange}
              rows={3}
              placeholder="Describe your product"
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Post Product
          </button>
        </form>
      </div>
    </div>
  );
}
