import React from 'react';
import sale from '../Images/sales.png';
import rent from '../Images/rentals.png';
import manage from '../Images/management.png';
import market from '../Images/marketing.png';
import consult from '../Images/consultancy.png';

const Services = () => {
  return (
    <section className=''>
      <div className='grid  md:grid-cols-3 '>
        <article className='border-r border-b text-[#201E1C]  border-[#7A7A7A]'>
          <h2 className='font-medium text-[35px] text-center md:text-left  md:pl-[40px] lg:pl-[64px] tracking-[0.04em] py-[80px]'>
            OUR <br /> SERVICES
          </h2>
        </article>
        <article className='border-r border-b pt-[40px] border-[#7A7A7A]'>
          <img src={sale} alt='sales' className='mx-auto' />
          <h3 className='text-center py-[22px] font-medium'>
            Sales and Procurement of Landed Properties.
          </h3>
        </article>
        <article className='border-b border-r md:border-r-0 border-[#7A7A7A] pt-[40px]'>
          <img src={rent} alt='rent' className='mx-auto' />
          <h3 className='text-center py-[22px] font-medium'>
            Rentals, Leasing and Caretaking Services
          </h3>
        </article>

        <article className='border-r pt-[40px] border-b md:border-b-0 border-[#7A7A7A]'>
          <img src={manage} alt='manage' className='mx-auto' />
          <h3 className='text-center py-[22px] font-medium'>
            Management of Properties.
          </h3>
        </article>
        <article className='border-r pt-[40px] border-b md:border-b-0 border-[#7A7A7A]'>
          <img src={market} alt='market' className='mx-auto' />
          <h3 className='text-center py-[22px] font-medium'>
            Marketing of Properties.
          </h3>
        </article>
        <article className=' pt-[40px]  border-r md:border-r-0 border-[#7A7A7A]'>
          <img src={consult} alt='consult' className='mx-auto' />
          <h3 className='text-center py-[22px] font-medium'>
            Consultancy and Appraiser Services
          </h3>
        </article>
      </div>
      <div className='border-[0.5px] border-[#7A7A7A]'></div>
    </section>
  );
};

export default Services;
