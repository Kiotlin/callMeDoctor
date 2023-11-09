import Image from 'next/image';
import { dataUrl } from './constants';
import React from 'react';
import gsap from 'gsap';
import { Power2 } from 'gsap/all';
import { useRouter } from 'next/navigation';
import { useAudio } from '../_hooks/audio';
import HypergryphLogo from './icons/HypergryphLogo';
import CubeAknEf from './icons/CubeAknEf';

const switchPageAudio: string = '/audio/char_list_enter.mp3';

export function PosterPage(props: React.HTMLProps<HTMLDivElement>) {
  const audio = useAudio(switchPageAudio);
  const animeRef = React.useRef(null);
  const blurRef = React.useRef(null);
  const router = useRouter();
  const [scrolledDown, setScrolledDown] = React.useState(false);
  const [is1stTime, setIs1stTime] = React.useState(true);

  const handleWheelDown = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      setScrolledDown(true);
      audio.play();
    }
  };

  React.useEffect(() => {
    if (is1stTime) {
      gsap.fromTo(
        animeRef.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          delay: 0.2,
          duration: 2,
          ease: Power2.easeIn,
          onComplete: () => window.addEventListener('wheel', handleWheelDown)
        }
      );
      setIs1stTime(false);
    }

    if (scrolledDown) {
      gsap.to(animeRef.current, {
        opacity: 0,
        delay: 0.2,
        duration: 1,
        ease: Power2.easeOut,
        onComplete: () => router.push('/soon')
      });
    }

    return () => {
      window.removeEventListener('wheel', handleWheelDown);
    };
  }, [scrolledDown]);

  return (
    <>
      <div
        className="min-h-screen min-w-full bg-end-field bg-center bg-cover"
        {...props}
      >
        <div
          ref={blurRef}
          className="flex items-center justify-between w-screen h-screen backdrop-blur backdrop-brightness-25 font-mono p-32"
        >
          <div ref={animeRef} className="text-white">
            <p>Music produced by</p>
            <HypergryphLogo className="w-48 fill-white" />
            <p className="pt-2">Author & Composer</p>
            <div className="flex flex-row mt-2">
              <div className="flex-col text-4xl font-sans font-extrabold leading-[1.7rem]">
                <p>PHEONIX</p>
                <div className="flex gap-2">
                  <span>ON</span>
                  <span>THE</span>
                  <span>RISE</span>
                </div>
              </div>
              <CubeAknEf
                className="my-auto"
                style={{ width: 54, height: 54 }}
              />
            </div>
            <div className="text-slate-300 mt-2 mb-2">
              <p>{'< Pheonix on the Rise >'}</p>
              <p>{'by Alexander Rudd (feat. Hero Baldwin)'}</p>
            </div>
            <Image
              src="./DNA.svg"
              className="mb-2"
              width={60}
              height={60}
              alt="dna logo"
              placeholder="blur"
              blurDataURL={dataUrl}
            />
            <div className="text-slate-300">
              <p>Amanda Street</p>
              <p>(Music Supervisor for DNA Music Ltd)</p>
            </div>
            <div className="py-5">
              <span className="text-slate-300">
                Music publishing & all rights reserved by
              </span>
              &nbsp;
              <span className="font-bold">HYPERGRYPH</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PosterPage;
