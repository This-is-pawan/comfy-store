import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  Error,
  HomeLayout,
  Register,
  Products,
  Checkout,
  Landing,
  Orders,
  SingleProduct,
  Login,
} from "./pages/index";
import { ErrorElement } from "./components";
// loader
import { loader as landingLoader}  from './pages/Landing';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoader,
        },
        {
          path: "products/:id",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/Login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/Register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
