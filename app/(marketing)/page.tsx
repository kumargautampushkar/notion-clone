import Image from 'next/image';
import {Button} from '@/components/ui/button';
import { Heading } from './_components/heading';
import { Heros } from './_components/heros';
//import {Heading} from './_components/heading';

function MarketingPage(){
  return (
    <div className='min-h-full flex flex-col'>
      <div className='flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10'>
          <Heading></Heading>
          <Heros></Heros>    
      </div>
    </div>
  )
}


export default MarketingPage;