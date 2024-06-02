/* eslint-disable react/prop-types */
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductsCard = ({product}) => {

    const {id,name,brand,details,price,image} = product;

    return (
        <div>
            <div className="card w-96 bg-base-200 shadow-xl h-full  py-6">
            <figure><img className="h-[70%] w-52" src={image} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">
            {name}
            <div className="badge bg-text_secondary text-white">{brand}</div>
            </h2>
            <p>{details}</p>
            <p>{price}</p>
            <div className="card-actions justify-start">
            <button className="btn btn-ghost bg-orange-300 text-text_secondary fon ">Add To Cart</button> 
            <Link to={`/products/${id}`}><button className="btn btn-ghost bg-orange-300 text-text_secondary fon ">Veiw Details</button></Link> 
            <MdFavorite className="text-text_secondary hover:text-orange-500 text-2xl mt-2" />
            </div>
            </div>
            </div>
        </div>
    );
};

export default ProductsCard;