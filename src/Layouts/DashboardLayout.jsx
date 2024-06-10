import { useContext } from "react";
import { BasicContext } from "../ContextAPIs/BasicProvider";
import { Outlet } from "react-router-dom";
import LeftBar from "../Components/LeftBar/LeftBar";
import AdminNavbar from "../Pages/AdminPages/MenuBar/AdminNavbar";

const DashboardLayout = () => {
    const { sidebarOpen } = useContext(BasicContext);
    return (
        <div>
      <div>
        <AdminNavbar />
      </div>
      <div className="flex gap-1 ">
        <div
          className={` ${
            sidebarOpen ? "w-14" : "w-2/12"
          } hidden lg:flex duration-300`}
        >
          <LeftBar />
        </div>
        <div className=" flex-1 pr-p_md">
          <Outlet />
        </div>
      </div>
    </div>
    );
};

export default DashboardLayout;