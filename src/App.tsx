/*DEFAULTS*/
import React from 'react';

/*STYLES*/
import '../src/styles/app.scss';

/*PAGES IMPORTS*/
import Home from './pages/homePage';
import Error from './pages/error';

/*ROUTER*/
import { createHashRouter, RouterProvider } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
]

const router = createHashRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
