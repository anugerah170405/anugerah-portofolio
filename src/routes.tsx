import { createBrowserRouter } from "react-router";
import { Layout } from "./app/components/Layout";
import { HomePage } from "./app/pages/HomePage";
import { WorkPage } from "./app/pages/WorkPage";
import { AboutPage } from "./app/pages/AboutPage";
import { GalleryPage } from "./app/pages/GalleryPage";
import { ContactPage } from "./app/pages/ContactPage";
import { NotFoundPage } from "./app/pages/NotFoundPage";
import { ErrorPage } from "./app/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: HomePage },
      { path: "work", Component: WorkPage },
      { path: "about", Component: AboutPage },
      { path: "gallery", Component: GalleryPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
