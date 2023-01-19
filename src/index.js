import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './Pages/LandingPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignInUp from './Pages/SignInUp';
import Dashboard from './Pages/Dashboard';
import { store } from './Redux/store'
import { Provider, useSelector } from 'react-redux'




function Router(){
  const {user} = useSelector((state) =>state.User)

  console.log(user)
  if(user.length > 0){
    
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/Authentication/LogIn",
      element: <SignInUp />,
    },
    {
      path : "/Authentication/SignUp",
      element : <SignInUp />
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
