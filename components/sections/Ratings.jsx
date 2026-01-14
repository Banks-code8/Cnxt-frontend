import React from 'react';
import TitleText from '../typography/TitleText';
import MainText from '../typography/MainText';

const Ratings = ({ title, subtitle }) => {
  return (
    <div>
      {' '}
      <div className="flex flex-col gap-4">
        <TitleText text={title} />
        <MainText text={subtitle} color={'text-mainGray'} />
      </div>
    </div>
  );
};

export default Ratings;
