import { createBrowserRouter } from "react-router-dom";
import Anemon from "./Anemon";
import ProductListPage from "./pages/ProductlistPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import ProductDetail from "./pages/ProductDetailPage/ProductDetail";
import { loadProductBySlug } from "./routes/products";
import AuthenticationWrapper from "./pages/AuthenticationWrapper";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OAuth2LoginCallback from "./pages/OAuth2LoginCallback";

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
                path:"/taki",
                element:<ProductListPage categoryType={'TAKI'} />,
            },
            {
                path:'/giyim',
                element:<ProductListPage categoryType={'GIYIM'} />,
            },
            {
                path:"/product/:slug",
                loader: loadProductBySlug,
                element: <ProductDetail />
            }
        ]
    },
    {
        path:"/v1/",
        element: <AuthenticationWrapper />,
        children:[
            {
                path:"login",
                element:<Login />
            },
            {
                path:"register",
                element:<Register />
            }
        ]
    },
    {
        path:'/oauth2/callback',
        element:<OAuth2LoginCallback />
    }
]);