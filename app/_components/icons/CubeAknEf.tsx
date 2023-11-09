import * as React from 'react';
import { SVGProps } from 'react';

const CubeAknEf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} {...props}>
    <path fill="#fff" d="M0 0h200v200H0z" />
    <text x={10} y={130} fontFamily="Arial" fontSize={20}>
      {'ARKNIGHTS'}
    </text>
    <text x={10} y={160} fontFamily="Arial" fontSize={20}>
      {'ENDFIELD'}
    </text>
  </svg>
);

export default CubeAknEf;
