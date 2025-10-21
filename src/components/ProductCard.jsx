export function ProductCard(props) {


    console.log(props);
return(


<div>

<img src={props.src} />
<h1>{props.name}</h1>
<h1>{props.price}</h1>

<button>Add to Cart</button>





</div>




)





}