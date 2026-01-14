import React from 'react';
import ImageWrapper from '../wrappers/ImageWrapper';
import TitleText from '../typography/TitleText';
import MainText from '../typography/MainText';
import Link from 'next/link';
import MainButon from '../button/MainButton';

const MainCard = ({ image, title, subtitle, btnLink, btnText }) => {
  return (
    <div className="shadow-custom-primary grid grid-cols-2 gap-4 overflow-hidden rounded-[10px]">
      <ImageWrapper
        src={image}
        alt={`welcome to cnxt ${title}`}
        width={300}
        height={300}
        styles={'bg-no-repeat bg-cover h-full'}
      />
      <div className="flex flex-col gap-4 px-[10px] py-[20px]">
        <TitleText text={title} />
        <MainText text={subtitle} color={'text-mainGray'} />
        <Link href={btnLink} className="flex justify-start">
          <MainButon text={btnText} />
        </Link>{' '}
      </div>
    </div>
  );
};

export default MainCard;
