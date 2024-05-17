
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-col _gap justify-between padding_top padding_left padding_right">
        <ul className="px-pl_primary space-y-2 w-full">
          <li className="bg-bg_secondary py-pl_primary">
            <Link
              to="/"
              className="text-text_secondary font-semibold text-text_md"
            >
              Home
            </Link>
          </li>
          <li className="relative group bg-bg_secondary py-pl_primary">
            <p className="text-text_secondary mb-0 font-semibold text-text_md flex items-center">
              About Us{" "}
              <span>
                <MdKeyboardArrowDown className="text-text_secondary text-text_lg" />
              </span>
            </p>
            <div className="absolute bg-bg_primary shadow-md rounded-sm overflow-hidden pt-2 w-48 z-10 group-hover:scale-100 transition-transform duration-300 transform origin-top-right scale-0">
              <Link
                to="/gallery"
                className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
              >
                Gallery
              </Link>
              <Link
                to="/events"
                className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
              >
                Event
              </Link>
            </div>
          </li>
          <li className="relative group bg-bg_secondary py-pl_primary">
            <p className="text-text_secondary mb-0 font-semibold text-text_md flex items-center">
              Products
              </p>
          </li>
          <li className="bg-bg_secondary py-pl_primary">
            <Link
              to="/contact"
              className="text-text_secondary font-semibold text-text_md"
            >
              Contact
            </Link>
          </li>
          <li className="bg-bg_secondary py-pl_primary">
            <NavLink
              to="/hotProduct"
              className={`text-text_secondary font-semibold text-text_md hover:text-color_blue duration-300`}
            >
              Hot Product
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
