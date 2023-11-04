import Image from 'next/image';
import { dataUrl } from './constants';
import React from 'react';
import gsap from 'gsap';
import { Power2 } from 'gsap/all';
import { useRouter } from 'next/navigation';

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
  const contentRef = React.useRef(null);
  const router = useRouter();
  const [scrolledDown, setScrolledDown] = React.useState(false);
  const [is1stTime, setIs1stTime] = React.useState(true);

  const handleWheelDown = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      setScrolledDown(true);
    }
  };

  React.useEffect(() => {
    if (is1stTime) {
      let anime = gsap.fromTo(
        blurRef.current,
        { backdropFilter: 'blur(8px) brightness(25%)' },
        {
          backdropFilter: 'blur(8px) brightness(0%)',
          delay: 0.5,
          duration: 3,
          ease: Power2.easeOut
        }
      );
      anime = gsap.fromTo(
        logoRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 1,
          duration: 1,
          ease: Power2.easeIn,
          onComplete: () => window.addEventListener('wheel', handleWheelDown)
        }
      );
      setIs1stTime(false);
    }

    if (scrolledDown) {
      let anime = gsap.fromTo(
        contentRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          delay: 0.5,
          duration: 2,
          ease: Power2.easeOut
        }
      );
      anime = gsap.fromTo(
        blurRef.current,
        {
          backdropFilter: 'blur(8px) brightness(0%)'
        },
        {
          backdropFilter: 'blur(8px) brightness(25%)',
          delay: 1,
          duration: 2,
          ease: Power2.easeOut,
          onComplete: () => router.push('/choice')
        }
      );
    }

    return () => {
      window.removeEventListener('wheel', handleWheelDown);
    };
  }, [scrolledDown]);

  return (
    <div className="min-h-screen min-w-full bg-end-field bg-center bg-cover">
      <div ref={blurRef} className="backdrop-blur backdrop-brightness-25">
        <div
          ref={contentRef}
          className="flex flex-col items-center justify-between w-screen h-screen p-32"
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
    </div>
  );
};

export default SloganPage;
