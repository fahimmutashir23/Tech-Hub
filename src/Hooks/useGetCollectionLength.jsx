import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetCollectionLength = () => {
    const axiosSecure = useAxiosSecure();
  
    const {data: collectionData, isLoading:collectionLoading} = useQuery({
      queryKey : ['get-collection'],
      queryFn : async () => {
        const res = await axiosSecure("/api/get-all-collection-length");
        return res.data.result
      }
    })
    
    return [collectionData, collectionLoading]
};

export default useGetCollectionLength;