import { createBrowserRouter } from "react-router-dom";
import Anemon from "./Anemon";
import ProductListPage from "./pages/ProductlistPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import ProductDetail from "./pages/ProductDetailPage/ProductDetail";
import { loadProductById } from "./routes/products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ShopApplicationWrapper />,
        children:[
            {
                path:"/",
                element:<Anemon />,
            },
            {
                path:"/takilar",
                element:<ProductListPage categoryType={'TAKILAR'} />,
            },
            {
                path:'/giyim',
                element:<ProductListPage categoryType={'GIYIM'} />,
            },
            {
                path:"/product/:productId",
                loader: loadProductById,
                element: <ProductDetail />
            }
        ]
    }
]);