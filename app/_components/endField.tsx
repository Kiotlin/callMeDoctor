'use client';
import Image from 'next/image';
import { dataUrl } from './constants';
import gsap from 'gsap';
import { Power2 } from 'gsap/all';
import React from 'react';
import { useRouter } from 'next/navigation';
import { GrommetIconsFormDown } from './icons/FormDown';
import { useAudio } from '../_hooks/audio';

const switchPageAudio: string = '/audio/char_list_enter.mp3';

const EndFieldPage: React.FC = () => {
  const audio = useAudio(switchPageAudio);
  const router = useRouter();
  const blurRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const [is1stTime, setIs1stTime] = React.useState(true);
  const [scrolledDown, setScrolledDown] = React.useState(false);

  const handleWheelDown = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      setScrolledDown(true);
      audio.play();
    }
  };

  React.useEffect(() => {
    if (is1stTime) {
      gsap.fromTo(
        logoRef.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          delay: 0.5,
          duration: 1,
          ease: Power2.easeIn
        }
      );
      gsap.to(blurRef.current, {
        backdropFilter: 'blur(8px) brightness(25%)',
        delay: 1,
        duration: 3,
        ease: Power2.easeIn,
        onComplete: () => window.addEventListener('wheel', handleWheelDown)
      });
      setIs1stTime(false);
    }

    if (scrolledDown) {
      gsap.to(logoRef.current, {
        opacity: 0,
        delay: 0.2,
        duration: 1,
        ease: Power2.easeOut,
        onComplete: () => router.push('/about')
      });
    }

    return () => {
      window.removeEventListener('wheel', handleWheelDown);
    };
  }, [scrolledDown]);

  return (
    <div className="min-h-screen min-w-full bg-end-field bg-center bg-cover">
      <div ref={blurRef} className="backdrop-blur backdrop-brightness-0">
        <div
          ref={logoRef}
          className="flex items-center justify-center w-screen h-screen p-32 opacity-0"
        >
          <Image
            src="/end-field-logo.svg"
            className="invert items-center justify-between m-auto"
            width={120}
            height={120}
            alt="EndField LOGO"
            placeholder="blur"
            blurDataURL={dataUrl}
          />
          <GrommetIconsFormDown className="fixed bottom-14 w-5 h-5 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default EndFieldPage;
