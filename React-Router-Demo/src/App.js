import {
  //Route, 
  RouterProvider, createBrowserRouter,
  //createRoutesFromElements 
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetails";


// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index : true, element: <HomePage /> }, //path: '/'
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element : <ProductDetailsPage/>}
    ],
  }
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
