import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi2";
import { MdContactPage, MdKeyboardArrowDown } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { FaImages } from "react-icons/fa";
import { BasicContext } from "../../ContextAPIs/BasicProvider";
import useSmallScreen from "../../Hooks/useSmallScreen";
import useHasAccess from "../../Hooks/useHasAccess";
import Loader2 from "../../Utils/Loader2";

const LeftBar = () => {
  const [selected, setSelected] = useState("");
  const location = useLocation();
  const [hasAccess, isLoading] = useHasAccess();
  const { setOpen } = useContext(BasicContext);
  const [isSmallScreen] = useSmallScreen();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleOpen = (id) => {
    setOpenDropdown((prevIdx) => (prevIdx === id ? null : id));
  };

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  const handleClick = (path) => {
    setSelected(path);
    if (isSmallScreen) {
      setOpen(false);
    }
  };

  if(isLoading){
    return <Loader2 />
  }

  return (
    <div className="shadow-md bg-gray-100 h-screen overflow-y-auto text-black p-pl_16px font_sans ">
      <div className=" rounded  w-full">
        {/* <img className=" mx-auto  mb-[18px]rounded h-10 object-contain w-full" src="" alt="LOGO" /> */}
        <h1 className="text-2xl">LOGO</h1>
      </div>
      <div className="flex flex-col justify-between padding_left padding_right ">
        <ul className="w-full">
          {
            <li className="duration-200">
              <p className="w-full duration-200 font-bold text-text_sm text-text_sidebar mt-mt_4px mb-mt_4px font_sans">
                Admin panel
              </p>
              <ul className="overflow-hidden transition-all duration-500 ease-in-out font_sans">
                {
                  <li
                    className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${
                      selected === "/admin"
                        ? "bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected "
                        : "text-[#585c66] font-medium hover:text-[#585c66] hover:bg-gray-300 "
                    }`}
                    onClick={() => handleClick("/admin")}
                  >
                    <Link
                      to="/admin"
                      className="flex items-center gap-gap_6px py-pt_primary"
                    >
                      <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                        <HiUserGroup />
                      </span>
                      <span className="text-text_md font_sans font-medium ">
                        Dashboard
                      </span>
                    </Link>
                  </li>
                }
                {
                  <li
                    className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${
                      selected === "/admin/categoryList"
                        ? "bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected "
                        : "text-[#585c66] font-medium hover:text-[#585c66] hover:bg-gray-300 "
                    }`}
                    onClick={() => handleClick("/admin/categoryList")}
                  >
                    <Link
                      to="/admin/categoryList"
                      className="flex items-center gap-gap_6px py-pt_primary"
                    >
                      <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                        <HiUserGroup />
                      </span>
                      <span className="text-text_md font_sans font-medium ">
                        Category List
                      </span>
                    </Link>
                  </li>
                }
                {
                  <li
                    className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200  ${
                      selected === "/admin/productList"
                        ? "bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected"
                        : "text-[#585c66] font-medium hover:text-[#585c66] hover:bg-gray-300 "
                    }`}
                    onClick={() => handleClick("/admin/productList")}
                  >
                    <Link
                      to="/admin/productList"
                      className="flex items-center gap-gap_6px py-pt_primary"
                    >
                      <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                        <MdLibraryBooks />
                      </span>
                      <span className="text-text_md font_sans font-medium ">
                        Product List
                      </span>
                    </Link>
                  </li>
                }
                {
                  <li
                    className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200  ${
                      selected === "/admin/bookingsList"
                        ? "bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected"
                        : "text-[#585c66] font-medium hover:text-[#585c66] hover:bg-gray-300 "
                    }`}
                    onClick={() => handleClick("/admin/bookingsList")}
                  >
                    <Link
                      to="/admin/bookingsList"
                      className="flex items-center gap-gap_6px py-pt_primary"
                    >
                      <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                        <MdLibraryBooks />
                      </span>
                      <span className="text-text_md font_sans font-medium ">
                        Bookings List
                      </span>
                    </Link>
                  </li>
                }
                {
                  <li
                    className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${
                      selected === "/admin/contact"
                        ? "bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected "
                        : "text-[#585c66] font-medium hover:text-[#585c66] hover:bg-gray-300 "
                    }`}
                    onClick={() => handleClick("/admin/contact")}
                  >
                    <Link
                      to="/admin/contact"
                      className="flex items-center  gap-gap_6px py-pt_primary"
                    >
                      <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                        <MdContactPage />
                      </span>
                      <span className="text-text_md font_sans font-medium ">
                        Contact
                      </span>
                    </Link>
                  </li>
                }
                {
                  <li
                    className={`py-pt_primary px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200`}
                  >
                    <div
                      onClick={() => handleOpen(1)}
                      className="flex items-center  gap-gap_6px"
                    >
                      <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                        <FaImages />
                      </span>
                      <span className="text-text_md font_sans font-medium flex justify-between w-full">
                        <p className={`text-gray-600`}>Expense</p>
                        <MdKeyboardArrowDown
                          className={`${
                            openDropdown === 1
                              ? "rotate-180 text-2xl"
                              : "text-2xl "
                          } transition-all duration-500`}
                        />
                      </span>
                    </div>

                    <ul
                      className={`space-y-1 ${
                        openDropdown === 1 ? "max-h-[400px]" : "max-h-0"
                      } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                    >
                      {
                        <li
                          className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${
                            selected === "/admin/expenseCategory"
                              ? "bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected "
                              : "text-[#585c66] font-medium hover:text-[#585c66] hover:bg-gray-300"
                          }`}
                          onClick={() => handleClick("/admin/expenseCategory")}
                        >
                          <Link
                            to="/admin/expenseCategory"
                            className="flex items-center  gap-gap_6px py-pt_primary"
                          >
                            <span className="bg-bg_selected text-white p-1 rounded-rounded_primary text-text_md"></span>
                            <span className="text-text_md font_sans font-medium ">
                              Expense Category
                            </span>
                          </Link>
                        </li>
                      }
                      {
                        <li
                          className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${
                            selected === "/admin/expenseList"
                              ? "bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected "
                              : "text-[#585c66] font-medium hover:text-[#585c66] hover:bg-gray-300 "
                          }`}
                          onClick={() => handleClick("/admin/expenseList")}
                        >
                          <Link
                            to="/admin/expenseList"
                            className="flex items-center  gap-gap_6px py-pt_primary"
                          >
                            <span className="bg-bg_selected text-white p-1 rounded-rounded_primary text-text_md"></span>
                            <span className="text-text_md font_sans font-medium ">
                              Expense List
                            </span>
                          </Link>
                        </li>
                      }
                    </ul>
                  </li>
                }
                {
                  <li
                    className={`py-pt_primary px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200`}
                  >
                    <div
                      onClick={() => handleOpen(4)}
                      className="flex items-center  gap-gap_6px"
                    >
                      <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                        <FaImages />
                      </span>
                      <span className="text-text_md font_sans font-medium flex justify-between w-full">
                        <p className={`text-gray-600`}>Purchase</p>
                        <MdKeyboardArrowDown
                          className={`${
                            openDropdown === 4
                              ? "rotate-180 text-2xl"
                              : "text-2xl "
                          } transition-all duration-500`}
                        />
                      </span>
                    </div>

                    <ul
                      className={`space-y-1 ${
                        openDropdown === 4 ? "max-h-[400px]" : "max-h-0"
                      } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                    >
                      {
                        <li
                          className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${
                            selected === "/admin/purchaseCategory"
                              ? "bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected "
                              : "text-[#585c66] font-medium hover:text-[#585c66] hover:bg-gray-300"
                          }`}
                          onClick={() => handleClick("/admin/purchaseCategory")}
                        >
                          <Link
                            to="/admin/purchaseCategory"
                            className="flex items-center  gap-gap_6px py-pt_primary"
                          >
                            <span className="bg-bg_selected text-white p-1 rounded-rounded_primary text-text_md"></span>
                            <span className="text-text_md font_sans font-medium ">
                              Purchase Category
                            </span>
                          </Link>
                        </li>
                      }
                      {
                        <li
                          className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${
                            selected === "/admin/purchaseList"
                              ? "bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected "
                              : "text-[#585c66] font-medium hover:text-[#585c66] hover:bg-gray-300 "
                          }`}
                          onClick={() => handleClick("/admin/purchaseList")}
                        >
                          <Link
                            to="/admin/purchaseList"
                            className="flex items-center  gap-gap_6px py-pt_primary"
                          >
                            <span className="bg-bg_selected text-white p-1 rounded-rounded_primary text-text_md"></span>
                            <span className="text-text_md font_sans font-medium ">
                              Purchase List
                            </span>
                          </Link>
                        </li>
                      }
                    </ul>
                  </li>
                }
              </ul>
            </li>
          }
          {
            <li className="group hover:cursor-pointer duration-200">
              <div className="flex items-center justify-between duration-200">
                <p className=" w-full duration-200 font-bold text-text_sm text-text_sidebar mt-mt_4px mb-mt_4px font_sans">
                  Administrative
                </p>
              </div>
              <ul className="overflow-hidden transition-all duration-500 ease-in-out">
                {
                  <li
                    className={`py-pt_primary px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200`}
                  >
                    <div
                      onClick={() => handleOpen(2)}
                      className="flex items-center  gap-gap_6px"
                    >
                      <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                        <FaImages />
                      </span>
                      <span className="text-text_md font_sans font-medium flex justify-between w-full">
                        <p
                          className={`${
                            selected === "/admin/expenseCategory"
                              ? "text-black"
                              : "text-gray-600"
                          }`}
                        >
                          User Management
                        </p>
                        <MdKeyboardArrowDown
                          className={`${
                            openDropdown === 2
                              ? "rotate-180 text-2xl"
                              : "text-2xl "
                          } transition-all duration-500`}
                        />
                      </span>
                    </div>

                    <ul
                      className={`space-y-1 ${
                        openDropdown === 2 ? "max-h-[400px]" : "max-h-0"
                      } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                    >
                      { hasAccess?.some(item => item === 'user-list') &&
                        <li
                          className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${
                            selected === "/admin/userList"
                              ? "bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected "
                              : "text-[#585c66] font-medium hover:text-[#585c66] hover:bg-gray-300"
                          }`}
                          onClick={() => handleClick("/admin/userList")}
                        >
                          <Link
                            to="/admin/userList"
                            className="flex items-center  gap-gap_6px py-pt_primary"
                          >
                            <span className="bg-bg_selected text-white p-1 rounded-rounded_primary text-text_md"></span>
                            <span className="text-text_md font_sans font-medium ">
                              User List
                            </span>
                          </Link>
                        </li>
                      }
                      {hasAccess?.some(item => item === 'role-list') &&
                        <li
                          className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${
                            selected === "/admin/roleList"
                              ? "bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected "
                              : "text-[#585c66] font-medium hover:text-[#585c66] hover:bg-gray-300 "
                          }`}
                          onClick={() => handleClick("/admin/roleList")}
                        >
                          <Link
                            to="/admin/roleList"
                            className="flex items-center  gap-gap_6px py-pt_primary"
                          >
                            <span className="bg-bg_selected text-white p-1 rounded-rounded_primary text-text_md"></span>
                            <span className="text-text_md font_sans font-medium ">
                              Role List
                            </span>
                          </Link>
                        </li>
                      }
                    </ul>
                  </li>
                }
                {
                  <li
                    className={`py-pt_primary px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200`}
                  >
                    <div
                      onClick={() => handleOpen(3)}
                      className="flex items-center  gap-gap_6px"
                    >
                      <span className="bg-bg_selected text-white p-pl_primary rounded-rounded_primary text-text_md">
                        <FaImages />
                      </span>
                      <span className="text-text_md font_sans font-medium flex justify-between w-full">
                        <p
                          className={`${
                            selected === "/admin/expenseCategory"
                              ? "text-black"
                              : "text-gray-600"
                          }`}
                        >
                          Settings
                        </p>
                        <MdKeyboardArrowDown
                          className={`${
                            openDropdown === 3
                              ? "rotate-180 text-2xl"
                              : "text-2xl "
                          } transition-all duration-500`}
                        />
                      </span>
                    </div>

                    <ul
                      className={`space-y-1 ${
                        openDropdown === 3 ? "max-h-[400px]" : "max-h-0"
                      } overflow-hidden ml-m_md transition-all duration-500 ease-in-out`}
                    >
                      {
                        <li
                          className={` px-pt_8px my-mt_4px hover:cursor-pointer hover:rounded-rounded_primary hover: duration-200   ${
                            selected === "/admin/company"
                              ? "bg-bg_selected rounded-rounded_primary text-white hover:text-white font-medium hover:bg-bg_selected "
                              : "text-[#585c66] font-medium hover:text-[#585c66] hover:bg-gray-300"
                          }`}
                          onClick={() => handleClick("/admin/company")}
                        >
                          <Link
                            to="/admin/company"
                            className="flex items-center  gap-gap_6px py-pt_primary"
                          >
                            <span className="bg-bg_selected text-white p-1 rounded-rounded_primary text-text_md"></span>
                            <span className="text-text_md font_sans font-medium ">
                              Company Profile
                            </span>
                          </Link>
                        </li>
                      }
                    </ul>
                  </li>
                }
              </ul>
            </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
