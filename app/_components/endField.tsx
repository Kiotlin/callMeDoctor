import Image from 'next/image';
import { dataUrl } from './constants';

const EndFieldOuter: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-full bg-start-field bg-center bg-cover">
      <div className="flex items-center justify-between w-screen h-screen backdrop-blur backdrop-brightness-0 p-32">
        {children}
      </div>
    </div>
  );
};

const EndFieldPage = () => {
  return (
    <>
      <EndFieldOuter>
        <Image
          src="/end-field-logo.svg"
          className="invert items-center justify-between m-auto"
          width={120}
          height={120}
          alt="EndField LOGO"
          placeholder="blur"
          blurDataURL={dataUrl}
        />
      </EndFieldOuter>
    </>
  );
};

export default EndFieldPage;
