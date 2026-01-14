import Link from 'next/link';
import React from 'react';
import MainButton from '../button/MainButton';
import Navitem from '../typography/Navitem';
import MobileNav from './MobileNav';

const Headers = () => {
  const navigations = [
    { link: '/', title: 'Why  Us' },
    { link: '/', title: 'About Us' },
    { link: '/', title: 'Markets' },
  ];
  return (
    <header className="">
      <div className="relative">
        {' '}
        <div className="fixed top-0 flex w-full items-center justify-between bg-transparent px-[6vw] py-[4vh] backdrop-blur-[10px]">
          {' '}
          {/* logo */}
          <Link href={'/'}>
            <h1 className="text-[30px] font-bold leading-[30px] tracking-tight">
              CnxtHub
            </h1>
          </Link>
          {/* navigation */}
          <div className="hidden gap-8 md:flex">
            {navigations.map((item, index) => (
              <Link key={index} href={item.link}>
                <Navitem text={item.title} />
              </Link>
            ))}
          </div>
          {/* sign up */}
          <div className="flex gap-4">
            <Link href={'/'}>
              {' '}
              <MainButton text={'Register'} />{' '}
            </Link>
            {/* mobile nav */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
