import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layouts/App.jsx";
import Product from "./pages/product.jsx";
import ProductDetail from "./pages/productDetails.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      { path: "product", element: <Product /> },
      { path: "product/:id", element: <ProductDetail /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
