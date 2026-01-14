import React from 'react';
import MainText from '../typography/MainText';
import ImageWrapper from '../wrappers/ImageWrapper';

const ItemCard = ({ image, title, subtitle }) => {
  return (
    <div className="shadow-custom-primary flex flex-col gap-4 overflow-hidden rounded-[10px]">
      <ImageWrapper
        src={image}
        alt={`welcome to cnxt ${title}`}
        width={300}
        height={300}
        styles={'bg-no-repeat bg-cover w-full'}
      />
      <div className="flex flex-col gap-2 p-[10px]">
        <MainText text={title} />
        <MainText text={subtitle} color={'text-mainGray'} />
      </div>
    </div>
  );
};

export default ItemCard;
