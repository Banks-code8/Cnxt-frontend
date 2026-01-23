import React from 'react';
import TitleText from '../typography/TitleText';
import MainText from '../typography/MainText';
import ImageWrapper from '../wrappers/ImageWrapper';
import show from '@/public/icons/show.png';

const SpecificationItem = ({ title, subtitle, items, nestedItems }) => {
  return (
    <ul className="rounded-[10px] shadow-custom-primary">
      <li>
        <details className="group/parent">
          <summary className="flex items-center justify-between p-[20px]">
            <TitleText text={title} />
            <ImageWrapper
              src={show}
              alt={'cnxt ecosystem'}
              width={30}
              height={30}
              styles={
                'group-open/parent:rotate-180 transition-all duration-300 bg-contain bg-no-reoeat'
              }
            />
          </summary>
          <article className="p-[20px]">
            <MainText text={subtitle} />
          </article>
          <div>
            {nestedItems === true &&
              items.map((item, index) => (
                <details key={index} className="group">
                  <summary className="flex items-center justify-between px-[20px] py-[10px]">
                    <TitleText text={item.title} />
                    <ImageWrapper
                      src={show}
                      alt={'cnxt ecosystem'}
                      width={30}
                      height={30}
                      styles={
                        'group-open:rotate-180 transition-all duration-300 bg-contain bg-no-reoeat'
                      }
                    />
                  </summary>
                  <article className="p-[20px]">
                    <MainText text={item.subtitle} />
                  </article>
                </details>
              ))}
          </div>
        </details>
      </li>
    </ul>
  );
};

export default SpecificationItem;
