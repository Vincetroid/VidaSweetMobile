import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      className="svg-icon"
      style={{
        width: '1em',
        height: '1em',
        verticalAlign: 'middle',
      }}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      overflow="hidden"
      {...props}>
      <Path d="M288 416v-96a128 128 0 01256 0v96h64v-96c0-106-86-192-192-192s-192 86-192 192v96zm224 288h-64v-64l384-384 64 64-384 384z" />
      <Path d="M544 736H416V608l160-160H192a64.19 64.19 0 00-64 64v320a64.19 64.19 0 0064 64h448a64.19 64.19 0 0064-64V576z" />
    </Svg>
  );
}

export default SvgComponent;
