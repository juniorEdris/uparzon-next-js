import Header from '../PrimaryComponents/Header/Header';
import Meta from '../PrimaryComponents/Utility/Meta';
import Styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import Features from '../Components/Home/Features/Features';
import Categories from '../Components/Home/CategorySidebar/Categories';
import { useEffect, useState } from 'react';
import { CategoryRow } from '../Components/Home/CategoryRow/CategoryRow';
import HomeTabProducts from '../Components/Home/HomeTab/HomeTabProducts';
import HalfMiddleBanner from '../Components/Home/HalfMiddleBanner/HalfMiddleBanner';
import HeadPhoneProducts from '../Components/Home/HeadPhoneProducts/HeadPhoneProducts';
import ComputerProducts from '../Components/Home/ComputerProducts/ComputerProducts';
import PCAccessories from '../Components/Home/PCAccessories/PCAccessories';
import FullBanner from '../Components/Home/FullBanner/FullBanner';
import HomeAllProducts from '../Components/Home/HomeAllProducts/HomeAllProducts';
import ListProductsSection from '../Components/Home/ListProductsSection/ListProductsSection';

export default function Home() {
  const [categorySidebar, setCategorySidebar] = useState(false);
  useEffect(() => {
    document.body.style.overflow = categorySidebar ? 'hidden' : '';
  }, [categorySidebar]);
  // prevent owlCarrousel ServerSide rendering
  const HomeBanner = dynamic(import('../Components/Home/Banner/HomeBanner'), {
    ssr: false,
  });
  return (
    <div className={`${Styles.home_wrapper} mb-5`}>
      <Meta />
      <Header sidebar={categorySidebar} setSidebar={setCategorySidebar} />
      <Categories sidebar={categorySidebar} setSidebar={setCategorySidebar} />
      <HomeBanner />
      <div className="uparzon-container-fluid">
        <Features />
        <CategoryRow />
        <HomeTabProducts />
        <HalfMiddleBanner />
        <HeadPhoneProducts/>
        <ComputerProducts/>
        <PCAccessories/>
        <FullBanner/>
        <HomeAllProducts/>
        <ListProductsSection/>
      </div>
    </div>
  );
}
