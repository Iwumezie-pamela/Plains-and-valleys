import React from 'react';
import man1 from '../Images/manwithkey.png';
import woman from '../Images/womanwithkey.png';
import man2 from '../Images/manwithcard.png';

const Properties = () => {
  return (
    <section className='grid lg:grid-cols-3'>
      <article className='border-b border-l border-r border-[#7A7A7A] text-center flex flex-col items-center justify-center pt-[90px]'>
        <img src={man1} alt='man with key' className=' mb-[72px]' />
        <h2 className='text-[#201E1C] text-[50px] tracking-[0.04em] font-medium'>
          BUY
        </h2>
        <h3 className='mb-[40px] text-[#201E1C] text-[18px] tracking-[0.04em] font-medium'>
          PROPERTIES
        </h3>
      </article>
      <article className='border-b border-l border-r border-[#7A7A7A] bg-[#E3A335] text-[#FFFBF5]  text-center flex flex-col items-center justify-center pt-[90px]'>
        <img src={woman} alt='woman with key' className=' mb-[72px]' />
        <h2 className=' text-[50px] tracking-[0.04em] font-medium'>RENT</h2>
        <h3 className='mb-[40px]'>PROPERTIES</h3>
      </article>
      <article className='border-b border-l border-r border-[#7A7A7A]  text-center flex flex-col items-center justify-center pt-[90px]'>
        <img src={man2} alt='man with card' className=' mb-[72px]' />
        <h2 className=' text-[#201E1C] text-[50px] tracking-[0.04em] font-medium'>
          SELL
        </h2>
        <h3 className='mb-[40px] text-[#201E1C] text-[18px] tracking-[0.04em] font-medium'>
          PROPERTIES
        </h3>
      </article>
    </section>
  );
};

export default Properties;
