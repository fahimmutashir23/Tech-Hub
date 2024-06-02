

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetailsProduct = () => {
    
    const data = useParams()
    // console.log(data)
    const [detailsproduct, setdetailsproduct] =useState([]);

    useEffect(() =>{

        fetch(`http://localhost:5173/products/${data.id}`)
        .then(res => res.json())
        .then(data => setdetailsproduct(data))

    }, [data.id])

    const {name,brand,details,price,image} = detailsproduct;
 
    return (
        <div className="p-6 text-justify overflow-hidden ">
        <div className="card w-96 bg-base-200 shadow-xl h-full  py-6">
            <figure><img className="h-[70%] w-52" src={image}/></figure>
            <div className="card-body">
            <h2 className="card-title">
            {name}
            <div className="badge bg-text_secondary text-white">{brand}</div>
            </h2>
            <p>{details}</p>
            <p>{price}</p>
            <div className="card-actions justify-start">
            <button className="btn btn-ghost bg-orange-300 text-text_secondary fon ">Add To Cart</button> 
           
            </div>
            </div>
            </div>
        </div>
    );
};

export default DetailsProduct;