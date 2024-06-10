import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { MdEdit } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const UpdateProductModal = ({ fetchData, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const axiosSecure = useAxiosSecure();
  

  const { data: editFloorData = [] } = useQuery({
    queryKey: ["floor_edit"],
    queryFn: async () => {
      const res = await axiosSecure(`/api/floor/${id}`);
      return res.data;
    },
  });


  const handleAnimate = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const floor_name = e.target.name.value;
  
    try {
      const res = await axiosSecure.put(`/api/floor/${id}`, {floor_name});
      if (res.data.status_code === 201) {
        fetchData();
        toast.success(res.data.message);
      }
    } catch (error) {
        toast.error(error.response.data.message)
    }
  };

  return (
    <>
      <div className="">
      <li
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full p-2 font_standard transition-all flex items-center list_hover gap-2"
        >
          <MdEdit /> Edit
        </li>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className={`relative z-50`} onClose={handleAnimate}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
            <div
              className={`fixed inset-0 overflow-y-auto ${
                animate ? "scale-animation" : ""
              }`}
            >
              <div className="flex min-h-full items-center justify-center text-center border text_font">
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Panel className="w-[96%] md:w-[90%] lg:w-[75%] xl:w-[910px] max-w-md:w-[60%] transform rounded-md card_bg text-left align-middle shadow-xl transition-all my-10 pb-0">
                    <Dialog.Title
                      as="h3"
                      className="border pl-4 text_font table_header_bg footer_bg dark:border-none header_footer_height flex items-center justify-between pr-4"
                    >
                      <h6 className="py-2 text_font text_color">Update Floor</h6>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="text_color dark:hover:text-red-500 close-button "
                      >
                        <IoMdClose />
                      </button>
                    </Dialog.Title>
                    <form onSubmit={handleSubmit}>
                      <div className="margin_right margin_left grid grid-cols-1 lg:grid-cols-1 _gap">
                        <div className="">
                          <label className="text_color text_font">
                            Floor Name
                            <span className="required_text_color ml-1">
                              (required)
                            </span>{" "}
                          </label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={editFloorData?.singleFloorData?.floor_name}
                            className="card_bg border border_bg text_color font_standard rounded_secondary focus:ring-0 px-4 focus:border input_field_h w-full focus:outline-none marginTop_4px"
                            placeholder="Type Here"
                            required
                          />
                        </div>
                      </div>
                      <div className="table_header_bg footer_bg header_footer_height margin_top padding_right items-center border flex gap-2 justify-end dark:border-none">
                        <button
                          onClick={() => setIsOpen(false)}
                          type="submit"
                          className="btn_success"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="btn_danger"
                          onClick={() => setIsOpen(false)}
                        >
                          Cancel
                        </button>{" "}
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default UpdateProductModal;
