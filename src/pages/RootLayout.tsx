import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function RootLayout() {
  return (
    <>
      <Navigation />
      <main className='max-w-2xl m-2 md:mx-auto md:my-10'>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout;
