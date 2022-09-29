import { useLoaderData } from 'react-router-dom';
import RenderHtmlBlock from '../components/RenderHtmlBlock';
import { ItemType } from '../types/item';
import { getItems } from '../util/items';

const RenderItem = ({ id, company, urls, descr, title, skills }: ItemType) => {
  const { name, logo, website } = company;
  return (
    <div className='mb-2 md:mb-8 border p-4 rounded-md hover:bg-slate-50 hover:shadow' key={id}>
      <div className='flex mb-4'>
        <img src={logo} alt={title} className="max-h-6 mr-2" />
        <div>
          <h2 className='mr-2'>{title}</h2>
          <a href={urls.ad} className='text-sm text-slate-400'>{name}</a>
        </div>
      </div>
      <div className="mx-8">
        <RenderHtmlBlock title='Description' text={ descr } />
        <RenderHtmlBlock title='Skills' text={ skills } />
        <div className='mt-4'>
          <span className='text-sm mr-1'>Visit the ad:</span>
          <a href={urls.ad} className='text-sm text-slate-400 hover:text-slate-600'>{website}</a>
        </div>
      </div>
    </div>
  )
}

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