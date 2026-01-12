import React from 'react';

const MainButon = ({ text }) => {
  return (
    <button className="bg-primary cursor-pointer rounded-[10px] px-[20px] py-[10px] text-[14px] transition-all duration-300 hover:scale-110 active:scale-95">
      {text}
    </button>
  );
};

export default MainButon;
