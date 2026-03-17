import { Link, Route, Routes } from "react-router-dom";
import { GoGraph, GoPackage, GoCreditCard, GoPeople } from "react-icons/go";
import { MdSpaceDashboard } from "react-icons/md";
import AdminProductsPage from "./admin/adminProductsPage";
import AddProductForm from "./admin/addProductForm";

export default function AdminHomePage() {
  return (
    <div className="bg-blue-100 w-full min-h-screen flex">
      <div className="bg-blue-700 w-[20%] min-h-screen flex flex-col shadow-lg">
        <div className="p-6 text-white text-2xl font-bold border-b border-blue-500">
          Admin Panel
        </div>

        <nav className="flex flex-col flex-grow mt-4">
          <Link
            to="/admin/dashboard"
            className="p-4 text-white hover:bg-blue-600 flex flex-row items-center gap-3 transition"
          >
            <MdSpaceDashboard className="text-lg" /> Dashboard
          </Link>

          <Link
            to="/admin/products"
            className="p-4 text-white hover:bg-blue-600 flex flex-row items-center gap-3 transition"
          >
            <GoPackage className="text-lg" /> Products
          </Link>

          <Link
            to="/admin/orders"
            className="p-4 text-white hover:bg-blue-600 flex flex-row items-center gap-3 transition"
          >
            <GoCreditCard className="text-lg" /> Orders
          </Link>

          <Link
            to="/admin/customers"
            className="p-4 text-white hover:bg-blue-600 flex flex-row items-center gap-3 transition"
          >
            <GoPeople className="text-lg" /> Customers
          </Link>

          <Link
            to="/admin/reports"
            className="p-4 text-white hover:bg-blue-600 flex flex-row items-center gap-3 transition"
          >
            <GoGraph className="text-lg" /> Reports
          </Link>
        </nav>

        <div className="p-6 border-t border-blue-500">
          <button className="w-full bg-blue-800 hover:bg-blue-600 text-white py-2 rounded-lg transition">
            Logout
          </button>
        </div>
      </div>

      <div className="w-[80%] bg-gray-100 p-8 overflow-y-auto min-h-screen">
        <Routes>
          <Route
            path="/dashboard"
            element={<h1 className="text-2xl font-bold">📊 Admin Dashboard</h1>}
          />
          <Route path="/products" element={<AdminProductsPage />} />
          <Route path="/products/addProduct" element={<AddProductForm />} />
          <Route
            path="/orders"
            element={<h1 className="text-2xl font-bold">🧾 Orders Management</h1>}
          />
          <Route
            path="/customers"
            element={<h1 className="text-2xl font-bold">👥 Customer List</h1>}
          />
          <Route
            path="/reports"
            element={<h1 className="text-2xl font-bold">📈 Reports & Analytics</h1>}
          />
          <Route
            path="*"
            element={
              <h1 className="text-2xl font-bold text-red-600">
                404 - Not Found
              </h1>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
