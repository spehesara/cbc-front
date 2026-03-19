import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../utils/MediaUpload";

export default function AddProductForm() {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [alternativeNames, setAlternativeNames] = useState('');
  const [imageUrls, setImageUrls] = useState('');

  const [imageFiles, setImageFiles] = useState([]);
  const [price, setPrice] = useState('');
  const [lastPrice, setLastPrice] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate()

  // ✅ handleSubmit should NOT return JSX
  async function handleSubmit() {
    const altNames = alternativeNames.split(",");

    const promisesArray = []
   
    for(let i=0; i<imageFiles.length; i++){
    
    promisesArray[i] = uploadMediaToSupabase(imageFiles[i])

    }

  const imgUrls = await Promise.all(promisesArray)


    const product = {
      productId: productId,
      productName: productName,
      altNames: altNames,
      images: imgUrls,
      price: price,
      lastPrice: lastPrice,
      stock: stock,
      description: description,
    };

    const token = localStorage.getItem("token");



    try {
      await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/products",
        product,
        token ? { headers: { Authorization: `Bearer ${token}` } } : {}
      );

      navigate("/admin/products");
      toast.success("Product added successfully!");
    } catch (err) {
      toast.error("Failed to add product. Please try again.");
    }
  }

  // ✅ Return JSX from the component itself
  return (
    <div className="w-full min-h-screen flex justify-center items-start bg-white py-10">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-10 border border-gray-200">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-8">
          Add Product Form
        </h1>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Product ID</label>
              <input
                type="text"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Alternative Names</label>
              <input
                type="text"
                value={alternativeNames}
                onChange={(e) => setAlternativeNames(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Image URLs</label>
              <input
                type="file"
               
                onChange={(e) => 

                setImageFiles(e.target.files)

                }

                multiple 

                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Last Price</label>
              <input
                type="text"
                value={lastPrice}
                onChange={(e) => setLastPrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Stock</label>
              <input
                type="text"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSubmit}
            className="w-1/2 bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition duration-200 shadow-md"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
