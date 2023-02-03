import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { ProSidebarProvider } from "react-pro-sidebar";
=======
>>>>>>> e47ee875ffd376d2bf847aff68c5aeeeba613814

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <div>
<<<<<<< HEAD
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
=======
        <App />
>>>>>>> e47ee875ffd376d2bf847aff68c5aeeeba613814
      </div>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
