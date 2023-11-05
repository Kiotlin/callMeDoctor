import EndFieldPage from './_components/endField';
import Warning from './_components/warning';
import React from 'react';
import { headers } from 'next/headers';

const getMobileAgent = (): boolean => {
  const userAgent: string | null = headers().get('user-agent');
  const regex: RegExp =
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
  return Boolean(userAgent!.match(regex));
};

export default function Home() {
  const isMobile: boolean = getMobileAgent();
  return <>{isMobile ? <Warning /> : <EndFieldPage />}</>;
}
