import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import { Provider } from "react-redux";
import store from "./hooks/store";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        { index: true, element: <Products /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
