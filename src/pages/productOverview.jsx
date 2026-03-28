import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ImageSlider from "../components/imageSlider";

export default function ProductOverview() {


  const params = useParams();
  const productId = params.id// productInfo/:id eke id eka gannawa params.id kiyala


  const [product, setProduct] = useState(null)
  const [status, setStatus] = useState("loading") // not found, found

  useEffect(() => {

    console.log(productId)
    axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId).then((res) => {

      console.log(res.data)

      if (!res.data) {
        setStatus("not found")
        setProduct(null)
      } else {
        setStatus("found")
        setProduct(res.data)
      }

    }).catch((err) => {
      console.log(err)
      setStatus("not found")

    })

  }
    , [productId])

  return (


    <div>

      {
        status == "loading" && (

          <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center">

            <div className=" animate-spin rounded-full h-32 w-32 border-2 border-b-accent border-b-4"></div>


          </div>

        )

      }

      {
        status === "not found" && (

          <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-gray-50 px-4">

            {/* 404 Text */}
            <h1 className="text-7xl font-bold text-gray-800">404</h1>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
              Product Not Found
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-center mt-2 max-w-md">
              Sorry, the product you are looking for does not exist or may have been removed.
            </p>

            {/* Button */}
            <button
              onClick={() => window.location.href = "/"}
              className="mt-6 px-6 py-3 bg-accent text-white rounded-lg shadow-md hover:bg-opacity-90 transition duration-300"
            >
              Go Back Home
            </button>

          </div>

        )
      }

      {

        status == "found" &&

        <div className="w-full h-full flex items-center justify-center ">

          <div className="w-[30%] h-full p-4 ">
            <ImageSlider images={product.images}/>

          </div>

          <div className=" w-[100%] h-full pr-7   ">

            <h1 className="text-3xl font-bold text-gray-900">{(product.productName)}</h1>
            <h1 className="text-3xl font-bold text-gray-600">{product.altName.join(" | ")}</h1>

            <p className="text-xl text-gray-600 mt-2">{(product.price > product.lastPrice) &&

              <span className="line-through text-red-500">LKR.{product.price}</span>


            }
              <span>{" LKR " + product.lastPrice}</span>
            </p>

            <p className="text-xl text-gray-600 mt-2">{product.description}</p>

          </div>

        </div>




      }

    </div>


  )


}