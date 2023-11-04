'use client';
import Image from 'next/image';
import { dataUrl } from './constants';
import gsap from 'gsap';
import { Power2 } from 'gsap/all';
import React from 'react';
import { useRouter } from 'next/navigation';

const EndFieldPage: React.FC = () => {
  const router = useRouter();
  const blurRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const handleWheelDown = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      gsap.to(logoRef.current, {
        opacity: 0,
        delay: 0.2,
        duration: 1,
        ease: Power2.easeOut,
        onComplete: () => router.push('/about')
      });
    }
  };

  React.useEffect(() => {
    const blurAnime = gsap.to(blurRef.current, {
      backdropFilter: 'blur(8px) brightness(25%)',
      delay: 1,
      duration: 3,
      ease: Power2.easeIn,
      onComplete: () => window.addEventListener('wheel', handleWheelDown)
    });

    return () => {
      blurAnime.kill();
      window.removeEventListener('wheel', handleWheelDown);
    };
  }, []);

  return (
    <div className="min-h-screen min-w-full bg-end-field bg-center bg-cover">
      <div
        ref={blurRef}
        className="flex items-center justify-between w-screen h-screen backdrop-blur backdrop-brightness-0 p-32"
      >
        <Image
          ref={logoRef}
          src="/end-field-logo.svg"
          className="invert items-center justify-between m-auto"
          width={120}
          height={120}
          alt="EndField LOGO"
          placeholder="blur"
          blurDataURL={dataUrl}
        />
      </div>
    </div>
  );
};

export default EndFieldPage;
