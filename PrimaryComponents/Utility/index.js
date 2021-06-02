export const Truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + '' : str;
};

export const imageTagLoder = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/dl7ts4cgg/image/upload/v1622625790/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export function DemoMyImage(src) {
  const imgSrc = require(`${src}?resize&size=100`);
  return <img src={imgSrc.src} alt="a picture" />;
}
