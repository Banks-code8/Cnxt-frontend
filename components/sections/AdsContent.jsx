import React from 'react';
import ImageWrapper from '../wrappers/ImageWrapper';
import cnxtifi from '@/public/images/cnxtifiImg.png';

const AdsContent = () => {
  const ourServices = [
    {
      image: cnxtifi,
    },
    {
      image: cnxtifi,
    },
    {
      image: cnxtifi,
    },
    {
      image: cnxtifi,
    },
    {
      image: cnxtifi,
    },
    {
      image: cnxtifi,
    },
  ];
  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {ourServices.map((item, index) => (
        <div className="flex gap-4 md:gap-8" key={index}>
          {' '}
          <ImageWrapper
            src={item.image}
            alt={`welcome to cnxt `}
            width={100}
            height={100}
            styles={'bg-no-repeat bg-cover '}
          />
        </div>
      ))}
    </div>
  );
};

export default AdsContent;
