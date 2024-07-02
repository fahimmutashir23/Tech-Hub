import { useState } from "react";
import UpdateProfile from "./UpdateProfile";
import { url } from "../../../../connection";
import useUser from "../../../Security/useUser";
import Loader from "../../../Utils/Loader";
import Loader2 from "../../../Utils/Loader2";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const [userData, isLoading, refetch] = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const imgUrl = `${url}/upload/profile/images/`;

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="h-[calc(100vh-70px)] flex items-center">
      {loader && <Loader2 />}
      <div className="bg-_white border-2 border-bg_lightSlate rounded-md p-[20px] max-w-md w-full mx-auto">
        <div>
          <div className="h-24 w-24 overflow-hidden rounded-full mx-auto">
            {userData.image ? (
              <img
                src={`${imgUrl}${userData.image}`}
                className="h-full w-full object-cover"
                alt=""
              />
            ) : (
              <FaUserCircle className="w-24 h-24 rounded-full text-black" />
            )}
          </div>
          <div className="mt-5">
            <div className="flex flex-col items-center space-y-2 mb-3">
              <p className="font-semibold text-xl">{userData.name}</p>
              <p className="text-xs px-pl_primary py-1 rounded-sm bg-bg_lightSlate max-w-fit">
                {userData?.role || "---"}
              </p>
              <div className="flex items-center gap-gap_primary text-gray-500">
                {formatDate(userData.createdAt)}
                <div className="w-[1px] bg-gray-500 h-4"></div>
                {userData?.gender || "---"}
              </div>
            </div>
            <hr />
            <p className="my-3 text-center text-gray-500">
              Activity Level: 45%
            </p>
            <hr />
            <div className="mt-3">
              <p className=" text-sm text-center text-gray-500">
                <strong>Email:</strong> {userData?.email}
              </p>
              <p className=" text-sm text-center text-gray-500">
                <strong>Phone:</strong> {userData?.phone}
              </p>
            </div>
            <div className="flex gap-gap_primary items-center justify-center my-mt_large">
              <div className="bg-green-600 w-full h-[3px]"></div>
              <div className="bg-green-500 w-full h-[3px]"></div>
              <div className="bg-green-400 w-full h-[3px]"></div>
              <div className="bg-green-300 w-full h-[3px]"></div>
            </div>

            <p className="my-4 text-gray-500 text-center">
              <strong>Address:</strong>
              <p>{userData?.address || "---"}</p>
            </p>

            <hr />

            <button
              onClick={() => setIsOpen(true)}
              className="button_primary mt-4 w-full"
            >
              Edit
            </button>
          </div>
        </div>
        <UpdateProfile
          setLoader={setLoader}
          data={userData}
          fetchData={refetch}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};

export default Profile;
