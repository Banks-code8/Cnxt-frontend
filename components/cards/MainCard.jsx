import React from 'react';
import MainText from '../typography/MainText';
import ImageWrapper from '../wrappers/ImageWrapper';
import icon from '@/public/images/cnxtifiImg.png';

const MainCard = ({ image, title, subtitle, useRate, rate, cost }) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-[10px] shadow-custom-primary">
      <ImageWrapper
        src={image}
        alt={`welcome to cnxt ${title}`}
        width={300}
        height={300}
        styles={'bg-no-repeat bg-cover w-full'}
      />
      <div className="flex flex-col gap-2 px-[20px] py-[10px]">
        <MainText text={title} />
        <MainText text={subtitle} color={'text-mainGray'} />{' '}
        {useRate && (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <ImageWrapper
                src={icon}
                alt={`welcome to cnxt ${title}`}
                width={30}
                height={30}
                styles={'bg-no-repeat bg-cover w-full'}
              />{' '}
              <MainText text={rate} />
            </div>{' '}
            <MainText text={cost} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainCard;
