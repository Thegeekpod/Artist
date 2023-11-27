import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Index from './Pages/Index';
import Home from './Pages/Home/Home';
import Artis from './Pages/Arists/Artis';
import Login from './Pages/Account/Login';
import Profile from './Pages/Account/Profile';
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
  //     {
  //       path:'/:artist',
  //       element:<Artist_about/>
  //     },
  //     {
  //       path:'/:artist/:seq',
  //       element:<Artist_picture/>
  //     },
  // },

      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
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
