import { Outlet, useLoaderData } from 'react-router-dom';
import { getItems } from '../util/items';
import Navigation from '../components/Navigation';
import { ItemType } from '../types/item';

function RootLayout() {
  const loaderData = useLoaderData() as ItemType[];
  console.log(loaderData)
  return (
    <>
      <Navigation />
      <main className='max-w-2xl m-2 md:mx-auto md:my-10'><Outlet /></main>
    </>
  )
}

export default RootLayout;

export async function loader() {
  return await getItems();
}
