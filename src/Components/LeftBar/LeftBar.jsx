
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import './LeftBar.css'
import { useContext } from "react";
import { BasicContext } from "../../ContextAPIs/BasicProvider";
import AdminMenu from "../../Pages/AdminPages/MenuBar/AdminMenu";


const LeftBar = () => {
    const { sidebarOpen, setSideBarOpen } = useContext(BasicContext);

    return (
        <div className="bg-green-100 min-h-[calc(100vh-76px)] text-_white w-full overflow-y-scroll overflow-x-hidden sidebar relative">
            <AdminMenu />
            <div className="cursor-pointer absolute top-[50%] translate-y-[-50%] -right-3 " onClick={() => setSideBarOpen(!sidebarOpen)}>
                {sidebarOpen ? <MdKeyboardArrowRight className='text-text_xxxl' /> :
                <MdKeyboardArrowLeft className='text-text_xxxl' />}
            </div>
        </div>
    );
};

export default LeftBar;