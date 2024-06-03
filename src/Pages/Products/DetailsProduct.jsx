import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsProduct = () => {
  const { id } = useParams();
  const [detailsProduct, setDetailsProduct] = useState(null);

  useEffect(() => {
    window.scroll({
        top: 0
    })
  }, [])

  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.find(item => item.id == id);
        setDetailsProduct(filteredData)
      });
  }, [id]);

  return (
    <div className="p-6 text-justify overflow-hidden ">
      <div className="card w-96 bg-base-200 shadow-xl h-full  py-6">
        <figure>
          <img className="h-[70%] w-52" src={detailsProduct?.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {detailsProduct?.name}
            <div className="badge bg-text_secondary text-white">
              {detailsProduct?.brand}
            </div>
          </h2>
          <p>{detailsProduct?.details}</p>
          <p>{detailsProduct?.price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-ghost bg-orange-300 text-text_secondary fon ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
