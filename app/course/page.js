import MainCard from '@/components/cards/MainCard';
import HeaderOne from '@/components/typography/HeaderOne';
import MainText from '@/components/typography/MainText';
import PageBorders from '@/components/wrappers/PageBorders';
import cnxtifi from '@/public/images/cnxtifiImg.png';
import edcnxt from '@/public/images/edcnxtImg.png';
import cnxthub from '@/public/images/cnxthubImg.png';
import ImageWrapper from '@/components/wrappers/ImageWrapper';
import Link from 'next/link';
import ItemCard from '@/components/cards/ItemCard';
import OtherPageHero from '@/components/hero/OtherPageHero';
import TechStack from '@/components/cards/TechStack';
import TitleText from '@/components/typography/TitleText';

export const metadata = {
  title: 'EdCnxt',
  description: 'learn With EdCnxt',
};
export default function Home() {
  const ourTeam = [
    {
      id: '0',
      image: cnxtifi,
      title: 'Awlad Hossain',
      subtitle: 'UIUX Designer',
      rate: '4.8',
      cost: '$25',
    },
    {
      id: '1',
      image: cnxtifi,
      title: 'Jannatul Islam',
      subtitle: 'Motion Design',
      rate: '4.8',
      cost: '$25',
    },
    {
      id: '2',
      image: cnxtifi,
      title: 'Imran Hossain',
      subtitle: 'Graphic Designer',
      rate: '4.8',
      cost: '$25',
    },
    {
      id: '3',
      image: cnxtifi,
      title: 'Nishi Akter',
      subtitle: 'Web Developer',
      rate: '4.8',
      cost: '$25',
    },
  ];
  const topCompanies = [
    {
      icon: cnxtifi,
    },
    {
      icon: cnxtifi,
    },
    {
      icon: cnxtifi,
    },
    {
      icon: cnxtifi,
    },
    {
      icon: cnxtifi,
    },
    {
      icon: cnxtifi,
    },
  ];

  const moreSkills = [
    {
      title: 'Web Development',
    },
    {
      title: 'IT Certificates',
    },
    {
      title: 'Data Science',
    },
    {
      title: 'Leadership',
    },
    {
      title: 'Communication',
    },
    {
      title: 'Business Analytics',
    },
  ];

  const learnMore = [
    {
      id: '0',
      image: cnxtifi,
      title: 'Awlad Hossain',
      subtitle: 'UIUX Designer',
      rate: '4.8',
      cost: '$25',
    },
    {
      id: '1',
      image: cnxtifi,
      title: 'Jannatul Islam',
      subtitle: 'Motion Design',
      rate: '4.8',
      cost: '$25',
    },
    {
      id: '2',
      image: cnxtifi,
      title: 'Imran Hossain',
      subtitle: 'Graphic Designer',
      rate: '4.8',
      cost: '$25',
    },
    {
      id: '3',
      image: cnxtifi,
      title: 'Nishi Akter',
      subtitle: 'Web Developer',
      rate: '4.8',
      cost: '$25',
    },
  ];

  const ourServices = [
    {
      icon: cnxthub,
      title: 'Explore new skills',
      subtitle: 'Access 10,000+ courses in AI, business, technology, and more.',
    },
    {
      icon: edcnxt,
      title: 'Earn valuable credentials',
      subtitle:
        'Get certificates for every course you finish and boost your chances of getting hired after your trial ends at no additional cost.',
    },
    {
      icon: cnxthub,
      title: 'Learn from the best',
      subtitle:
        'Take your skills to the next level with expert-led courses and Coursera Coach, your AI-powered guide.',
    },
  ];
  return (
    <div className="min-h-screen">
      <div>
        {/* searchbar, course catefories and pagination router and fetch udyme courses  */}

        <OtherPageHero
          title={'EdCnxt'}
          subtitle={
            'Subscribe to build job-ready skills from world-class institutions.'
          }
          btnLink={'/'}
          btnText={'Register Now'}
          image={cnxtifi}
        />
        {/* section1*/}
        <PageBorders>
          <div className="flex flex-col gap-8">
            {' '}
            <div className="flex flex-col justify-center gap-4 md:gap-8">
              <HeaderOne
                text={'Learn from 350+ top universities and companies'}
              />
            </div>
            <div className="grid grid-cols-6 gap-4 md:gap-8">
              {topCompanies.map((item, index) => (
                <TechStack key={index} useStack={true} stack={item.icon} />
              ))}
            </div>
          </div>
        </PageBorders>

        {/* section2*/}
        <PageBorders background={'bg-lightestBlue'}>
          <div className="flex flex-col gap-8">
            {' '}
            <HeaderOne text={'Invest in your career'} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              {ourServices.map((item, index) => (
                <ItemCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  useIcon={true}
                />
              ))}
            </div>
          </div>
        </PageBorders>

        {/* section3*/}
        <PageBorders>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="">
              {' '}
              <HeaderOne
                text={
                  '77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more.¹'
                }
              />
            </div>
            <div className="flex w-full justify-end">
              <ImageWrapper
                src={cnxtifi}
                alt={`cnxtHub techstack`}
                width={300}
                height={300}
                styles="bg-norepeat bg-contain bg-center"
              />
            </div>
          </div>
        </PageBorders>

        {/* section4*/}
        <PageBorders>
          <div className="flex flex-col gap-8">
            {' '}
            <div className="flex flex-col justify-center gap-4 p-[20px] md:gap-8">
              <HeaderOne text={'Recommended for you'} />
            </div>
            <div className="grid gap-4 md:grid-cols-4 md:gap-8">
              {ourTeam.map((item, index) => (
                <Link href={`/course/${item.id}`} key={index}>
                  <MainCard
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                    useRate={true}
                    rate={item.rate}
                    cost={item.cost}
                  />
                </Link>
              ))}
            </div>
          </div>
        </PageBorders>

        {/* section5*/}
        <PageBorders>
          <div className="flex flex-col gap-8">
            {' '}
            <div className="flex flex-col justify-center gap-4 p-[20px] md:gap-8">
              <HeaderOne text={'All the skills you need in one place'} />{' '}
              <MainText
                text={
                  'From critical skills to technical topics, Udemy supports your professional development.'
                }
              />
              <div className="flex flex-wrap gap-4 md:gap-8">
                {moreSkills.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[10px] bg-mainGray px-[20px] py-[10px] shadow-custom-primary"
                  >
                    {' '}
                    <MainText text={item.title} />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-4 md:gap-8">
              {learnMore.map((item, index) => (
                <Link href={`/course/${item.id}`} key={index}>
                  <MainCard
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                    useRate={true}
                    rate={item.rate}
                    cost={item.cost}
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
