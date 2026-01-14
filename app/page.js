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
  const ourServices = [
    {
      image: cnxtifi,
      title: 'CnxtHub',
      subtitle:
        'Some quick example text to build on the card title and make up the bulk of the card.',
      btnLink: '/',
      btnText: 'Learn More',
    },
    {
      image: cnxthub,
      title: 'CnxtiFi',
      subtitle:
        'Some quick example text to build on the card title and make up the bulk of the card.',
      btnLink: '/',
      btnText: 'Learn More',
    },
    {
      image: edcnxt,
      title: 'EdCnxt',
      subtitle:
        'Some quick example text to build on the card title and make up the bulk of the card.',
      btnLink: '/',
      btnText: 'Learn More',
    },
  ];

  const ourRatings = [
    {
      title: '3.2K+',
      subtitle: 'Online Course',
    },
    {
      title: '600+',
      subtitle: 'Expert member',
    },
    { title: '1k+', subtitle: 'Rating & Review' },
  ];

  const ourTeam = [
    {
      image: cnxtifi,
      title: 'Awlad Hossain',
      subtitle: 'UIUX Designer',
    },
    {
      image: cnxtifi,
      title: 'Jannatul Islam',
      subtitle: 'Motion Design',
    },
    {
      image: cnxtifi,
      title: 'Imran Hossain',
      subtitle: 'Graphic Designer',
    },
    {
      image: cnxtifi,
      title: 'Nishi Akter',
      subtitle: 'Web Developer',
    },
  ];
  const ourFeedbacks = [
    {
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem.',
      image: cnxtifi,
      title: 'Awlad Hossain',
      subtitle: 'UIUX Designer',
    },
    {
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem.',
      image: cnxtifi,
      title: 'Shanta Akter',
      subtitle: 'Graphic Designer',
    },
  ];
  const frequentQA = [
    {
      title: 'What other services are you compatible with?',
      subtitle:
        'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the generators on the.',
      items: [
        {
          title: 'I have a technical i need resolved, who do i email?',
          subtitle:
            'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the generators on the.',
        },
        {
          title: 'What other services are you compatible with?',
          subtitle:
            'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the generators on the.',
        },
        {
          title: 'What other services are you compatible with?',
          subtitle:
            'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the generators on the.',
        },
      ],
    },
  ];
  return (
    <div className="min-h-screen">
      <div>
        <MainHero />

        {/* section1 */}
        <PageBorders>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <HeaderOne
                text={'Discover Our Popular Services'}
                textCenter={true}
              />
              <MainText
                text={
                  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                }
                color={'text-mainGray'}
                textCenter={true}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3 md:gap-8">
              {ourServices.map((item, index) => (
                <MainCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  btnLink={item.btnLink}
                  btnText={item.btnText}
                />
              ))}
            </div>
          </div>
        </PageBorders>

        {/* section2 */}
        <PageBorders>
          <div className="grid md:grid-cols-2">
            {' '}
            <ImageWrapper
              src={explore}
              alt={'explore our ecosystem'}
              width={500}
              height={500}
              styles={'bg-no-repeat bg-cover aspect-[1/1] h-full w-full'}
            />
            <div className="flex flex-col justify-center gap-4 bg-lightestBlue p-[20px] md:gap-8">
              <HeaderOne text={'Explore Cnxt Platform Ecosystem'} />
              <MainText
                text={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure."
                }
                color={'text-mainGray'}
              />
              <MainText
                text={
                  'Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.'
                }
                color={'text-mainGray'}
              />
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                {ourRatings.map((item, index) => (
                  <Ratings
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                ))}
              </div>
              <Link href={'/'} className="flex justify-start">
                <MainButton text={'Learn More'} />
              </Link>{' '}
            </div>
          </div>
        </PageBorders>

        {/* section3 */}
        <DoublePageBorders background={'bg-primary'}>
          <div className="grid md:grid-cols-2">
            {' '}
            <div className="flex flex-col justify-center gap-4 p-[20px] md:gap-8">
              <HeaderOne text={'Ready to join?'} color={'text-mainWhite'} />
              <MainText
                text={
                  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                }
                color={'text-mainWhite/80'}
              />
            </div>
            <div>
              <Link
                href={'/'}
                className="flex h-full justify-start pl-[20px] md:items-center md:justify-center"
              >
                <MainButton text={'Register Now'} bgColor={'bg-white'} />
              </Link>{' '}
            </div>
          </div>
        </DoublePageBorders>

        {/* section4 */}
        <PageBorders>
          <div className="flex flex-col gap-8">
            {' '}
            <div className="flex flex-col justify-center gap-4 p-[20px] md:gap-8">
              <HeaderOne text={'Meet Cnxt Team'} />
              <MainText
                text={
                  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                }
                color={'text-mainGray'}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-4 md:gap-8">
              {ourTeam.map((item, index) => (
                <ItemCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </div>
            <div>
              <Link href={'/'} className="grid justify-items-center">
                <MainButton text={'Register Now'} />
              </Link>{' '}
            </div>
          </div>
        </PageBorders>

        {/* section5 */}
        <PageBorders>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <HeaderOne text={'Some Students Feedback'} textCenter={true} />
              <MainText
                text={
                  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                }
                color={'text-mainGray'}
                textCenter={true}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              {ourFeedbacks.map((item, index) => (
                <FeedbackCard
                  key={index}
                  text={item.text}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </div>
          </div>
        </PageBorders>

        {/* section5 */}
        <PageBorders>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <HeaderOne text={'Some Students Feedback'} textCenter={true} />
              <MainText
                text={
                  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                }
                color={'text-mainGray'}
                textCenter={true}
              />
            </div>
            <div className="gap-4 md:gap-8">
              {frequentQA.map((item, index) => (
                <SpecificationItem
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  nestedItems={true}
                  items={item.items}
                />
              ))}
            </div>
          </div>
        </PageBorders>

        {/* section6 */}
        <PageBorders>
          <div className="flex flex-col gap-8">
            <HeaderOne
              text={'Trusted by over 800+ companies'}
              textCenter={true}
            />
            <AdsContent />
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
