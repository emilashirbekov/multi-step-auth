import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "../layout";
import { LoginPage } from "@/pages/Auth";
export const AppRouter = () => {
  const routes = createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <>
              <h1>HomePage</h1>
            </>
          }
        />
      </Route>

      <Route path='/login' element={<LoginPage />} />
    </>
  );

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
