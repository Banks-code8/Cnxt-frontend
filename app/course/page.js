import MainCard from '@/components/cards/MainCard';
import MainHero from '@/components/hero/MainHero';
import HeaderOne from '@/components/typography/HeaderOne';
import MainText from '@/components/typography/MainText';
import PageBorders from '@/components/wrappers/PageBorders';
import cnxtifi from '@/public/images/cnxtifiImg.png';
import edcnxt from '@/public/images/edcnxtImg.png';
import cnxthub from '@/public/images/cnxthubImg.png';
import Ratings from '@/components/sections/Ratings';
import explore from '@/public/images/exploreImg.png';
import ImageWrapper from '@/components/wrappers/ImageWrapper';
import Link from 'next/link';
import MainButton from '@/components/button/MainButton';
import ItemCard from '@/components/cards/ItemCard';
import DoublePageBorders from '@/components/wrappers/DoublePageBorders';
import FeedbackCard from '@/components/cards/FeedbackCard';
import SpecificationItem from '@/components/sections/SpecificationItem';
import AdsContent from '@/components/sections/AdsContent';

export const metadata = {
  title: 'Welcome to Cnxt',
  description: 'Connect and Collaborate Seamlessly with Cnxt',
};
export default function Home() {
  const ourTeam = [
    {
      id: '0',
      image: cnxtifi,
      title: 'Awlad Hossain',
      subtitle: 'UIUX Designer',
    },
    {
      id: '1',
      image: cnxtifi,
      title: 'Jannatul Islam',
      subtitle: 'Motion Design',
    },
    {
      id: '2',
      image: cnxtifi,
      title: 'Imran Hossain',
      subtitle: 'Graphic Designer',
    },
    {
      id: '3',
      image: cnxtifi,
      title: 'Nishi Akter',
      subtitle: 'Web Developer',
    },
  ];

  return (
    <div className="min-h-screen">
      <div>
        {/* section1*/}
        <PageBorders>
          <div className="flex flex-col gap-8">
            {' '}
            <div className="flex flex-col justify-center gap-4 p-[20px] md:gap-8">
              <HeaderOne text={'Recommended for you'} />
            </div>
            <div className="grid gap-4 md:grid-cols-4 md:gap-8">
              {ourTeam.map((item, index) => (
                <Link href={`/course/${item.id}`} key={index}>
                  <ItemCard
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                </Link>
              ))}
            </div>
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
