import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const OrderPage = () => {
  const axiosPublic = useAxiosPublic();
  const [bookingData, setBookingData] = useState([]);
  const { setCartCall, cartCall } = useContext(OrderContext);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [address, setAddress] = useState("");
  // const [Quantity, setQuantity] = useState(null);
  const [amount, setAmount] = useState(0);

  const getLocalStorage = () => {
    const bookingData = JSON.parse(localStorage.getItem("productDraft"));
    setBookingData(bookingData);
    let totalPrice = 0;

    if (bookingData) {
      bookingData.forEach((item) => {
        totalPrice += item.price;
      });
      setAmount(totalPrice);
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, [cartCall]);

  const removeItemFromLocalStorage = (id) => {
    const existingItems =
      JSON.parse(localStorage.getItem("productDraft")) || [];
    const updatedItems = existingItems.filter((item) => item._id !== id);
    localStorage.setItem("productDraft", JSON.stringify(updatedItems));
    toast.success("Delete Item Successfully");
    getLocalStorage();
    setCartCall(!cartCall);
  };

  const handleSaveData = () => {
    const saveInfo = {
      name: name,
      email: email,
      phone: number,
      address: address,
      details: details,
      productId: bookingData.map((item) => item._id),
      price: amount,
    };

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Booking it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.post("/api/save-bookings", saveInfo)
        .then(res => {
          if(res.data.status_code === 200){
            localStorage.removeItem('productDraft')
            toast.success('Successfully Booked')
            getLocalStorage()
            setCartCall(!cartCall)
            setName("")
            setEmail("")
            setNumber("")
            setDetails("")
            setAddress("")
          }
        })
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-4 mt-6">
          <div className="md:w-2/3 bg-primary2 p-2 border-t-[5px] border-t-primary3 rounded-md">
            <div className="px-2 py-4">
              <h1 className="font-semibold text-xl">Contact Information</h1>
              <hr className="my-2" />
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Your Name{" "}
                      <span className="text-xs text-red-500">(require)</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="shadow-sm bg-primary4 border border-primary5 text-gray-900 text-sm rounded-sm focus:outline-none block w-full p-2.5"
                      placeholder="Your Name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Your Phone{" "}
                      <span className="text-xs text-red-500">(require)</span>
                    </label>
                    <input
                      type="number"
                      name="phone"
                      className="shadow-sm bg-primary4 border border-primary5 text-gray-900 text-sm rounded-sm focus:outline-none block w-full p-2.5"
                      onChange={(e) => setNumber(e.target.value)}
                      placeholder="01700000000"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="nameUnderBooking"
                      className="shadow-sm bg-primary4 border border-primary5 text-gray-900 text-sm rounded-sm block w-full p-2.5 focus:outline-none"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@gmail.com"
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Details{" "}
                      <span className="text-xs text-red-500">(require)</span>
                    </label>
                    <textarea
                      name="details"
                      className="shadow-sm bg-primary4 border border-primary5 text-gray-900 text-sm rounded-sm focus:outline-none block w-full p-2.5"
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Details"
                      id=""
                    ></textarea>
                  </div>
                  <div className="w-full mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Your Address{" "}
                      <span className="text-xs text-red-500">(require)</span>
                    </label>
                    <textarea
                      name="address"
                      className="shadow-sm bg-primary4 border border-primary5 text-gray-900 text-sm rounded-sm focus:outline-none block w-full p-2.5"
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                      id=""
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-between mt-mt_primary">
                  <button onClick={handleSaveData} className="button_primary">
                    {"Confirm Booking"}
                  </button>
                  <button className="button_primary">
                    Total Price:{" "}
                    <span className="font-semibold">{amount}/-</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-primary2 p-2 border-l-[5px] border-l-primary3 rounded-md">
              <h1 className="font-semibold text-xl">Product Details</h1>
              <hr className="my-2" />
              {bookingData?.map((items, idx) => (
                <ul key={idx} className="space-y-1">
                  <li className="text-text_md mt-mt_primary font-semibold text-text_secondary flex items-start justify-between">
                    {items.name}
                    <button
                      onClick={() => removeItemFromLocalStorage(items._id)}
                      className="text-text_md font-medium"
                    >
                      <MdDelete />
                    </button>
                  </li>
                  <li className="text-text_md font-semibold">
                    {items.price}/-
                  </li>
                  <hr />
                </ul>
              ))}
            </div>

            {/* <div className="bg-primary2 p-2 border-l-[5px] border-l-primary3 rounded-md mt-4">
              <h1 className="font-semibold text-xl">Fare Details</h1>
              <hr className="my-2" />
              <ul className="space-y-1 mt-2">
                <li className="flex justify-between border-b-[1px] py-2">
                  <span>Product Price</span>{" "}
                  <span className="font-semibold">
                  {bookingData?.map(items => items.price)}/-
                  </span>
                </li>
                <li className="flex justify-between border-b-[1px] py-2">
                  <input
                    type="number"
                    name="coupon"
                    className="shadow-sm bg-primary4 border border-primary5 text-gray-900 text-sm rounded-sm focus:outline-none block w-2/3 p-2.5"
                    placeholder="Enter Coupon Code"
                  />
                  <button className="button_secondary">
                    Apply
                  </button>
                </li>
                <li className="flex justify-between border-b-[1px] py-2">
                  <span>Processing Fee</span> <span>0/-</span>
                </li>
                <li className="flex justify-between border-b-[1px] py-2">
                  <span>Discount</span> <span>0/-</span>
                </li>
                <li className="flex justify-between border-b-[1px] py-2 font-semibold">
                  <span>Total</span>{" "}
                  <span className="font-semibold">
                  {bookingData?.map(items => items.price)}/-
                  </span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="mt-5 flex gap-4">
          {/* <div className="md:flex-1">
            <div className="bg-primary2 p-2 border-t-[5px] border-t-primary3 rounded-md">
              <h1 className="font-semibold text-xl">Payment Details</h1>
              <hr className="my-2" />
              <div className="border-[1px] border-primary5 p-5">
                <h1 className="text-lg md:text-2xl text-center font-semibold">
                  Total Payable Amount:
                  <span className="text-primary3">
                    5000
                  </span>
                </h1>
              </div>
              <div className="border-[1px] border-primary5 py-5 px-2 mt-2">
                <p className="text-sm text-center">
                  By clicking on the, Confirm Reservation / Proceed to Pay box
                  below, I have read, acknowledged and agreed to the
                  <Link
                    to="/conditions"
                    className="text-primary3 ml-1 hover:underline"
                  >
                    Conditions
                  </Link>{" "}
                  of Masum Computer & Print Zone.
                </p>
              </div>
              <div className="border-[1px] border-primary5 py-5 px-2 mt-2 flex gap-2">
                <input
                  onChange={(e) => setAgree(e.target.value)}
                  checked={agree === "Agree"}
                  type="checkbox"
                  name="Agree"
                  className="checkbox checkbox-error w-5 h-5"
                />
                <p className="text-sm text-center">
                  By clicking on the, Confirm Reservation / Proceed to Pay box
                  below, I have read, acknowledged and agreed to the
                  <Link
                    to="/conditions"
                    className="text-primary3 ml-1 hover:underline"
                  >
                    Conditions
                  </Link>{" "}
                  of Masum Computer & Print Zone.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="md:flex-1">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-md bg-bg_secondary p-1">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-sm py-2 font-semibold leading-5",
                      " focus:outline-none",
                      selected
                        ? "bg-text_secondary text-white"
                        : "text-black hover:bg-white/[0.12] hover:text-text_secondary duration-200"
                    )
                  }
                >
                  Card or Internet banking
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-sm py-2 font-semibold leading-5",
                      " focus:outline-none",
                      selected
                        ? "bg-text_secondary text-white"
                        : "text-black hover:bg-white/[0.12] hover:text-text_secondary duration-200"
                    )
                  }
                >
                  Mobile Banking
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-sm py-2 font-semibold leading-5",
                      " focus:outline-none",
                      selected
                        ? "bg-text_secondary text-white"
                        : "text-black hover:bg-white/[0.12] hover:text-text_secondary duration-200"
                    )
                  }
                >
                  Cash On Delivery
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel
                  className={classNames(
                    "rounded-sm border border-primary3 p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div className="pt-8 pb-4 text-center">
                    <p>Please select a payment system</p>
                    <div className="mt-3 flex justify-center items-center gap-2">
                      <button className="w-1/4 h-14 overflow-hidden bg-primary4 py-1 shadow-md">
                        <img
                          src={bkash}
                          className="h-full w-full object-contain"
                          alt=""
                        />
                      </button>
                      <button className="w-1/4 h-14 overflow-hidden bg-primary4 px-3 py-1 shadow-md">
                        <img
                          src={rocket}
                          className="h-full w-full object-contain"
                          alt=""
                        />
                      </button>
                      <button className="w-1/4 h-14 overflow-hidden bg-primary4 py-1 shadow-md">
                        <img
                          src={nagad}
                          className="h-full w-full object-contain"
                          alt=""
                        />
                      </button>
                      <button className="w-1/4 h-14 bg-primary4 py-1 shadow-md flex gap-2 items-center justify-center">
                        <img src={mfs} className="w-8" alt="" />
                        <p className="text-sm font-semibold">Others MFS</p>
                      </button>
                    </div>
                    <div className="flex justify-center mt-10">
                      <button onClick={handleSaveData} className="button_primary">
                        {loading ? <BtnLoader /> : "Confirm Booking"}
                        Confirm Booking
                      </button>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-sm border border-primary3 p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div className="pt-8 pb-4 text-center">
                    <div className="flex gap-3 justify-center items-center">
                      <FaExclamationTriangle className="text-3xl text-primary3" />
                      <p className="text-primary3 font-semibold text-lg ">
                        This features is not available right now.
                      </p>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    "rounded-sm border border-primary3 p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div className="pt-8 pb-4 text-center">
                    <div className="flex gap-3 justify-center items-center">
                      <FaExclamationTriangle className="text-3xl text-primary3" />
                      <p className="text-primary3 font-semibold text-lg ">
                        This features is not available right now.
                      </p>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
