import '../styles/globals.css';
// import '../styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// OWL CARROUSEL
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from '../PrimaryComponents/Footer'
import { useEffect, useState } from 'react';
import Header from '../PrimaryComponents/Header/Header';
import Categories from '../Components/Home/CategorySidebar/Categories';

function MyApp({ Component, pageProps }) {
  const [categorySidebar, setCategorySidebar] = useState(false);
  useEffect(() => {
    document.body.style.overflow = categorySidebar ? 'hidden' : '';
  }, [categorySidebar]);
  return (
    <div className="">
      <Header sidebar={categorySidebar} setSidebar={setCategorySidebar} />
      <Categories sidebar={categorySidebar} setSidebar={setCategorySidebar} />
      <Component {...pageProps} />
      <Footer/>
    </div>
    )
}

export default MyApp;
