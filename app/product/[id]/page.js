import PageBorders from '@/components/wrappers/PageBorders';
import HeaderOne from '@/components/typography/HeaderOne';
import MainCard from '@/components/cards/MainCard';
import MainButton from '@/components/button/MainButton';
import Link from 'next/link';

const ourTeam = [
  {
    id: '0',
    image: '/images/cnxtifi.jpg',
    title: 'Awlad Hossain',
    subtitle: 'UIUX Designer',
  },
  {
    id: '1',
    image: '/images/cnxtifi.jpg',
    title: 'Jannatul Islam',
    subtitle: 'Motion Design',
  },
  {
    id: '2',
    image: '/images/cnxtifi.jpg',
    title: 'Imran Hossain',
    subtitle: 'Graphic Designer',
  },
  {
    id: '3',
    image: '/images/cnxtifi.jpg',
    title: 'Nishi Akter',
    subtitle: 'Web Developer',
  },
];

export const metadata = {
  title: 'Cnxt Product Details',
  description: 'View product details on Cnxt',
};

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = ourTeam.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen">
      {/* use jumia dynamic ui */}
      <PageBorders>
        <div className="flex flex-col gap-8">
          <HeaderOne text={product.title} />
          <img src={product.image} alt={product.title} className="w-full" />
          <div>
            <h2>{product.title}</h2>
            <p>{product.subtitle}</p>
            {/* Add more product details here */}
          </div>{' '}
          <Link href={'/product'}>
            <MainButton text={'back'} />
          </Link>
        </div>
      </PageBorders>
    </div>
  );
}
