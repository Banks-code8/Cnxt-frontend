import React from 'react';

const MainText = ({ text }) => {
  return (
    <p className="text-mainBlack text-[14px] font-normal leading-[24px] tracking-normal md:text-[16px]">
      {text}
    </p>
  );
};

export default MainText;
