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
      <div className=" w-full  h-full bg-base-200 shadow-xl py-6">
        <div className="flex flex-col lg:flex-row gap-x-32 p-12">
        <div data-aos="fade-right">
          <img className=" w-96 h-[70%]" src={detailsProduct?.image} />
        </div>
        <div data-aos="fade-left" className="py-10">
          <h2 className="text-2xl font-semibold">
            {detailsProduct?.name}
            <div className="badge bg-text_secondary text-white">
              {detailsProduct?.brand}
            </div>
          </h2>
          <p className="pt-4 mb-4 text-xl">{detailsProduct?.details}</p>
          <p className="text-xl font-bold">{detailsProduct?.price}</p>

          <div className="card-actions justify-start pt-4">
            <button className="btn btn-ghost bg-orange-300 text-text_secondary fon ">
              Add To Cart
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
