import React from 'react';

const Navitem = ({ text }) => {
  return (
    <nav className="text-mainGray cursor-pointer text-[14px] leading-[24px] tracking-normal md:text-[16px]">
      {' '}
      {text}{' '}
    </nav>
  );
};

export default Navitem;
