import Image from 'next/image';
import { dataUrl } from './constants';
import React from 'react';
import gsap from 'gsap';
import { Power2 } from 'gsap/all';

const PlaceHolder: React.FC = () => {
  return React.createElement('div', null, null);
};

const SloganFont: React.FC<{
  text: string | undefined;
}> = ({ text = 'TEXT' }) => {
  return (
    <p className="text-sm font-extralight tracking-[1.25em] uppercase text-right">
      {text}
    </p>
  );
};

const sloganTextList: string[] = [
  'over',
  'the',
  'frontier',
  '/',
  'into',
  'the',
  'front'
];

const SloganPage: React.FC = () => {
  const blurRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    const blurAnime = gsap.fromTo(
      blurRef.current,
      { backdropFilter: 'blur(8px) brightness(25%)' },
      {
        backdropFilter: 'blur(8px) brightness(0%)',
        delay: 0.5,
        duration: 3,
        ease: Power2.easeOut
      }
    );
    const logoAnime = gsap.fromTo(
      logoRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 1, duration: 1, ease: Power2.easeIn }
    );

    return () => {
      blurAnime.kill();
      logoAnime.kill();
    };
  }, []);

  return (
    <div className="min-h-screen min-w-full bg-end-field bg-center bg-cover">
      <div
        ref={blurRef}
        className="flex flex-col items-center justify-between w-screen h-screen p-32 backdrop-blur backdrop-brightness-25"
      >
        <PlaceHolder />
        <div className="flex flex-col justify-center items-center gap-3">
          <Image
            className="invert"
            src="/INVERTED_TRIANGLE.svg"
            width={15}
            height={15}
            alt="triangle"
          />
          <div className="flex flex-row gap-5">
            {sloganTextList.map((s, i) => (
              <SloganFont text={s} key={i} />
            ))}
          </div>
        </div>
        <div ref={logoRef} className="flex flex-row opacity-0">
          <Image
            src="/yj-logo.svg"
            width={120}
            height={24}
            alt="YJ Logo"
            placeholder="blur"
            blurDataURL={dataUrl}
          />
          <Image
            src="/MOUNTAIN_CONTOUR.svg"
            className="invert"
            width={140}
            height={24}
            alt="YJ Logo"
            placeholder="blur"
            blurDataURL={dataUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default SloganPage;
