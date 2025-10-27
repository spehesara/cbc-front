import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminProductsPage() {

const [products, setProducts] = useState(

    [
    {
        "_id": "68903ffb84ac0a2084d49fc1",
        "productId": "P12345",
        "productName": "Wireless Bluetooth Headphones",
        "altName": [
            "Bluetooth Headphones",
            " Wireless Headset",
            " Earphones"
        ],
        "images": [
            "https://kjdtbwnojzhbuszmauew.supabase.co/storage/v1/object/public/images/1754284025766download%20(1).jpg",
            "https://kjdtbwnojzhbuszmauew.supabase.co/storage/v1/object/public/images/1754284025767download%20(2).jpg",
            "https://kjdtbwnojzhbuszmauew.supabase.co/storage/v1/object/public/images/1754284025767download.jpg"
        ],
        "price": 4999,
        "lastPrice": 3999,
        "description": "High-quality wireless Bluetooth headphones with noise cancellation and 20 hours of battery life.",
        "stock": 117,
        "__v": 0
    },
    {
        "_id": "689ef453f1b2910970dfec9a",
        "productId": "BP-7000",
        "productName": "earphone",
        "altName": [
            "quality sound",
            " super bass"
        ],
        "images": [
            "https://kjdtbwnojzhbuszmauew.supabase.co/storage/v1/object/public/images/1755247697999e1.jpeg",
            "https://kjdtbwnojzhbuszmauew.supabase.co/storage/v1/object/public/images/1755247698000e2.jpeg",
            "https://kjdtbwnojzhbuszmauew.supabase.co/storage/v1/object/public/images/1755247698000e3.jpeg",
            "https://kjdtbwnojzhbuszmauew.supabase.co/storage/v1/object/public/images/1755247698000e4.png"
        ],
        "price": 950,
        "lastPrice": 850,
        "description": "this earphone is best for songs listeners",
        "stock": 12,
        "__v": 0
    }
]
)

useEffect(
    ()=>{

        axios.get("http://localhost:5000/api/products").then((res)=>{
        console.log(res);
        setProducts(res.data);
        
    })
    },[]
)



  


return (
    <div>
<h1>Admin Products Page</h1>

{
    products.map(

        (product,index)=>{

            return(
<div key={index}>

    {index}
    {product.productName}
    </div>

            )
        }
    )
}

</div>
);



}