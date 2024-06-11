/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useSmallScreen from "../Hooks/useSmallScreen";

export const BasicContext = createContext(null);

const BasicProvider = ({ children }) => {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const [isSmallScreen] = useSmallScreen()

  useEffect(() => {
    if(isSmallScreen){
      setSideBarOpen(true)
    } else{
      setSideBarOpen(false)
    }
  }, [])

  const info = {
    sidebarOpen,
    setSideBarOpen,
  };
  return <BasicContext.Provider value={info}>{children}</BasicContext.Provider>;
};

export default BasicProvider;
