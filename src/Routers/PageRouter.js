import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import HeroDetails from "../Pages/HeroDetails";
import Home from "../Pages/Home";

function PageRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="details/:id" element={<HeroDetails />}>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", color: "white" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default PageRouter;
