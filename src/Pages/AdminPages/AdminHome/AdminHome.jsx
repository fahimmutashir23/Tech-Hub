import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Utils/Loader";

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
  
    const {data, isLoading} = useQuery({
      queryKey : ['stat'],
      queryFn : async () => {
        const res = await axiosSecure("/api/get-stat-report");
        return res.data
      }
    })

    if(isLoading){
        return <Loader />
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-1 px-3">
            <div className="px-4 py-10 bg-blue-900 text-white rounded-md shadow-md">
                <h1 className="text-xl text-center font-semibold">Total Product</h1>
                <h1 className="text-4xl text-center font-semibold">{data.result.totalProduct}</h1>
            </div>
            <div className="px-4 py-10 bg-yellow-900 text-white rounded-md shadow-md">
                <h1 className="text-xl text-center font-semibold">Total Bookings</h1>
                <h1 className="text-4xl text-center font-semibold">{data.result.totalBookings}</h1>
            </div>
            <div className="px-4 py-10 bg-gray-900 text-white rounded-md shadow-md">
                <h1 className="text-xl text-center font-semibold">Total Sale</h1>
                <h1 className="text-4xl text-center font-semibold">{data.result.TotalSale}</h1>
            </div>
            <div className="px-4 py-10 bg-gray-900 text-white rounded-md shadow-md">
                <h1 className="text-xl text-center font-semibold">Total Revenue</h1>
                <h1 className="text-4xl text-center font-semibold">{data.result.Revenue}</h1>
            </div>
        </div>
    );
};

export default AdminHome;