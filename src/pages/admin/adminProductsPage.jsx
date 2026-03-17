import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [ProductsLoaded, setProductsLoaded] = useState(false);
  

  useEffect(() => {
if(!ProductsLoaded){

   axios.get("http://localhost:5000/api/products").then((res) => {
      console.log("UseEffect is Running");
      setProducts(res.data);
      setProductsLoaded(true);
    });

}
    
  }, [ProductsLoaded]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🛍️ Admin Products Page
      </h1>
      {

ProductsLoaded?<div className="overflow-x-auto shadow-lg rounded-2xl bg-white">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Product Id</th>
              <th className="px-6 py-4">Product Name</th>
              <th className="px-6 py-4">Price (Rs)</th>
              <th className="px-6 py-4">Last Price</th>
              <th className="px-6 py-4">Stock</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-gray-50 transition duration-200 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-6 py-4 font-semibold text-gray-800">
                  {product.productId}
                </td>
                <td className="px-6 py-4 capitalize">{product.productName}</td>
                <td className="px-6 py-4 text-green-600 font-semibold">
                  Rs. {product.price.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-red-500">
                  Rs. {product.lastPrice.toLocaleString()}
                </td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4 max-w-xs truncate">
                  {product.description}
                </td>

                <td className="px-6 py-4 flex justify-center gap-3">
                  <button
                    className="text-red-500 hover:text-red-700 transition"
                    title="Delete Product"

                      onClick={()=>{
                    
                          
                          const token = localStorage.getItem("token");

                          axios.delete(`http://localhost:5000/api/products/${product.productId}`, {
                            headers: { Authorization: `Bearer ${token}` },
                          })
                          .then((res) => {

                              toast.success("Product Deleted Successfully");
                              setProductsLoaded(false); 

                           })

                          }

                        }
                          

                  >
                    <FaTrash size={18} />
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-700 transition"
                    title="Edit Product"
                  >
                    <FaPencil size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>:<div className="w-full h-full flex justify-center items-center">

<div className="w-[60px] h-[60px] border-[4px] border-gray-200 border-b-[#2563ea] animate-spin rounded-full">


</div>

      </div>


      }

      

      

      {/* ✅ Button BELOW the table */}
      <div className="flex justify-center mt-10">
        <Link
          to={"/admin/products/addProduct"}
          className=" absolute right-[5px] text-[20px] bg-[#2563ea] text-white hover:bg-blue-500 p-4 rounded-lg shadow-md transition duration-200"
        >
          <FaPlus />
        </Link>

      </div>
    </div>
  );
}
