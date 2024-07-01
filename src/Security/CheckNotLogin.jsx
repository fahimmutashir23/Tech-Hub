/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { url } from "../../connection";

const CheckNotLogin = ({ children }) => {
  const [go, setGo] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const baseUrl = url;

  useEffect(() => {
    if (token) {
      return (
        toast.error("You are already login") && (
          navigate("/admin/login")
        )
      );
    } else {
      setGo(true);
      // axios(`${baseUrl}/api/get-check-login`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // })
      //   .then((res) => {
      //     if (res.data.status) {
      //       setGo(true);
      //     }
      //   })
      //   .catch(() => {
      //     toast.error("You are already login") && navigate("/admin/login");
      //   });
    }
  }, [token]);

  return go && children;
};

export default CheckNotLogin;
