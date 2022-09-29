import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Error from './pages/ErrorLayout';
import Index, { loader as ItemsLoader } from './pages/Index';
import RootLayout from './pages/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<Error />}>
        <Route index element={<Index />} loader={ItemsLoader}></Route>
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
