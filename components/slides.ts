import image1 from "../public/bg1.png";
import image2 from "../public/bio2.jpg";
import image3 from "../public/bg3.png";
import image4 from "../public/bg4.png";
import image5 from "../public/bg5.png";
import image6 from "../public/bg6.png";
import image7 from "../public/bg7.png";
import image8 from "../public/bg8.png";
import image9 from "../public/bg9.png";

const images = [
  image1,
  image2,
];

const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

function nextImageUrl(src: string, size: number) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
}

const slides = images.map(({ src, width, height }) => ({
  width,
  height,
  src: nextImageUrl(src, width),
  srcSet: imageSizes
    .concat(...deviceSizes)
    .filter((size) => size <= width)
    .map((size) => ({
      src: nextImageUrl(src, size),
      width: size,
      height: Math.round((height / width) * size),
    })),
}));

export default slides;