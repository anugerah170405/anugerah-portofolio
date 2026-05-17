import { RouterProvider } from "react-router";
import { router } from "./app/layouts/routes";

export default function App() {
  return <RouterProvider router={router} />;
}
