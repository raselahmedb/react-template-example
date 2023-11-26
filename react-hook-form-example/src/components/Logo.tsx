// import React from 'react';

interface LogoProps {
  width?: string;
}

function Logo({ width = '100px' }: LogoProps): JSX.Element {
  return <div style={{ width: width }}>Logo</div>;
}

export default Logo;
