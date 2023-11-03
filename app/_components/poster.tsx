import Image from 'next/image';
import { dataUrl } from './constants';

export function PosterOuter({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen min-w-full bg-end-field bg-center bg-cover">
      <div className="flex items-center justify-between w-screen h-screen backdrop-blur backdrop-brightness-25 font-mono p-32">
        {children}
      </div>
    </div>
  );
}

export function Poster(props: React.HTMLProps<HTMLDivElement>) {
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
          placeholder="blur"
          blurDataURL={dataUrl}
        />
        <p className="pt-2">Author & Composer</p>
        <div className="flex flex-row mt-2">
          <div className="flex-col text-5xl font-extrabold leading-[2rem]">
            <p>PHEONIX</p>
            <p>ON THE RISE</p>
          </div>
          <Image
            src={'./CUBE_AKN_EF.svg'}
            className="my-auto"
            width={65}
            height={65}
            style={{ height: 65, width: 65 }}
            alt="author logo"
            placeholder="blur"
            blurDataURL={dataUrl}
          />
        </div>
        <div className="text-slate-300 mt-2 mb-2">
          <p>{'< Pheonix on the Rise >'}</p>
          <p>{'by Alexander Rudd (feat. Hero Baldwin)'}</p>
        </div>
        <Image
          src="./DNA.svg"
          className="mb-2"
          width={70}
          height={70}
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
    </>
  );
}

export default function PosterPage() {
  return (
    <PosterOuter>
      <Poster />
    </PosterOuter>
  );
}
