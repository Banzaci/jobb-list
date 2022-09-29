import { useLoaderData } from 'react-router-dom';
import RenderItem from '../components/RenderItem';
import { ItemType } from '../types/item';
import { getItems } from '../util/items';

function Index() {
  const loaderData = useLoaderData() as ItemType[];
  const renderedItems = loaderData.map(RenderItem);
  console.log(loaderData[0])
  return (
    <div>
      { renderedItems }
    </div>
  )
}

export default Index;

export async function loader() {
  return await getItems();
}