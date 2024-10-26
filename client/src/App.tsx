import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import AddCarPage from './pages/AddCarPage';
 
const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Home />},
        {path: '/add', element: <AddCarPage />}
        // {path: '/carroTest', element: <Carro />}
      ]
    }
  ]);

  return (
      <RouterProvider router={router} />
  )
};

export default App
