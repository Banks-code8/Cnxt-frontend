import React from 'react';
import MainButton from '../button/MainButton';
import Link from 'next/link';

const MainHero = () => {
  return (
    // add react-slider (use array to loop edcnxt, cnxtifi, cnxthub + links)
    <div className="h-screen">
      <div className="flex h-full items-center justify-center bg-Herobg bg-cover bg-top bg-no-repeat">
        <div className="flex flex-col gap-8">
          <h1 className="text-center text-[55px] font-bold leading-[55px] tracking-tight text-mainWhite">
            Get Started Digital Learning{' '}
          </h1>{' '}
          <div className="grid justify-items-center">
            <Link href={'/'}>
              {' '}
              <MainButton text={'Get Started'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
