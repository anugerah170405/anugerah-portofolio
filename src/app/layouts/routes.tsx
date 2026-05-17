import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { HomePage } from "../features/home/page/HomePage";
import { WorkPage } from "../features/work/page/WorkPage";
import { AboutPage } from "../features/about/page/AboutPage";
import { GalleryPage } from "../features/gallery/page/GalleryPage";
import { ContactPage } from "../features/contact/pages/ContactPage";
import { NotFoundPage } from "../features/NotFoundPage";
import { ErrorPage } from "../features/ErrorPage";

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
