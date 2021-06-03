import Meta from '../PrimaryComponents/Utility/Meta';
import Styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import Features from '../Components/Home/Features/Features';
import { useEffect, useState } from 'react';
import CategoryRow from '../Components/Home/CategoryRow/CategoryRow';
import HomeTabProducts from '../Components/Home/HomeTab/HomeTabProducts';
import HalfMiddleBanner from '../Components/Home/HalfMiddleBanner/HalfMiddleBanner';
import HeadPhoneProducts from '../Components/Home/HeadPhoneProducts/HeadPhoneProducts';
import ComputerProducts from '../Components/Home/ComputerProducts/ComputerProducts';
import PCAccessories from '../Components/Home/PCAccessories/PCAccessories';
import FullBanner from '../Components/Home/FullBanner/FullBanner';
import HomeAllProducts from '../Components/Home/HomeAllProducts/HomeAllProducts';
import ListProductsSection from '../Components/Home/ListProductsSection/ListProductsSection';
import AppBanner from '../Components/Home/AppBanner/AppBanner';

export default function Home(props) {
  const { data } = props.data;
  // prevent owlCarrousel ServerSide rendering
  const HomeBanner = dynamic(import('../Components/Home/Banner/HomeBanner'), {
    ssr: false,
  });
  const BrandSlider = dynamic(
    import('../Components/Home/BrandSlider/BrandSlider'),
    {
      ssr: false,
    }
  );
  return (
    <div className={`${Styles.home_wrapper}`}>
      <Meta />
      <HomeBanner />
      <div className="uparzon-container-fluid">
        <Features />
        <CategoryRow />
        <HomeTabProducts data={data} />
        <HalfMiddleBanner />
        <HeadPhoneProducts data={data} />
        <ComputerProducts data={data} />
        <PCAccessories data={data} />
        <FullBanner />
        <HomeAllProducts data={data} />
        <BrandSlider />
        <ListProductsSection data={data} />
      </div>
      <AppBanner />
    </div>
  );
}

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries. See the "Technical details" section.
// export const getStaticProps = async () => {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(
//     'https://store.uparzon.com/api/uparzonweb/get_home_products'
//   );
//   const data = await res.json();
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       data,
//     },
//   };
// };

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://store.uparzon.com/api/uparzonweb/get_home_products`
  );
  const data = await res.json();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
