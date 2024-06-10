/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const BasicContext = createContext(null);

const BasicProvider = ({ children }) => {
  const [sidebarOpen, setSideBarOpen] = useState(true);

  const info = {
    sidebarOpen,
    setSideBarOpen,
  };
  return <BasicContext.Provider value={info}>{children}</BasicContext.Provider>;
};

export default BasicProvider;
