import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter} from 'react-router-dom';

import App from './App';
import TicTacToe from './pages/TicTacToe';
import SQL from './pages/SQL';
// import reportWebVitals from './reportWebVitals';
import PythonApp from './pages/PythonApp';
import ErrorPage from './ErrorPage';

const routeApp = createBrowserRouter([{
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage />,
},]);

const routeTicTacToe = createBrowserRouter([{
  path: "/pages/TicTacToe",
  element: <TicTacToe />,
  errorElement: <ErrorPage/>,
},]);

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
<React.StrictMode>
    <Router>
      <Routes>
        <RouterProvider router={routeApp} />
        <RouterProvider router={routeTicTacToe} />
        <Route path="/pages/SQL" element={<SQL />} />
        <Route path="/pages/PythonApp" element={<PythonApp />}/>
        {/* Define other routes here */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
