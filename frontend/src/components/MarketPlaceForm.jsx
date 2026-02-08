import React, { useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";

const MarketPlaceForm = ({ onClose }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // 📸 image handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // 🚀 submit product
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !title || !price || !description) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("price", price);
      formData.append("description", description);

      // ⚠️ replace with real user id from auth
      const userId = "USER_ID_HERE";

      await axios.post(
        `http://localhost:5000/api/products/sellproduct/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      alert("Product listed successfully!");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to list product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full max-w-xl rounded-xl p-6 relative shadow-xl">
      {/* ❌ Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
      >
        <IoClose size={22} />
      </button>

      <h2 className="text-2xl font-bold text-center mb-6">Sell Your Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image */}
        <div>
          <label className="block font-medium mb-1">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded-lg p-2"
          />

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="mt-3 h-48 w-full object-cover rounded-lg"
            />
          )}
        </div>

        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Product Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter product name"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price ($)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your product"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition"
        >
          {loading ? "Listing..." : "List Product"}
        </button>
      </form>
    </div>
  );
};

export default MarketPlaceForm;
