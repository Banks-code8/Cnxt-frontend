import React from 'react';
import ImageWrapper from '../wrappers/ImageWrapper';
import TitleText from '../typography/TitleText';
import MainText from '../typography/MainText';
import Link from 'next/link';
import MainButon from '../button/MainButton';

const ItemCard = ({
  useIcon,
  icon,
  useImage,
  image,
  title,
  subtitle,
  btnLink,
  btnText,
  useBtnText,
}) => {
  return (
    <div className="flex gap-4 overflow-hidden rounded-[10px] shadow-custom-primary">
      {useImage && (
        <ImageWrapper
          src={image}
          alt={`welcome to cnxt ${title}`}
          width={300}
          height={100}
          styles={'bg-no-repeat bg-cover h-full'}
        />
      )}

      <div className="flex h-full flex-col justify-center gap-4 px-[10px] py-[20px]">
        {useIcon && (
          <ImageWrapper
            src={icon}
            alt={`welcome to cnxt ${title}`}
            width={50}
            height={50}
            styles={'bg-no-repeat bg-cover h-full'}
          />
        )}{' '}
        <TitleText text={title} />
        <MainText text={subtitle} color={'text-mainGray'} />
        {useBtnText && (
          <Link href={btnLink} className="flex justify-start">
            <MainButon text={btnText} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
