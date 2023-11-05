import Image from 'next/image';
import React from 'react';

const Warning = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-2 p-12 bg-black">
      <h1 className="text-amber-400 text-7xl text-center">WARNING</h1>
      <Image
        src="/FBI_WARNING.jpg"
        width={200}
        height={200}
        alt=""
        className="animate-bounce"
      />
      <p className="text-3xl font-bold text-center text-white">
        Please browse the webpage on your PC browser.
      </p>
    </div>
  );
};

export default Warning;
