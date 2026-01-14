import React from 'react';

const PageBorders = ({ children, background }) => {
  return (
    <section
      className={`${background ? `${background}` : 'bg-mainWhite'} px-[6vw] py-[10vh]`}
    >
      {children}
    </section>
  );
};

export default PageBorders;
