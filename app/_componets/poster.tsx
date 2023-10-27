import Image from 'next/image';
import { dataUrl } from './constants';

export default function Poster(props: any) {
  return (
    <>
      <div {...props}>
        <p className="">Music produced by</p>
        <Image
          src="/yj-logo.svg"
          className="dark:invert"
          width={200}
          height={24}
          alt="YJ Logo"
          priority
          placeholder="blur"
          blurDataURL={dataUrl}
        />
        <p className="pt-2">Author & Composer</p>
        <div className="flex flex-row">
          <div className="flex-col text-4xl font-extrabold">
            <p>PHEONIX</p>
            <p className="">ON THE RISE</p>
          </div>
          <Image
            src={'./author.svg'}
            width={70}
            height={70}
            alt="author logo"
            priority
            placeholder="blur"
            blurDataURL={dataUrl}
          />
        </div>
        <div className="text-slate-300">
          <p>{'< Pheonix on the Rise >'}</p>
          <p>{'by Alexander Rudd (feat. Hero Baldwin)'}</p>
        </div>
        <Image
          src="./dna.svg"
          width={70}
          height={70}
          alt="dna logo"
          priority
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
    </>
  );
}
