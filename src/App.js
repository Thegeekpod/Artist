import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Index from './Pages/Index';
import Home from './Pages/Home/Home';
import Artis from './Pages/Arists/Artis';
import Artist_about from './Pages/Arists/Artist-about';
import Artist_picture from './Pages/Arists/Artist_picture';
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
      }
    ]

    }
  ])
  return (
<RouterProvider router={router}/>
  );
}

export default App;
