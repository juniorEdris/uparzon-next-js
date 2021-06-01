import FooterBottom from '../../Components/FooterTop/FooterBottom';
import FooterTop from '../../Components/FooterTop/FooterTop';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';

const Footer = (props) => {
  return (
    <div className="">
      <NewsLetter />
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
