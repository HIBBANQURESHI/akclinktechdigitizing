import React, { useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home/index";
import AboutUs from "./pages/Home/AboutUs";
import ContactUs from "./pages/Home/ContactUs";
import "preline/preline";
import LogoBranding from "./pages/LogoBranding";
import Printing from "./pages/Home/Printing";
import WebDesign from "./pages/WebDesign";
import Seo from "./pages/Seo";
import MobileApps from "./pages/MobileApps";
import EcomExpert from "./pages/EcomExpert";
import CollabratePage from "./pages/CollabrationPage";
import TermsConditons from "./pages/Footer/TermsConditions";
import PrivacyPolicy from "./pages/Footer/PrivacyPolicy";
import RefundPolicy from "./pages/Footer/RefundPolicy";
import Newsroom from "./pages/Footer/Newsroom";



// Create routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
   
  },
  {
    path: "/about-us",
    element: <AboutUs />,
   
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
   
  },
  {
    path: "/logo-branding",
    element: <LogoBranding />,
  },
  {
    path: "/web-design",
    element: <WebDesign />,
  },{
    path: "/collabrate-us",
    element: <CollabratePage />,
  },
  {

    path: "/printing-&-packaging",
    element: <Printing />,
  },{
    path: "/digital-seo",
    element: <Seo/>,
  },
  {
    path: "/mobile",
    element: <MobileApps/>,
  },
  {
    path: "/ecom-experts",
    element: <EcomExpert/>,
  },
  {
    path: "/terms-&-conditions",
    element: <TermsConditons/>,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy/>,
  },
  {
    path: "/refund-policy",
    element: <RefundPolicy/>,
  },
  {
    path: "/newsroom",
    element: <Newsroom/>,
  },

  
]);

function App() {
  useEffect(() => {
    if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === "function") {
      window.HSStaticMethods.autoInit();
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Chatbot />
      
    </>
  );
}

export default App;
