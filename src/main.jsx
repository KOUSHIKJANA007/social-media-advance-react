import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import CreatePost, { postDataAction } from "./components/CreatePost";
import PostList, { postLoader } from "./components/PostList";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './routes/App';

const router=createBrowserRouter([{path:"/",element:<App/>,children:[
  {path:"/",element:<PostList />,loader:postLoader},
  { path: "/create-post", element: <CreatePost />, action: postDataAction }
]}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
