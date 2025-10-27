import { Link, Route, Routes } from "react-router-dom";
import {
  GoGraph,
  GoPackage,
  GoCreditCard,
  GoPeople,
} from "react-icons/go";
import { MdSpaceDashboard } from "react-icons/md";
import AdminProductsPage from "./admin/adminProductsPage";

export default function AdminHomePage() {
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      {/* Sidebar */}
      <div className="bg-blue-600 w-[20%] h-screen flex flex-col">
        <Link
          to="/admin/dashboard"
          className="block p-4 text-white hover:bg-blue-700 flex flex-row items-center gap-2"
        >
          <MdSpaceDashboard className="text-lg" /> Dashboard
        </Link>

        <Link
          to="/admin/products"
          className="block p-4 text-white hover:bg-blue-700 flex flex-row items-center gap-2"
        >
          <GoPackage className="text-lg" /> Products
        </Link>

        <Link
          to="/admin/orders"
          className="block p-4 text-white hover:bg-blue-700 flex flex-row items-center gap-2"
        >
          <GoCreditCard className="text-lg" /> Orders
        </Link>

        <Link
          to="/admin/customers"
          className="block p-4 text-white hover:bg-blue-700 flex flex-row items-center gap-2"
        >
          <GoPeople className="text-lg" /> Customers
        </Link>
      </div>

      {/* Main Content */}
      <div className="bg-red-600 w-[80%] h-screen">

<Routes path="/*">
  <Route path="dashboard" element={ <h1>Admin Dashboard</h1> } />
  <Route path="products" element={ <AdminProductsPage/> } />
  <Route path="orders" element={ <h1> Orders</h1> } />
  <Route path="customers" element={ <h1> Customers</h1> } />
<Route path="/*" element={ <h1>404 Not Found in the admin page</h1> } />

</Routes>



      </div>
    </div>
  );
}
