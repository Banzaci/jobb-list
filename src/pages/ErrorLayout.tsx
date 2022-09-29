import { useRouteError } from 'react-router-dom';
import Navigation from '../components/Navigation';

type ErrorType = {
  message: string
}

function ErrorLayout() {
  const { message } = useRouteError() as ErrorType;
  return (
    <div>
      <Navigation />
      <main className='max-w-lg mx-auto my-10 text-center'>
        <h1 className='text-xl'>{ message }</h1>
      </main>
    </div>
  )
}

export default ErrorLayout;