import RenderHtmlBlock from './RenderHtmlBlock';
import { ItemType } from '../types/item';

function RenderItem({ id, company, urls, descr, title, skills }: ItemType) {
  const { name, logo, website } = company;
  return (
    <div className='mb-2 md:mb-8 border p-4 rounded-md hover:bg-slate-50 hover:shadow' key={id}>
      <div className='flex mb-4'>
        <img src={logo} alt={title} className="max-h-6 mr-2" />
        <div>
          <h2 className='mr-2'>{title}</h2>
          <a href={website} className='text-md text-slate-400'>{name}</a>
        </div>
      </div>
      <div className="mx-8">
        <RenderHtmlBlock title='Description' text={ descr } />
        <RenderHtmlBlock title='Skills' text={ skills } />
        <div className='mt-4'>
          <a href={urls.ad} className='text-md text-slate-400 hover:text-slate-800'>
            Read more
          </a>
        </div>
      </div>
    </div>
  )
}

export default RenderItem;