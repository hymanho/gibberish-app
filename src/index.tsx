import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import {ChatStyleInterpreterPage} from "./pages";
import reportWebVitals from './reportWebVitals';


const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/chat-style-interpreter",
        element: <ChatStyleInterpreterPage />
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={browserRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
