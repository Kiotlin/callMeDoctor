'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import gsap from 'gsap';
import { Power2 } from 'gsap/all';
import { SvgSpinnersPulseMultiple } from '../_components/icons/PulseMultiple';
import { GrommetIconsGithub } from '../_components/icons/Github';
import { GrommetIconsTwitter } from '../_components/icons/Twitter';
import { GrommetIconsPlayFill } from '../_components/icons/PlayFill';
import Link from 'next/link';
import { githubRepoUrl, twitterUrl } from '../_components/constants';

const ChoicePage: React.FC = () => {
  const router = useRouter();
  const contentRef = React.useRef(null);
  const blurRef = React.useRef(null);
  const [clicked, setClicked] = React.useState(false);
  const [is1stTime, setIs1stTime] = React.useState(true);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClicked(true);
  };

  React.useEffect(() => {
    if (is1stTime) {
      gsap.fromTo(
        contentRef.current,
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
      setIs1stTime(false);
    }

    if (clicked) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 1
        },
        {
          opacity: 0,
          delay: 0.5,
          duration: 1,
          ease: Power2.easeOut
        }
      );
      gsap.fromTo(
        blurRef.current,
        {
          backdropFilter: 'blur(8px) brightness(25%)'
        },
        {
          backdropFilter: 'blur(8px) brightness(0%)',
          delay: 1.5,
          duration: 3,
          ease: Power2.easeOut,
          onComplete: () => router.push('/')
        }
      );
    }
  }, [clicked]);

  return (
    <div className="min-h-screen min-w-full bg-end-field bg-center bg-cover">
      <div ref={blurRef} className="backdrop-blur backdrop-brightness-25">
        <div
          ref={contentRef}
          className="flex flex-col items-center justify-center w-screen h-screen p-32"
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-row gap-3">
              <SvgSpinnersPulseMultiple className="h-auto" />
              <p>Wanna Play Again?</p>
              <SvgSpinnersPulseMultiple className="h-auto" />
            </div>
            <button
              onClick={handleClick}
              className="opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-300"
            >
              <GrommetIconsPlayFill className="w-6 h-6" />
            </button>
          </div>
          <div className="fixed bottom-14 flex flex-row gap-2 items-center justify-center">
            <Link
              href={githubRepoUrl}
              className="opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-300"
              target="_blank"
            >
              <GrommetIconsGithub className="w-5 h-5" />
            </Link>
            <p>|</p>
            <Link
              href={twitterUrl}
              className="opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-300"
              target="_blank"
            >
              <GrommetIconsTwitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoicePage;
