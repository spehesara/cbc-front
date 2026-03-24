import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from './components/ProductCard'
import { UserData } from './components/UserData'

import LoginPage from './pages/loginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import SignInPage from './pages/signinPage'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'
import FileUploadTest from './pages/test'
import AddProductForm from './pages/admin/addProductForm'
import EditProductForm from './pages/admin/editProductForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Toaster/>

<Routes path="/*">

{/* <Route path="/" element={ <HomePage /> } /> */}
<Route path="/login" element={ <LoginPage /> } />


  <Route path="/admin/*" element={ <AdminHomePage /> } />
 
 <Route path="/products/addProduct" element={<AddProductForm/>} />
 <Route path="/admin/products/editProduct" element={<EditProductForm/>} />
<Route path="/testing" element={<FileUploadTest/>}/>

<Route path="/*" element={<HomePage/>} />

</Routes>


</BrowserRouter>

    </>

  
    
  )
}

export default App
