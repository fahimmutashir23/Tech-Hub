

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetailsProduct = () => {
    
    const {id} = useParams()
    // console.log(data)
    const [detailsproduct, setdetailsproduct] =useState(null);

    useEffect(() =>{

        fetch(`./data.json`)
        .then(res => res.json())
        .then(data => {
            const filterData = data.find(item => console.log(item))
            console.log(filterData)
            setdetailsproduct(filterData)
        })

    }, [id])
     
   console.log(detailsproduct)
   console.log(id)
 
    return (
        <div className="p-6 text-justify overflow-hidden ">
        <div className="card w-96 bg-base-200 shadow-xl h-full  py-6">
            <figure><img className="h-[70%] w-52" src={detailsproduct.image}/></figure>
            <div className="card-body">
            <h2 className="card-title">
            {detailsproduct.name}
            <div className="badge bg-text_secondary text-white">{detailsproduct.brand}</div>
            </h2>
            <p>{detailsproduct.details}</p>
            <p>{detailsproduct.price}</p>
            <div className="card-actions justify-start">
            <button className="btn btn-ghost bg-orange-300 text-text_secondary fon ">Add To Cart</button> 
           
            </div>
            </div>
            </div>
        </div>
    );
};

export default DetailsProduct;