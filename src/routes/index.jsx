import React from "react";
import { Routes, Route } from "react-router-dom";

import { publicRoutes } from "./helper";

const Routing = () => {
  return (
    <>
      {publicRoutes?.map((ele) => {
        return (
          <Routes>
            <Route path={ele.path} element={ele.element} />
          </Routes>
        );
      })}
    </>
  );
};

export default Routing;
