import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Scrolls, Weapons } from './pages'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/scrolls",
    element: <Scrolls />,
  },
  {
    path: "/weapons",
    element: <Weapons />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
