import React from "react";
import { ToastContainer } from "react-toastify";
import { TOAST_DURATION } from "./constants";

import AppRouter from "./components/AppRouter/AppRouter";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRouter />
      <ToastContainer autoClose={TOAST_DURATION} />
    </>
  );
}

export default App;
