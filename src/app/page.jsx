'use client';
import ItemGrid from '@/components/ItemGrid';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='flex flex-col space-y-2 w-full h-full'>
      <Navbar />
      <div className='h-1/5 w-full px-5'>
        <Carousel />
      </div>
      <div className='px-5 w-1/4'>
        <h1 className='text-3xl font-bold'>Manage your recently added Wishes</h1>
      </div>
      <div className='px-4'>
        <ItemGrid />
      </div>
      
    </div>
  );
}
