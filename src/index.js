import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainContexProvider from "./context";
import 'react-toastify/dist/ReactToastify.css';
import ToastProvider from '../src/components/Reusable/Toast/ToastProvider'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContexProvider>
    <ToastProvider>
      <App />
    </ToastProvider>
  </MainContexProvider>
);
