import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Index from './Pages/Index';
import Home from './Pages/Home/Home';
import Artis from './Pages/Arists/Artis';
import Artist_about from './Pages/Arists/Artist-about';
import Artist_picture from './Pages/Arists/Artist_picture';
import Login from './Pages/Account/Login';
import Profile from './Pages/Account/Profile';
import { UserProvider } from './Pages/Account/UserContext';
import Editprofile from './Pages/Account/Editprofile';
import Register from './Pages/Account/Register';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Index/>,
      children:[{
        path:'/',
        element:<Home/>
      },
      {
        path:'/artists',
        element:<Artis/>
      },
      {
        path:'/:artist',
        element:<Artist_about/>
      },
      {
        path:'/:artist/:seq',
        element:<Artist_picture/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/editprofile',
        element:<Editprofile/>
      }
    ]

    }
  ])
  return (
<RouterProvider router={router}/>

  
  );
}

export default App;
