import Link from 'next/link';
import React from 'react';
import MainButon from '../button/MainButon';
import Navitem from '../typography/Navitem';
import MobileNav from './MobileNav';

const Headers = ({ hero }) => {
  const navigations = [
    { path: '/', link: 'Why  Us' },
    { path: '/', link: 'About Us' },
    { path: '/', link: 'Markets' },
  ];
  return (
    <header className="fixed flex w-full items-center justify-between bg-transparent px-[6vw] py-[4vh]">
      {/* logo */}
      <Link href={'/'}>
        <h1 className="text-[30px] font-bold leading-[30px] tracking-tight">
          CnxtHub
        </h1>
      </Link>

      {/* navigation */}
      <div className="hidden md:block">
        <nav>
          <ul className="flex gap-8">
            {navigations.map((item, index) => (
              <Link key={index} href={item.path}>
                <Navitem text={item.link} />
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      {/* sign up */}
      <div className="flex gap-4">
        <Link href={'/'}>
          {' '}
          <MainButon text={'register'} />{' '}
        </Link>
        {/* mobile nav */}
        <MobileNav />
      </div>

      {/* hero */}
      {hero}
    </header>
  );
};

export default Headers;
