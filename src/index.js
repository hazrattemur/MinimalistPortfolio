import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import App from './App';
import PortfolioManage from './Pages/PortfolioManage';
import PortfolioBookmark from './Pages/PortfolioBookmark';
import PortfolioFylo from './Pages/PortfolioFylo';
import PortfolioInsure from './Pages/PortfolioInsure';
import ContactmePage from './Pages/ContactmePage';
import PortfolioPage from './Pages/PortfolioPage';


const appRouter = createBrowserRouter([{
  element:<App />,
  path:"/",
  errorElement:<ErrorPage />,
  children:[{
    path:"/",
    element:<HomePage />,
    
  },{
    element:<PortfolioPage />,
    path:"/PortfolioPage"
  },{
    element:<PortfolioManage />,
    path:"/PortfoliManage"
  },{
    element:<PortfolioBookmark />,
    path:"/PortfolioBookmark"
  
  },
  {
    element:<PortfolioFylo />,
    path:"/PortfolioFylo"
  },
  {
element:<PortfolioInsure />,
path:"/PortfolioInsure"
  },
  {
    element:<ContactmePage />,
    path:"/ContactMe"
  }
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode> 
);

