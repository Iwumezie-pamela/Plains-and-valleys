import React from 'react';
import arrow from '../Images/downarrow.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='overlay'>
        <div className='flex flex-col items-center justify-center h-screen text-[#FFFBF5]'>
          <h1 className='font-semibold uppercase text-3xl sm:text-4xl px-3 mb-2 md:text-6xl lg:text-7xl xl:text-8xl  md:px-[64px] text-center md:mb-8 leading-[1.1] '>
            Let us help you find your perfect home
          </h1>
          <p className='text-sm sm:text-base md:text-xl font-light max-w-[44rem] px-1 text-center leading-10 text-[rgba(255, 251, 245,.8)] mb-[13px] sm:mb-[20px] md:mb-[25px]'>
            We believe there's a perfect home for everybody, no matter the
            budget. That's why we always find the best homes for your budget. We
            are pioneers in the real estate business.
          </p>
          <Link to='/contact'>
            {' '}
            <img
              src={arrow}
              alt=''
              className='h-10 md:h-12 cursor-pointer animate-bounce'
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
