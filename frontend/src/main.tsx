import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouters from "./wrapper/AppRouters.tsx";
import { BrowserRouter } from "react-router-dom";
// import Layout from "./components/demolayout.tsx";
import ImagesLayout from "./components/imageslayout.tsx";
import AuthProvider from "./wrapper/authWrapper.tsx";
import ImageContext from "./wrapper/imageContext.tsx";
import App from "./App.tsx";
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <AuthProvider>
      <ImageContext>
      <BrowserRouter>
        <AppRouters />
        {/* <Layout /> */}
        {/* <ImagesLayout /> */}
        {/* <App /> */}
      </BrowserRouter>
      </ImageContext>
    </AuthProvider>
  // </StrictMode>
);
