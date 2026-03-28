import { useState } from "react";


export default function ImageSlider(props){
 const images = props.images;
 const[activeImage, setActiveImage] = useState(0);


    return(
<div className="w-full aspect-square flex items-center flex-col  relative overflow-hidden">
<img src={images[activeImage]} className="w-full aspect-square object-cover" />

<div className=" absolute bottom-0 w-full h-[67px] flex flex-row backdrop-blur-lg items-center justify-center">

    {
images.map((image, index)=>(

<img

onClick={()=>{setActiveImage(index)}}

key={index}
src={image}
className="w-12 h-12 object-cover mx-2 "

/>

    ))}


</div>


</div>


    )




}