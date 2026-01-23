import PageBorders from '@/components/wrappers/PageBorders';
import HeaderOne from '@/components/typography/HeaderOne';
import MainCard from '@/components/cards/MainCard';
import MainButton from '@/components/button/MainButton';
import Link from 'next/link';
import ImageWrapper from '@/components/wrappers/ImageWrapper';
import cnxtifi from '@/public/images/cnxtifiImg.png';
import MainText from '@/components/typography/MainText';
import TitleText from '@/components/typography/TitleText';
import SpecificationItem from '@/components/sections/SpecificationItem';
import ItemCard from '@/components/cards/ItemCard';

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
const relatedCourses = [
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

const coursesInclude = [
  {
    text: '61 hours on-demand video',
  },
  {
    text: '7 coding exercises ',
  },
  {
    text: '65 articles',
  },
  {
    text: '194 downloadable resources ',
  },
  {
    text: 'Access on mobile and TV ',
  },
  {
    text: 'Full lifetime access',
  },
  {
    text: 'Certificate of completion',
  },
];

const learningAttriblute = [
  {
    text: 'Learn the latest technologies, including Javascript, React, Node and even Web3 development.',
  },
  {
    text: 'After the course you will be able to build ANY website you want.Learn the latest technologies, including Javascript, React, Node and ',
  },
  {
    text: 'Build fully-fledged websites and web apps for your startup or business.',
  },
  {
    text: 'Work as a freelance web developer. ',
  },
  {
    text: 'Master frontend development with React ',
  },
  {
    text: 'Master backend development with Node ',
  },
  {
    text: 'Learn professional developer best practices.',
  },
];
const modules = [
  {
    title: 'HTML, CSS',
    subtitle: '9 Lectures • 18 hours',
  },
  {
    title: 'JavaScript ',
    subtitle: '9 Lectures • 18 hours',
  },
  {
    title: 'Version Control',
    subtitle: '9 Lectures • 18 hours',
  },
  {
    title: 'Nodejs, Expressjs, ',
    subtitle: '9 Lectures • 18 hours',
  },
  {
    title: 'Deployment',
    subtitle: '9 Lectures • 18 hours',
  },
];
export const metadata = {
  title: 'Cnxt course Details',
  description: 'View product details on Cnxt',
};

export default async function ProductPage({ params }) {
  const { id } = await params;
  const course = ourTeam.find((item) => item.id === id);

  if (!course) {
    return (
      <div className="grid justify-items-center">
        <HeaderText text={'course not found'} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* use corsera fetch ads link coursera/otheer edtech*/}
      <PageBorders background={'bg-primary'}>
        <div className="flex flex-col gap-8">
          <HeaderOne text={course.title} />
          <ImageWrapper
            src={course.image}
            alt={course.title}
            width={300}
            height={300}
            className="bg-norepeat bg-cover bg-center"
          />
          <div>
            <h2>{course.title}</h2>
            <p>{course.subtitle}</p>
            {/* Add more course details here */}
          </div>{' '}
          <Link href={'/course'}>
            <MainButton text={'back'} />
          </Link>
        </div>
      </PageBorders>

      {/* section 2 */}
      <PageBorders>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          {/* grid 1 */}
          <div className="flex flex-col gap-4 md:gap-8">
            {' '}
            <TitleText text={course.title} />
            <MainText
              text={
                'Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy! At 62+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.'
              }
            />
            <TitleText text={'Module'} />
            <div className="flex flex-col gap-4">
              {modules.map((item, index) => (
                <SpecificationItem
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </div>
          </div>

          {/* grid 2 */}
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-8">
              <TitleText text={'What you will Learn'} />

              <div className="flex flex-col gap-4">
                {learningAttriblute.map((item, index) => (
                  <ul className="list-disc pl-[20px]" key={index}>
                    <li>
                      {' '}
                      <MainText text={item.text} />
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-8">
              <TitleText text={'This course includes'} />
              <div className="flex flex-col gap-4">
                {coursesInclude.map((item, index) => (
                  <ul className="list-disc pl-[20px]" key={index}>
                    <li>
                      {' '}
                      <MainText text={item.text} />
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageBorders>

      {/* section 3 */}
      <PageBorders>
        <div className="flex flex-col gap-4 md:gap-8">
          <HeaderOne text={'Related Course'} />

          <div className="grid gap-4 md:grid-cols-4 md:gap-8">
            {relatedCourses.map((item, index) => (
              <ItemCard
                key={index}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </PageBorders>
    </div>
  );
}
