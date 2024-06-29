/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckLogin = ({ children }) => {
  const [go, setGo] = useState(false);
  const navigate = useNavigate()
  const token = localStorage.getItem("token");


  useEffect(() => {
    axios("http://localhost:5000/api/get-check-login", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.data.status) {
          setGo(true);
        }
      })
      .catch(() => {
        toast.error("You are not login") && navigate('/admin/login')
      });
  }, [token]);



  if (!token) {
    return (
      toast.error("You are not login") && (
        <Navigate to="/admin/login"></Navigate>
      )
    );
  } else {
    return go && children;
  }
};

export default CheckLogin;
